import type { PieceId } from "@/content";
import { c, line } from "@/lib/palette";

// The six baklava pieces seen in Mardin's trays, drawn flat, top-down, at one scale,
// in a 100×100 box. PieceShape is a <g> so boxes and trays can reuse it inside their own SVG.

function spiral(cx: number, cy: number, r0: number, r1: number, turns: number) {
  const steps = Math.round(turns * 24);
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2 - Math.PI / 2;
    const r = r0 + (r1 - r0) * t;
    const x = (cx + r * Math.cos(a)).toFixed(2);
    const y = (cy + r * Math.sin(a)).toFixed(2);
    d += `${i === 0 ? "M" : "L"}${x} ${y} `;
  }
  return d.trim();
}

const NEST_SPIRAL = spiral(50, 50, 17, 31, 1.6);

export function PieceShape({ kind }: { kind: PieceId }) {
  switch (kind) {
    case "fistikli":
      return (
        <g>
          <rect x="15" y="15" width="70" height="70" rx="5" fill={c.syrup} {...line} />
          <rect x="22" y="22" width="56" height="56" rx="3" fill="none" {...line} />
          <path
            d="M50 36c6 0 9 3 11 6 3 1 5 4 4 8 1 4-1 8-5 9-2 4-6 5-10 5s-8-1-10-5c-4-1-6-5-5-9-1-4 1-7 4-8 2-3 5-6 11-6z"
            fill={c.pistachio}
            {...line}
          />
        </g>
      );
    case "havuc":
      return (
        <g>
          <path d="M50 10 L86 79 Q50 95 14 79 Z" fill={c.syrup} {...line} />
          <path d="M14 79 Q50 95 86 79 L79 66 Q50 80 21 66 Z" fill={c.pistachio} {...line} />
          <path d="M50 22 L30 62 M50 22 L70 62" fill="none" {...line} />
        </g>
      );
    case "fistikSarma":
      return (
        <g>
          <rect x="10" y="33" width="80" height="34" rx="17" fill={c.syrup} {...line} />
          <path d="M38 35 Q34 50 38 65 M50 34 Q46 50 50 66 M62 35 Q58 50 62 65" fill="none" {...line} />
          <ellipse cx="22" cy="50" rx="8" ry="13" fill={c.pistachio} {...line} />
          <ellipse cx="78" cy="50" rx="8" ry="13" fill={c.pistachio} {...line} />
        </g>
      );
    case "cevizSarma":
      return (
        <g>
          <rect x="10" y="33" width="80" height="34" rx="17" fill={c.filo} {...line} />
          <path d="M38 35 Q34 50 38 65 M50 34 Q46 50 50 66 M62 35 Q58 50 62 65" fill="none" {...line} />
          <ellipse cx="22" cy="50" rx="8" ry="13" fill={c.kraft} {...line} />
          <ellipse cx="78" cy="50" rx="8" ry="13" fill={c.kraft} {...line} />
          <path d="M19 45 q3 3 0 5 q-3 3 1 6 M75 45 q3 3 0 5 q-3 3 1 6" fill="none" {...line} />
        </g>
      );
    case "bulbul":
      return (
        <g>
          <circle cx="50" cy="50" r="35" fill={c.syrup} {...line} />
          <path d={NEST_SPIRAL} fill="none" {...line} />
          <circle cx="50" cy="50" r="13" fill={c.pistachio} {...line} />
        </g>
      );
    case "cikolata":
      return (
        <g>
          <rect x="15" y="15" width="70" height="70" rx="5" fill={c.room} {...line} />
          <path d="M15 44 Q32 40 50 43 T85 41 L85 57 Q68 61 50 58 T15 60 Z" fill={c.pistachio} {...line} />
          <path d="M22 28 H78 M22 72 H78" fill="none" {...line} stroke={c.kraft} />
        </g>
      );
  }
}

export default function Piece({
  kind,
  label,
  className = "",
}: {
  kind: PieceId;
  label?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <PieceShape kind={kind} />
    </svg>
  );
}
