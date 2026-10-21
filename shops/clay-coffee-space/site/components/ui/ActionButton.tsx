import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// 48px pill link. Primary: lampu fill, malam text. Secondary: 1.5px bingkai outline.
export default function ActionButton({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
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
