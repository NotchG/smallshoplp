import ArtFrame from "./ArtFrame";

// Hammered tumbler on a cork coaster: pale fizz, a mint sprig, bubbles rising.
export default function Mocktail({ label, className }: { label: string; className?: string }) {
  return (
    <ArtFrame label={label} className={className}>
      <rect x="50" y="190" width="100" height="10" rx="3" fill="var(--color-kali)" />
      <path d="M58 68 H142 L135.5 184 Q135 190 129 190 H71 Q65 190 64.5 184 Z" fill="var(--color-batu)" fillOpacity="0.2" stroke="var(--color-batu)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M64 92 H136 L131 181 Q130.6 185 126 185 H74 Q69.4 185 69 181 Z" fill="var(--color-batu)" />
      <path d="M84 98 V178 M100 98 V178 M116 98 V178" stroke="var(--color-daun)" strokeWidth="2.5" opacity="0.6" />
      <path d="M118 94 C120 72 136 60 154 58 C150 76 136 90 118 94 Z" fill="var(--color-daun)" />
      <path d="M112 94 C102 78 104 60 116 48 C124 64 124 82 112 94 Z" fill="var(--color-daun)" />
      <g fill="var(--color-batu)">
        <circle cx="86" cy="56" r="3.5" />
        <circle cx="96" cy="42" r="2.8" />
        <circle cx="84" cy="30" r="2.2" />
      </g>
    </ArtFrame>
  );
}
