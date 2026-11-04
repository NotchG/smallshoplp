import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// A link styled as a button. 52px tall; primary = tinta fill, secondary = 2px tinta border.
// On the green field the primary turns papan with tinta text.
export default function ActionButton({
  href,
  children,
  variant = "primary",
  ground = "light",
  external = false,
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ground?: "light" | "green";
  external?: boolean;
  mockup?: boolean;
  className?: string;
}) {
  const classes = [
    "btn",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    ground === "green" ? "btn-green" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {children}
    </a>
  );
}
