import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import { mock } from "@/lib/mockup";

// An action styled as a sign plate. Green = the main action, white = the others.
export default function PlateButton({
  href,
  variant = "green",
  bordered = false,
  icon = "right",
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "green" | "white";
  bordered?: boolean;
  icon?: IconName;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${bordered ? "btn-bordered" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      <span>{children}</span>
      <Icon name={icon} />
    </a>
  );
}
