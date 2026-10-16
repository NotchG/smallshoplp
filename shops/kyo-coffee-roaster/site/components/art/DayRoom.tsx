import { c, glass } from "@/components/art/palette";

// Placeholder scene "Siang · ruang dalam": the plywood panel wall with staggered battens
// (photo 1), a tall wood-framed window onto green (photo 2), the concrete bar with a cake
// cloche and dried flowers. Replaced by Kyō's own photo once the owner sends one.
const COLS = [
  { x: 0, w: 60, joints: [150, 262] },
  { x: 62, w: 60, joints: [196, 300] },
  { x: 124, w: 60, joints: [128, 236] },
  { x: 186, w: 58, joints: [178, 286] },
];

export default function DayRoom({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label={label}
      className={className}
    >
      <rect width="400" height="500" fill={c.wall} />

      {/* plywood ceiling and beam */}
      <rect width="400" height="34" fill={c.oak} />
      <rect y="34" width="400" height="5" fill={c.crust} />

      {/* plywood wall: panels split by oak battens, joints staggered per column */}
      <rect y="39" width="246" height="315" fill={c.ply} />
      <path
        d={
          COLS.map((col) => `M${col.x + col.w + 1} 39V354`).join("") +
          COLS.map((col) => col.joints.map((y) => `M${col.x} ${y}H${col.x + col.w}`).join("")).join("")
        }
        stroke={c.oak}
        strokeWidth="3"
      />

      {/* window onto green */}
      <rect x="246" y="39" width="154" height="315" fill={c.leaf} />
      <g fill={c.ink} opacity="0.28">
        <circle cx="300" cy="120" r="46" />
        <circle cx="372" cy="230" r="52" />
        <circle cx="288" cy="300" r="40" />
      </g>
      <g fill={c.wall} opacity="0.1">
        <circle cx="352" cy="96" r="34" />
        <circle cx="310" cy="214" r="30" />
        <circle cx="376" cy="326" r="26" />
      </g>
      <g fill={c.crust}>
        <rect x="246" y="39" width="8" height="315" />
        <rect x="320" y="39" width="5" height="315" />
        <rect x="394" y="39" width="6" height="315" />
        <rect x="254" y="132" width="140" height="5" />
        <rect x="254" y="240" width="140" height="5" />
      </g>

      {/* polished concrete floor */}
      <rect y="354" width="400" height="146" fill={c.concrete} />
      <rect y="354" width="400" height="146" fill={c.ink} opacity="0.14" />

      {/* pendant light */}
      <path d="M150 39V74M292 39V74" stroke={c.ink} strokeWidth="1.5" />
      <rect x="136" y="74" width="170" height="6" fill={c.ink} />

      {/* the bar: concrete counter, top lit from the window */}
      <rect y="346" width="306" height="98" fill={c.concrete} />
      <rect y="338" width="310" height="10" fill={c.concrete} />
      <rect y="338" width="310" height="10" fill={c.wall} opacity="0.4" />

      {/* cake under a glass cloche on a wooden board */}
      <ellipse cx="92" cy="336" rx="46" ry="6" fill={c.crust} />
      <rect x="68" y="312" width="48" height="22" fill={c.crust} />
      <rect x="68" y="312" width="48" height="6" fill={c.ply} />
      <path d="M48 334Q48 268 92 268Q136 268 136 334" fill={c.wall} fillOpacity="0.25" {...glass} />
      <rect x="88" y="261" width="8" height="8" fill={c.crust} />

      {/* dried flowers */}
      <path d="M216 306L204 262M218 306L224 254M220 306L240 270" stroke={c.brew} strokeWidth="1.5" />
      <g fill={c.oak}>
        <circle cx="204" cy="260" r="6" />
        <circle cx="224" cy="252" r="5" />
        <circle cx="241" cy="268" r="6" />
      </g>
      <rect x="208" y="304" width="20" height="34" fill={c.wall} />

      {/* black stool */}
      <rect x="236" y="384" width="56" height="9" fill={c.ink} />
      <path d="M244 393L240 470M284 393L288 470M242 440H286" stroke={c.ink} strokeWidth="4" />
    </svg>
  );
}
