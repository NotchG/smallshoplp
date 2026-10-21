// Authored stroke icons, one weight (2px on a 24 grid), currentColor.
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PinIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function ChatIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </svg>
  );
}

export function PhoneIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.5h2.6l1.4 4-2 1.3a10.5 10.5 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16 16 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function ChevronIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
