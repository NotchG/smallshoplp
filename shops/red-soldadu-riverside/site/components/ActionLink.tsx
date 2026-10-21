import type { ReactNode } from "react";
import { labels } from "@/content";
import { mock } from "@/lib/mockup";

// One shared, hidden description for every link that opens a new tab.
export const NEW_TAB_ID = "tab-baru";
export function NewTabNote() {
  return (
    <span id={NEW_TAB_ID} hidden>
      {labels.newTab}
    </span>
  );
}

type Variant = "primary" | "secondary-dark" | "secondary-light";
type Icon = "pin" | "chat" | "phone" | "external";

// One stroke weight for every icon (2px at 20px), drawn for this site.
function ActionIcon({ name }: { name: Icon }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6z" />
          <circle cx="12" cy="9.8" r="2.6" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.6-4.5A8.4 8.4 0 1 1 20.5 11.6z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5.8 3.5h3.1l1.6 4.1-2.1 1.5a11.6 11.6 0 0 0 6.5 6.5l1.5-2.1 4.1 1.6v3.1a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 3.8 5.7a2 2 0 0 1 2-2.2z" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 4h6v6" />
          <path d="M20 4l-9 9" />
          <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        </svg>
      );
  }
}

// An <a> styled as a button. External links open in a new tab and say so to screen readers.
export default function ActionLink({
  href,
  variant,
  icon,
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant: Variant;
  icon?: Icon;
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`action action-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener", "aria-describedby": NEW_TAB_ID } : {})}
      {...mock(mockup)}
    >
      {icon && <ActionIcon name={icon} />}
      <span>{children}</span>
    </a>
  );
}
