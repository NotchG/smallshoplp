import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// Primary: amber fill, navy text and border. Secondary: outline in cream (navy on cream grounds).
export default function Button({
  href,
  variant = "primary",
  mockup,
  className = "",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...mock(mockup)}>
      {children}
    </a>
  );
}
