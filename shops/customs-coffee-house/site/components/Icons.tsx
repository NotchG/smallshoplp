// Authored icons: 24px grid, 2px round stroke, currentColor. Decorative (aria-hidden).
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
      <path d="M12 21s-7-6.1-7-11.4A7 7 0 0 1 19 9.6C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.6" r="2.6" />
    </svg>
  );
}

export function ChatIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.3 18.4z" />
      <path d="M9 11.2h.01M12 11.2h.01M15 11.2h.01" strokeWidth={2.6} />
    </svg>
  );
}

export function PhoneIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M6.2 3.5h2.6l1.6 4.4-2.1 1.4a11.5 11.5 0 0 0 6.4 6.4l1.4-2.1 4.4 1.6v2.6a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.2 5.6a2 2 0 0 1 2-2.1z" />
    </svg>
  );
}

export function NoEntryIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.7 5.7l12.6 12.6" />
    </svg>
  );
}
