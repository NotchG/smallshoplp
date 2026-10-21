import type { ReactNode } from "react";

// On limau: "ink" (tinta fill) or "line" (2px tinta outline). On tinta: "limau".
// `placeholder` = dashed border and data-mockup, for actions still waiting on the owner.
export default function ActionButton({
  href,
  variant = "ink",
  placeholder = false,
  external = false,
  ariaLabel,
  children,
  className = "",
}: {
  href: string;
  variant?: "ink" | "line" | "limau";
  placeholder?: boolean;
  external?: boolean;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${placeholder ? "btn-placeholder" : ""} ${className}`}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(placeholder ? { "data-mockup": "" } : {})}
    >
      {children}
    </a>
  );
}
