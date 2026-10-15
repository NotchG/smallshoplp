// A static string of terrace lights hanging in a gentle catenary. Never animates.
// 7 bulbs on phone, 11 from 768px up. Decorative.

function Strand({ width, height, sag, bulbs, size, wire, className }: {
  width: number;
  height: number;
  sag: number;
  bulbs: number;
  size: number;
  wire: string;
  className: string;
}) {
  const p0 = { x: 0, y: 4 };
  const p2 = { x: width, y: 4 };
  const p1 = { x: width / 2, y: 4 + sag * 2 }; // quadratic control: lowest point = 4 + sag
  const at = (t: number) => ({
    x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x,
    y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y,
  });
  const points = Array.from({ length: bulbs }, (_, i) => at((i + 1) / (bulbs + 1)));
  const socketW = size * 0.7;
  const socketH = size * 0.75;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`block w-full h-auto ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`M${p0.x} ${p0.y} Q${p1.x} ${p1.y} ${p2.x} ${p2.y}`}
        fill="none"
        stroke={wire}
        strokeWidth={size * 0.22}
      />
      {points.map((p, i) => (
        <g key={i}>
          <rect
            x={p.x - socketW / 2}
            y={p.y}
            width={socketW}
            height={socketH}
            rx={size * 0.12}
            fill={wire}
          />
          <ellipse
            cx={p.x}
            cy={p.y + socketH + size * 0.62}
            rx={size * 0.6}
            ry={size * 0.78}
            fill="var(--color-lampu)"
          />
        </g>
      ))}
    </svg>
  );
}

// On light grounds the wire is jendela; on dark fields it is a muted kanopi so it stays visible.
export default function StringLights({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const wire = dark ? "rgb(229 216 184 / 0.45)" : "var(--color-jendela)";
  return (
    <div className={className}>
      <Strand width={390} height={40} sag={14} bulbs={7} size={9} wire={wire} className="md:hidden" />
      <Strand width={1440} height={74} sag={30} bulbs={11} size={13} wire={wire} className="hidden md:block" />
    </div>
  );
}
