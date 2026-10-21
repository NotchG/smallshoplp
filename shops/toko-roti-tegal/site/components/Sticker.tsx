import type { CSSProperties, ReactNode } from "react";

// A white handwritten flavour label, like the ones staff press onto each bag.
export default function Sticker({
  children,
  tilt = -3,
  className = "",
}: {
  children: ReactNode;
  tilt?: number;
  className?: string;
}) {
  return (
    <span className={`sticker ${className}`} style={{ "--tilt": `${tilt}deg` } as CSSProperties}>
      {children}
    </span>
  );
}
