import type { ReactNode } from "react";

type Variant = "primary-dark" | "secondary-dark" | "primary-light";
type Icon = "pin" | "chat" | "phone";

// One stroke family for every icon: 24px grid, 2px round strokes.
function ButtonIcon({ name }: { name: Icon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "pin")
    return (
      <svg {...common}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  if (name === "chat")
    return (
      <svg {...common}>
        <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" />
        <path d="M9 10.5h6M9 13.5h3.5" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M6.6 3.5h2.6l1.4 4-2 1.3a10.5 10.5 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export default function Button({
  href,
  variant,
  icon,
  external = false,
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant: Variant;
  icon?: Icon;
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
      {icon && <ButtonIcon name={icon} />}
      <span>{children}</span>
    </a>
  );
}
