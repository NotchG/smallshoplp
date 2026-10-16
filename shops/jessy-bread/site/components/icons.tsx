// Two authored icons, one stroke weight (2px, round caps). Decorative: the button text names the action.
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

export function PhoneIcon() {
  return (
    <svg {...base}>
      <path d="M6.6 3.5h2.6l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 6.2 6.2l1.4-2.1 4.2 1.6v2.6a2.2 2.2 0 0 1-2.4 2.2C10.9 19 5 13.1 4.4 5.9a2.2 2.2 0 0 1 2.2-2.4Z" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg {...base}>
      <path d="M12 21s-6.5-5.6-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </svg>
  );
}
