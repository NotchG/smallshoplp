import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Primary = brick, secondary = brick outline. 48px tall; hover lift + overlay (globals.css).
export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  mockup,
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  mockup?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
