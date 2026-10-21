import type { ElementType, ReactNode } from "react";

// Centres content at the max content width from the design brief (--container),
// with the page margins (--gutter). Full-bleed backgrounds go on the parent, not here.
export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={`container-page ${className}`}>{children}</Tag>;
}
