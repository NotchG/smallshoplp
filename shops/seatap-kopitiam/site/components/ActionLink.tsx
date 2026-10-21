import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

type Variant = "primary" | "ghost" | "dark";

// An <a> styled as a button: ≥48px tall, square corners like the wall's tiles.
// External links open in a new tab; tel: links stay in place.
export default function ActionLink({
  href,
  children,
  sub,
  variant = "primary",
  mockup,
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  sub?: string;
  variant?: Variant;
  mockup?: boolean;
  className?: string;
  icon?: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`action action-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon}
      <span>{children}</span>
      {sub ? <span className="action-sub">{sub}</span> : null}
    </a>
  );
}
