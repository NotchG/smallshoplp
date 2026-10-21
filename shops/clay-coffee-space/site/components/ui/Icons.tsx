// Authored line icons: one 1.75px stroke, round caps, currentColor.
type P = { size?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
};

export function ArrowRight({ size = 16, className }: P) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 16 16" className={className}>
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

// Navigation arrow, for directions
export function NavArrow({ size = 18, className }: P) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 18 18" className={className}>
      <path d="M15.5 2.5 2.5 8l5.6 1.9L10 15.5z" />
    </svg>
  );
}

// Chat bubble, for WhatsApp
export function Chat({ size = 18, className }: P) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 18 18" className={className}>
      <path d="M9 2.5c3.6 0 6.5 2.5 6.5 5.6S12.6 13.7 9 13.7c-.8 0-1.6-.1-2.3-.4L3 15l.9-3.1C3 10.9 2.5 9.6 2.5 8.1 2.5 5 5.4 2.5 9 2.5z" />
    </svg>
  );
}

// Small camera, for owner photo slots
export function Camera({ size = 16, className }: P) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 16 16" className={className}>
      <path d="M2 5.5h2.6L5.8 3.5h4.4l1.2 2H14v7.5H2z" />
      <circle cx="8" cy="9" r="2.4" />
    </svg>
  );
}

// Map pin, for the map frame before the map loads
export function MapPin({ size = 28, className }: P) {
  return (
    <svg {...base} width={size} height={size} viewBox="0 0 28 28" className={className}>
      <path d="M14 25s8-7.6 8-13.5a8 8 0 0 0-16 0C6 17.4 14 25 14 25z" />
      <circle cx="14" cy="11.5" r="3" />
    </svg>
  );
}
