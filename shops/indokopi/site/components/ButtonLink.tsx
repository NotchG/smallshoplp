import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";
import { mock } from "@/lib/mockup";

// Primary = sign-yellow. Ghost buttons are outlined in the ground's text colour.
// Hover/press feedback is CSS only (.btn in globals.css).
export default function ButtonLink({
  href,
  variant = "primary",
  onLight = false,
  external = false,
  icon,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost-light" | "ghost-dark";
  onLight?: boolean;
  external?: boolean;
  icon?: IconName;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${onLight ? "on-light" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...mock(mockup)}
    >
      {icon && <Icon name={icon} />}
      {children}
      {external && <span className="sr-only"> (tab baru)</span>}
    </a>
  );
}
