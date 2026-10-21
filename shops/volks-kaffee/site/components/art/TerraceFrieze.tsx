import { C } from "@/lib/palette";

// The night terrace as one flat strip: tegel floor, brick pillar, potted plants, a bamboo
// armchair, white folding chairs around a small table, wire bistro chairs, pendant lights and
// one sitting cat. 1440 x 220, centre-cropped on narrow screens (preserveAspectRatio slice).
// The cat group is [MOCKUP] until the owner confirms the cats are still around.

const FLOOR = 192;

function Pot({ x, w, h }: { x: number; w: number; h: number }) {
  const top = FLOOR - h;
  return (
    <g>
      <path d={`M${x + w * 0.12} ${FLOOR}L${x + w * 0.88} ${FLOOR}L${x + w} ${top + 8}L${x} ${top + 8}Z`} fill={C.bata} />
      <rect x={x - 4} y={top} width={w + 8} height="10" rx="3" fill={C.bata} />
      <rect x={x - 4} y={top + 8} width={w + 8} height="3" fill={C.kayu} fillOpacity="0.25" />
    </g>
  );
}

function Leaf({ x, y, len, angle, w = 0.34, fill }: { x: number; y: number; len: number; angle: number; w?: number; fill: string }) {
  const half = len * w;
  return (
    <path
      d={`M0 0C${half} ${-len * 0.3} ${half * 0.9} ${-len * 0.8} 0 ${-len}C${-half * 0.9} ${-len * 0.8} ${-half} ${-len * 0.3} 0 0Z`}
      fill={fill}
      transform={`translate(${x} ${y}) rotate(${angle})`}
    />
  );
}

function SnakePlant({ x }: { x: number }) {
  return (
    <g>
      {[-22, -10, 2, 14, 24].map((a, i) => (
        <Leaf key={i} x={x + 30 + a * 0.6} y={FLOOR - 52} len={86 + (i % 2) * 22} angle={a} w={0.16} fill={i % 2 ? C.pagar : C.pagarDark} />
      ))}
      <Pot x={x} w={60} h={52} />
    </g>
  );
}

function BushPlant({ x, w = 70, h = 44, size = 58 }: { x: number; w?: number; h?: number; size?: number }) {
  const cx = x + w / 2;
  const base = FLOOR - h;
  return (
    <g>
      {[-62, -36, -12, 12, 36, 62, -84, 84].map((a, i) => (
        <Leaf key={i} x={cx} y={base + 4} len={size * (i > 5 ? 0.7 : 1)} angle={a} w={0.42} fill={i % 2 ? C.pagarDark : C.pagar} />
      ))}
      <Pot x={x} w={w} h={h} />
    </g>
  );
}

function Monstera({ x }: { x: number }) {
  const cx = x + 40;
  const base = FLOOR - 58;
  const leaves = [
    { a: -48, l: 92, f: C.pagarDark },
    { a: 44, l: 96, f: C.pagarDark },
    { a: -18, l: 118, f: C.pagar },
    { a: 16, l: 110, f: C.pagar },
    { a: -70, l: 70, f: C.pagar },
    { a: 72, l: 66, f: C.pagar },
  ];
  return (
    <g>
      {leaves.map((lf, i) => (
        <g key={i}>
          <path d={`M${cx} ${base}L${cx} ${base - lf.l * 0.5}`} stroke={C.pagarDark} strokeWidth="3" transform={`rotate(${lf.a} ${cx} ${base})`} />
          <Leaf x={cx} y={base} len={lf.l} angle={lf.a} w={0.5} fill={lf.f} />
          <path d={`M${cx} ${base}L${cx} ${base - lf.l * 0.9}`} stroke={C.kayu} strokeOpacity="0.25" strokeWidth="2" transform={`rotate(${lf.a} ${cx} ${base})`} />
        </g>
      ))}
      <Pot x={x} w={80} h={58} />
    </g>
  );
}

