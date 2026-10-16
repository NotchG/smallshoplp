import type { ReactNode } from "react";

// Primary / secondary per ground (design brief §3). The ground's colours come from the
// .ground-* class on the section, so the same component works on lemon, white, brick and ink.
export default function ButtonLink({
  href,
  variant = "primary",
  icon,
  external,
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
