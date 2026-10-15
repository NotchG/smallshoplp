import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// An <a> styled as a button: 48px tall, hover fill on ::before (globals.css .btn).
// light = primary on walnut, steel = primary on plaster, outline = secondary on either.
export default function ActionButton({
  href,
  variant,
  external = false,
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant: "light" | "steel" | "outline";
  external?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {children}
    </a>
  );
}
