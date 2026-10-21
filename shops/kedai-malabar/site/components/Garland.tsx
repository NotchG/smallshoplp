// String lights across the top of the page, like the wires over the kedai's roof (owner photo).
// One SVG, 3 swags, 18 bulbs. Each bulb: dim glass + a lit layer (glow + core).
// Bulbs are lit in markup; the hero animates them on (see HeroNight).

const W = 1440;
const H = 80;
const TOP = 6; // wire anchor height
const LOW = 40; // lowest point of each swag
const SWAGS = 3;
const PER_SWAG = 6;
const CTRL = 2 * LOW - TOP; // quadratic control point so the midpoint sits at LOW
const swagW = W / SWAGS;

const C = {
  wire: "#4a4541", // arang mixed with kapur
  socket: "#3b3733",
  dim: "#3a2b20", // arang mixed with terakota: an unlit bulb
  dimEdge: "#5c4a3a",
  lampu: "#f4b740",
  kapur: "#f7f6f2",
};

const r1 = (n: number) => Math.round(n * 10) / 10;

const swags = Array.from({ length: SWAGS }, (_, i) => {
  const x0 = i * swagW;
  return `M${x0} ${TOP}Q${x0 + swagW / 2} ${CTRL} ${x0 + swagW} ${TOP}`;
});

const bulbs = Array.from({ length: SWAGS * PER_SWAG }, (_, k) => {
  const i = Math.floor(k / PER_SWAG);
  const j = k % PER_SWAG;
  const t = (2 * j + 1) / (2 * PER_SWAG);
  const x = i * swagW + t * swagW;
  const y = (1 - t) ** 2 * TOP + 2 * (1 - t) * t * CTRL + t ** 2 * TOP;
  return { x: r1(x), y: r1(y) };
});

export default function Garland({
  id,
  animated = false,
  className = "",
}: {
  id: string;
  animated?: boolean;
  className?: string;
}) {
  const glow = `${id}-glow`;
  return (
    <svg
      className={`garland ${animated ? "garland--animated" : ""} ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      data-garland=""
    >
      <defs>
        <radialGradient id={glow}>
          <stop offset="0" stopColor={C.lampu} stopOpacity="0.6" />
          <stop offset="0.35" stopColor={C.lampu} stopOpacity="0.2" />
          <stop offset="1" stopColor={C.lampu} stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="none" stroke={C.wire} strokeWidth="1.5">
        {swags.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {bulbs.map(({ x, y }) => {
        const cy = r1(y + 17);
        return (
          <g key={`${x}`} className="bulb">
            <path d={`M${x} ${y}v7`} stroke={C.wire} strokeWidth="1.2" />
            <rect x={x - 3} y={r1(y + 6)} width="6" height="5" rx="1" fill={C.socket} />
            <ellipse cx={x} cy={cy} rx="5" ry="6.5" fill={C.dim} stroke={C.dimEdge} strokeWidth="1" />
            <g className="bulb-on">
              <circle cx={x} cy={cy} r="22" fill={`url(#${glow})`} />
              <ellipse className="bulb-core" cx={x} cy={cy} rx="5" ry="6.5" fill={C.lampu} />
              <ellipse cx={r1(x - 1.6)} cy={r1(cy - 2)} rx="1.5" ry="2.3" fill={C.kapur} opacity="0.75" />
            </g>
          </g>
        );
      })}
    </svg>
  );
}
