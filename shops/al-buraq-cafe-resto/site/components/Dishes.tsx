// Three dishes from their table (photo-2), drawn flat and top-down: circles, triangles and
// rounded rects. No shading, no perspective, no hands. Each is role="img" with an Indonesian label.
const PLATE = "#FFFFFF";
const RIM = "#D2AC9C";
const FRIED = "#C98A3A";
const CRUMB = "#A8692A";
const PASTRY = "#E7C27F";
const PASTRY_EDGE = "#D3A85C";
const LETTUCE = "#6E9F45";
const CHILLI = "#C2392F";
const MAYO = "#F2E6B5";
const LEMON = "#F2D04B";
const RIND = "#E3B92E";
const MINT = "#3F8F55";
const MEAT = "#73351F";
const RICE = "#E5B55C";
const AMBER = "#E2A23A";
const LINEN = "#FBF5F0";
const GLASS = "#F3EEE9";
const GLASS_LINE = "#CFC9C4";
const INK = "#2B1518";

function Plate() {
  return (
    <>
      <circle cx="200" cy="200" r="194" fill={PLATE} stroke={RIM} strokeOpacity="0.7" strokeWidth="3" />
      <circle cx="200" cy="200" r="152" fill="none" stroke={RIM} strokeOpacity="0.35" strokeWidth="2" />
    </>
  );
}

function DipBowl({ cx, cy, fill, speck }: { cx: number; cy: number; fill: string; speck: string }) {
  const specks = [[-8, -6], [6, -10], [10, 6], [-4, 9], [-12, 4], [2, 0], [13, -3]];
  return (
    <g>
      <circle cx={cx} cy={cy} r="37" fill={PLATE} stroke={RIM} strokeOpacity="0.8" strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r="28" fill={fill} />
      {specks.map(([x, y], i) => (
        <circle key={i} cx={cx + x} cy={cy + y} r="1.4" fill={speck} fillOpacity="0.6" />
      ))}
    </g>
  );
}

function Risol({ x, y, rot, w = 122, h = 54 }: { x: number; y: number; rot: number; w?: number; h?: number }) {
  const crumbs = [[-40, -10], [-22, 12], [-6, -14], [10, 8], [26, -6], [42, 12], [34, -16], [-34, 14], [0, 2]];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2.3} fill={FRIED} />
      {crumbs.map(([cx, cy], i) => (
        <circle key={i} cx={(cx * w) / 122} cy={(cy * h) / 54} r="2.4" fill={CRUMB} />
      ))}
    </g>
  );
}

