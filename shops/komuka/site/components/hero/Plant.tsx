// Leaf cluster in a plaster pot, flanking the doorway. Flat shapes, no outlines. Decorative.
const leaf = (len: number, w: number) =>
  `M0 0 Q${w} ${-len * 0.5} 0 ${-len} Q${-w} ${-len * 0.5} 0 0 Z`;

const LEAVES: { deg: number; len: number; w: number; dark?: boolean }[] = [
  { deg: -58, len: 62, w: 13, dark: true },
  { deg: -30, len: 84, w: 15 },
  { deg: -8, len: 100, w: 16, dark: true },
  { deg: 14, len: 92, w: 15 },
  { deg: 38, len: 74, w: 14, dark: true },
  { deg: 62, len: 56, w: 12 },
];

export default function Plant({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 150"
      className={`block h-auto ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(60 106)">
        {LEAVES.map((l, i) => (
          <path
            key={i}
            d={leaf(l.len, l.w)}
            transform={`rotate(${l.deg})`}
            fill={l.dark ? "#2f5530" : "var(--color-daun)"}
          />
        ))}
      </g>
      {/* plaster pot */}
      <path d="M28 104 H92 L86 150 H34 Z" fill="var(--color-kanopi)" />
      <rect x="24" y="100" width="72" height="9" rx="2" fill="var(--color-kanopi)" />
    </svg>
  );
}
