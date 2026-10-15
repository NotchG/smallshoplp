import type { AnchorHTMLAttributes, ReactNode } from "react";

// Link styled as a button. primary = jendela on light grounds / lampu inside .field-dark;
// secondary = 1.5px outline. 48px tall, 6px radius, overlay-opacity hover (CSS in globals.css).
export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...rest}>
      {children}
    </a>
  );
}
