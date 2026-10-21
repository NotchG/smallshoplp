// Authored line icons, one 2px stroke, round joins. Decorative: buttons carry text labels.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconDirections() {
  return (
    <svg {...base}>
      <path d="M12 2.5 21.5 12 12 21.5 2.5 12Z" />
      <path d="M9 14v-2.5a1.5 1.5 0 0 1 1.5-1.5H15" />
      <path d="m13 8 2 2-2 2" />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg {...base}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.4 7.5L3.5 20.5l1.4-4.4A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M9 10.2c.3 1.6 2.2 3.6 4 4.1" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg {...base} width={28} height={28}>
      <path d="M12 21.5s-7-6.1-7-11.5a7 7 0 0 1 14 0c0 5.4-7 11.5-7 11.5Z" />
      <circle cx={12} cy={10} r={2.5} />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...base}>
      <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 5.2 5.2l1.4-2.1 4.2 1.6V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5Z" />
    </svg>
  );
}
