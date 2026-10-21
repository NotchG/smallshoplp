"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, duration, ease, prefersReducedMotion, scale, stagger } from "@/lib/motion";
import LanternLight from "@/components/LanternLight";

// The hero lantern, drawn from the hexagonal stained-glass lanterns in their main room
// (photo-3): pointed-arch panes in amber, cobalt, emerald and ruby on a black iron frame.
// Every pane has an unlit base (its tint at 30% over the iron) that is always visible, and a
// lit overlay. Markup is the final, lit state. Signature moment ("lampu menyala"): the lit
// overlays come on tier by tier, bottom to top, then the light lands on the plaster. Once.

const AMBER = "#E2A23A";
const COBALT = "#2E5AA8";
const EMERALD = "#2F8A68";
const RUBY = "#B8303F";
const INK = "#2B1518";

type Pane = { d: string; fill: string };

const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}Z`;
const tri = (a: string, b: string, c: string) => `M${a}L${b}L${c}Z`;
const diamond = (cx: number, cy: number, hw: number, hh: number) =>
  `M${cx} ${cy - hh}L${cx + hw} ${cy}L${cx} ${cy + hh}L${cx - hw} ${cy}Z`;
const star = (cx: number, cy: number, r: number) => {
  const k = 0.71 * r, m = 0.29 * r;
  const pts = [
    [0, -r], [m, -k], [k, -k], [k, -m], [r, 0], [k, m], [k, k], [m, k],
    [0, r], [-m, k], [-k, k], [-k, m], [-r, 0], [-k, -m], [-k, -k], [-m, -k],
  ];
  return "M" + pts.map(([x, y]) => `${(cx + x).toFixed(1)} ${(cy + y).toFixed(1)}`).join("L") + "Z";
};

// Tier 1: base diamonds and the small triangles under them.
const TIER_BASE: Pane[] = [
  { d: diamond(64, 356, 7.5, 11), fill: EMERALD },
  { d: diamond(82, 356, 7.5, 11), fill: RUBY },
  { d: diamond(100, 356, 7.5, 11), fill: AMBER },
  { d: diamond(118, 356, 7.5, 11), fill: RUBY },
  { d: diamond(136, 356, 7.5, 11), fill: EMERALD },
  { d: tri("74 372", "90 372", "82 388"), fill: AMBER },
  { d: tri("92 372", "108 372", "100 388"), fill: COBALT },
  { d: tri("110 372", "126 372", "118 388"), fill: AMBER },
];

// Tier 2: the main pointed-arch panes (centre face and the two foreshortened side faces).
const TIER_MAIN: Pane[] = [
  { d: "M68 238Q68 212 100 196Q132 212 132 238Z", fill: RUBY },
  { d: rect(68, 242, 64, 50), fill: COBALT },
  { d: star(100, 267, 19), fill: AMBER },
  { d: rect(68, 296, 30, 30), fill: EMERALD },
  { d: rect(102, 296, 30, 30), fill: AMBER },
  { d: "M35 250V228Q35 210 46.5 200Q58 210 58 228V250Z", fill: AMBER },
  { d: rect(35, 254, 23, 72), fill: COBALT },
  { d: "M142 250V228Q142 210 153.5 200Q165 210 165 228V250Z", fill: AMBER },
  { d: rect(142, 254, 23, 72), fill: EMERALD },
];
const MAIN_STAR = star(100, 267, 19);

// Tier 3: the upper band.
const TIER_BAND: Pane[] = [
  { d: rect(35, 158, 23, 20), fill: EMERALD },
  { d: rect(66, 158, 20, 20), fill: RUBY },
  { d: rect(90, 158, 20, 20), fill: AMBER },
  { d: rect(114, 158, 20, 20), fill: RUBY },
  { d: rect(142, 158, 23, 20), fill: EMERALD },
];

// Tier 4: crown triangles.
const TIER_CROWN: Pane[] = [
  { d: tri("58 143", "82 143", "70 119"), fill: AMBER },
  { d: tri("73 119", "97 119", "85 143"), fill: COBALT },
  { d: tri("88 143", "112 143", "100 119"), fill: RUBY },
  { d: tri("103 119", "127 119", "115 143"), fill: EMERALD },
  { d: tri("118 143", "142 143", "130 119"), fill: AMBER },
];

function Tier({ panes, n }: { panes: Pane[]; n: number }) {
  return (
    <g className={`tier tier-${n}`}>
      {panes.map((p, i) => (
        <path key={`b${i}`} d={p.d} fill={p.fill} fillOpacity={0.3} />
      ))}
      <g className="lit">
        {panes.map((p, i) => (
          <path key={`l${i}`} d={p.d} fill={p.fill} />
        ))}
      </g>
    </g>
  );
}

export default function Lantern({ className = "" }: { className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tiers = [".tier-1 .lit", ".tier-2 .lit", ".tier-3 .lit", ".tier-4 .lit"];
      const tl = gsap.timeline({ delay: delay.hero });
      tiers.forEach((sel, i) => {
        tl.fromTo(sel, { opacity: 0 }, { opacity: 1, duration: duration.pane, ease: ease.out }, i * stagger.paneTier);
      });
      // The light layer's centre is the lantern body's centre, so 50% 50% is the lantern.
      gsap.fromTo(
        ".lantern-light",
        { opacity: 0, scale: scale.lightFrom, transformOrigin: "50% 50%" },
        { opacity: 1, scale: 1, duration: duration.hero, ease: ease.outStrong, delay: delay.light },
      );
    },
    { scope },
  );

  return (
    <div ref={scope} className={`lantern relative ${className}`}>
      {/* Light field centred on the lantern body (viewBox y 260 of 200 wide, i.e. 1.3x the width
          down): 3.2x the lantern width on phone and tablet, 2.8x from 1024px. */}
      <LanternLight className="pointer-events-none absolute top-0 left-[-110%] -mt-[30%] aspect-square w-[320%] max-w-none lg:left-[-90%] lg:-mt-[10%] lg:w-[280%]" />
      <svg
        className="relative block w-full h-auto"
        viewBox="0 0 200 462"
        aria-hidden="true"
        focusable="false"
      >
        {/* chain from the top edge */}
        <g fill="none" stroke={INK} strokeWidth="2.5">
          {[5, 16, 27, 38, 49, 60].map((cy, i) =>
            i % 2 === 0 ? (
              <ellipse key={cy} cx="100" cy={cy} rx="3.6" ry="7" />
            ) : (
              <path key={cy} d={`M100 ${cy - 7}V${cy + 7}`} strokeWidth="3" />
            ),
          )}
          <circle cx="100" cy="74" r="6" strokeWidth="3" />
        </g>

        {/* iron frame */}
        <g fill={INK}>
          <circle cx="100" cy="87" r="5" />
          <path d="M76 106Q100 82 124 106Z" />
          <path d="M76 104H124L160 150H40Z" />
          <rect x="34" y="148" width="132" height="7" rx="2" />
          <rect x="30" y="154" width="140" height="28" />
          <rect x="24" y="181" width="152" height="8" rx="2" />
          <rect x="30" y="188" width="140" height="144" />
          <rect x="24" y="330" width="152" height="8" rx="2" />
          <path d="M30 337H170L128 394H72Z" />
          <rect x="70" y="392" width="60" height="7" rx="3" />
          <circle cx="100" cy="410" r="11" />
          <path d="M93 418H107L100 452Z" />
          <circle cx="100" cy="455" r="3" />
        </g>

        <Tier panes={TIER_BASE} n={1} />
        <Tier panes={TIER_MAIN} n={2} />
        {/* the star's lead came, always visible over both states */}
        <path d={MAIN_STAR} fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <Tier panes={TIER_BAND} n={3} />
        <Tier panes={TIER_CROWN} n={4} />
      </svg>
    </div>
  );
}
