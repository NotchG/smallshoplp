// The outdoor canopy's string lights: one static catenary with nine Edison bulbs.
// 600×96 viewBox, scales with the pane. Decorative.
const W = 600;
const SAG = 136; // y = 6 + SAG·t(1−t) for the quadratic M0 6 Q300 74 600 6

export default function StringLights({ className = "" }: { className?: string }) {
  const bulbs = Array.from({ length: 9 }, (_, i) => {
    const t = (i + 1) / 10;
    return { x: W * t, y: 6 + SAG * t * (1 - t) };
  });
  return (
    <svg
      className={`string-lights ${className}`}
      viewBox="0 0 600 96"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMin meet"
    >
      <path className="lamp-wire" d="M0 6 Q300 74 600 6" />
      {bulbs.map((b) => (
        <g key={b.x}>
          <line className="lamp-wire" x1={b.x} y1={b.y} x2={b.x} y2={b.y + 9} />
          <rect className="lamp-cap" x={b.x - 4} y={b.y + 8} width="8" height="7" />
          <ellipse fill="var(--color-emas)" cx={b.x} cy={b.y + 24} rx="7" ry="10" />
        </g>
      ))}
    </svg>
  );
}
