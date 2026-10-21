import type { ReactNode } from "react";

type Variant = "primary-light" | "outline-light" | "primary-dark" | "outline-dark";

// A link that looks like a button: 48px tall, hover overlay, press scale (plain CSS).
// External links (directions, maps) open in a new tab; WhatsApp and tel: open in place.
export default function ActionButton({
  href,
  variant,
  external = false,
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Record<`data-${string}`, string | undefined>) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
