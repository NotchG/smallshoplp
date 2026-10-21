// Authored line icons, one stroke weight (1.75 on a 24 grid), round joins.
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

export function IconDirections({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" />
      <path d="M9 14.5V12a1.5 1.5 0 0 1 1.5-1.5H15" />
      <path d="m13 8.5 2 2-2 2" />
    </svg>
  );
}

export function IconChat({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.6-4.5a8.4 8.4 0 1 1 15.4-4.4Z" />
      <path d="M8.6 9.2c.2 2.6 2.6 5 5.2 5.2l1.4-1.3-1.8-1-.9.7a4 4 0 0 1-2.3-2.3l.7-.9-1-1.8Z" />
    </svg>
  );
}

export function IconPhone({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5.2 3.5h3l1.5 4-2 1.3a10.5 10.5 0 0 0 5.5 5.5l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 3.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconInstagram({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPin({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconCard({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 9.5h18M7 15h4" />
    </svg>
  );
}
