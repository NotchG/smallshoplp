"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";
import { at, cutBand, shift, sectorTop, sideBand, type Disc } from "@/lib/cake";

// Whole blueberry cheesecake on a white cake stand, one slice pulled out to the left.
// Signature moment: on load the slice glides out of the cake once (design brief §8).
// The slice is authored in its pulled-out position, so no JS / reduced motion = final state.

const CAKE: Disc = { cx: 240, cy: 190, rx: 150, ry: 50 };
const H = 80; // cake height
const TOP = 10; // blueberry layer
const BASE = 64; // biscuit base starts here
const GAP = { a: 120, b: 165 }; // the slice's wedge, front-left
const SLICE = shift(CAKE, -46, 12); // pulled-out position (radially outward)
const TIP = `${SLICE.cx} ${SLICE.cy}`; // rotation origin for the tween (matches globals.css)

const c = {
  top: "#4e2f66",
  topHi: "#6c4a8a",
  berry: "#2c1d43",
  berryHi: "#9c86c2",
  cut: "#faf0d7",
  side: "#f0dcae",
  base: "#b98149",
  baseCut: "#c48c53",
  stand: "#ffffff",
  standShade: "#dfe5d5",
  stem: "#eef1e8",
  shelf: "#a44a1c",
  shadow: "#3b271d",
};

// Berries on the back of the cake (drawn before the slice) and on the front-right part
// (drawn after it, with the side it sits on, so the cake correctly hides the slice's tip).
const berriesBack: [number, number, number][] = [
  [300, 176, 8], [270, 167, 7], [346, 176, 7], [206, 168, 7], [178, 181, 8], [236, 182, 6],
];
const berriesFront: [number, number, number][] = [[322, 196, 7], [262, 204, 8], [298, 211, 7], [332, 209, 8]];
const berriesSlice: [number, number, number][] = [[118, 222, 7], [90, 216, 7]];

function Berry({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c.berry} />
      <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.28} fill={c.berryHi} />
    </g>
  );
}

function Layers({ d, kind, from, to }: { d: Disc; kind: "side" | "cut"; from: number; to: number }) {
  // from/to = angle range for sides, or the single cut angle (from) for cut faces
  const band = (y0: number, y1: number) =>
    kind === "side" ? sideBand(d, from, to, y0, y1) : cutBand(d, from, y0, y1);
  return (
    <g>
      <path d={band(0, TOP)} fill={c.top} />
      <path d={band(TOP, BASE)} fill={kind === "side" ? c.side : c.cut} />
      <path d={band(BASE, H)} fill={kind === "side" ? c.base : c.baseCut} />
    </g>
  );
}

function Drip({ x, y, len }: { x: number; y: number; len: number }) {
  return <path d={`M${x - 5},${y} L${x - 5},${y + len} A5,5 0 0 0 ${x + 5},${y + len} L${x + 5},${y} Z`} fill={c.top} />;
}

export default function HeroCake({ label }: { label: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = ref.current;
      if (!svg) return;
      const slice = svg.querySelector("[data-slice]");
      const shadow = svg.querySelector("[data-slice-shadow]");
      if (!slice || !shadow) return;
      // Hand over from the pre-paint CSS state (globals.css) before GSAP reads the element.
      slice.classList.add("is-live");
      shadow.classList.add("is-live");
      if (prefersReducedMotion() || !document.documentElement.classList.contains("motion-ok")) return;

      // Set the rotation origin once, at rest, so GSAP has nothing to compensate for and the
      // tween ends exactly on the authored (identity) position.
      gsap.set(slice, { svgOrigin: TIP, smoothOrigin: false });
      gsap.fromTo(
        slice,
        { x: 46, y: -12, rotation: 6 },
        { x: 0, y: 0, rotation: 0, duration: duration.hero, ease: ease.outStrong, delay: 0.25 },
      );
      gsap.fromTo(
        shadow,
        { opacity: 0 },
        { opacity: 1, duration: duration.hero, ease: ease.out, delay: 0.25 },
      );
    },
    { scope: ref },
  );

  const p120 = at(CAKE, 120);
  const p66 = at(CAKE, 66.4);
  const p40 = at(CAKE, 40);
  const p95 = at(CAKE, 95);

  return (
    <svg ref={ref} viewBox="0 0 480 400" role="img" aria-label={label}>
      {/* shelf board and the stand's shadow on it */}
      <rect x="0" y="388" width="480" height="12" fill={c.shelf} />
      <ellipse cx="240" cy="388" rx="104" ry="7" fill={c.shadow} opacity="0.22" />

      {/* cake stand */}
      <ellipse cx="240" cy="376" rx="62" ry="13" fill={c.standShade} />
      <ellipse cx="240" cy="371" rx="62" ry="13" fill={c.stand} />
      <path d="M220,336 L260,336 L254,368 L226,368 Z" fill={c.stem} />
      <ellipse cx="240" cy="281" rx="210" ry="70" fill={c.standShade} />
      <ellipse cx="240" cy="272" rx="210" ry="70" fill={c.stand} />

      {/* the slice's shadow on the plate */}
      <g data-slice-shadow>
        <ellipse cx="122" cy="309" rx="80" ry="15" fill={c.shadow} opacity="0.2" />
      </g>

      {/* the cake behind the slice: the cut face seen through the gap, the left side, the whole top */}
      <Layers d={CAKE} kind="cut" from={GAP.b} to={GAP.b} />
      <Layers d={CAKE} kind="side" from={GAP.b} to={180} />
      <path d={sectorTop(CAKE, GAP.b, GAP.a + 360)} fill={c.top} />
      <ellipse cx="300" cy="176" rx="56" ry="11" fill={c.topHi} />
      <ellipse cx="196" cy="176" rx="20" ry="5" fill={c.topHi} />
      {berriesBack.map(([x, y, r]) => (
        <Berry key={`${x}-${y}`} x={x} y={y} r={r} />
      ))}

      {/* the slice, authored pulled out */}
      <g data-slice>
        <Layers d={SLICE} kind="side" from={GAP.a} to={GAP.b} />
        <Layers d={SLICE} kind="cut" from={GAP.a} to={GAP.a} />
        <path d={sectorTop(SLICE, GAP.a, GAP.b)} fill={c.top} />
        <ellipse cx="128" cy="230" rx="16" ry="4" fill={c.topHi} />
        {berriesSlice.map(([x, y, r]) => (
          <Berry key={`s-${x}-${y}`} x={x} y={y} r={r} />
        ))}
      </g>

      {/* the cake's front-right part sits in front of the slice */}
      <Layers d={CAKE} kind="side" from={0} to={GAP.a} />
      <Drip x={p66[0]} y={p66[1] + 4} len={12} />
      <Drip x={p40[0]} y={p40[1] + 4} len={9} />
      <Drip x={p95[0]} y={p95[1] + 4} len={15} />
      <Drip x={p120[0] + 14} y={p120[1] + 2} len={7} />
      <path d={sectorTop(CAKE, 0, GAP.a)} fill={c.top} />
      {berriesFront.map(([x, y, r]) => (
        <Berry key={`f-${x}-${y}`} x={x} y={y} r={r} />
      ))}
    </svg>
  );
}
