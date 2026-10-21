import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// A link styled as a button, at least 48px tall. Variants: lampu (filled) and outline.
export default function ActionButton({
  href,
  children,
  icon,
  variant = "lampu",
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "lampu" | "outline";
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
      {icon}
      <span>{children}</span>
    </a>
  );
}
