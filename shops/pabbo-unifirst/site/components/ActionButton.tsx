import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icons";
import { mock } from "@/lib/mockup";

// The page's actions are links styled as buttons, at least 48px tall.
// primary: red P fill with line-white text. outline: 2px border in the current colour.
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
  variant?: "primary" | "outline";
  icon?: IconName;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon ? <Icon name={icon} /> : null}
      <span>{children}</span>
    </a>
  );
}
