import { ArchMark, ink, line } from "./palette";

// Dalle Iced Tea: tall clear cup, amber tea, nata de coco, chia, ice, a long spoon. No straw.
const CUP = "M18 50 H122 L108 212 H32 Z";
const TEA = "M22.5 74 H117.5 L105.6 209 H34.4 Z";
const CHIA: [number, number][] = [
  [30, 98], [48, 104], [101, 101], [112, 96], [38, 128], [104, 126], [52, 136],
  [93, 140], [36, 160], [110, 152], [66, 156], [84, 170], [44, 198], [97, 196],
  [60, 202], [80, 182], [106, 176], [28, 114],
];
const NATA = [
  { x: 33, y: 150, r: -10 }, { x: 54, y: 166, r: 8 }, { x: 80, y: 150, r: -4 },
  { x: 44, y: 184, r: 12 }, { x: 70, y: 188, r: -8 }, { x: 89, y: 174, r: 6 },
];

export default function IcedTea({ label }: { label: string }) {
  return (
    <svg className="illus" viewBox="0 0 140 220" role="img" aria-label={label}>
      {/* clear cup interior */}
      <path d={CUP} fill={ink.light} fillOpacity={0.4} />
      {/* tea */}
      <path d={TEA} fill={ink.tea} />
      <path d="M22.5 74 H117.5" fill="none" {...line} />
      {/* chia */}
      {CHIA.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1.8} fill={ink.steel} />
      ))}
      {/* nata de coco */}
      {NATA.map((n, i) => (
        <rect
          key={i}
          x={n.x}
          y={n.y}
          width={15}
          height={15}
          rx={3}
          fill={ink.light}
          fillOpacity={0.55}
          transform={`rotate(${n.r} ${n.x + 7.5} ${n.y + 7.5})`}
          {...line}
        />
      ))}
      {/* ice */}
      <rect x={28} y={60} width={24} height={24} rx={4} fill={ink.light} fillOpacity={0.7} transform="rotate(-9 40 72)" {...line} />
      <rect x={58} y={66} width={24} height={24} rx={4} fill={ink.light} fillOpacity={0.7} transform="rotate(7 70 78)" {...line} />
      {/* spoon, standing in the glass */}
      <g transform="rotate(6 96 110)">
        <rect x={93.5} y={4} width={5} height={178} rx={2.5} fill={ink.light} {...line} />
        <ellipse cx={96} cy={192} rx={8} ry={12} fill={ink.light} {...line} />
      </g>
      {/* printed arch */}
      <ArchMark x={60} y={104} w={20} h={28} />
      {/* cup outline and rim */}
      <path d={CUP} fill="none" {...line} />
      <rect x={14} y={45} width={112} height={7} rx={3} fill={ink.light} {...line} />
    </svg>
  );
}
