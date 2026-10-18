"use client";
// Test build: the hero rebuilt on the mechanics of GetLayers' "Soda" template, with Publika's own
// dishes, palette, fonts and copy (no soda assets). One of the menu's dishes sits in the middle in
// 3D and tilts toward the cursor while it bobs; small 3D copies of it drift around in parallax and
// are pushed away by the pointer; ferns and copper pendants float behind. The hero cycles through
// the dishes on its own (pausable; it holds while the picker is hovered or focused), and the cards
// switch it by hand: the big dish spins twice and swaps at the peak, the small ones implode to the
// centre, swap and burst back out, and the ground (hero and header) moves between tile, timber and
// fern. The 3D models (lib/soda3d) follow DOM anchors that carry all of that motion; without WebGL
// the anchors' own flat drawings show instead. Reduced motion: still, no cycling, instant switch.
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { DishSymbols } from "./art/dishes";
import { Pendant } from "./art/plan";
import { TodayLine } from "./TodayHours";
import { hero, menu, shop, type DishId } from "@/content";
import type { SodaFrame, SodaScene } from "@/lib/soda3d/scene";

type Ground = "tile" | "timber" | "fern";
const PICKS: { id: DishId; ground: Ground }[] = [
  { id: "nasi-goreng-wagyu", ground: "tile" },
  { id: "tiramisu", ground: "timber" },
  { id: "kopi-teh", ground: "fern" },
];
// the ground's colours, as root variables so the header follows the hero
const GROUND: Record<Ground, Record<string, string>> = {
  tile: { "--soda-bg": "#F2F3EE", "--soda-ink": "#1E2427", "--soda-cta-bg": "#3C5A39", "--soda-cta-ink": "#F2F3EE" },
  timber: { "--soda-bg": "#D3A26B", "--soda-ink": "#1E2427", "--soda-cta-bg": "#3C5A39", "--soda-cta-ink": "#F2F3EE" },
  fern: { "--soda-bg": "#3C5A39", "--soda-ink": "#F2F3EE", "--soda-cta-bg": "#D3A26B", "--soda-cta-ink": "#1E2427" },
};
const DWELL = 4.5; // seconds each dish holds before the hero moves on by itself

// Small dishes around the big one: centre in % of the stage, size in px at desktop.
const FRONT = [
  { x: 17, y: 16, s: 116 },
  { x: 86, y: 10, s: 88 },
  { x: 88, y: 66, s: 128 },
  { x: 6, y: 70, s: 96 },
  { x: 50, y: 86, s: 72, phone: false },
  { x: 96, y: 38, s: 80, phone: false },
];
const BACK = [
  { x: 30, y: 6, s: 62, o: 0.7 },
  { x: 10, y: 52, s: 56, o: 0.6, phone: false },
  { x: 70, y: 90, s: 58, o: 0.7 },
];
// Far behind, floating only: ferns (they may lie under the text columns) and the counter's pendants.
const FERNS = [
  { x: 142, y: 47, s: 140, o: 0.4 },
  { x: -50, y: 90, s: 120, o: 0.35 },
  { x: 108, y: 2, s: 80, o: 0.5 },
];
const PENDANTS = [
  { x: 26, y: 5, s: 34 },
  { x: 50, y: 3, s: 30 },
  { x: 74, y: 5, s: 34 },
];

const item = (x: number, y: number, s: number, o = 1) =>
  ({ left: `${x}%`, top: `${y}%`, "--s": `${s}px`, opacity: o }) as CSSProperties;

const itemFor = (id: DishId) => menu.items.find((i) => i.dish === id)!;
const labelFor = (id: DishId) => {
  const v = itemFor(id).visual;
  return v.kind === "drawing" ? v.label : v.alt;
};

type Live = {
  switching: boolean;
  spin: { val: number; blur: number };
  st: { rx: number; ry: number; angle: number; baseX: number; baseY: number; rot: number; tilt: number }[];
  shown: { centre: DishId; small: DishId };
  cur: { x: number; y: number };
  inView: boolean;
  hover: boolean;
};

