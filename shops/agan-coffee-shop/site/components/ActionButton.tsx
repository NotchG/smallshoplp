import type { ReactNode } from "react";

// A real link styled as a button. Hover: an overlay fades in (180ms). Press: scale(0.98) (150ms).
export default function ActionButton({
  href,
  children,
  variant = "primary",
  ground = "concrete",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ground?: "concrete" | "awning";
  className?: string;
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn btn-${variant} btn-${ground} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
