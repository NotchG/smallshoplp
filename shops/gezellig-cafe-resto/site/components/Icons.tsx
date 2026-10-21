// One authored icon set: 24px grid, 1.75 stroke, square caps to match the steel.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PinIcon() {
  return (
    <svg {...base}>
      <path d="M12 21s-6.5-6.2-6.5-11.2A6.5 6.5 0 0 1 12 3.3a6.5 6.5 0 0 1 6.5 6.5C18.5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.3" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...base}>
      <path d="M4 4.5h16v11.5h-9.5L6 20v-4H4Z" />
      <path d="M8 9.2h8M8 12.3h5" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...base}>
      <path d="M6.6 3.5h3l1.5 4.2-2 1.3a10.5 10.5 0 0 0 5.9 5.9l1.3-2 4.2 1.5v3a2 2 0 0 1-2.1 2A16.8 16.8 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1Z" />
    </svg>
  );
}

// The tulip mark: small, Tulp, used as the theme bullet and beside menu group labels.
export function TulipMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" className={className} aria-hidden focusable={false}>
      <path d="M8 1.6 9.9 4l2.5-1.8v3.6c0 2.6-1.9 4.4-4.4 4.4S3.6 8.4 3.6 5.8V2.2L6.1 4Z" fill="var(--color-tulp)" />
      <path d="M8 10.2v4.6M8 13.2c-1.4-.2-2.6-1-3.2-2.4M8 12.4c1.3-.1 2.4-.8 3-2" stroke="var(--color-hijau)" strokeWidth="1.3" fill="none" />
    </svg>
  );
}
