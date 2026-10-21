import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Pill link, 48px tall. Variant colours from design brief §3:
// light grounds (fascia, batu): primary = garasi fill, secondary = garasi outline;
// dark grounds (garasi, tembok): primary = fascia fill, secondary = batu outline.
export default function ActionButton({
  href,
  children,
  icon,
  variant = "primary",
  ground = "light",
  external = true,
  mockup,
  ariaLabel,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  ground?: "light" | "dark";
  external?: boolean;
  mockup?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}-${ground} ${className}`}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...mock(mockup)}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
