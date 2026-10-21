import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";
import type { Item } from "@/content";

// Solid block buttons, min 56px tall, 6px radius. Hover and press are plain CSS (150ms).
export default function Button({
  href,
  variant = "ink",
  icon,
  label,
  sub,
  external = false,
  className = "",
}: {
  href: string;
  variant?: "ink" | "paper" | "outline-light";
  icon?: ReactNode;
  label: Item;
  sub?: Item;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      <span className="btn-label">
        <span {...mock(label.mockup)}>{label.text}</span>
        {sub && (
          <span className="btn-sub" {...mock(sub.mockup)}>
            {sub.text}
          </span>
        )}
      </span>
    </a>
  );
}
