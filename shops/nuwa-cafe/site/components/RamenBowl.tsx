"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion, stagger } from "@/lib/motion";

// NUWA's ramen, top view, drawn from the customer photo (reference only, never shown):
// tomato rim, tomato zigzag, rim-blue triangle band, creamy broth, noodles, and eight topping
// groups in the photo's positions. Each topping is its own <g class="topping" data-order>.
// Signature moment: the toppings settle into the bowl one at a time on load (TRD motion spec).

const VB = 410;
const C = 200;
const r1 = (n: number) => Math.round(n * 10) / 10;
function polar(r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [r1(C + r * Math.cos(a)), r1(C + r * Math.sin(a))];
}
const pt = (p: [number, number]) => `${p[0]} ${p[1]}`;

function zigzag(ro: number, ri: number, teeth: number) {
  const pts: string[] = [];
  for (let i = 0; i < teeth * 2; i++) pts.push(pt(polar(i % 2 ? ri : ro, (i * 180) / teeth)));
  return `M${pts.join("L")}Z`;
}
function triangles(base: number, tip: number, count: number, width: number, offset = 0) {
  let d = "";
  for (let i = 0; i < count; i++) {
    const a = (i * 360) / count + offset;
    d += `M${pt(polar(base, a - width / 2))}L${pt(polar(tip, a))}L${pt(polar(base, a + width / 2))}Z`;
  }
  return d;
}
function scallop(cx: number, cy: number, r: number, bumps: number, depth: number) {
  const p = (rr: number, deg: number) => {
    const a = (deg * Math.PI) / 180;
    return `${r1(cx + rr * Math.cos(a))} ${r1(cy + rr * Math.sin(a))}`;
  };
  let d = `M${p(r - depth, 0)}`;
  for (let i = 0; i < bumps; i++) {
    const a0 = (i * 360) / bumps;
    d += `Q${p(r + depth * 1.6, a0 + 180 / bumps)} ${p(r - depth, a0 + 360 / bumps)}`;
  }
  return `${d}Z`;
}
function spiral(cx: number, cy: number, turns: number, r0: number, r1max: number) {
  const steps = Math.round(turns * 18);
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2;
    const r = r0 + (r1max - r0) * t;
    pts.push(`${r1(cx + r * Math.cos(a))} ${r1(cy + r * Math.sin(a))}`);
  }
  return `M${pts.join("L")}`;
}

const ZIGZAG = zigzag(183, 171, 36);
const ZIG_DOTS = Array.from({ length: 36 }, (_, i) => polar(179.5, ((i * 2 + 1) * 180) / 36));
const TRI_OUT = triangles(149.5, 158.5, 40, 5.4);
const TRI_IN = triangles(164.5, 156, 40, 5.4, 4.5);

const NOODLES = [
  [146, 174, 5], [138, 186, 6], [150, 198, 6], [140, 210, 6], [152, 222, 5], [160, 234, 4], [172, 246, 3],
].map(([x, y, n]) => `M${x} ${y}q10 -7 20 0${" t20 0".repeat(n - 1)}`).join("");

const MINCE: [number, number, number][] = [
  [118, 112, 11], [134, 105, 10], [149, 114, 10], [124, 127, 12], [141, 130, 11], [157, 129, 9],
  [110, 139, 9], [129, 145, 10], [146, 146, 9], [163, 115, 8], [104, 123, 8], [160, 142, 7],
];
const MINCE_SPECKS: [number, number][] = [
  [121, 117], [138, 123], [151, 137], [115, 133], [132, 141], [145, 109], [158, 124], [107, 128],
];
const FLAKES: [number, number, number][] = [
  [176, 96, -20], [188, 87, 30], [202, 83, -10], [215, 91, 40], [227, 100, -30], [198, 104, 15],
  [184, 112, -40], [210, 114, 25], [229, 87, 10], [168, 106, 50], [221, 121, -15], [194, 121, 60],
  [205, 96, 70], [182, 101, 0],
];
const CORN: [number, number, number][] = [
  [268, 150, 10], [280, 145, -15], [292, 151, 20], [304, 158, 0], [262, 163, -10], [274, 161, 25],
  [287, 165, -5], [299, 170, 15], [311, 173, -20], [270, 176, 5], [283, 179, -25], [295, 184, 10],
  [307, 187, -5], [278, 192, 15], [291, 196, -10], [303, 199, 20],
];
const ONIONS: [number, number][] = [
  [188, 196], [205, 185], [175, 211], [201, 213], [217, 200], [190, 228],
];
const NARUTO = scallop(292, 234, 30, 16, 1.6);

