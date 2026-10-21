// One authored icon family: 24px grid, 1.75 stroke, round caps. Decorative, so aria-hidden.
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
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
      <path d="M4.5 19.5l1.2-3.6A7.8 7.8 0 1 1 8.4 18.6Z" />
      <path d="M9.2 9.4c.3 2.3 2 4.2 4.6 5l1-1.1 1.6.8" />
    </svg>
  );
}

export function PhoneIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.5h2.6l1.3 4-2 1.3a11 11 0 0 0 6.7 6.7l1.3-2 4 1.3v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}

// Lift call-button triangle, filled.
export function LiftArrow({ className }: P) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden focusable={false} className={className}>
      <path d="M7 2.5 12.5 11.5H1.5Z" fill="currentColor" />
    </svg>
  );
}
