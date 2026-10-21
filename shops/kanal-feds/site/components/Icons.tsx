// One authored icon set: 24px grid, 1.75 stroke, square caps and mitred joins,
// after the shop's rectilinear furniture and logo. Decorative: always aria-hidden.
const base = {
  width: 24,
  height: 24,
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
      <path d="M12 21s-6.5-5.8-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.2 12 21 12 21z" />
      <rect x="10" y="7.8" width="4" height="4" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...base}>
      <path d="M4 4.5h16v11.5H9.5L4 20.5z" />
      <path d="M8.5 9h7M8.5 12h4.5" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg {...base}>
      <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
    </svg>
  );
}
