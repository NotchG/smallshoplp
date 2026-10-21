import type { ReactNode } from "react";

// A link that looks like a button. Primary: tinta fill. Secondary: 2px tinta border.
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: "map" | "phone" | "whatsapp";
  external?: boolean;
  className?: string;
  "data-mockup"?: string;
}) {
  return (
    <a
      href={href}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </a>
  );
}

// Authored 20px icons, one stroke weight.
function Icon({ name }: { name: "map" | "phone" | "whatsapp" }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };
  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M10 18s-5.5-5.2-5.5-9.3a5.5 5.5 0 0 1 11 0C15.5 12.8 10 18 10 18Z" />
        <circle cx="10" cy="8.6" r="2" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M6.6 2.8 4.3 3.4c-.8.2-1.3 1-1.2 1.8.9 6 5.7 10.8 11.7 11.7.8.1 1.6-.4 1.8-1.2l.6-2.3c.2-.7-.2-1.4-.8-1.7l-2.4-1c-.6-.3-1.3-.1-1.7.4l-.8 1a9 9 0 0 1-4-4l1-.8c.5-.4.7-1.1.4-1.7l-1-2.4c-.3-.6-1-1-1.7-.8Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M3.2 16.8 4.3 13a7.2 7.2 0 1 1 2.8 2.7l-3.9 1.1Z" />
      <path d="M7.6 7.4c.2 2.4 2.6 4.8 5 5l1-1.2-1.6-.9-.8.7a4 4 0 0 1-2.2-2.2l.7-.8-.9-1.6-1.2 1Z" />
    </svg>
  );
}
