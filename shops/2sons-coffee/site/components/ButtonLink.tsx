import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// 48px tall link-button. Primary: tinta fill. Secondary: 1.5px tinta border.
// Hover is an overlay pseudo-element on opacity; press nudges 1px (CSS only).
export default function ButtonLink({
  href,
  variant = "primary",
  external = false,
  grow = false,
  mockup,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  grow?: boolean;
  mockup?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn--${variant}${grow ? " btn--grow" : ""}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {children}
    </a>
  );
}
