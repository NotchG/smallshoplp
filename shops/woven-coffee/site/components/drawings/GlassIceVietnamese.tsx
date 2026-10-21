// Flat front elevation of an Ice Vietnamese: a phin filter resting on a straight tumbler,
// coffee over condensed milk, three ice cubes. Exact geometry, no shading or perspective,
// strokes ≤ 2px, four fills (logam, kopi, susu, dinding).
const ink = "var(--color-kaca)";
const wall = "var(--color-dinding)";
const metal = "var(--color-logam)";
const coffee = "var(--color-kopi)";
const milk = "var(--color-susu)";

function Cube({ x, y, s, r }: { x: number; y: number; s: number; r: number }) {
  return (
    <rect
      x={x}
      y={y}
      width={s}
      height={s}
      rx="3"
      transform={`rotate(${r} ${x + s / 2} ${y + s / 2})`}
      style={{ fill: wall, stroke: ink }}
      strokeWidth="1.5"
    />
  );
}

export default function GlassIceVietnamese({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 180 400"
      width="180"
      height="400"
      role="img"
      aria-label={label}
      className={className}
      focusable="false"
    >
      {/* Liquid: kopi over susu, with the drip from the phin */}
      <rect x="35" y="150" width="110" height="150" style={{ fill: coffee }} />
      <rect x="35" y="300" width="110" height="80" style={{ fill: milk }} />
      <rect x="88.5" y="103" width="3" height="48" style={{ fill: coffee }} />

      {/* Ice */}
      <Cube x={44} y={132} s={34} r={-8} />
      <Cube x={100} y={138} s={32} r={10} />
      <Cube x={66} y={176} s={30} r={4} />

      {/* Tumbler: straight sides, open top under the phin plate, thick base */}
      <path d="M34 102 V388 Q34 396 42 396 H138 Q146 396 146 388 V102" fill="none" style={{ stroke: ink }} strokeWidth="2" />
      <line x1="34" y1="380" x2="146" y2="380" style={{ stroke: ink }} strokeWidth="1.5" />

      {/* Phin: plate, chamber, lid, knob */}
      <rect x="22" y="92" width="136" height="10" rx="2" style={{ fill: metal, stroke: ink }} strokeWidth="2" />
      <path d="M62 30 H118 L114 92 H66 Z" style={{ fill: metal, stroke: ink }} strokeWidth="2" />
      <rect x="56" y="18" width="68" height="13" rx="3" style={{ fill: metal, stroke: ink }} strokeWidth="2" />
      <rect x="82" y="6" width="16" height="12" rx="2" style={{ fill: metal, stroke: ink }} strokeWidth="2" />
    </svg>
  );
}
