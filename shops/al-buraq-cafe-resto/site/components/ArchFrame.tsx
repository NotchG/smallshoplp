import type { ReactNode } from "react";

// A round-topped arch like the wall niches in their main room (photo-3).
// CSS only: border-radius on a fixed-aspect box, overflow hidden. No clip-path polygons.
export default function ArchFrame({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return <div className={`arch relative bg-niche ${className}`}>{children}</div>;
}