// Small repeated shapes as one round-capped stroke path each (keeps the SVG under ~12 KB):
// a zero-length segment draws a dot; a short one draws a rounded kernel or flake.
const dots = (pts: [number, number][]) => pts.map(([x, y]) => `M${x} ${y}h0`).join("");
function dashes(items: [number, number, number][], len: number) {
  return items
    .map(([x, y, a]) => {
      const r = (a * Math.PI) / 180;
      const dx = r1(Math.cos(r) * len);
      const dy = r1(Math.sin(r) * len);
      return `M${r1(x - dx / 2)} ${r1(y - dy / 2)}l${dx} ${dy}`;
    })
    .join("");
}
const ZIG_DOT_PATH = dots(ZIG_DOTS);
const SPECK_PATH = dots(MINCE_SPECKS);
const FLAKE_PATH = dashes(FLAKES, 4.4);
const CORN_PATH = dashes(CORN, 1.6);
const SWIRL = spiral(292, 234, 1.7, 2, 19);

export default function RamenBowl({ label }: { label: string }) {
  const wrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = wrap.current;
      if (!root || prefersReducedMotion()) return;
      if (!document.documentElement.classList.contains("js-motion")) return;
      const groups = gsap.utils
        .toArray<SVGGElement>(".topping", root)
        .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
      // GSAP takes over from the CSS failsafe.
      groups.forEach((g) => (g.style.animation = "none"));
      // A late intro is worse than none: show the finished bowl.
      if (performance.now() > 1200) {
        gsap.set(groups, { opacity: 1 });
        return;
      }
      const k = VB / (root.clientWidth || VB); // 16 screen px in SVG units
      gsap.set(groups, { transformOrigin: "50% 50%" });
      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        groups,
        { opacity: 0, y: -distance.topping * k, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: duration.topping, ease: ease.outStrong, stagger: stagger.topping,
        },
        0,
      );
      const noriIndex = groups.findIndex((g) => g.dataset.kind === "nori");
      if (noriIndex >= 0) {
        tl.fromTo(
          groups[noriIndex],
          { rotation: -6 },
          { rotation: 0, duration: duration.topping, ease: ease.outStrong },
          noriIndex * stagger.topping,
        );
      }
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap} className="bowl-wrap">
      <svg className="bowl-art" viewBox={`0 0 ${VB} ${VB}`} role="img" aria-label={label} focusable="false">
        {/* flat shadow, bowl, rim pattern, broth */}
        <circle cx={C + 7} cy={C + 9} r="195" fill="#1C1F1B" fillOpacity="0.06" />
        <circle cx={C} cy={C} r="195" fill="#C7372A" />
        <circle cx={C} cy={C} r="188" fill="#FFFFFF" />
        <path d={ZIGZAG} fill="none" stroke="#C7372A" strokeWidth="2.4" strokeLinejoin="miter" />
        <path d={ZIG_DOT_PATH} fill="none" stroke="#C7372A" strokeWidth="3.4" strokeLinecap="round" />
        <circle cx={C} cy={C} r="166" fill="none" stroke="#7DBEDD" strokeWidth="1.6" />
        <circle cx={C} cy={C} r="148" fill="none" stroke="#7DBEDD" strokeWidth="1.6" />
        <path d={TRI_OUT + TRI_IN} fill="#7DBEDD" />
        <circle cx={C} cy={C} r="146" fill="#F1E6D6" />
        <g fill="none" stroke="#EAD7A0" strokeWidth="4.5" strokeLinecap="round">
          <path d={NOODLES} transform={`rotate(-14 ${C} ${C})`} />
          <path d={NOODLES} transform={`rotate(64 ${C} ${C}) translate(0 6)`} opacity="0.85" />
        </g>

        {/* 1 seasoned mince, 10–11 o'clock */}
        <g className="topping" data-order="1">
          <g fill="#B98C6B">
            {MINCE.map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} />
            ))}
          </g>
          <path d={SPECK_PATH} fill="none" stroke="#8A5A3C" strokeWidth="3.6" strokeLinecap="round" />
        </g>

        {/* 2 chilli oil with flakes, 12 o'clock */}
        <g className="topping" data-order="2">
          <path
            d="M150 100C152 74 196 62 228 70C254 77 262 100 250 118C238 134 206 140 182 134C160 129 148 116 150 100Z"
            fill="#D9472B"
            fillOpacity="0.45"
          />
          <path
            d="M162 96C166 79 196 72 221 77C240 81 248 97 239 110C229 124 205 129 187 126C169 123 158 111 162 96Z"
            fill="#D9472B"
          />
          <path d={FLAKE_PATH} fill="none" stroke="#9B2B1E" strokeWidth="4.6" strokeLinecap="round" />
        </g>

        {/* 3 nori, 1 o'clock, leaning on the rim */}
        <g className="topping" data-order="3" data-kind="nori">
          <path
            d="M249 38L262 42L275 46L294 53L291 66L285 86L279 106L272 128L262 160L248 156L231 151L217 146L222 128L229 106L236 84L243 62Z"
            fill="#26302B"
            stroke="#26302B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M256 60L240 120M270 66L254 132M282 74L268 140" stroke="#3B4842" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 4 sweetcorn, 2 o'clock */}
        <g className="topping" data-order="4">
          <path d={CORN_PATH} fill="none" stroke="#F5C842" strokeWidth="8.8" strokeLinecap="round" />
        </g>

        {/* 5 narutomaki, 3–4 o'clock */}
        <g className="topping" data-order="5">
          <path d={NARUTO} fill="#EBA9B5" />
          <path d={SWIRL} fill="none" stroke="#F8F9F5" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* 6 two boiled-egg halves, 8–9 o'clock */}
        <g className="topping" data-order="6">
          <g transform="translate(102 190) rotate(-15)">
            <ellipse cx="3" cy="4" rx="37" ry="29" fill="#1C1F1B" fillOpacity="0.06" />
            <ellipse rx="37" ry="29" fill="#FFFFFF" />
            <ellipse cx="5" cy="2" rx="20" ry="16.5" fill="#F0A23A" />
          </g>
          <g transform="translate(130 262) rotate(28)">
            <ellipse cx="3" cy="4" rx="37" ry="29" fill="#1C1F1B" fillOpacity="0.06" />
            <ellipse rx="37" ry="29" fill="#FFFFFF" />
            <ellipse cx="4" cy="-3" rx="20" ry="16.5" fill="#F0A23A" />
          </g>
        </g>

        {/* 7 grilled meat slices, 5–6 o'clock */}
        <g className="topping" data-order="7">
          <g fill="#8A5A3C">
            <path transform="translate(182 292) rotate(-18)" d="M-12 -30C-4 -37 10 -35 13 -22L12 26C8 34 -6 34 -11 26Z" />
            <path transform="translate(224 302) rotate(8)" d="M-19 -8C-15 -17 4 -18 15 -12C21 -6 21 8 13 13C3 18 -12 16 -18 7Z" />
            <path transform="translate(258 279) rotate(28)" d="M-15 -6C-11 -14 4 -15 12 -10C17 -4 17 7 10 11C2 14 -10 13 -14 6Z" />
            <path transform="translate(240 322) rotate(-12)" d="M-14 -6C-10 -13 4 -14 11 -9C16 -3 15 7 9 10C1 13 -9 12 -13 5Z" />
          </g>
          <g stroke="#1C1F1B" strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round">
            <path d="M176 278L190 270M174 296L190 288M176 314L188 308" />
            <path d="M212 300L226 292M220 310L234 302" />
            <path d="M250 280L262 272M254 290L266 283" />
            <path d="M232 322L244 316" />
          </g>
        </g>

        {/* 8 spring onion rings on the noodles */}
        <g className="topping" data-order="8" fill="none" stroke="#5DAE4E" strokeWidth="4">
          {ONIONS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="7.2" />
          ))}
        </g>
      </svg>
    </div>
  );
}
