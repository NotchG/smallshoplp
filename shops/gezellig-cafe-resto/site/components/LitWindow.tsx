"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, lights, prefersReducedMotion } from "@/lib/motion";
import { paint as p } from "@/lib/paint";

// Gezellig's steel window at night: a lamp-lit Dutch room behind black steel glazing.
// Signature moment ("lampu menyala"): the night glass clears and the five tulip shades light
// from the centre outward. Default markup is the lit end state (no JS, reduced motion).

const SHADES = [296, 348, 400, 452, 504];
const CUP = "M0 0C-9 0-15-8-15-22v-12l7.5 5L0-35l7.5 6 7.5-5v12C15-8 9 0 0 0Z";
const TULIP = "M0 0C-7 0-11-6-11-15v-9l5.5 5L0-25l5.5 6 5.5-5v9C11-6 7 0 0 0Z";
const TULIPS: [number, number][] = [
  [372, 300],
  [388, 286],
  [405, 279],
  [421, 290],
  [436, 302],
];
const TUFTS = Array.from({ length: 8 }, (_, i) => 98 + i * 18);

export default function LitWindow({ label }: { label: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const glass = scope.current?.querySelector("[data-glass]");
      const halos = gsap.utils.toArray<SVGGElement>("[data-halo]");
      if (!glass || !halos.length) return;
      const tl = gsap.timeline();
      tl.fromTo(
        glass,
        { opacity: lights.glassFrom },
        { opacity: 0, duration: duration.hero, ease: ease.out },
        lights.delay,
      );
      tl.fromTo(
        halos,
        { opacity: 0, scale: lights.haloScaleFrom, transformOrigin: "50% 50%" },
        {
          opacity: 1,
          scale: 1,
          duration: lights.halo,
          ease: ease.outStrong,
          stagger: { each: lights.stagger, from: "center" },
        },
        lights.haloStart,
      );
    },
    { scope },
  );

  return (
    <div ref={scope} className="relative">
      <div
        role="img"
        aria-label={label}
        className="steel-frame relative aspect-[4/3] overflow-hidden lg:aspect-[16/10]"
        style={{ background: p.hijau }}
      >
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden
          focusable={false}
        >
          <defs>
            <path id="lw-cup" d={CUP} />
            <path id="lw-tulip" d={TULIP} />
            <radialGradient id="lw-halo">
              <stop offset="0" stopColor={p.lampu} stopOpacity=".8" />
              <stop offset=".38" stopColor={p.lampu} stopOpacity=".34" />
              <stop offset="1" stopColor={p.lampu} stopOpacity="0" />
            </radialGradient>
            <g id="lw-plate">
              <circle r="34" fill={p.kapur} />
              <circle r="29" fill="none" stroke={p.delft} strokeWidth="3" />
              <circle r="11" fill="none" stroke={p.delft} strokeWidth="2" />
              <circle r="4" fill={p.delft} />
              {Array.from({ length: 8 }, (_, i) => {
                const a = (i * Math.PI) / 4;
                return (
                  <circle key={i} cx={(Math.cos(a) * 19.5).toFixed(1)} cy={(Math.sin(a) * 19.5).toFixed(1)} r="2.6" fill={p.delft} />
                );
              })}
            </g>
            <clipPath id="lw-vase">
              <path d="M384 398c-8-18-8-42 6-52v-8h20v8c14 10 14 34 6 52Z" />
            </clipPath>
          </defs>

          {/* Room: green walls, beam, wainscot, floor and rug */}
          <rect width="800" height="500" fill={p.hijau} />
          <rect width="800" height="30" fill={p.hijauDeep} />
          <rect y="30" width="800" height="6" fill={p.teakDark} />
          <rect y="350" width="800" height="120" fill={p.hijauDeep} />
          <rect y="346" width="800" height="6" fill={p.teak} />
          <g fill="none" stroke={p.hijauPanel} strokeWidth="2">
            {[16, 176, 336, 496, 656].map((x) => (
              <rect key={x} x={x} y="368" width="128" height="80" />
            ))}
          </g>
          <rect y="466" width="800" height="34" fill={p.teakDark} />
          <rect x="150" y="471" width="500" height="29" fill={p.rug} />
          <rect x="160" y="477" width="480" height="1.5" fill={p.lampu} opacity=".55" />

          {/* Painting: a flat Dutch landscape in a brass frame */}
          <rect x="92" y="146" width="168" height="150" fill={p.brass} />
          <rect x="102" y="156" width="148" height="130" fill={p.delftLight} />
          <rect x="102" y="232" width="148" height="54" fill={p.leaf} />
          <rect x="102" y="228" width="148" height="6" fill={p.leafDark} />
          <path d="M102 262 250 252v8l-148 12Z" fill={p.delft} />
          <rect x="118" y="178" width="56" height="10" rx="5" fill={p.kapur} opacity=".85" />
          <rect x="168" y="194" width="44" height="8" rx="4" fill={p.kapur} opacity=".7" />

          {/* Delft plates on the wall */}
          <path d="M620 136v6M690 192v6" stroke={p.brass} strokeWidth="2" />
          <use href="#lw-plate" transform="translate(620 178)" />
          <use href="#lw-plate" transform="translate(690 230) scale(.72)" />

          {/* Chandelier: brass hub, five arms, tulip-glass shades (unlit) */}
          <g fill={p.brass}>
            <rect x="394" y="30" width="12" height="6" />
            <rect x="398.8" y="36" width="2.4" height="60" />
            <circle cx="400" cy="104" r="10" />
            <rect x="398" y="112" width="4" height="46" />
            {SHADES.map((x) => (
              <ellipse key={x} cx={x} cy="158" rx="11" ry="3.5" />
            ))}
          </g>
          <g fill="none" stroke={p.brass} strokeWidth="3" strokeLinecap="round">
            {SHADES.filter((x) => x !== 400).map((x) => (
              <path key={x} d={`M400 110Q${x} 196 ${x} 158`} />
            ))}
          </g>
          {SHADES.map((x) => (
            <use key={x} href="#lw-cup" x={x} y="156" fill={p.glassUnlit} />
          ))}

          {/* Chesterfield */}
          <rect x="84" y="372" width="166" height="46" rx="6" fill={p.leather} />
          <g fill={p.leatherDark}>
            {TUFTS.map((x) => (
              <circle key={x} cx={x} cy="388" r="1.8" />
            ))}
            {TUFTS.slice(0, 7).map((x) => (
              <circle key={x} cx={x + 9} cy="402" r="1.8" />
            ))}
            <rect x="70" y="392" width="30" height="68" rx="14" />
            <rect x="234" y="392" width="30" height="68" rx="14" />
          </g>
          <rect x="96" y="416" width="142" height="38" rx="4" fill={p.leather} />
          <rect x="82" y="458" width="6" height="10" fill={p.besi} />
          <rect x="246" y="458" width="6" height="10" fill={p.besi} />

          {/* Sideboard, Delft vase and red tulips */}
          <g stroke={p.leaf} strokeWidth="2.5" fill="none" strokeLinecap="round">
            {TULIPS.map(([x, y]) => (
              <path key={x} d={`M400 340Q${(400 + x) / 2} ${y + 20} ${x} ${y}`} />
            ))}
          </g>
          <path d="M398 342c-14-10-26-28-28-44 10 12 20 24 28 40ZM402 342c14-10 24-26 26-40-10 12-18 22-26 36Z" fill={p.leaf2} />
          {TULIPS.map(([x, y]) => (
            <use key={x} href="#lw-tulip" x={x} y={y} fill={p.tulp} />
          ))}
          <path d="M384 398c-8-18-8-42 6-52v-8h20v8c14 10 14 34 6 52Z" fill={p.kapur} />
          <g clipPath="url(#lw-vase)" fill={p.delft}>
            <rect x="370" y="350" width="60" height="4" />
            <rect x="370" y="388" width="60" height="4" />
            <circle cx="400" cy="371" r="7" fill="none" stroke={p.delft} strokeWidth="2" />
            <circle cx="400" cy="371" r="2.4" />
          </g>
          <rect x="318" y="398" width="164" height="8" fill={p.teak} />
          <rect x="326" y="406" width="148" height="52" fill={p.teakDark} />
          <rect x="326" y="430" width="148" height="2" fill={p.teak} />
          <circle cx="362" cy="419" r="2.5" fill={p.brass} />
          <circle cx="438" cy="419" r="2.5" fill={p.brass} />
          <rect x="332" y="458" width="6" height="12" fill={p.besi} />
          <rect x="462" y="458" width="6" height="12" fill={p.besi} />

          {/* Teak pedestal table and a cane-back chair */}
          <rect x="548" y="358" width="52" height="60" rx="24" fill={p.teak} />
          <rect x="555" y="365" width="38" height="40" rx="17" fill={p.cane} />
          <rect x="544" y="418" width="62" height="8" fill={p.teak} />
          <rect x="549" y="426" width="5" height="42" fill={p.teak} />
          <rect x="596" y="426" width="5" height="42" fill={p.teak} />
          <rect x="606" y="402" width="170" height="10" rx="3" fill={p.teak} />
          <path d="M678 412h26l6 46h-38Z" fill={p.teak} />
          <path d="M686 414v42M696 414v42" stroke={p.teakDark} strokeWidth="2" />
          <rect x="660" y="456" width="62" height="8" fill={p.teakDark} />

          {/* Night glass: clears on load */}
          <rect data-glass width="800" height="500" fill={p.night} opacity="0" />

          {/* Lamplight: one halo per shade, above the glass so the lamps glow through it */}
          {SHADES.map((x) => (
            <g key={x} data-halo>
              <circle cx={x} cy="138" r="62" fill="url(#lw-halo)" />
              <use href="#lw-cup" x={x} y="156" fill={p.glassLit} />
              <ellipse cx={x} cy="121" rx="4.5" ry="7" fill={p.bulb} />
            </g>
          ))}
        </svg>

        {/* Steel glazing bars: 3 × 2 panes, 2px, drawn over the glass */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden focusable={false}>
          <g stroke={p.besi} strokeWidth="2">
            <line x1="33.333%" y1="0" x2="33.333%" y2="100%" />
            <line x1="66.667%" y1="0" x2="66.667%" y2="100%" />
            <line x1="0" y1="50%" x2="100%" y2="50%" />
          </g>
        </svg>
      </div>
    </div>
  );
}
