import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// <a> styled as a 48px square-cornered button. Variant × ground picks the colours
// (globals.css .btn-*). Hover fades a ::after tint; press scales to 0.98.
export default function ButtonLink({
  href,
  children,
  variant = "solid",
  ground = "light",
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  ground?: "light" | "dark";
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`btn btn-${variant}-${ground} ${className}`} {...mock(mockup)}>
      {children}
    </a>
  );
}
