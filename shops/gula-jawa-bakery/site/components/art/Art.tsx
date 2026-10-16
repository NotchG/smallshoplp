import type { ReactNode } from "react";
import { art, artIsMockup, type ArtId } from "@/content";
import { mock } from "@/lib/mockup";

// Shared <svg> wrapper: role="img" with an Indonesian <title>, flagged as a mockup
// (every illustration is a placeholder for an owner photo).
export default function Art({
  id,
  viewBox,
  className = "",
  children,
}: {
  id: ArtId;
  viewBox: string;
  className?: string;
  children: ReactNode;
}) {
  const title = art[id].title;
  return (
    <svg viewBox={viewBox} role="img" aria-label={title} className={className} {...mock(artIsMockup)}>
      <title>{title}</title>
      {children}
    </svg>
  );
}
