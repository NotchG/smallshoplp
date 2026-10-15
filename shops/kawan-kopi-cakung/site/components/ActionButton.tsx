import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Real links styled as 52px buttons. primary = matahari ("do this"), ghost = outline in currentColor.
export default function ActionButton({
  href,
  label,
  children,
  variant = "primary",
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  label?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...mock(mockup)}
    >
      {children}
    </a>
  );
}
