// One small icon set, 24-unit grid, 2px round strokes (paths after Lucide, ISC).
type P = { className?: string };
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconNavigation({ className }: P) {
  return (
    <svg {...base} className={className}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

export function IconChat({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth={2.6} />
    </svg>
  );
}

export function IconPhone({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconArrowRight({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// Filled star, as on the menu board. Colour via fill/stroke props.
export function Star({
  className,
  fill = "var(--color-rotan)",
  stroke = "var(--color-kopi)",
  label,
}: P & { fill?: string; stroke?: string; label?: string }) {
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
      {...a11y}
      focusable={false}
      fill={fill}
      stroke={stroke}
      strokeWidth={1.6}
      strokeLinejoin="round"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}
