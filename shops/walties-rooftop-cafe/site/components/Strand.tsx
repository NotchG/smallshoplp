import { useId } from "react";
import { c } from "@/lib/palette";

// A festoon of bulbs slung edge to edge, like the wires over Waltie's terrace.
// Two drawings, swapped by CSS at 768px: desktop 1440×96 (4 swags, 21 bulbs) and
// phone 390×64 (3 swags, 9 bulbs). Each bulb = drop wire + cap + halo + off-glass + lit-glass.
// The hero animates .bulb-lit and .bulb-halo (useLampu); the closing strand is static.

type Geometry = {
  w: number;
  h: number;
  swags: number;
  bulbs: number;
  top: number; // wire height at the hooks
  sag: number; // extra depth at the middle of each swag
  drop: number; // wire to glass centre
  rx: number;
  ry: number;
  halo: number;
};

const DESK: Geometry = { w: 1440, h: 96, swags: 4, bulbs: 21, top: 8, sag: 46, drop: 13, rx: 5.5, ry: 6.5, halo: 22 };
const PHONE: Geometry = { w: 390, h: 64, swags: 3, bulbs: 9, top: 5, sag: 30, drop: 10, rx: 4.6, ry: 5.4, halo: 15 };

function wireY(g: Geometry, x: number) {
  const span = g.w / g.swags;
  const t = (x % span) / span;
  return g.top + 4 * g.sag * t * (1 - t);
}

function Drawing({ g, tone, className }: { g: Geometry; tone: "night" | "brick"; className: string }) {
  const id = useId().replace(/:/g, "");
  const span = g.w / g.swags;
  const wire = tone === "night" ? c.krem : c.malam;
  const wireOpacity = tone === "night" ? 0.42 : 0.55;
  const d = Array.from({ length: g.swags }, (_, i) => {
    const a = i * span;
    return `M${a} ${g.top}Q${a + span / 2} ${g.top + 2 * g.sag} ${a + span} ${g.top}`;
  }).join("");
  const step = g.w / g.bulbs;
  const bulbs = Array.from({ length: g.bulbs }, (_, i) => {
    const x = step / 2 + i * step;
    return { x, y: wireY(g, x) };
  });

  return (
    <svg
      className={`strand ${className}`}
      viewBox={`0 0 ${g.w} ${g.h}`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`halo-${id}`}>
          <stop offset="0" stopColor={c.lampu} stopOpacity="0.6" />
          <stop offset="0.35" stopColor={c.lampu} stopOpacity="0.22" />
          <stop offset="1" stopColor={c.lampu} stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={d} fill="none" stroke={wire} strokeOpacity={wireOpacity} strokeWidth="1.5" />
      {bulbs.map(({ x, y }, i) => {
        const cy = y + g.drop;
        return (
          <g key={i} data-bulb>
            <path d={`M${x} ${y}V${cy - g.ry}`} stroke={wire} strokeOpacity={wireOpacity} strokeWidth="1.2" />
            <circle className="bulb-halo" cx={x} cy={cy} r={g.halo} fill={`url(#halo-${id})`} />
            <ellipse cx={x} cy={cy} rx={g.rx} ry={g.ry} fill={c.krem} fillOpacity="0.35" />
            <ellipse className="bulb-lit" cx={x} cy={cy} rx={g.rx} ry={g.ry} fill={c.lampu} />
            <rect
              x={x - g.rx * 0.5}
              y={cy - g.ry - 2.5}
              width={g.rx}
              height={3.5}
              rx={0.8}
              fill={wire}
              fillOpacity={tone === "night" ? 0.6 : 0.7}
            />
          </g>
        );
      })}
    </svg>
  );
}

export default function Strand({ tone = "night", className = "" }: { tone?: "night" | "brick"; className?: string }) {
  return (
    <div className={className} data-strand>
      <Drawing g={DESK} tone={tone} className="strand-desk" />
      <Drawing g={PHONE} tone={tone} className="strand-phone" />
    </div>
  );
}
