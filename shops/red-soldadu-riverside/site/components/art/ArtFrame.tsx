import type { ReactNode } from "react";

// Shared 200×200 frame. Every drawing stands on the bottom edge (y = 200), so a row of
// them sits on one rail ledge. Six tokens only, flat, no gradients.
export default function ArtFrame({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={label} className={className}>
      {children}
    </svg>
  );
}
