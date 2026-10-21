// Small line icons, one stroke weight (2) on a 24px grid. Decorative: the button text names the action.
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

export function IconDirections() {
  return (
    <svg {...base}>
      <path d="M3 11 21 3l-8 18-2-8-8-2Z" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...base}>
      <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19.2 19.2 0 0 1-5.9-5.9 19.5 19.5 0 0 1-3-8.6A2 2 0 0 1 3.4 2h3a2 2 0 0 1 2 1.7c.13.95.36 1.88.7 2.77a2 2 0 0 1-.45 2.1L7.4 9.8a16 16 0 0 0 5.9 5.9l1.27-1.27a2 2 0 0 1 2.1-.45c.89.34 1.82.57 2.77.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function IconArrowOut() {
  return (
    <svg {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg {...base}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
