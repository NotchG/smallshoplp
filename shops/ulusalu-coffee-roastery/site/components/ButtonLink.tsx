import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "inverted" | "ghost-dark";

// Link styled as a button. Min height 48px (44px for the compact nav size).
// Colour swaps instantly on hover; only the 1px lift and the press scale transition.
export default function ButtonLink({
  variant = "solid",
  icon,
  compact = false,
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  icon?: ReactNode;
  compact?: boolean;
  children: ReactNode;
  "data-mockup"?: string;
}) {
  return (
    <a
      className={`btn btn-${variant} ${compact ? "btn-compact" : ""} ${className}`}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