export default function SodaHero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [stills, setStills] = useState<Partial<Record<DishId, string>>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const centreRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<SodaScene | null>(null);
  const shownRef = useRef(0);
  const playingRef = useRef(true);
  const timerRef = useRef<gsap.core.Tween | null>(null);
  const live = useRef<Live>({
    switching: false,
    spin: { val: 0, blur: 0 },
    st: [],
    shown: { centre: PICKS[0].id, small: PICKS[0].id },
    cur: { x: 0, y: 0 },
    inView: true,
    hover: false,
  });

  // where every dish is right now, for the 3D scene
  const frame = (): SodaFrame | null => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return null;
    const L = live.current;
    const S = sec.getBoundingClientRect();
    const bob = stage.querySelector<HTMLElement>(".soda-bob")!;
    const br = bob.getBoundingClientRect();
    const dishes = Array.from(stage.querySelectorAll<HTMLElement>(".soda-dish"));
    return {
      w: S.width,
      h: S.height,
      centreId: L.shown.centre,
      smallId: L.shown.small,
      centre: {
        x: br.left + br.width / 2 - S.left,
        y: br.top + br.height / 2 - S.top,
        size: bob.offsetWidth,
        z: 0,
        tilt: 1.0 - L.cur.y * 0.4,
        yaw: L.cur.x * 0.55,
        spin: (L.spin.val * Math.PI) / 180,
        visible: true,
      },
      items: dishes.map((el, i) => {
        const r = el.getBoundingClientRect();
        const s = L.st[i] ?? { rot: 0, tilt: 0.9 };
        const sw = L.switching;
        const scale = sw ? Number(gsap.getProperty(el, "scale")) : 1;
        const op = sw ? Number(gsap.getProperty(el, "opacity")) : 1;
        const rot = sw ? Number(gsap.getProperty(el, "rotation")) : s.rot;
        return {
          x: r.left + r.width / 2 - S.left,
          y: r.top + r.height / 2 - S.top,
          size: el.offsetWidth * scale,
          z: el.parentElement?.classList.contains("soda-back") ? -170 : 120,
          tilt: s.tilt + Math.sin((rot * Math.PI) / 90) * 0.18,
          yaw: 0,
          spin: (rot * Math.PI) / 180,
          visible: op > 0.04,
        };
      }),
    };
  };
  const draw = () => {
    const f = frame();
    if (f && sceneRef.current) sceneRef.current.render(f);
  };

  // the loop: cursor tilt, parallax, pointer repulsion, floating, and the 3D draw
  useEffect(() => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt) return;
    const dishes = Array.from(stage.querySelectorAll<HTMLElement>(".soda-dish"));
    const leaves = Array.from(stage.querySelectorAll<HTMLElement>(".soda-leaf"));
    const front = stage.querySelector<HTMLElement>(".soda-front")!;
    const back = stage.querySelector<HTMLElement>(".soda-back")!;
    const far = stage.querySelector<HTMLElement>(".soda-far")!;
    const L = live.current;
    L.st = dishes.map(() => ({ rx: 0, ry: 0, angle: Math.random() * 360, baseX: 0, baseY: 0, rot: 0, tilt: 0.6 + Math.random() * 0.6 }));
    L.st.forEach((s) => (s.rot = s.angle));
    if (prefersReducedMotion()) return;

    const mouse = { x: 0, y: 0, px: -9999, py: -9999 };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };
    const io = new IntersectionObserver(([e]) => {
      L.inView = e.isIntersecting;
    });
    io.observe(stage);

    const tick = () => {
      if (!L.inView) return;
      const time = performance.now() / 1000;
      const cur = L.cur;
      cur.x += (mouse.x - cur.x) * 0.05;
      cur.y += (mouse.y - cur.y) * 0.05;
      tilt.style.transform = `rotateX(${(-cur.y * 20).toFixed(2)}deg) rotateY(${(cur.x * 28).toFixed(2)}deg) rotate(${L.spin.val.toFixed(2)}deg)`;
      front.style.transform = `translate(${(cur.x * 60).toFixed(2)}px, ${(cur.y * 60).toFixed(2)}px)`;
      back.style.transform = `translate(${(cur.x * -30).toFixed(2)}px, ${(cur.y * -30).toFixed(2)}px)`;
      far.style.transform = `translate(${(cur.x * -15).toFixed(2)}px, ${(cur.y * -15).toFixed(2)}px)`;

      if (!L.switching) {
        dishes.forEach((el, i) => {
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
          s.angle += 0.2 * speed;
          const dur = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10][i % 9];
          const phase = (time + i * 0.7) * ((Math.PI * 2) / dur);
          s.rot = s.angle + Math.cos(phase) * 6;
          el.style.transform = `translate(${(s.rx + s.baseX).toFixed(2)}px, ${(s.ry + s.baseY + Math.sin(phase) * 15).toFixed(2)}px) rotate(${s.rot.toFixed(2)}deg)`;
        });
      }
      leaves.forEach((el, i) => {
        const dur = 10 + i * 2;
        const phase = (time + i * 1.2) * ((Math.PI * 2) / dur);
        el.style.transform = `translate(${(Math.cos(phase * 0.5) * 15).toFixed(2)}px, ${(Math.sin(phase) * 20).toFixed(2)}px) rotate(${(Math.sin(phase * 0.3) * 15).toFixed(2)}deg)`;
      });
      draw();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("pointermove", onMove);
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
      const { createSodaScene } = await import("@/lib/soda3d/scene");
      if (cancelled) return;
      const count = stageRef.current?.querySelectorAll(".soda-dish").length ?? 0;
      const scene = createSodaScene(canvas, PICKS.map((p) => p.id), count);
      if (!scene) return;
      // stills for the picker cards, before the canvas is shown
      const s: Partial<Record<DishId, string>> = {};
      for (const p of PICKS) s[p.id] = scene.snapshot(p.id, 220);
      setStills(s);
      sceneRef.current = scene;
      sec.classList.add("soda-3d");
      draw();
      canvas.classList.add("is-on");
      // still pages (reduced motion) redraw on resize; moving ones redraw every frame anyway
      ro = new ResizeObserver(() => {
        if (prefersReducedMotion()) draw();
      });
      ro.observe(sec);
      scene.onLost(() => {
        sceneRef.current = null;
        sec.classList.remove("soda-3d");
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

  const swapTo = (id: DishId, which: "centre" | "dishes") => {
    const stage = stageRef.current;
    if (!stage) return;
    if (which === "centre") {
      live.current.shown.centre = id;
      centreRef.current?.querySelector("use")?.setAttribute("href", `#dish-${id}`);
      centreRef.current?.setAttribute("aria-label", labelFor(id));
    } else {
      live.current.shown.small = id;
      stage.querySelectorAll(".soda-dish use").forEach((u) => u.setAttribute("href", `#dish-${id}`));
    }
  };

  // the cycle: after each dish has held for DWELL, move on, unless paused, hovered, hidden or off screen
  const schedule = () => {
    timerRef.current?.kill();
    if (!playingRef.current) return;
    timerRef.current = gsap.delayedCall(DWELL, () => {
      const L = live.current;
      if (!playingRef.current) return;
      if (L.hover || L.switching || !L.inView || document.hidden) return schedule();
      pick((shownRef.current + 1) % PICKS.length);
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
    if (L.switching || next === shownRef.current || !stage) return;
    timerRef.current?.kill();
    shownRef.current = next;
    setActive(next);
    const { id, ground } = PICKS[next];
    const root = document.documentElement;

    if (prefersReducedMotion()) {
      gsap.set(root, GROUND[ground]);
      swapTo(id, "centre");
      swapTo(id, "dishes");
      draw();
      schedule();
      return;
    }
    L.switching = true;
    // The ground morphs; the ink and the button snap over at the morph's midpoint instead of
    // fading with it, so text never passes through the ground's own colour (timber -> fern).
    const g = GROUND[ground];
    gsap.to(root, { "--soda-bg": g["--soda-bg"], duration: 1.5, ease: "power2.inOut" });
    gsap.to(root, {
      "--soda-ink": g["--soda-ink"],
      "--soda-cta-bg": g["--soda-cta-bg"],
      "--soda-cta-ink": g["--soda-cta-ink"],
      duration: 0.12,
      delay: 0.69,
      ease: "none",
    });

    // the big dish: one fast turn into a blur, swap at the peak, one slow turn out with a settle
    const blurTarget = () => (sceneRef.current ? canvasRef.current : centreRef.current) as HTMLElement | SVGElement | null;
    const setBlur = (b: number) => {
      const el = blurTarget();
      if (el) el.style.filter = b > 0.05 ? `blur(${b.toFixed(2)}px)` : "none";
    };
    gsap.to(L.spin, {
      val: 360,
      blur: 8,
      duration: 0.6,
      ease: "power2.in",
      onUpdate: () => setBlur(L.spin.blur),
      onComplete: () => {
        swapTo(id, "centre");
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

    // the small dishes: in to the centre, swap, back out to new places
    const dishes = Array.from(stage.querySelectorAll<HTMLElement>(".soda-dish"));
    const W = stage.clientWidth;
    const H = stage.clientHeight;
    const k = parseFloat(getComputedStyle(stage).getPropertyValue("--k")) || 1;
    const range = 200 * k; // the burst scales with the dishes
    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
    let done = 0;
    dishes.forEach((el, i) => {
      const s = L.st[i];
      const ex = el.offsetLeft + el.offsetWidth / 2;
      const ey = el.offsetTop + el.offsetHeight / 2;
      const toX = W / 2 - ex;
      const toY = H / 2 - ey;
      // land inside the stage vertically (never behind the copy above or below it); sideways the
      // stage may spill under the text columns only on the wide layout
      const half = el.offsetHeight / 2;
      const nextY = clamp(ey + (Math.random() - 0.5) * range, half, H - half) - ey;
      const rawX = ex + (Math.random() - 0.5) * range;
      const nextX = (k < 1 ? clamp(rawX, half, W - half) : rawX) - ex;
      gsap.set(el, { x: s.baseX + s.rx, y: s.baseY + s.ry, rotation: s.rot, scale: 1, opacity: 1 });
      gsap
        .timeline()
        .to(el, { x: toX, y: toY, rotation: s.rot + 45, scale: 0.1, opacity: 0, duration: 0.5, ease: "power2.in" })
        .call(() => {
          if (i === 0) swapTo(id, "dishes");
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
            if (done === dishes.length) {
              L.switching = false;
              schedule();
            }
          },
        });
    });
  };

  const first = PICKS[0].id;
  const p = hero.photo;
  const hold = (on: boolean) => () => {
    live.current.hover = on;
  };
  return (
    <section ref={sectionRef} className="hero soda soda-ground" aria-labelledby="hero-title">
      <DishSymbols ids={PICKS.map((d) => d.id)} />
      <canvas ref={canvasRef} className="soda-canvas" aria-hidden="true" />
      <div className="soda-grid">
        <div className="soda-left">
          <h1 id="hero-title" className="soda-title">
            {hero.title}
          </h1>
          <p className="soda-lead">{hero.lead}</p>
          <a className="soda-cta" href={shop.directionsUrl}>
            {hero.cta}
            <span className="soda-cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </span>
          </a>
          <TodayLine />
          <div className="soda-badge">
            <span className="soda-badge-num nums">{shop.rating}</span>
            <span className="soda-badge-text">
              <span>dari 5 di Google</span>
              <span className="nums">{shop.ratingCount} ulasan</span>
            </span>
          </div>
        </div>

        <div className="soda-stage" ref={stageRef}>
          <div className="soda-layer soda-far" aria-hidden="true">
            {FERNS.map((f, i) => (
              <svg key={`f${i}`} className="soda-item soda-leaf" style={item(f.x, f.y, f.s, f.o)} viewBox="0 0 120 120" focusable="false">
                <use href="#fern" />
              </svg>
            ))}
            {PENDANTS.map((q, i) => (
              <svg key={`p${i}`} className="soda-item soda-leaf" style={item(q.x, q.y, q.s)} viewBox="-16 -16 32 32" focusable="false">
                <Pendant x={0} y={0} r={15} />
              </svg>
            ))}
          </div>
          <div className="soda-layer soda-back" aria-hidden="true">
            {BACK.map((b, i) => (
              <div key={i} className={`soda-item soda-dish${b.phone === false ? " no-phone" : ""}`} style={item(b.x, b.y, b.s, b.o)}>
                <svg viewBox="0 0 200 200" focusable="false">
                  <use href={`#dish-${first}`} />
                </svg>
              </div>
            ))}
          </div>
          <div className="soda-layer soda-centre">
            <div className="soda-pool" aria-hidden="true" />
            <div className="soda-bob">
              <div className="soda-tilt" ref={tiltRef}>
                <svg ref={centreRef} viewBox="0 0 200 200" role="img" aria-label={labelFor(first)} {...mock(true)}>
                  <use href={`#dish-${first}`} />
                </svg>
              </div>
            </div>
          </div>
          <div className="soda-layer soda-front" aria-hidden="true">
            {FRONT.map((f, i) => (
              <div key={i} className={`soda-item soda-dish${f.phone === false ? " no-phone" : ""}`} style={item(f.x, f.y, f.s)}>
                <svg viewBox="0 0 200 200" focusable="false">
                  <use href={`#dish-${first}`} />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="soda-right">
          <div className="soda-picker" onPointerEnter={hold(true)} onPointerLeave={hold(false)} onFocus={hold(true)} onBlur={hold(false)}>
            <div className="soda-cards" role="group" aria-label="Pilih hidangan">
              {PICKS.map((d, i) => {
                const it = itemFor(d.id);
                return (
                  <button key={d.id} type="button" className="soda-card" aria-pressed={active === i} onClick={() => pick(i)}>
                    {stills[d.id] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="soda-card-art" src={stills[d.id]} alt="" />
                    ) : (
                      <svg className="soda-card-art" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
                        <use href={`#dish-${d.id}`} />
                      </svg>
                    )}
                    <span className="soda-card-name" {...mock(it.nameMockup)}>
                      {it.name}
                    </span>
                    <span className="soda-card-price nums" {...mock(it.price ? it.priceMockup : false)}>
                      {it.price ?? it.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="soda-arrows">
              <button type="button" className="soda-arrow" aria-label="Hidangan sebelumnya" onClick={() => pick((shownRef.current + PICKS.length - 1) % PICKS.length)}>
                ←
              </button>
              <button type="button" className="soda-arrow" aria-label={playing ? "Hentikan putaran otomatis" : "Putar hidangan otomatis"} aria-pressed={!playing} onClick={togglePlay}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" fill="currentColor">
                  {playing ? (
                    <>
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </>
                  ) : (
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                  )}
                </svg>
              </button>
              <button type="button" className="soda-arrow" aria-label="Hidangan berikutnya" onClick={() => pick((shownRef.current + 1) % PICKS.length)}>
                →
              </button>
            </div>
          </div>
          <figure className="soda-photo">
            <div className="photo-frame">
              <Image src={p.src} width={p.width} height={p.height} alt={p.alt} sizes="(min-width: 1280px) 400px, 100vw" preload loading="eager" fetchPriority="high" />
            </div>
            <figcaption className="t-small">{p.caption}</figcaption>
          </figure>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {itemFor(PICKS[active].id).name}
      </span>
    </section>
  );
}
