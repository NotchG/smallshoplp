import { c } from "@/components/art/palette";
import Plate from "@/components/art/Plate";

// Pecan tart (review 5): a whole round tart, a ring of pecan halves, on the stoneware plate.
const CX = 160;
const CY = 120;

function pecans() {
  const out: { x: number; y: number; r: number }[] = [];
  const ring = 11;
  for (let i = 0; i < ring; i++) {
    const a = (i / ring) * Math.PI * 2 + 0.2;
    out.push({
      x: +(CX + 64 * Math.cos(a)).toFixed(1),
      y: +(CY + 31 * Math.sin(a)).toFixed(1),
      r: +(((a * 180) / Math.PI + 90) % 180).toFixed(0),
    });
  }
  out.push({ x: CX - 22, y: CY - 4, r: 20 }, { x: CX + 20, y: CY + 3, r: -25 }, { x: CX, y: CY - 14, r: 80 });
  return out;
}

function scallops(rx: number, ry: number, cy: number, n: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    pts.push([+(CX + rx * Math.cos(a)).toFixed(1), +(cy + ry * Math.sin(a)).toFixed(1)]);
  }
  return pts;
}

export default function PecanTart({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 44 320 192" role="img" aria-label={label} className={className}>
      <Plate cx={CX} cy={136} rx={152} ry={86} seed={11} />

      {/* tart side and fluted edge */}
      <ellipse cx={CX} cy={CY + 12} rx="104" ry="54" fill={c.crust} />
      <ellipse cx={CX} cy={CY + 12} rx="104" ry="54" fill={c.ink} opacity="0.18" />
      <path
        d={scallops(101, 51, CY, 30)
          .map(([x, y]) => `M${x - 6.5} ${y}a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0`)
          .join("")}
        fill={c.ply}
      />
      <ellipse cx={CX} cy={CY} rx="101" ry="51" fill={c.ply} />

      {/* filling */}
      <ellipse cx={CX} cy={CY + 1} rx="86" ry="42" fill={c.brew} />
      <ellipse cx={CX - 28} cy={CY - 22} rx="30" ry="6" fill={c.wall} opacity="0.12" />

      {/* pecan halves */}
      {pecans().map((p) => (
        <g key={`${p.x}-${p.y}`} transform={`translate(${p.x} ${p.y}) rotate(${p.r})`}>
          <ellipse rx="12" ry="6.5" fill={c.crust} />
          <path d="M-8 0H8" stroke={c.brew} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}
