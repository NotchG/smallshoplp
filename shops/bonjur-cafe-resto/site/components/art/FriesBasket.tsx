// Bonjur's fries: wire-mesh basket, battered onion rings on a white dish behind,
// and the cup of ketchup and mayo in front. Flat, 3/4 top-down, for the blue menu ground.
const STEEL = "#C9D3F0";
const FRY = "#F2B544";
const GOLD = "#D98A2E";
const PAPER = "#FBFAF6";
const RED = "#C8322A";
const INK = "#131A3A";

// x, y (base), length, angle
const fries: [number, number, number, number, string][] = [
  [86, 168, 70, -28, FRY], [100, 172, 84, -14, FRY], [118, 170, 76, -4, GOLD], [132, 174, 88, 6, FRY],
  [146, 170, 72, 16, FRY], [160, 172, 80, 26, GOLD], [176, 168, 66, 36, FRY], [108, 176, 62, -36, FRY],
  [124, 178, 70, 22, FRY], [152, 178, 64, -20, FRY], [170, 176, 58, 8, FRY], [94, 178, 54, 4, GOLD],
];

function ring(cx: number, cy: number, r: number) {
  const ri = r * 0.48;
  return `M${cx - r} ${cy}a${r} ${r * 0.8} 0 1 0 ${2 * r} 0a${r} ${r * 0.8} 0 1 0 ${-2 * r} 0Z` +
    `M${cx - ri} ${cy}a${ri} ${ri * 0.8} 0 1 1 ${2 * ri} 0a${ri} ${ri * 0.8} 0 1 1 ${-2 * ri} 0Z`;
}

export default function FriesBasket({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 250" role="img" aria-label={label} className={className}>
      <defs>
        <pattern id="mesh" width="5" height="5" patternUnits="userSpaceOnUse">
          <rect width="5" height="5" fill={INK} fillOpacity="0.28" />
          <rect width="1.2" height="5" fill={STEEL} fillOpacity="0.55" />
          <rect width="5" height="1.2" fill={STEEL} fillOpacity="0.55" />
        </pattern>
      </defs>
      <ellipse cx="134" cy="236" rx="112" ry="10" fill={INK} opacity="0.3" />
      {/* dish of onion rings, behind */}
      <rect x="70" y="8" width="138" height="78" rx="10" fill={PAPER} />
      <path d={ring(108, 46, 26)} fill={GOLD} fillRule="evenodd" />
      <path d={ring(158, 40, 24)} fill={GOLD} fillRule="evenodd" />
      <path d={ring(140, 62, 22)} fill={FRY} fillRule="evenodd" />
      {/* handle */}
      <path d="M48 104 6 70" stroke={STEEL} strokeWidth="5" strokeLinecap="round" />
      <path d="M48 140 6 112" stroke={STEEL} strokeWidth="5" strokeLinecap="round" />
      {/* basket */}
      <rect x="42" y="84" width="180" height="120" rx="16" fill={STEEL} />
      <rect x="50" y="92" width="164" height="104" rx="11" fill="url(#mesh)" />
      <path d="M58 188 70 108 132 190Z" fill={PAPER} opacity="0.9" />
      {fries.map(([x, y, len, a, c], i) => (
        <rect key={i} x={x - 5} y={y - len} width="10" height={len} rx="3" fill={c} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      {/* cup: ketchup and mayo */}
      <circle cx="146" cy="206" r="36" fill={PAPER} />
      <circle cx="146" cy="206" r="29" fill={RED} />
      <path d="M118 212c10-12 22 4 34-6 6-5 14-6 22 0a29 29 0 0 1-56 6Z" fill={PAPER} />
    </svg>
  );
}
