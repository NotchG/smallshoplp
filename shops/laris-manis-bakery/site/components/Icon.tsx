// Three authored icons, one stroke weight (2px, round). Decorative: the button text names the action.
export type IconName = "whatsapp" | "pin" | "phone";

export default function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: "false" as const,
  };
  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M4.2 20.2l1.2-3.9A8.6 8.6 0 1 1 8.3 19z" />
        <path
          d="M9.1 8.3c.3-.5.9-.5 1.2 0l.7 1.3c.2.4.1.8-.2 1.1l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.3-.3.7-.4 1.1-.2l1.3.7c.5.3.5.9 0 1.2l-.6.5c-.6.4-1.4.5-2.1.2a8.4 8.4 0 0 1-4.4-4.4c-.3-.7-.2-1.5.2-2.1z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }
  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5.2 3.8h3.1l1.6 4-2 1.3a11 11 0 0 0 6.9 6.9l1.3-2 4 1.6v3.1a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 3.2 6a2 2 0 0 1 2-2.2z" />
    </svg>
  );
}
