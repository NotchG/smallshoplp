import type { ReactNode } from "react";

// The pavilion's arched window: semicircle top on any width, 8px feet, 3:4 unless `map`.
export default function ArchFrame({
  children,
  className = "",
  shapeClassName = "",
  map = false,
}: {
  children: ReactNode;
  className?: string;
  shapeClassName?: string;
  map?: boolean;
}) {
  return (
    <div className={`arch ${className}`}>
      <div className={`arch-shape ${map ? "arch-map" : ""} ${shapeClassName}`}>{children}</div>
    </div>
  );
}
