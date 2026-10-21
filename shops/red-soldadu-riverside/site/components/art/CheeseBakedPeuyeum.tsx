import ArtFrame from "./ArtFrame";

// Small oval baking dish on a plate: peuyeum mound under a cheese crust with browned edges.
export default function CheeseBakedPeuyeum({ label, className }: { label: string; className?: string }) {
  return (
    <ArtFrame label={label} className={className}>
      <ellipse cx="100" cy="191" rx="88" ry="9" fill="var(--color-batu)" />
      <path d="M24 134 H40 V146 H31 Q24 146 24 140 Z M176 134 H160 V146 H169 Q176 146 176 140 Z" fill="var(--color-merbau)" />
      <path d="M36 132 C40 98 160 98 164 132 Z" fill="var(--color-kali)" />
      <path d="M46 122 C58 90 142 90 154 122 C146 128 138 117 128 125 C118 132 110 119 100 126 C90 133 82 120 72 127 C62 132 54 126 46 122 Z" fill="var(--color-batu)" />
      <g fill="var(--color-karat)">
        <circle cx="76" cy="108" r="4.5" />
        <circle cx="101" cy="101" r="5" />
        <circle cx="126" cy="109" r="4" />
        <circle cx="90" cy="117" r="3" />
      </g>
      <path d="M34 132 H166 Q164 176 146 185 H54 Q36 176 34 132 Z" fill="var(--color-merbau)" />
      <path d="M34 132 H166" stroke="var(--color-kali)" strokeWidth="4" strokeLinecap="round" />
    </ArtFrame>
  );
}
