import type { ReactNode } from "react";

// A flat arched recess in the plaster (no border, no shadow). Holds one drawing.
// The drawings stand in for photos, so the niche carries data-mockup.
export default function Niche({
  wide = false,
  mockup = true,
  className = "",
  children,
}: {
  wide?: boolean;
  mockup?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`niche ${wide ? "niche-wide" : ""} ${className}`} {...(mockup ? { "data-mockup": "" } : {})}>
      {children}
    </div>
  );
}
