import type { ReactNode } from "react";

type Variant = "solid" | "amber" | "outline" | "outline-dark";

// Links styled as buttons. Min height 48px; hover/press per motion rules (150ms, CSS only).
export default function Button({
  href,
  variant = "solid",
  icon,
  external = false,
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & { [key: `data-${string}`]: string | undefined }) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

// One small authored icon set: 24px grid, 2px stroke, round joins.
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

export function IconPin() {
  return (
    <svg {...base}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg {...base}>
      <path d="M4.5 19.5l1.2-3.6A7.8 7.8 0 1 1 8.6 18.6z" />
      <path d="M9 10.2c.4 1.8 2 3.4 3.8 3.9l1.2-1.1 1.8.8" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...base}>
      <path d="M5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}
