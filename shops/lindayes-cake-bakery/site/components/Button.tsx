import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import { newTab } from "@/content";

// primary-light: awning fill, glass text (glass and blush grounds).
// primary-dark: sign fill, fascia text (fascia and teal grounds).
// secondary: outline in the current text colour.
type Variant = "primary-light" | "primary-dark" | "secondary";

export default function Button({
  href,
  variant,
  icon,
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant: Variant;
  icon?: ReactNode;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  // External links say so to screen readers; the visible label stays at the start of the name.
  const label = external && typeof children === "string" ? `${children} ${newTab}` : undefined;
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`.trim()}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      aria-label={label}
      {...mock(mockup)}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
