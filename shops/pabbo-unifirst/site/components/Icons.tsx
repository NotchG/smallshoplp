// Three authored line icons, one stroke weight (2px on a 24 grid), for the action buttons.
export type IconName = "pin" | "phone" | "chat";

export default function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };
  if (name === "pin")
    return (
      <svg {...common}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.25" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M6.6 3.5h3l1.6 4.3-2.1 1.4a11.5 11.5 0 0 0 5.7 5.7l1.4-2.1 4.3 1.6v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4 5h16v11H10l-6 4.5V5Z" />
      <path d="M8.5 10.5h7" />
    </svg>
  );
}
