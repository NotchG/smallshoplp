"use client";
// The hero, on the mechanics of the GetLayers "Soda" template, in this brief's concept, palette
// and fonts. The shop's name still drops in as fondant letters (the signature). In the middle a 3D
// cake tilts toward the cursor while it bobs; 3D fondant stars and confetti in the palette drift
// around it in two depths and are pushed away by the pointer, with tiny confetti further back.
// The hero cycles through three cakes on its own (pausable; it holds while the picker is hovered
// or focused) and the cards switch it by hand: the cake spins twice and swaps at the peak, the
// stars and confetti implode to the centre, change colour and burst back out, and the ground
// (header included) moves between Bubblegum, Butter and Toska. The 3D (lib/cake3d) follows plain
// DOM anchors that carry all of that motion; without WebGL a flat cake drawing stands in.
// Phones have no cursor, so there the tilt follows the phone itself (device orientation; iPhones
// ask for motion access first, through a button), a sideways drag on the cake, or, with neither,
// a slow sway, so the cake still reads as 3D. Reduced motion: still, no cycling, instant switch.
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import FondantName from "@/components/FondantName";
import CakeSilhouette from "@/components/CakeSilhouette";
import NoBreakAge from "@/components/NoBreakAge";
import { ArrowDownIcon, ChatIcon } from "@/components/Icons";
import { P } from "@/lib/cake3d/palette";
import type { CakeFrame, CakeScene, Pose } from "@/lib/cake3d/scene";
import { hero, heroCakes, shop } from "@/content";

const CAKES = heroCakes.items;
const GROUND: Record<string, string> = { bubblegum: "#FFD3E1", butter: "#FFE38A", toska: "#C9EEEC" };
const DWELL = 4.5; // seconds each cake holds before the hero moves on by itself

// Stars and confetti: centre in % of the stage, size in px at desktop, what each one is.
const FRONT = [
  { x: 14, y: 14, s: 74, kind: "star" },
  { x: 86, y: 12, s: 64, kind: "strip" },
  { x: 90, y: 64, s: 80, kind: "star" },
  { x: 8, y: 66, s: 58, kind: "disc" },
  { x: 50, y: 92, s: 54, kind: "curl", phone: false },
  { x: 98, y: 38, s: 56, kind: "star", phone: false },
];
const BACK = [
  { x: 32, y: 4, s: 46, kind: "disc" },
  { x: 2, y: 42, s: 42, kind: "strip", phone: false },
  { x: 72, y: 88, s: 44, kind: "star" },
];
// tiny confetti far behind: floats only, keeps its colours
const FAR = [
  { x: -40, y: 20, s: 30, id: `disc:${P.lilacDeep}` },
  { x: 120, y: 28, s: 26, id: `strip:${P.butterDeep}` },
  { x: 60, y: 2, s: 24, id: `curl:${P.toskaDeep}` },
  { x: -20, y: 96, s: 28, id: `star:${P.butterDeep}` },
  { x: 128, y: 92, s: 30, id: `disc:${P.pink}` },
];
// each cake's stars and confetti: deep colours that read on its ground
const COLOURS: Record<string, string[]> = {
  "cake-pink": [P.strawberry, P.laut, P.butterDeep, P.grape],
  "cake-rainbow": [P.strawberry, P.laut, P.grape, P.lilacDeep],
  "cake-ombre": [P.grape, P.strawberry, P.butterDeep, P.lilacDeep],
};
const PIECES = [...FRONT, ...BACK];
const pieceId = (cake: string, i: number) => `${PIECES[i].kind}:${COLOURS[cake][(i * 3) % 4]}`;

const at = (x: number, y: number, s: number) => ({ left: `${x}%`, top: `${y}%`, "--s": `${s}px` }) as CSSProperties;

type Live = {
  switching: boolean;
  spin: { val: number; blur: number };
  st: { rx: number; ry: number; angle: number; baseX: number; baseY: number; rot: number; tilt: number }[];
  shown: { centre: string; pieces: string };
  cur: { x: number; y: number };
  inView: boolean;
  hover: boolean;
  touch: boolean; // a phone or tablet: no cursor, so tilt comes from the phone, a drag or a sway
};

