import type { ElementType, ReactNode } from "react";

// The black steel-framed glass partition: one grid, baja background, mullions are the gap.
// Panes are flat glass: no radius, shadow or border of their own.
export function SteelFrame({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={`steel-frame ${className}`}>{children}</Tag>;
}

export function Pane({
  as: Tag = "div",
  tone = "dinding",
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  tone?: "dinding" | "marmer";
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  return (
    <Tag className={`pane pane-${tone} ${tone === "marmer" ? "on-dark" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
