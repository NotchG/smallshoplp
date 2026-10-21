import type { ReactNode } from "react";

// Kayu ground with the static pine-plank texture. Holds one or more sections.
export default function WoodField({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`wood-field ground-kayu ${className}`}>{children}</div>;
}
