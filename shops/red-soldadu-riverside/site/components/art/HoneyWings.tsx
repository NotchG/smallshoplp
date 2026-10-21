import ArtFrame from "./ArtFrame";

// Plate of three honey-glazed drumettes, bone ends out, with sesame, spring onion and a
// honey drip running over the rim.
const MEAT = "M0 0 C0 -16 14 -25 30 -23 C42 -21 50 -13 58 -9 L68 -7 L68 3 L58 5 C50 9 40 18 26 18 C10 18 0 12 0 0 Z";
const BONE = "M66 -6 H74 M66 2 H74";

export default function HoneyWings({ label, className }: { label: string; className?: string }) {
  return (
    <ArtFrame label={label} className={className}>
      <path d="M76 186 H124 L119 200 H81 Z" fill="var(--color-batu)" />
      <ellipse cx="100" cy="182" rx="86" ry="9" fill="var(--color-batu)" />
      <path d="M150 178 Q153 186 151 193 a4.5 4.5 0 1 0 9 0 Q159 185 162 177 Z" fill="var(--color-karat)" />
      {[
        "translate(26 166) rotate(-14)",
        "translate(174 166) scale(-1 1) rotate(-14)",
        "translate(62 142) rotate(-32)",
      ].map((t) => (
        <g key={t} transform={t}>
          <path d={BONE} stroke="var(--color-batu)" strokeWidth="7" strokeLinecap="round" />
          <path d={MEAT} fill="var(--color-karat)" />
          <path d="M8 -6 q12 -12 30 -9" fill="none" stroke="var(--color-kali)" strokeWidth="4" strokeLinecap="round" />
          <path d="M14 4 l4 -1 M26 8 l4 1 M38 2 l4 -1" stroke="var(--color-batu)" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      <path d="M96 150 l7 -5 M60 156 l-6 -4 M138 158 l6 4" stroke="var(--color-daun)" strokeWidth="4.5" strokeLinecap="round" />
    </ArtFrame>
  );
}
