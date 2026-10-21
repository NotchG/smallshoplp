import type { PieceId } from "@/content";
import { c, line } from "@/lib/palette";
import { PieceShape } from "./Piece";

// Takeaway boxes seen from above, holding the same Piece drawings: a 2×3 box, a 3×4 box,
// and a round 1 kg tray cut in squares.

const MIX: PieceId[] = ["fistikli", "havuc", "cikolata", "bulbul", "fistikSarma", "cevizSarma"];
const MIX12: PieceId[] = [
  "fistikli", "havuc", "cikolata", "bulbul",
  "fistikSarma", "cevizSarma", "fistikli", "havuc",
  "cikolata", "bulbul", "fistikli", "fistikSarma",
];

function Box({ cols, rows, cell, order }: { cols: number; rows: number; cell: number; order: PieceId[] }) {
  const pad = 14;
  const gap = 4;
  const w = pad * 2 + cols * cell + (cols - 1) * gap;
  const h = pad * 2 + rows * cell + (rows - 1) * gap;
  return { w, h, body: (
    <g>
      <rect x="0.75" y="0.75" width={w - 1.5} height={h - 1.5} rx="4" fill={c.filo} {...line} />
      <rect x="7" y="7" width={w - 14} height={h - 14} rx="2" fill="none" {...line} />
      {order.slice(0, cols * rows).map((kind, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = pad + col * (cell + gap);
        const y = pad + row * (cell + gap);
        return (
          <g key={i} transform={`translate(${x} ${y}) scale(${cell / 100})`}>
            <PieceShape kind={kind} />
          </g>
        );
      })}
    </g>
  ) };
}

function Tray() {
  const R = 118;
  const cx = R + 1;
  const cy = R + 1;
  const inner = 98;
  const size = 26;
  const squares: { x: number; y: number }[] = [];
  for (let y = cy - inner; y < cy + inner; y += size) {
    for (let x = cx - inner; x < cx + inner; x += size) squares.push({ x, y });
  }
  return { w: R * 2 + 2, h: R * 2 + 2, body: (
    <g>
      <defs>
        <clipPath id="tray-clip">
          <circle cx={cx} cy={cy} r={inner} />
        </clipPath>
      </defs>
      <circle cx={cx} cy={cy} r={R} fill={c.filo} {...line} />
      <circle cx={cx} cy={cy} r={R - 10} fill="none" {...line} />
      <g clipPath="url(#tray-clip)">
        <circle cx={cx} cy={cy} r={inner} fill={c.syrup} />
        {squares.map((s, i) => (
          <g key={i}>
            <rect x={s.x} y={s.y} width={size} height={size} fill={c.syrup} {...line} />
            <circle cx={s.x + size / 2} cy={s.y + size / 2} r={4.5} fill={c.pistachio} {...line} />
          </g>
        ))}
      </g>
      <circle cx={cx} cy={cy} r={inner} fill="none" {...line} />
    </g>
  ) };
}

export default function BoxArt({
  kind,
  label,
  className = "",
}: {
  kind: "box6" | "box12" | "tray";
  label: string;
  className?: string;
}) {
  const art =
    kind === "box6"
      ? Box({ cols: 3, rows: 2, cell: 62, order: MIX })
      : kind === "box12"
        ? Box({ cols: 4, rows: 3, cell: 50, order: MIX12 })
        : Tray();
  return (
    <svg viewBox={`0 0 ${art.w} ${art.h}`} className={className} role="img" aria-label={label}>
      {art.body}
    </svg>
  );
}
