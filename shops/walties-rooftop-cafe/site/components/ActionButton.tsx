import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

type Variant = "primary" | "secondary" | "onBrick";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  onBrick: "btn-onbrick",
};

// Links styled as buttons, ≥ 48px tall. External links open in a new tab.
export default function ActionButton({
  href,
  variant = "primary",
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn ${variantClass[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...mock(mockup)}
    >
      {children}
    </a>
  );
}