function Pendant({ x, id }: { x: number; id: string }) {
  return (
    <g>
      <circle cx={x} cy="98" r="94" fill={`url(#${id})`} />
      <path d={`M${x} 0V50`} stroke={C.piring} strokeOpacity="0.45" strokeWidth="2" />
      <path d={`M${x - 22} 72Q${x - 22} 50 ${x} 48Q${x + 22} 50 ${x + 22} 72Z`} fill={C.piring} />
      <ellipse cx={x} cy="74" rx="9" ry="5" fill={C.sign} />
    </g>
  );
}

function BambooChair({ x }: { x: number }) {
  const tube = { stroke: C.signOff, strokeWidth: 9, strokeLinecap: "round" as const };
  const joint = { stroke: C.kayu, strokeOpacity: 0.45, strokeWidth: 2 };
  return (
    <g>
      <path d={`M${x + 8} ${FLOOR}L${x + 2} 92`} {...tube} />
      <path d={`M${x + 128} ${FLOOR}L${x + 128} 120`} {...tube} />
      <path d={`M${x} 120H${x + 136}`} {...tube} />
      <path d={`M${x + 8} 150H${x + 128}`} {...tube} />
      <path d={`M${x + 10} 176H${x + 128}`} {...tube} />
      <path d={`M${x + 4} 100Q${x + 40} 96 ${x + 54} 120`} {...tube} strokeWidth={7} />
      <rect x={x + 10} y="142" width="116" height="10" rx="4" fill={C.signOff} />
      <g {...joint}>
        <path d={`M${x - 2} 108h10M${x + 1} 134h10M${x + 3} 166h10M${x + 123} 140h10M${x + 123} 170h10M${x + 50} 115v10M${x + 92} 115v10M${x + 68} 145v10`} />
      </g>
    </g>
  );
}

function WireChair({ x }: { x: number }) {
  const wire = { stroke: C.piring, strokeOpacity: 0.6, strokeWidth: 3, fill: "none", strokeLinecap: "round" as const };
  return (
    <g {...wire}>
      <path d={`M${x} 140H${x + 70}`} strokeWidth={5} />
      <path d={`M${x + 6} 140L${x - 2} ${FLOOR}M${x + 64} 140L${x + 72} ${FLOOR}M${x + 22} 140L${x + 18} ${FLOOR}M${x + 48} 140L${x + 52} ${FLOOR}`} />
      <path d={`M${x + 4} 140C${x} 110 ${x + 4} 84 ${x + 18} 82C${x + 30} 80 ${x + 26} 112 ${x + 14} 140`} />
      <path d={`M${x + 14} 104C${x + 10} 96 ${x + 14} 90 ${x + 18} 90`} />
      <path d={`M${x + 2} 172H${x + 68}`} strokeOpacity={0.4} />
    </g>
  );
}

