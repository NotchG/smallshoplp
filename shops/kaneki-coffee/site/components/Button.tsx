import type { AnchorHTMLAttributes, ReactNode } from "react";
import Icon, { type IconName } from "@/components/Icon";

// A link styled as a button. Primary: Kanopi fill (Dinding on Kanopi fields).
// Secondary: 1.5px outline. Hover overlay and press scale live in globals.css.
export default function Button({
  href,
  variant = "primary",
  icon,
  external = false,
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: "primary" | "secondary";
  icon?: IconName;
  external?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </a>
  );
}
