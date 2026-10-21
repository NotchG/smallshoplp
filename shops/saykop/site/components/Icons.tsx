// Authored line icons, drawn in the mural's single-line style: navy, round caps, one weight.
// All decorative (aria-hidden); the text next to them carries the meaning.

type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

// 20px button icons
export function PinIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={2.2} className={className} {...base}>
      <path d="M12 21.5c-4-4.6-7-8.3-7-11.9a7 7 0 0 1 14 0c0 3.6-3 7.3-7 11.9Z" />
      <circle cx="12" cy="9.6" r="2.6" />
    </svg>
  );
}

export function ChatIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={2.2} className={className} {...base}>
      <path d="M4.2 19.8 5.4 16A8.2 8.2 0 1 1 8.6 19l-4.4.8Z" />
      <path d="M9 10.5c.3 1.9 2.2 3.8 4.4 4.3" />
    </svg>
  );
}

export function PhoneIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={2.2} className={className} {...base}>
      <path d="M6.6 3.5h-2a1.6 1.6 0 0 0-1.6 1.8C3.9 13.3 10.7 20.1 18.7 21a1.6 1.6 0 0 0 1.8-1.6v-2l-3.9-1.6-2 2a12.4 12.4 0 0 1-6.4-6.4l2-2L8.2 3.5Z" />
    </svg>
  );
}

// 40px comfort icons
export function PlugIcon({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" strokeWidth={2.6} className={className} {...base}>
      <path d="M15 5v7M25 5v7" />
      <path d="M11 12h18v6a9 9 0 0 1-18 0v-6Z" />
      <path d="M20 27v3c0 4 4 6 8 5s6-4 8-3" />
    </svg>
  );
}

export function NoteIcon({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" strokeWidth={2.6} className={className} {...base}>
      <path d="M15 30V9l17-4v20" />
      <ellipse cx="10.5" cy="30.5" rx="4.8" ry="3.8" />
      <ellipse cx="27.5" cy="26" rx="4.8" ry="3.8" />
      <path d="M15 15l17-4" />
    </svg>
  );
}

export function ArchIcon({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" strokeWidth={2.6} className={className} {...base}>
      <path d="M9 35V18a11 11 0 0 1 22 0v17" />
      <path d="M4 35h32" />
      <path d="M15 35v-8M20 35v-8M25 35v-8" />
    </svg>
  );
}

export function BikeIcon({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" strokeWidth={2.6} className={className} {...base}>
      <circle cx="9" cy="28" r="5.5" />
      <circle cx="31" cy="28" r="5.5" />
      <path d="M9 28h9l5-9h-9" />
      <path d="M31 28 26 12h-4M26 12h4" />
      <path d="M14 19h-4" />
    </svg>
  );
}
