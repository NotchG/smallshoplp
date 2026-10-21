import ArtFrame from "./ArtFrame";

// Tall hammered glass: dark coffee over a berry layer, ice, three berries on top.
export default function BlackAndBerries({ label, className }: { label: string; className?: string }) {
  return (
    <ArtFrame label={label} className={className}>
      <path d="M62 34 H138 L130.5 191 Q130 200 121 200 H79 Q70 200 69.5 191 Z" fill="var(--color-batu)" />
      <path d="M69.5 66 H130.5 L126 160 H74 Z" fill="var(--color-baja)" />
      <path d="M74 160 H126 L125 185 Q124.6 192 117 192 H83 Q75.4 192 75 185 Z" fill="var(--color-merbau)" />
      <path d="M88 70 V188 M100 70 V188 M112 70 V188" stroke="var(--color-batu)" strokeWidth="2.5" opacity="0.28" />
      <rect x="79" y="76" width="21" height="21" rx="4" fill="none" stroke="var(--color-batu)" strokeWidth="2.5" transform="rotate(-10 89.5 86.5)" />
      <rect x="102" y="92" width="18" height="18" rx="4" fill="none" stroke="var(--color-batu)" strokeWidth="2.5" transform="rotate(12 111 101)" />
      <circle cx="86" cy="57" r="9" fill="var(--color-merbau)" />
      <circle cx="102" cy="53" r="9.5" fill="var(--color-merbau)" />
      <circle cx="117" cy="58" r="8" fill="var(--color-merbau)" />
      <path d="M83 53.5 h0.01 M99 49 h0.01 M114.5 54.5 h0.01" stroke="var(--color-karat)" strokeWidth="4.5" strokeLinecap="round" />
    </ArtFrame>
  );
}
