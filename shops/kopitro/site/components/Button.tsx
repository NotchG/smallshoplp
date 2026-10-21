import type { ReactNode } from "react";

// Variants from the TRD: solid-kayu (on malam), solid-malam (on kayu), outline (any ground).
// Min height 48px; hover overlay via ::after opacity; press nudge 1px. Styles in globals.css.
export default function Button({
  href,
  variant,
  external = false,
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant: "solid-kayu" | "solid-malam" | "outline";
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Record<`data-${string}`, string>) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
