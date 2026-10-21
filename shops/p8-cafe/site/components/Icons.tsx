// Button icons: one 2px stroke, round caps, 24px grid, currentColor.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function IconPin() {
  return (
    <svg {...base}>
      <path d="M12 21.5s-7-6.1-7-11.6A7 7 0 0 1 19 9.9c0 5.5-7 11.6-7 11.6z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg {...base}>
      <path d="M4.2 20.2l1.3-4A8.3 8.3 0 1 1 8.3 19z" />
      <path d="M9.3 8.6c.3-.6.8-.6 1.1 0l.6 1.4c.1.3 0 .6-.2.8l-.5.5a6 6 0 0 0 2.4 2.4l.5-.5c.2-.2.5-.3.8-.2l1.4.6c.6.3.6.8 0 1.1-.7.5-1.6.6-2.4.3a8 8 0 0 1-4-4c-.3-.8-.2-1.7.3-2.4z" strokeWidth="1.5" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...base}>
      <path d="M5.2 3.5h3.2l1.6 4.1-2.1 1.5a11.5 11.5 0 0 0 5 5l1.5-2.1 4.1 1.6v3.2a2 2 0 0 1-2.1 2A16.4 16.4 0 0 1 3.2 5.6a2 2 0 0 1 2-2.1z" />
    </svg>
  );
}
