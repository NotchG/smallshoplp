import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// <a> styled as a button: primary (filled) or secondary (2px border). 48px tall, square corners.
// Colours flip automatically inside an .on-dark ground.
export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "card";
  icon?: ReactNode;
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...mock(mockup)}>
      {icon}
      <span>{children}</span>
    </a>
  );
}
