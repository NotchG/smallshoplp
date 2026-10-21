import type { ReactNode } from "react";
import Icon from "./Icon";

// A painted sign label (not interactive): the white "GARAGE" plate and the green "ROOFTOP ↑" sign.
export default function Plate({
  variant,
  arrow = false,
  className = "",
  children,
}: {
  variant: "garage" | "rooftop";
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={`plate plate-${variant} ${className}`}>
      {children}
      {arrow && <Icon name="up" strokeWidth={3} />}
    </span>
  );
}
