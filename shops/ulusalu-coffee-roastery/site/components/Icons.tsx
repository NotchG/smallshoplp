// Authored icons, one stroke weight (2px on a 24 grid), currentColor.
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

export function PhoneIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 3.5h3.2l1.8 4.6-2.3 1.5a11.5 11.5 0 0 0 6.2 6.2l1.5-2.3 4.6 1.8v3.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function DirectionsIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" />
      <path d="M9.5 15v-2.6c0-.9.7-1.6 1.6-1.6h4.4" />
      <path d="m13.6 8.8 2 2-2 2" />
    </svg>
  );
}

export function ChatIcon({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5h16v10.5H10l-4.5 3.5V16H4Z" />
      <path d="M8 10.8h8" />
    </svg>
  );
}

export function ChilliIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} className={className}>
      <path
        d="M6.6 8.6C4.9 14.4 8.8 20.2 19.6 21.4c-4.1-2.8-5.6-6.9-5.2-11.6-2.3-2-5.4-2.4-7.8-1.2Z"
        fill="currentColor"
      />
      <path
        d="M10.2 8.2c.1-2.3 1.4-4 3.9-4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
