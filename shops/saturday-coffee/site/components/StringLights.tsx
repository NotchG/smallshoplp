import type { CSSProperties } from "react";
import { duration } from "@/lib/motion";

// Signature moment, "lampu menyala": festoon lights over the courtyard switch on bulb by bulb,
// left to right, once (CSS keyframes, no JS). Reduced motion: lights are simply on.
// viewBox 1440×140, three swags, twelve bulbs.
const W = 1440;
const SWAGS = 3;
const SPAN = W / SWAGS;
const TOP = 8;
const SAG = 120; // control point depth

// y on a swag at parameter t (quadratic, control point mid-span)
const yAt = (t: number) => TOP + 2 * (SAG - TOP) * t * (1 - t);

const bulbs = Array.from({ length: SWAGS * 4 }, (_, i) => {
  const s = Math.floor(i / 4);
  const t = [0.14, 0.38, 0.62, 0.86][i % 4];
  return { x: s * SPAN + t * SPAN, y: yAt(t), i };
});

export default function StringLights() {
  return (
    <svg
      className="lights"
      viewBox={`0 0 ${W} 140`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      focusable="false"
      style={{ "--bulb-dur": `${duration.bulb}s` } as CSSProperties}
    >
      <defs>
        <radialGradient id="bulb-halo">
          <stop offset="0" stopColor="#F2BD5E" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#F2BD5E" stopOpacity="0.18" />
          <stop offset="1" stopColor="#F2BD5E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d={Array.from({ length: SWAGS }, (_, s) => {
          const x0 = s * SPAN;
          return `M${x0} ${TOP}Q${x0 + SPAN / 2} ${SAG} ${x0 + SPAN} ${TOP}`;
        }).join("")}
        fill="none"
        stroke="#C5C2B9"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      {bulbs.map(({ x, y, i }) => (
        <g key={i} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
          <path d="M0 0v6" stroke="#C5C2B9" strokeOpacity="0.45" strokeWidth="1.5" />
          <rect x="-4.5" y="5" width="9" height="9" rx="1.5" fill="#5A6066" />
          {/* unlit glass */}
          <ellipse cx="0" cy="24" rx="8.5" ry="10.5" fill="#5A6066" fillOpacity="0.55" />
          {/* glow: switches on */}
          <g
            className="bulb-glow"
            style={{
              animationDelay: `${Math.round((duration.bulbStart + i * duration.bulbStagger) * 1000)}ms`,
            }}
          >
            <circle className="bulb-halo" cx="0" cy="24" r="34" fill="url(#bulb-halo)" />
            <ellipse cx="0" cy="24" rx="8.5" ry="10.5" fill="#F2BD5E" />
            <ellipse cx="-2.6" cy="21" rx="2.4" ry="4" fill="#FBE3B0" />
          </g>
        </g>
      ))}
    </svg>
  );
}
