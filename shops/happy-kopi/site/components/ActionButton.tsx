import { mock } from "@/lib/mockup";

type Variant = "primary" | "secondary" | "light" | "outline-light";
export type IconName = "pin" | "phone" | "chat" | "bag";

// One stroke family for every icon: 24px grid, 1.8 stroke, round caps and joins.
function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-6.5-5.8-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.2 12 21 12 21z" />
          <circle cx="12" cy="9.8" r="2.4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.7 3.5h2.4l1.5 4.1-2.1 1.4a11.5 11.5 0 0 0 6.5 6.5l1.4-2.1 4.1 1.5v2.4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.7 5.7a2 2 0 0 1 2-2.2z" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4.5 19.5l1.2-3.7A7.8 7.8 0 1 1 8.4 18.6z" />
          <path d="M9 11.5h.01M12 11.5h.01M15 11.5h.01" strokeWidth="2.4" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path d="M5.2 8.5h13.6l-1 11.5H6.2z" />
          <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
        </svg>
      );
  }
}

export default function ActionButton({
  href,
  label,
  icon,
  variant = "primary",
  mockup,
  className = "",
}: {
  href: string;
  label: string;
  icon: IconName;
  variant?: Variant;
  mockup?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${label} (membuka tab baru)` }
        : {})}
      {...mock(mockup)}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </a>
  );
}
