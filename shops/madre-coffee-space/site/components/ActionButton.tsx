import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// A pill link. solid-ink on mustard and paper, outline-ink on mustard, solid-mustard on cobalt.
export default function ActionButton({
  href,
  children,
  variant = "solid-ink",
  mockup,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid-ink" | "outline-ink" | "solid-mustard";
  mockup?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...mock(mockup)}>
      {children}
    </a>
  );
}
