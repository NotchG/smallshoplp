import type { ReactNode } from "react";
import { Art, C, Shadow, type ArtProps } from "./Art";

// Elud's printed plastic bag: a translucent pouch with a brick-over-lemon band and a
// crimped end. Only the bun inside changes.
export default function Bag({
  label,
  children,
  ...props
}: ArtProps & { label: string; children: ReactNode }) {
  return (
    <Art label={label} {...props}>
      <Shadow cy={157} rx={98} />
      {children}
      <rect x="22" y="36" width="186" height="116" rx="30" fill={C.white} fillOpacity={0.45} />
      <rect x="56" y="36" width="24" height="116" fill={C.lemon} fillOpacity={0.9} />
      <rect x="63" y="36" width="10" height="116" fill={C.brick} fillOpacity={0.85} />
      <path d="M204 48h14a6 6 0 0 1 6 6v84a6 6 0 0 1-6 6h-14z" fill={C.white} fillOpacity={0.7} />
      <rect x="210" y="50" width="2" height="92" fill={C.ink} fillOpacity={0.08} />
      <path d="M82 50c34-7 70-7 104-2" stroke={C.white} strokeOpacity={0.85} strokeWidth={6} strokeLinecap="round" fill="none" />
    </Art>
  );
}
