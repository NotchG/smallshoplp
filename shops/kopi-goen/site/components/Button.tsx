import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

type Variant = "primary" | "outline" | "dark";

// Links styled as buttons: 48px tall. primary = lampu fill, outline = beton line on night,
// dark = arang fill on beton grounds. Hover overlay and press scale live in globals.css.
export default function Button({
  href,
  children,
  icon,
  variant = "primary",
  external = false,
  mockup,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
