import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Authored icons, one stroke weight (1.75) on a 24 grid.
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const icons = {
  directions: (
    <svg {...iconProps}>
      <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" />
      <path d="M9 14.5V12a1.5 1.5 0 0 1 1.5-1.5H15" />
      <path d="m13 8.5 2 2-2 2" />
    </svg>
  ),
  chat: (
    <svg {...iconProps}>
      <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M6.5 3.5h2.8l1.4 4.2-2 1.3a10.5 10.5 0 0 0 6.3 6.3l1.3-2 4.2 1.4v2.8a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  ),
  external: (
    <svg {...iconProps} width={16} height={16}>
      <path d="M8 16 16 8M10 8h6v6" />
    </svg>
  ),
};

export default function Button({
  href,
  variant = "primary",
  icon,
  children,
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  variant?: "primary" | "secondary";
  icon?: keyof typeof icons;
  children: ReactNode;
  external?: boolean;
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon ? icons[icon] : null}
      <span>{children}</span>
    </a>
  );
}
