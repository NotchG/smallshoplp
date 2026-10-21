// The round table-number stand from the deck tables, drawn in batu at 28×40.
export default function HoursDisc() {
  return (
    <svg width="28" height="40" viewBox="0 0 28 40" aria-hidden="true" className="flex-none">
      <circle cx="14" cy="13" r="12.5" fill="var(--color-batu)" />
      <circle cx="14" cy="13" r="8" fill="none" stroke="var(--color-merbau)" strokeWidth="1.5" />
      <rect x="12.75" y="25" width="2.5" height="9" fill="var(--color-batu)" />
      <rect x="5" y="34" width="18" height="4.5" rx="2.25" fill="var(--color-batu)" />
    </svg>
  );
}
