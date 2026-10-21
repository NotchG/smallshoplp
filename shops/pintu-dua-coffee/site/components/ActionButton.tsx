import type { ReactNode } from "react";

// Counter-placard shaped link button: 10px top corners, 4px bottom. CSS-only hover tint and press.
export default function ActionButton({
  href,
  variant,
  children,
  external = false,
  className = "",
  ...rest
}: {
  href: string;
  variant: "lampu" | "line-dark" | "line-light";
  children: ReactNode;
  external?: boolean;
  className?: string;
  "data-mockup"?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
