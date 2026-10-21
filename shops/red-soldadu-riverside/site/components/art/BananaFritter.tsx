import ArtFrame from "./ArtFrame";

// Plated dessert: three curved, tapered golden fritter pieces with a crisp karat edge,
// on a pool of sauce, a cream zigzag, almond flakes, berry coulis dots on the plate.
const PIECE =
  "M0 0 C6 -18 28 -28 50 -27 C70 -26 86 -16 92 -4 C84 -7 70 -9 54 -8 C34 -6 16 2 6 9 C2 7 0 4 0 0 Z";
const CRUST = "M4 -4 C12 -18 30 -25 50 -24 C66 -23 80 -15 87 -6";

const pieces = [
  "translate(20 176) rotate(-6)",
  "translate(182 178) scale(-1 1) rotate(-6)",
  "translate(52 156) rotate(-14) scale(1.05)",
];

export default function BananaFritter({ label, className }: { label: string; className?: string }) {
  return (
    <ArtFrame label={label} className={className}>
      <path d="M76 186 H124 L119 200 H81 Z" fill="var(--color-batu)" />
      <ellipse cx="100" cy="182" rx="86" ry="9" fill="var(--color-batu)" />
      <ellipse cx="100" cy="179" rx="58" ry="5" fill="var(--color-karat)" />
      {pieces.map((t) => (
        <g key={t} transform={t}>
          <path d={PIECE} fill="var(--color-kali)" />
          <path d={CRUST} fill="none" stroke="var(--color-karat)" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
      <path
        d="M58 142 l10 8 l8 -12 l10 10 l8 -13 l10 10 l8 -12 l9 8"
        fill="none" stroke="var(--color-batu)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M70 126 l8 -3 M90 118 l8 1 M110 116 l8 -2 M128 122 l7 2" stroke="var(--color-batu)" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M26 183 h0.01 M38 186 h0.01 M162 183 h0.01 M172 180 h0.01" stroke="var(--color-merbau)" strokeWidth="7" strokeLinecap="round" />
    </ArtFrame>
  );
}
