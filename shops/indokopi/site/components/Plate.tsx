import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type PlateVariant = "yellow" | "white" | "blue" | "night" | "struck";

// A road-sign plate: rounded, with the sign's inset border line (two inset box-shadows).
// `head` makes it an inline heading plate whose border scales with the type.
export default function Plate({
  as: Tag = "div",
  variant = "yellow",
  head = false,
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  variant?: PlateVariant;
  head?: boolean;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) {
  return (
    <Tag className={`plate plate-${variant} ${head ? "plate-head" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
