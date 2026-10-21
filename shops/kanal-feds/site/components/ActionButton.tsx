import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Primary: palm fill, chalk text. Secondary: 2px palm outline, palm text. 48px tall, 2px radius.
export default function ActionButton({
  href,
  variant = "primary",
  icon,
  external = false,
  mockup,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  mockup?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...mock(mockup)}
    >
      {icon}
      {children}
    </a>
  );
}
