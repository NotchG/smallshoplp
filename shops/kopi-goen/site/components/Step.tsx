import type { ReactNode } from "react";

// One step of the garden's concrete tribune (photo-3): lit tread edge, the strip light under
// the nosing, and the warm wash it throws down the riser. Content sits on the riser face.
// `light` names the strip and wash for the hero's "lampu menyala" timeline.
export default function Step({
  children,
  light,
  className = "",
  faceClassName = "",
}: {
  children: ReactNode;
  light?: "lower" | "upper";
  className?: string;
  faceClassName?: string;
}) {
  return (
    <div className={`step ${className}`}>
      <div className="step-tread" aria-hidden="true" />
      <div className="step-strip" aria-hidden="true" data-light={light ? `strip-${light}` : undefined} />
      <div className="step-wash" aria-hidden="true" data-light={light ? `wash-${light}` : undefined} />
      <div className={`step-face ${faceClassName}`}>{children}</div>
    </div>
  );
}