export default function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [stills, setStills] = useState<Record<string, string>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const centreRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<CakeScene | null>(null);
  const shownRef = useRef(0);
  const playingRef = useRef(true);
  const timerRef = useRef<gsap.core.Tween | null>(null);
  const live = useRef<Live>({
    switching: false,
    spin: { val: 0, blur: 0 },
    st: [],
    shown: { centre: CAKES[0].id, pieces: CAKES[0].id },
    cur: { x: 0, y: 0 },
    inView: true,
    hover: false,
    touch: false,
  });
  // iPhones only report motion after the visitor allows it, from a tap: the button asks
  const [askMotion, setAskMotion] = useState(false);
  const enableMotionRef = useRef<(() => void) | null>(null);

  // where every piece is right now, for the 3D scene
  const frame = (): CakeFrame | null => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return null;
    const L = live.current;
    const S = sec.getBoundingClientRect();
    const bob = stage.querySelector<HTMLElement>(".cake-bob")!;
    const br = bob.getBoundingClientRect();
    const rel = (r: DOMRect) => ({ x: r.left + r.width / 2 - S.left, y: r.top + r.height / 2 - S.top });
    const poses: Pose[] = [
      {
        id: L.shown.centre,
        ...rel(br),
        size: bob.offsetWidth,
        z: 0,
        tilt: 0.3 - L.cur.y * (L.touch ? 0.45 : 0.3),
        yaw: L.cur.x * (L.touch ? 0.9 : 0.6),
        spin: -0.35 + (L.spin.val * Math.PI) / 180,
        visible: true,
      },
    ];
    stage.querySelectorAll<HTMLElement>(".cake-piece").forEach((el, i) => {
      const s = L.st[i] ?? { rot: 0, tilt: 0.6 };
      const sw = L.switching;
      const rot = sw ? Number(gsap.getProperty(el, "rotation")) : s.rot;
      poses.push({
        id: pieceId(L.shown.pieces, i),
        ...rel(el.getBoundingClientRect()),
        size: el.offsetWidth * (sw ? Number(gsap.getProperty(el, "scale")) : 1),
        z: el.parentElement?.classList.contains("cake-back") ? -180 : 140,
        tilt: s.tilt + Math.sin((rot * Math.PI) / 90) * 0.5,
        yaw: (rot * Math.PI) / 240,
        spin: (rot * Math.PI) / 180,
        visible: (sw ? Number(gsap.getProperty(el, "opacity")) : 1) > 0.04,
      });
    });
    stage.querySelectorAll<HTMLElement>(".cake-far-piece").forEach((el, i) => {
      const t = performance.now() / 1000;
      poses.push({
        id: FAR[i].id,
        ...rel(el.getBoundingClientRect()),
        size: el.offsetWidth,
        z: -420,
        tilt: 0.8 + Math.sin(t * 0.4 + i) * 0.6,
        yaw: t * 0.3 + i,
        spin: t * 0.5 + i * 1.3,
        visible: true,
      });
    });
    return { w: S.width, h: S.height, poses };
  };
  const draw = () => {
    const f = frame();
    if (f && sceneRef.current) sceneRef.current.render(f);
  };

  // the loop: cursor tilt, parallax, pointer repulsion, floating, and the 3D draw
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const pieces = Array.from(stage.querySelectorAll<HTMLElement>(".cake-piece"));
    const far = Array.from(stage.querySelectorAll<HTMLElement>(".cake-far-piece"));
    const front = stage.querySelector<HTMLElement>(".cake-front")!;
    const back = stage.querySelector<HTMLElement>(".cake-back")!;
    const farL = stage.querySelector<HTMLElement>(".cake-far")!;
    const L = live.current;
    L.st = pieces.map(() => {
      const angle = Math.random() * 360;
      return { rx: 0, ry: 0, angle, baseX: 0, baseY: 0, rot: angle, tilt: 0.3 + Math.random() * 0.9 };
    });
    if (prefersReducedMotion()) return;

    const mouse = { x: 0, y: 0, px: -9999, py: -9999 };
    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
    L.touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    // the phone's own tilt, relative to how it is being held (that baseline re-centres slowly)
    const phone = { x: 0, y: 0, at: -1e9, bx: NaN, by: 0 };
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      const angle = screen.orientation?.angle ?? 0;
      let x = e.gamma;
      let y = e.beta;
      if (angle === 90) [x, y] = [e.beta, -e.gamma];
      else if (angle === 270 || angle === -90) [x, y] = [-e.beta, e.gamma];
      if (Number.isNaN(phone.bx)) [phone.bx, phone.by] = [x, y];
      phone.bx += (x - phone.bx) * 0.003;
      phone.by += (y - phone.by) * 0.003;
      phone.x = clamp((x - phone.bx) / 30, -0.5, 0.5);
      phone.y = clamp((y - phone.by) / 30, -0.5, 0.5);
      phone.at = performance.now();
      setAskMotion(false); // it is reporting: no need to ask
    };
    // a sideways drag on the cake turns it; the stage lets vertical swipes scroll the page
    const drag = { on: false, id: -1, x0: 0, x: 0 };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      Object.assign(drag, { on: true, id: e.pointerId, x0: e.clientX, x: 0 });
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerId !== drag.id) return;
      drag.on = false;
      mouse.px = mouse.py = -9999;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        if (!drag.on || e.pointerId !== drag.id) return;
        drag.x = clamp((e.clientX - drag.x0) / (stage.clientWidth / 2 || 1), -0.5, 0.5);
        mouse.px = e.clientX; // the confetti moves away from the finger too
        mouse.py = e.clientY;
        return;
      }
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };
    // The motion API only exists on secure pages (https or localhost) in browsers that have it:
    // over plain http on a LAN, Chrome leaves DeviceOrientationEvent undefined. Without it the
    // phone still gets the drag and the sway.
    const DOE = (window as unknown as { DeviceOrientationEvent?: { requestPermission?: () => Promise<string> } }).DeviceOrientationEvent;
    if (DOE) window.addEventListener("deviceorientation", onOrient);
    const perm = DOE?.requestPermission;
    let askTimer = 0;
    if (L.touch && DOE && typeof perm === "function" && window.isSecureContext) {
      // Chrome on Android has requestPermission too but reports motion at once: only ask if the
      // phone stays silent for a moment (that is an iPhone waiting for a tap)
      askTimer = window.setTimeout(() => {
        if (phone.at < 0) setAskMotion(true);
      }, 700);
      enableMotionRef.current = () => {
        perm.call(DOE).catch(() => "denied").finally(() => setAskMotion(false));
      };
    }
    const io = new IntersectionObserver(([e]) => {
      L.inView = e.isIntersecting;
    });
    io.observe(stage);

    const tick = () => {
      if (!L.inView) return;
      const time = performance.now() / 1000;
      const cur = L.cur;
      if (L.touch) {
        // drag wins, then the phone's tilt while it is reporting, else a slow sway
        const live = time * 1000 - phone.at < 1000;
        mouse.x = drag.on ? drag.x : live ? phone.x : Math.sin(time * 0.6) * 0.3;
        mouse.y = drag.on ? 0 : live ? phone.y : Math.sin(time * 0.43 + 1) * 0.14;
      }
      cur.x += (mouse.x - cur.x) * 0.05;
      cur.y += (mouse.y - cur.y) * 0.05;
      front.style.transform = `translate(${(cur.x * 60).toFixed(2)}px, ${(cur.y * 60).toFixed(2)}px)`;
      back.style.transform = `translate(${(cur.x * -30).toFixed(2)}px, ${(cur.y * -30).toFixed(2)}px)`;
      farL.style.transform = `translate(${(cur.x * -15).toFixed(2)}px, ${(cur.y * -15).toFixed(2)}px)`;
      if (!L.switching) {
        pieces.forEach((el, i) => {
          const s = L.st[i];
          const r = el.getBoundingClientRect();
          const dx = mouse.px - (r.left + r.width / 2);
          const dy = mouse.py - (r.top + r.height / 2);
          const d = Math.hypot(dx, dy);
          let tx = 0;
          let ty = 0;
          let speed = 1;
          if (d < 400 && d > 0) {
            const force = (400 - d) / 400;
            tx = (dx / d) * force * -80;
            ty = (dy / d) * force * -80;
            speed = 1 + force * 5;
          }
          s.rx += (tx - s.rx) * 0.1;
          s.ry += (ty - s.ry) * 0.1;
          s.angle += 0.35 * speed;
          const dur = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10][i % 9];
          const phase = (time + i * 0.7) * ((Math.PI * 2) / dur);
          s.rot = s.angle + Math.cos(phase) * 6;
          el.style.transform = `translate(${(s.rx + s.baseX).toFixed(2)}px, ${(s.ry + s.baseY + Math.sin(phase) * 15).toFixed(2)}px) rotate(${s.rot.toFixed(2)}deg)`;
        });
      }
      far.forEach((el, i) => {
        const dur = 10 + i * 2;
        const phase = (time + i * 1.2) * ((Math.PI * 2) / dur);
        el.style.transform = `translate(${(Math.cos(phase * 0.5) * 15).toFixed(2)}px, ${(Math.sin(phase) * 20).toFixed(2)}px)`;
      });
      draw();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    stage.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onOrient);
      stage.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      enableMotionRef.current = null;
      clearTimeout(askTimer);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // the 3D scene: loaded after the page has loaded and gone idle, so the photo paints first
  useEffect(() => {
    const canvas = canvasRef.current;
    const sec = sectionRef.current;
    if (!canvas || !sec) return;
    let cancelled = false;
    let idle = 0;
    let ro: ResizeObserver | null = null;
    const start = async () => {
      const { createCakeScene } = await import("@/lib/cake3d/scene");
      if (cancelled) return;
      const scene = createCakeScene(canvas);
      if (!scene) return;
      const s: Record<string, string> = {};
      for (const c of CAKES) s[c.id] = scene.snapshot(c.id, 240);
      setStills(s);
      sceneRef.current = scene;
      sec.classList.add("cake-3d");
      draw();
      canvas.classList.add("is-on");
      ro = new ResizeObserver(() => {
        if (prefersReducedMotion()) draw();
      });
      ro.observe(sec);
      scene.onLost(() => {
        sceneRef.current = null;
        sec.classList.remove("cake-3d");
        canvas.classList.remove("is-on");
        setStills({});
      });
    };
    const kick = () => {
      idle = typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => void start(), { timeout: 1200 })
        : window.setTimeout(() => void start(), 200);
    };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", kick);
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idle);
      clearTimeout(idle);
      ro?.disconnect();
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // the cycle: after each cake has held for DWELL, move on, unless paused, hovered, hidden or off screen
  const schedule = () => {
    timerRef.current?.kill();
    if (!playingRef.current) return;
    timerRef.current = gsap.delayedCall(DWELL, () => {
      const L = live.current;
      if (!playingRef.current) return;
      if (L.hover || L.switching || !L.inView || document.hidden) return schedule();
      pick((shownRef.current + 1) % CAKES.length);
    });
  };
  useEffect(() => {
    if (prefersReducedMotion()) {
      playingRef.current = false;
      setPlaying(false);
      return;
    }
    schedule();
    return () => {
      timerRef.current?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const togglePlay = () => {
    playingRef.current = !playingRef.current;
    setPlaying(playingRef.current);
    if (playingRef.current) schedule();
    else timerRef.current?.kill();
  };

  const pick = (next: number) => {
    const L = live.current;
    const stage = stageRef.current;
    const sec = sectionRef.current;
    if (L.switching || next === shownRef.current || !stage || !sec) return;
    timerRef.current?.kill();
    shownRef.current = next;
    setActive(next);
    const cake = CAKES[next];
    const label = centreRef.current;

    if (prefersReducedMotion()) {
      gsap.set(sec, { "--hero-bg": GROUND[cake.field] });
      L.shown.centre = cake.id;
      L.shown.pieces = cake.id;
      label?.setAttribute("aria-label", cake.alt);
      draw();
      schedule();
      return;
    }
    L.switching = true;
    gsap.to(sec, { "--hero-bg": GROUND[cake.field], duration: 1.5, ease: "power2.inOut" });

    // the cake: one fast turn into a blur, swap at the peak, one slow turn out with a settle
    const setBlur = (b: number) => {
      const el = sceneRef.current ? canvasRef.current : centreRef.current;
      if (el) el.style.filter = b > 0.05 ? `blur(${b.toFixed(2)}px)` : "none";
    };
    gsap.to(L.spin, {
      val: 360,
      blur: 6,
      duration: 0.6,
      ease: "power2.in",
      onUpdate: () => setBlur(L.spin.blur),
      onComplete: () => {
        L.shown.centre = cake.id;
        label?.setAttribute("aria-label", cake.alt);
        gsap.to(L.spin, {
          val: 720,
          blur: 0,
          duration: 1.5,
          ease: "back.out(0.7)",
          onUpdate: () => setBlur(L.spin.blur),
          onComplete: () => {
            L.spin.val = 0;
            setBlur(0);
          },
        });
      },
    });

    // the stars and confetti: in to the centre, change colour, back out to new places
    const pieces = Array.from(stage.querySelectorAll<HTMLElement>(".cake-piece"));
    const W = stage.clientWidth;
    const H = stage.clientHeight;
    const k = parseFloat(getComputedStyle(stage).getPropertyValue("--k")) || 1;
    const range = 200 * k;
    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
    let done = 0;
    pieces.forEach((el, i) => {
      const s = L.st[i];
      const ex = el.offsetLeft + el.offsetWidth / 2;
      const ey = el.offsetTop + el.offsetHeight / 2;
      const half = el.offsetHeight / 2;
      // land inside the stage vertically; sideways the stage may spill under the text only when wide
      const nextY = clamp(ey + (Math.random() - 0.5) * range, half, H - half) - ey;
      const rawX = ex + (Math.random() - 0.5) * range;
      const nextX = (k < 1 ? clamp(rawX, half, W - half) : rawX) - ex;
      gsap.set(el, { x: s.baseX + s.rx, y: s.baseY + s.ry, rotation: s.rot, scale: 1, opacity: 1 });
      gsap
        .timeline()
        .to(el, { x: W / 2 - ex, y: H / 2 - ey, rotation: s.rot + 45, scale: 0.1, opacity: 0, duration: 0.5, ease: "power2.in" })
        .call(() => {
          if (i === 0) L.shown.pieces = cake.id;
        })
        .to(el, { duration: 0.3 })
        .to(el, {
          x: nextX,
          y: nextY,
          rotation: s.rot + 90,
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.5)",
          onComplete: () => {
            s.angle = s.rot + 90;
            s.rot = s.angle;
            s.baseX = nextX;
            s.baseY = nextY;
            s.rx = 0;
            s.ry = 0;
            gsap.set(el, { clearProps: "opacity,scale" });
            done += 1;
            if (done === pieces.length) {
              L.switching = false;
              schedule();
            }
          },
        });
    });
  };

  const hold = (on: boolean) => () => {
    live.current.hover = on;
  };
  return (
    <section ref={sectionRef} aria-labelledby="hero-title" className="hero cake-hero">
      <canvas ref={canvasRef} className="cake-canvas" aria-hidden="true" />
      <div className="cake-header">
        <p className="cake-wordmark">{shop.name}</p>
        <nav aria-label="Navigasi utama" className="cake-nav">
          <ul>
            {heroCakes.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="cake-ig" href={shop.instagram.href} target="_blank" rel="noopener">
          {shop.instagram.handle}
        </a>
      </div>

      <div className="cake-grid">
        <div className="cake-left hero-name-wrap">
          <FondantName id="hero-title" text={shop.name} />
          <p className="t-lead mt-5 max-w-[22ch] sm:mt-6">{hero.lead}</p>
          <p className="t-body mt-2 text-grape-soft">{hero.hours}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-primary" href={hero.primary.href} target="_blank" rel="noopener" {...mock(hero.primary.mockup)}>
              <ChatIcon />
              {hero.primary.label}
            </a>
            <a className="btn btn-secondary" href={hero.secondary.href}>
              {hero.secondary.label}
              <ArrowDownIcon />
            </a>
          </div>
          <p className="t-small mt-5 text-grape-soft">
            <span className="t-strong text-grape">{shop.rating}</span>
            {hero.proof.slice(shop.rating.length)}
          </p>
        </div>

        <div className="cake-stage" ref={stageRef}>
          <div className="cake-layer cake-far" aria-hidden="true">
            {FAR.map((f, i) => (
              <div key={i} className="cake-anchor cake-far-piece" style={at(f.x, f.y, f.s)} />
            ))}
          </div>
          <div className="cake-layer cake-back" aria-hidden="true">
            {BACK.map((b, i) => (
              <div key={i} className={`cake-anchor cake-piece${b.phone === false ? " no-phone" : ""}`} style={at(b.x, b.y, b.s)} />
            ))}
          </div>
          <div className="cake-layer cake-centre">
            <div className="cake-glow" aria-hidden="true" />
            <div className="cake-bob">
              <div className="cake-fallback" ref={centreRef} role="img" aria-label={CAKES[0].alt} {...mock(true)}>
                <CakeSilhouette kind="d20" />
              </div>
            </div>
          </div>
          {askMotion && (
            <button type="button" className="cake-motion" onClick={() => enableMotionRef.current?.()}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                <path d="M3 9.5a9 9 0 0 0 0 5M21 9.5a9 9 0 0 1 0 5" />
              </svg>
              {heroCakes.motion}
            </button>
          )}
          <div className="cake-layer cake-front" aria-hidden="true">
            {FRONT.map((f, i) => (
              <div key={i} className={`cake-anchor cake-piece${f.phone === false ? " no-phone" : ""}`} style={at(f.x, f.y, f.s)} />
            ))}
          </div>
        </div>

        <div className="cake-right">
          <div className="cake-picker" onPointerEnter={hold(true)} onPointerLeave={hold(false)} onFocus={hold(true)} onBlur={hold(false)}>
            <div className="cake-cards" role="group" aria-label={heroCakes.label}>
              {CAKES.map((c, i) => (
                <button key={c.id} type="button" className="cake-card" aria-pressed={active === i} onClick={() => pick(i)}>
                  {stills[c.id] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="cake-card-art" src={stills[c.id]} alt="" />
                  ) : (
                    <span className="cake-card-art cake-card-swatch" style={{ background: GROUND[c.field] }} aria-hidden="true" />
                  )}
                  <span className="cake-card-name">{c.name}</span>
                  <span className="cake-card-finish">{c.finish}</span>
                </button>
              ))}
            </div>
            <div className="cake-arrows">
              <button type="button" className="cake-arrow" aria-label={heroCakes.prev} onClick={() => pick((shownRef.current + CAKES.length - 1) % CAKES.length)}>
                ←
              </button>
              <button type="button" className="cake-arrow" aria-label={playing ? heroCakes.pause : heroCakes.play} aria-pressed={!playing} onClick={togglePlay}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" fill="currentColor">
                  {playing ? (
                    <>
                      <rect x="6" y="5" width="4" height="14" rx="1.5" />
                      <rect x="14" y="5" width="4" height="14" rx="1.5" />
                    </>
                  ) : (
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                  )}
                </svg>
              </button>
              <button type="button" className="cake-arrow" aria-label={heroCakes.next} onClick={() => pick((shownRef.current + 1) % CAKES.length)}>
                →
              </button>
            </div>
          </div>
          <figure className="card cake-photo p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="photo arch aspect-[4/5]"
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={hero.photo.width}
              height={hero.photo.height}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
            <figcaption className="t-small t-strong mt-3 px-1">
              <NoBreakAge text={hero.caption} />
            </figcaption>
          </figure>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {CAKES[active].name}
      </span>
    </section>
  );
}
