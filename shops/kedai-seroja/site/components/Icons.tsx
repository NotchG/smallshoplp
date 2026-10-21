// Authored icons, one stroke weight (2) and round joins throughout.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
};

export function PhoneIcon() {
  return (
    <svg {...base}>
      <path d="M6.5 3.5h3l1.5 4.5-2.2 1.4a10.5 10.5 0 0 0 5.8 5.8l1.4-2.2 4.5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function DirectionsIcon() {
  return (
    <svg {...base}>
      <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" />
      <path d="M9.2 14.5v-2.2a1.8 1.8 0 0 1 1.8-1.8h4" />
      <path d="m13.2 8.4 2.1 2.1-2.1 2.1" />
    </svg>
  );
}

export function ArrowDownIcon() {
  return (
    <svg {...base}>
      <path d="M12 5v14" />
      <path d="m6.5 13.5 5.5 5.5 5.5-5.5" />
    </svg>
  );
}

export function CameraIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 8.5h3.2l1.8-2.5h7l1.8 2.5h3.2v10.5h-17Z" />
      <circle cx="12" cy="13.5" r="3.4" />
    </svg>
  );
}
