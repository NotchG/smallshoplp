import type { DishArtKind } from "@/content";

// Flat placeholder drawings for dishes the owner hasn't photographed yet (design brief §6).
// 1:1 artboard; circles, triangles and rounded rectangles only; flat fills.
const PLATE_RIM = "#BDBBB5";
const PLATE = "#A5A39D";

const CHIPS = [
  { points: "38.4,20.4 46.6,42.9 23.0,38.7", fill: "#E3A33B" },
  { points: "46.4,16.0 65.2,29.2 44.4,38.9", fill: "#D18E2A" },
  { points: "38.9,41.4 34.7,65.0 16.4,49.6", fill: "#D18E2A" },
  { points: "59.9,42.3 42.3,59.9 35.8,35.8", fill: "#E3A33B" },
  { points: "65.3,29.7 71.0,51.0 49.7,45.3", fill: "#E3A33B" },
  { points: "37.7,52.9 52.5,70.5 29.8,74.5", fill: "#E3A33B" },
  { points: "66.4,50.7 57.1,70.7 44.5,52.6", fill: "#D18E2A" },
  { points: "17.2,32.6 36.9,36.1 24.0,51.4", fill: "#E3A33B" },
  { points: "81.4,32.0 62.6,38.8 66.1,19.1", fill: "#D18E2A" },
];

function Plate() {
  return (
    <>
      <circle cx={50} cy={50} r={46} fill={PLATE_RIM} />
      <circle cx={50} cy={50} r={37} fill={PLATE} />
    </>
  );
}

function Nachos() {
  return (
    <>
      <Plate />
      {CHIPS.map((c) => (
        <polygon key={c.points} points={c.points} fill={c.fill} strokeLinejoin="round" stroke={c.fill} strokeWidth={1.5} />
      ))}
      <circle cx={68} cy={67} r={13} fill={PLATE_RIM} />
      <circle cx={68} cy={67} r={9.5} fill="#F4E7C5" />
    </>
  );
}

function Chicken() {
  return (
    <>
      <Plate />
      <circle cx={36} cy={43} r={16} fill="#FAF7EF" />
      <rect x={-12} y={-8} width={24} height={16} rx={7} fill="#C9792E" transform="translate(61 36) rotate(-18)" />
      <rect x={-12} y={-8} width={24} height={16} rx={7} fill="#C9792E" transform="translate(66 56) rotate(22)" />
      <rect x={-12} y={-8} width={24} height={16} rx={7} fill="#C9792E" transform="translate(46 66) rotate(-30)" />
      <circle cx={58} cy={34} r={3.5} fill="#F4E7C5" />
      <circle cx={69} cy={57} r={4} fill="#F4E7C5" />
      <circle cx={43} cy={68} r={3.2} fill="#F4E7C5" />
      <circle cx={54} cy={49} r={3} fill="#F4E7C5" />
      <ellipse cx={29} cy={62} rx={5.5} ry={2.8} fill="#5E7F3A" transform="rotate(-35 29 62)" />
      <ellipse cx={36} cy={66} rx={5} ry={2.6} fill="#5E7F3A" transform="rotate(20 36 66)" />
    </>
  );
}

function Kopi() {
  return (
    <>
      <defs>
        <clipPath id="kopi-glass">
          <rect x={30} y={14} width={40} height={76} rx={4} />
        </clipPath>
      </defs>
      <g clipPath="url(#kopi-glass)">
        <rect x={30} y={32} width={40} height={58} fill="#C8A07A" />
        <rect x={30} y={72} width={40} height={18} fill="#5B3A1F" />
        <rect x={-6} y={-6} width={13} height={13} rx={3} className="fill-beton" fillOpacity={0.7} transform="translate(40 36) rotate(12)" />
        <rect x={-6} y={-6} width={13} height={13} rx={3} className="fill-beton" fillOpacity={0.7} transform="translate(56 40) rotate(-14)" />
        <rect x={-6} y={-6} width={12} height={12} rx={3} className="fill-beton" fillOpacity={0.7} transform="translate(47 50) rotate(24)" />
      </g>
      <rect x={-2.2} y={-40} width={4.4} height={78} rx={2.2} className="fill-baja" transform="translate(56 44) rotate(9)" />
      <rect
        x={30}
        y={14}
        width={40}
        height={76}
        rx={4}
        className="fill-none stroke-baja"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </>
  );
}

export default function DishArt({ kind, label }: { kind: DishArtKind; label: string }) {
  return (
    <svg viewBox="0 0 100 100" className="dish-art" role="img" aria-label={label}>
      {kind === "nachos" && <Nachos />}
      {kind === "chicken" && <Chicken />}
      {kind === "kopi" && <Kopi />}
    </svg>
  );
}
