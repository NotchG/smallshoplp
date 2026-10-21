import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import { mock } from "@/lib/mockup";

// primary: biru/putih · secondary: krim + 2px biru border · onBlue: putih/biru. ≥52px tall.
export default function ActionButton({
  href,
  variant = "primary",
  icon,
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary" | "onBlue";
  icon?: IconName;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...ext} {...mock(mockup)}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </a>
  );
}
