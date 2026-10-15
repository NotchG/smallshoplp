import type { ElementType, ReactNode } from "react";

// Full-bleed fluted-walnut ground (design brief §3). Content goes inside a <Container>.
export default function SlatField({
  as: Tag = "section",
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <Tag className={`slat on-walnut ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