function FoldingChair({ x, flip = false }: { x: number; flip?: boolean }) {
  const t = flip ? `translate(${2 * x + 60} 0) scale(-1 1)` : undefined;
  const white = { stroke: C.piring, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  return (
    <g transform={t} {...white}>
      <path d={`M${x + 6} ${FLOOR}L${x + 10} 90`} strokeWidth={5} />
      <rect x={x + 2} y="92" width="18" height="40" rx="5" fill={C.piring} strokeWidth={0} />
      <path d={`M${x + 8} 146H${x + 58}`} strokeWidth={8} />
      <path d={`M${x + 14} 148L${x + 58} ${FLOOR}M${x + 54} 148L${x + 18} ${FLOOR}`} strokeWidth={4} />
    </g>
  );
}

function Table({ x }: { x: number }) {
  return (
    <g>
      <path d={`M${x + 12} 128L${x + 8} ${FLOOR}M${x + 68} 128L${x + 72} ${FLOOR}`} stroke={C.piring} strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
      <rect x={x} y="120" width="80" height="9" rx="3" fill={C.crumb} />
      {/* a cup and an Ice Choco Mint on the table */}
      <path d={`M${x + 14} 104H${x + 32}L${x + 30} 118H${x + 16}Z`} fill={C.piring} />
      <ellipse cx={x + 23} cy="119" rx="12" ry="2.5" fill={C.piring} />
      <path d={`M${x + 50} 88H${x + 66}L${x + 64} 119H${x + 52}Z`} fill={C.mintDrink} />
      <path d={`M${x + 52} 108H${x + 64}L${x + 64} 119H${x + 52}Z`} fill={C.kayu2} />
      <path d={`M${x + 61} 90L${x + 66} 76`} stroke={C.sign} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Cat({ x }: { x: number }) {
  // A sitting cat, three-quarter view, one flat colour. No face, no bounce.
  return (
    <g data-mockup="" fill={C.signOff}>
      <path d={`M${x + 8} ${FLOOR}C${x - 2} 168 ${x + 6} 138 ${x + 28} 134C${x + 48} 132 ${x + 58} 156 ${x + 56} ${FLOOR}Z`} />
      <circle cx={x + 40} cy="122" r="17" />
      <path d={`M${x + 26} 114L${x + 27} 94L${x + 38} 107Z`} />
      <path d={`M${x + 44} 106L${x + 55} 94L${x + 56} 114Z`} />
      <path d={`M${x + 10} ${FLOOR - 2}C${x - 14} ${FLOOR} ${x - 18} 176 ${x - 6} 168`} fill="none" stroke={C.signOff} strokeWidth="8" strokeLinecap="round" />
      <path d={`M${x + 32} ${FLOOR}V172M${x + 44} ${FLOOR}V170`} stroke={C.kayu} strokeOpacity="0.35" strokeWidth="2" />
    </g>
  );
}

export default function TerraceFrieze({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" role="img" aria-label={label}>
      <defs>
        <radialGradient id="fz-glow">
          <stop offset="0" stopColor={C.sign} stopOpacity="0.24" />
          <stop offset="0.55" stopColor={C.sign} stopOpacity="0.07" />
          <stop offset="1" stopColor={C.sign} stopOpacity="0" />
        </radialGradient>
        <pattern id="fz-tegel" width="28" height="28" patternUnits="userSpaceOnUse" y={FLOOR}>
          <rect width="28" height="28" fill={C.bata} />
          <path d="M14 3L25 14L14 25L3 14Z" fill={C.kayu2} />
          <circle cx="14" cy="14" r="3.2" fill={C.toast} />
          <path d="M0 0H28V28" fill="none" stroke={C.kayu} strokeOpacity="0.35" strokeWidth="1.5" />
        </pattern>
        <pattern id="fz-bata" width="36" height="20" patternUnits="userSpaceOnUse" x="540" y="32">
          <rect width="36" height="20" fill={C.bata} />
          <path d="M0 0H36M0 10H36M12 0V10M30 10V20" stroke={C.kayu} strokeOpacity="0.3" strokeWidth="2" />
        </pattern>
      </defs>

      <Pendant x={380} id="fz-glow" />
      <Pendant x={921} id="fz-glow" />

      {/* brick pillar */}
      <rect x="540" y="32" width="84" height={FLOOR - 32} fill="url(#fz-bata)" />
      <rect x="534" y="24" width="96" height="10" rx="2" fill={C.kayu2} />

      <SnakePlant x={40} />
      <BambooChair x={160} />
      <BushPlant x={318} w={64} h={40} size={56} />
      <WireChair x={440} />
      <Monstera x={648} />
      <Cat x={752} />
      <FoldingChair x={820} />
      <Table x={882} />
      <FoldingChair x={964} flip />
      <BushPlant x={1046} w={60} h={48} size={70} />
      <WireChair x={1140} />
      <SnakePlant x={1240} />
      <BambooChair x={1316} />

      {/* tegel floor */}
      <rect x="0" y={FLOOR} width="1440" height={220 - FLOOR} fill="url(#fz-tegel)" />
      <rect x="0" y={FLOOR - 1} width="1440" height="3" fill={C.kayu2} />
    </svg>
  );
}
