import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Primary: rust fill with cream text (ochre fill with steel text on steel and rust grounds).
// Secondary: 2px outline in the ground's text colour. Min height 48px.
export default function ActionButton({
  href,
  variant = "primary",
  external = false,
  ariaLabel,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  ariaLabel?: string;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ext = external ? { target: "_blank", rel: "noopener" } : {};
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      aria-label={ariaLabel}
      {...ext}
      {...mock(mockup)}
    >
      {children}
    </a>
  );
}
