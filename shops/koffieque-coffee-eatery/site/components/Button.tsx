import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import { labels } from "@/content";

// Square buttons (radius 2px), at least 48px tall. Hover: underlay opacity fade (150ms).
// Press: 1px nudge. `placeholder` renders a non-focusable, aria-disabled stand-in
// (used for WhatsApp until the owner sends a number).
export default function Button({
  children,
  href,
  variant = "solid",
  tone = "light",
  placeholder = false,
  mockup,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  tone?: "light" | "dark";
  placeholder?: boolean;
  mockup?: boolean;
  className?: string;
}) {
  const cls = `btn btn-${variant} btn-${tone} ${className}`;
  if (placeholder || !href) {
    return (
      <span role="link" aria-disabled="true" className={`${cls} btn-placeholder`} {...mock(mockup)}>
        <span>{children}</span>
        <span className="btn-sub">{labels.whatsappPending}</span>
      </span>
    );
  }
  return (
    <a href={href} className={cls} {...mock(mockup)}>
      {children}
    </a>
  );
}
