// Bubur ayam for the "Pagi" panel [MOCKUP]: blue bowl, porridge, shredded chicken, cakwe,
// a kerupuk and spring onion. Flat, 3/4 top-down, for the tile ground.
const BLUE = "#1F3A8F";
const PAPER = "#FBFAF6";
const PORRIDGE = "#F2E3BE";
const GOLD = "#C9832F";
const ONION = "#6FAE5C";
const INK = "#131A3A";

const shreds: [number, number, number][] = [
  [92, 78, -20], [104, 70, 30], [116, 80, 10], [98, 90, 60], [124, 72, -40], [110, 92, -10], [130, 86, 25],
];
const cakwe: [number, number, number][] = [[150, 92, -18], [164, 80, 12], [146, 104, 30]];
const onions: [number, number][] = [[84, 98], [118, 104], [140, 70], [170, 100], [104, 62]];
const shallots: [number, number][] = [[96, 104], [128, 96], [138, 106], [88, 86], [120, 62], [156, 112]];

export default function BuburAyam({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="12 46 196 134" role="img" aria-label={label} className={className}>
      <ellipse cx="110" cy="168" rx="86" ry="9" fill={INK} opacity="0.12" />
      <path d="M22 84C28 140 66 166 110 166S192 140 198 84Z" fill={BLUE} />
      <path d="M40 126c18 18 42 26 70 26s52-8 70-26l-4 10c-17 15-40 22-66 22s-49-7-66-22Z" fill={PAPER} opacity="0.9" />
      <ellipse cx="110" cy="84" rx="90" ry="32" fill={PAPER} />
      <ellipse cx="110" cy="86" rx="83" ry="27" fill={PORRIDGE} />
      {/* kerupuk */}
      <path d="M44 84c2-16 22-24 38-18 10 4 12 14 6 22-8 10-30 12-40 6-3-2-4-6-4-10Z" fill={PAPER} />
      <circle cx="58" cy="80" r="1.6" fill={GOLD} />
      <circle cx="70" cy="74" r="1.6" fill={GOLD} />
      <circle cx="74" cy="86" r="1.6" fill={GOLD} />
      {/* shredded chicken */}
      {shreds.map(([x, y, r], i) => (
        <rect key={i} x={x - 9} y={y - 2.5} width="18" height="5" rx="2.5" fill={GOLD} opacity="0.5" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {/* cakwe */}
      {cakwe.map(([x, y, r], i) => (
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <rect x={x - 12} y={y - 6} width="24" height="12" rx="5" fill={GOLD} />
          <rect x={x - 9} y={y - 1} width="18" height="2" rx="1" fill={PORRIDGE} opacity="0.6" />
        </g>
      ))}
      {shallots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill={GOLD} />
      ))}
      {onions.map(([x, y], i) => (
        <path
          key={i}
          d={`M${x - 5} ${y}a5 3.6 0 1 0 10 0a5 3.6 0 1 0 -10 0Zm2.6 0a2.4 1.6 0 1 1 4.8 0a2.4 1.6 0 1 1 -4.8 0Z`}
          fill={ONION}
          fillRule="evenodd"
        />
      ))}
    </svg>
  );
}
