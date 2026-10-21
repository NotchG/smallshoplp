// Authored 24px icons, one stroke weight (2px, round). Decorative: the button text carries the meaning.
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

export function PinIcon() {
  return (
    <svg {...base}>
      <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...base}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.2a8.5 8.5 0 1 1 15.5-4.7Z" />
      <path d="M9 10.5h6M9 13.5h3.5" />
    </svg>
  );
}
