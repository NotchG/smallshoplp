import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import { mock } from "@/lib/mockup";

// A link styled as a 48px pill. primary = red with paper text; secondary = 2px outline
// in the ground's line colour (blue on paper, paper on dark grounds).
export default function Button({
  href,
  variant = "primary",
  icon,
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  icon?: IconName;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && <Icon name={icon} />}
      <span {...mock(mockup)}>{children}</span>
    </a>
  );
}
