import type { ReactNode } from "react";
import { mock } from "@/lib/mockup";

// One link style for every action: solid putih (primary on dark), outline putih, or a full-width arang plate.
export default function ActionButton({
  href,
  variant,
  children,
  mockup,
  className = "",
  ariaLabel,
}: {
  href: string;
  variant: "solid" | "outline" | "plate";
  children: ReactNode;
  mockup?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a href={href} aria-label={ariaLabel} className={`btn btn-${variant} ${className}`} {...mock(mockup)}>
      {children}
    </a>
  );
}

// Small authored arrow for the contact plates (2px stroke, matches the line drawings).
export function Arrow() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-none">
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}
