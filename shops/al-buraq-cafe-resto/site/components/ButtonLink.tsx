import type { ReactNode } from "react";

// primary: velvet fill, linen text · secondary: velvet 2px outline · onDark: plaster fill, velvet text.
// External links open in a new tab and say so in their accessible name (srText).
export default function ButtonLink({
  href,
  variant = "primary",
  external = false,
  srText,
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: "primary" | "secondary" | "onDark";
  external?: boolean;
  srText?: string;
  className?: string;
  children: ReactNode;
} & Record<`data-${string}`, string>) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...(srText && typeof children === "string" ? { "aria-label": `${children}${srText}` } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
