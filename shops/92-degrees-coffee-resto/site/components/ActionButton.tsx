import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

type Variant = "primary" | "outline-light" | "outline-dark";

// An <a> styled as a button: 48px tall, CSS-only hover overlay and press scale.
export default function ActionButton({
  href,
  children,
  icon,
  variant = "primary",
  mockup,
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  mockup?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
