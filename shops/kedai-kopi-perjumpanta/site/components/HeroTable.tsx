import { BandrekParts } from "@/components/Art";

// The hero's white-topped trestle table with the glass of Bandrek Susu on its lime saucer.
// The glass, saucer and steam groups carry data hooks for the "served" timeline in Hero.
export const GLASS_SCALE = 2.2; // the 120-unit bandrek drawing, scaled into this 520×380 scene

const tinta = "#1D1B16";
const kain = "#F6F5EF";
const kayu = "#6B4A30";
const line = {
  stroke: tinta,
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

function Trestle({ x }: { x: number }) {
  return (
    <g fill={kayu} {...line}>
      <path d={`M${x - 8} 320 L${x + 4} 320 L${x - 20} 380 L${x - 32} 380 Z`} />
      <path d={`M${x - 4} 320 L${x + 8} 320 L${x + 32} 380 L${x + 20} 380 Z`} />
      <rect x={x - 22} y={349} width={44} height={7} />
    </g>
  );
}

export default function HeroTable({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 520 380" preserveAspectRatio="xMaxYMax meet" role="img" aria-label={label}>
      <Trestle x={74} />
      <Trestle x={446} />
      {/* table top, running off the right edge */}
      <path d="M30 244 L640 244 L640 304 L4 304 Z" fill={kain} {...line} />
      <rect x="4" y="304" width="636" height="16" fill={kain} {...line} />
      {/* soft contact shadow under the saucer */}
      <ellipse cx="220" cy="297" rx="100" ry="12" fill={tinta} opacity={0.12} />
      <g transform={`translate(88 40) scale(${GLASS_SCALE})`}>
        <BandrekParts animated />
      </g>
    </svg>
  );
}
