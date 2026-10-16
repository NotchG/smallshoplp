// Beef Teriyaki rice bowl, flat, 3/4 top-down, drawn for the blue menu ground:
// a glossy heap of thin-sliced beef and onion over white rice, with sesame and spring onion.
// Fills: red bowl, paper rice/onion/sesame, brown beef, amber glaze, green spring onion.
const BEEF = "#7A3A1F";
const GLAZE = "#F2B544";
const RED = "#C8322A";
const PAPER = "#FBFAF6";
const ONION = "#7DBA5E";
const INK = "#131A3A";

// Wavy-edged heap: an ellipse whose radius ripples, so the edge reads as loose slices.
function heap(cx: number, cy: number, rx: number, ry: number, waves: number, depth: number) {
  const pts: string[] = [];
  const n = 220;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const k = 1 + depth * Math.sin(waves * t) + depth * 0.3 * Math.sin(waves * 1.6 * t + 1);
    pts.push(`${(cx + Math.cos(t) * rx * k).toFixed(1)} ${(cy + Math.sin(t) * ry * k).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

// Short curved strip centred on 0,0 (a sliver of beef, glaze or onion).
const strip = (w: number, h: number) =>
  `M${-w / 2} 0C${-w / 4} ${-h} ${w / 4} ${-h} ${w / 2} 0C${w / 4} ${-h * 0.4} ${-w / 4} ${-h * 0.4} ${-w / 2} 0Z`;

const folds: [number, number, number][] = [
  [160, 128, -12], [204, 112, 8], [250, 108, -6], [296, 116, 14], [328, 136, -10],
  [182, 150, 18], [232, 140, -14], [278, 148, 6], [140, 150, -24], [214, 166, 4], [264, 170, -8], [306, 160, 20],
];
const glaze: [number, number, number][] = [
  [174, 120, -10], [222, 104, 6], [272, 112, -4], [312, 128, 16], [196, 142, 12], [248, 134, -12], [292, 142, 4],
  [158, 142, -20], [230, 160, 2], [284, 164, -6],
];
const onionSlivers: [number, number, number][] = [
  [190, 126, 24], [262, 124, -18], [216, 152, -30], [300, 134, 30], [164, 162, 10], [254, 158, 40],
];
const sesame: [number, number, number][] = [
  [168, 112, 20], [196, 100, -30], [238, 96, 60], [284, 102, 10], [318, 118, -40], [150, 136, 30],
  [208, 132, -20], [242, 122, 50], [276, 136, -10], [326, 148, 40], [190, 160, -60], [236, 172, 15],
  [292, 172, -35], [160, 172, 0],
];
const onions: [number, number][] = [
  [182, 108], [256, 100], [310, 112], [226, 128], [150, 158], [270, 152], [206, 172], [320, 156],
];

export default function BeefTeriyaki({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="24 56 404 290" role="img" aria-label={label} className={className}>
      <ellipse cx="220" cy="334" rx="150" ry="12" fill={INK} opacity="0.35" />
      {/* bowl */}
      <path d="M38 176C44 268 118 326 220 326S396 268 402 176Z" fill={RED} />
      <path
        d="M58 236C94 280 158 300 220 300S346 280 382 236L376 252C340 292 280 312 220 312S100 292 64 252Z"
        fill={PAPER}
        opacity="0.9"
      />
      <ellipse cx="220" cy="176" rx="182" ry="60" fill={RED} />
      <ellipse cx="220" cy="178" rx="168" ry="50" fill={INK} opacity="0.32" />
      {/* rice */}
      <path d="M58 182C66 128 146 96 220 94S372 124 382 182C332 214 108 214 58 182Z" fill={PAPER} />
      {/* beef heap with sauce */}
      <path d={heap(236, 140, 112, 48, 9, 0.06)} fill={BEEF} />
      {folds.map(([x, y, r], i) => (
        <path key={`f${i}`} d={strip(46, 12)} fill={INK} opacity="0.32" transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
      {glaze.map(([x, y, r], i) => (
        <path key={`g${i}`} d={strip(34, 9)} fill={GLAZE} opacity="0.85" transform={`translate(${x} ${y - 4}) rotate(${r})`} />
      ))}
      {onionSlivers.map(([x, y, r], i) => (
        <path key={`o${i}`} d={strip(30, 10)} fill={PAPER} opacity="0.75" transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
      {sesame.map(([x, y, r], i) => (
        <ellipse key={`s${i}`} cx={x} cy={y} rx="3.4" ry="1.7" fill={PAPER} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {onions.map(([x, y], i) => (
        <path
          key={`n${i}`}
          d={`M${x - 6} ${y}a6 4.5 0 1 0 12 0a6 4.5 0 1 0 -12 0Zm3 0a3 2 0 1 1 6 0a3 2 0 1 1 -6 0Z`}
          fill={ONION}
          fillRule="evenodd"
        />
      ))}
    </svg>
  );
}
