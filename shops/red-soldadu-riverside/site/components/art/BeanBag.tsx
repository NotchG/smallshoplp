import ArtFrame from "./ArtFrame";

// Stand-up coffee bag: batu pouch, crimped top, merbau label band, a valve.
export default function BeanBag({ label, className }: { label: string; className?: string }) {
  return (
    <ArtFrame label={label} className={className}>
      <path d="M62 56 H138 L146 195 Q146 200 141 200 H59 Q54 200 54 195 Z" fill="var(--color-batu)" />
      <rect x="60" y="32" width="80" height="26" rx="2" fill="var(--color-batu)" />
      <path d="M66 40 H134 M66 48 H134" stroke="var(--color-baja)" strokeWidth="2.5" />
      <path d="M59.2 106 H140.8 L143.6 156 H56.4 Z" fill="var(--color-merbau)" />
      <path d="M78 124 H122 M86 138 H114" stroke="var(--color-batu)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="80" r="7" fill="var(--color-kali)" />
    </ArtFrame>
  );
}