function Sambosa({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d="M-33 23L33 23L0-33Z" fill={PASTRY} stroke={PASTRY} strokeWidth="8" strokeLinejoin="round" />
      <path d="M0-33L-6 23" stroke={PASTRY_EDGE} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

// A scalloped leaf outline: an ellipse whose edge bulges between points.
function scallopPath(cx: number, cy: number, rx: number, ry: number, rot: number, n: number) {
  const t = (rot * Math.PI) / 180;
  const pt = (a: number, k: number) => {
    const x = Math.cos(a) * rx * k, y = Math.sin(a) * ry * k;
    return [cx + x * Math.cos(t) - y * Math.sin(t), cy + x * Math.sin(t) + y * Math.cos(t)];
  };
  let d = "";
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2, am = (a0 + a1) / 2;
    const [x0, y0] = pt(a0, 0.9), [xc, yc] = pt(am, 1.12), [x1, y1] = pt(a1, 0.9);
    d += `${i === 0 ? `M${x0.toFixed(1)} ${y0.toFixed(1)}` : ""}Q${xc.toFixed(1)} ${yc.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  return d + "Z";
}
const LETTUCE_PATH = scallopPath(104, 162, 70, 92, 18, 18);

export function DishPlatter({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg className={`block h-auto w-full ${className}`} viewBox="0 0 400 400" role="img" aria-label={label}>
      <Plate />
      {/* scalloped lettuce leaf, upper left */}
      <path d={LETTUCE_PATH} fill={LETTUCE} />
      <g stroke={LINEN} strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M76 236Q100 170 140 92" />
        <path d="M92 200L58 168" />
        <path d="M104 166L66 120" />
        <path d="M118 134L100 86" />
        <path d="M98 184L146 176" />
        <path d="M112 150L156 132" />
      </g>
      {/* sambosa, an arc on the upper right */}
      <Sambosa x={186} y={82} rot={-14} />
      <Sambosa x={264} y={96} rot={24} />
      <Sambosa x={318} y={164} rot={78} />
      {/* a risol cut in half on the lettuce, showing its filling */}
      <g transform="translate(132 148) rotate(-28)">
        <rect x="-50" y="-21" width="46" height="42" rx="16" fill={FRIED} />
        <ellipse cx="-6" cy="0" rx="7" ry="16" fill={PASTRY} />
        <ellipse cx="-6" cy="0" rx="4" ry="11" fill={CHILLI} fillOpacity="0.75" />
        <rect x="8" y="-21" width="46" height="42" rx="16" fill={FRIED} />
        <ellipse cx="8" cy="0" rx="7" ry="16" fill={PASTRY} />
        <ellipse cx="8" cy="0" rx="4" ry="11" fill={CHILLI} fillOpacity="0.75" />
      </g>
      {/* risoles, along the front */}
      <Risol x={92} y={276} rot={64} w={104} h={48} />
      <Risol x={214} y={330} rot={-8} w={118} h={56} />
      <Risol x={318} y={262} rot={-84} w={100} h={46} />
      {/* dips: mayo and chilli */}
      <DipBowl cx={170} cy={234} fill={MAYO} speck={INK} />
      <DipBowl cx={250} cy={208} fill={CHILLI} speck={MINT} />
    </svg>
  );
}

const FRIES = [
  [-30, -26, 20], [-8, -34, -35], [18, -24, 60], [32, -4, -15], [-36, 4, 75], [-14, -8, 10],
  [8, 6, -60], [28, 22, 35], [-22, 26, -25], [0, 34, 85], [-40, -10, -50], [18, -44, 5],
];
const CHUNKS = [
  [-18, -18, 15], [10, -10, -20], [30, 10, 40], [-30, 16, -10], [-4, 20, 30], [16, 34, -35],
  [-38, -24, 50], [36, -26, 10], [-12, 40, 0], [4, -40, 25],
];

const WEDGES = [
  { x: 112, y: 288, r: -20 },
  { x: 90, y: 204, r: -2 },
  { x: 110, y: 120, r: 20 },
  { x: 146, y: 166, r: 8 },
];

export function DishFlatbread({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg className={`block h-auto w-full ${className}`} viewBox="0 0 400 400" role="img" aria-label={label}>
      <Plate />
      {/* four wedges of grilled flatbread, stacked on the left; apex towards the bowl */}
      {WEDGES.map((w) => (
        <g key={`${w.x}-${w.y}`} transform={`translate(${w.x} ${w.y}) rotate(${w.r})`}>
          <path d="M52-7Q62 0 52 7L-38 47Q-48 52-53 43Q-68 0-53-43Q-48-52-38-47Z" fill={PASTRY} stroke={PASTRY_EDGE} strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="-14" cy="-14" rx="15" ry="6" fill={CRUMB} fillOpacity="0.8" transform="rotate(-18 -14 -14)" />
          <ellipse cx="10" cy="14" rx="12" ry="5" fill={CRUMB} fillOpacity="0.8" transform="rotate(14 10 14)" />
          <ellipse cx="-34" cy="16" rx="7" ry="3.5" fill={CRUMB} fillOpacity="0.8" />
        </g>
      ))}
      {/* white bowl with two ears: meat and fries in tomato sauce */}
      <rect x="250" y="96" width="34" height="20" rx="10" fill={PLATE} stroke={RIM} strokeOpacity="0.8" strokeWidth="2.5" />
      <rect x="250" y="286" width="34" height="20" rx="10" fill={PLATE} stroke={RIM} strokeOpacity="0.8" strokeWidth="2.5" />
      <circle cx="267" cy="201" r="90" fill={PLATE} stroke={RIM} strokeOpacity="0.8" strokeWidth="3" />
      <circle cx="267" cy="201" r="72" fill={CHILLI} />
      <g transform="translate(267 201)">
        {FRIES.map(([x, y, r], i) => (
          <rect key={`f${i}`} x={x - 17} y={y - 4} width="34" height="8" rx="4" fill={RICE} transform={`rotate(${r} ${x} ${y})`} />
        ))}
        {CHUNKS.map(([x, y, r], i) => (
          <rect key={`c${i}`} x={x - 8} y={y - 7} width="16" height="14" rx="5" fill={MEAT} transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

export function DishTea({ label, className = "" }: { label: string; className?: string }) {
  const ribs = Array.from({ length: 24 }, (_, i) => (i / 24) * Math.PI * 2);
  const segs = Array.from({ length: 10 }, (_, i) => (i / 10) * Math.PI * 2);
  return (
    <svg className={`block h-auto w-full ${className}`} viewBox="0 0 200 200" role="img" aria-label={label}>
      {/* ribbed glass from above */}
      <circle cx="100" cy="100" r="95" fill={GLASS} stroke={GLASS_LINE} strokeWidth="2" />
      <g stroke={GLASS_LINE} strokeWidth="2.5" strokeLinecap="round">
        {ribs.map((a, i) => (
          <path
            key={i}
            d={`M${(100 + Math.cos(a) * 84).toFixed(1)} ${(100 + Math.sin(a) * 84).toFixed(1)}L${(100 + Math.cos(a) * 93).toFixed(1)} ${(100 + Math.sin(a) * 93).toFixed(1)}`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="80" fill={AMBER} />
      {/* ice */}
      <g fill={LINEN} fillOpacity="0.45">
        <rect x="44" y="104" width="30" height="30" rx="6" transform="rotate(15 59 119)" />
        <rect x="104" y="126" width="30" height="30" rx="6" transform="rotate(-20 119 141)" />
        <rect x="52" y="52" width="26" height="26" rx="6" transform="rotate(30 65 65)" />
      </g>
      {/* lemon wheel */}
      <circle cx="120" cy="84" r="38" fill={LEMON} stroke={RIND} strokeWidth="5" />
      <g stroke={LINEN} strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round">
        {segs.map((a, i) => (
          <path key={i} d={`M120 84L${(120 + Math.cos(a) * 30).toFixed(1)} ${(84 + Math.sin(a) * 30).toFixed(1)}`} />
        ))}
      </g>
      <circle cx="120" cy="84" r="3.5" fill={LINEN} />
      {/* two mint leaves */}
      <g fill={MINT}>
        <path d="M0 0Q22-17 50 0Q22 17 0 0Z" transform="translate(52 96) rotate(-34)" />
        <path d="M0 0Q20-15 44 0Q20 15 0 0Z" transform="translate(70 116) rotate(18)" />
      </g>
      <g stroke={LINEN} strokeOpacity="0.45" strokeWidth="1.6" fill="none">
        <path d="M0 0L48 0" transform="translate(52 96) rotate(-34)" />
        <path d="M0 0L42 0" transform="translate(70 116) rotate(18)" />
      </g>
    </svg>
  );
}
