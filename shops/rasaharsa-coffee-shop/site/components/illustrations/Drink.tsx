import type { ReactNode } from "react";

// Shared frame for the four drinks: same viewBox, same baseline (y 165), same flat shadow.
// `scale` brings each drink to about the same drawn height, so the shelf reads as a row of equals.
export default function Drink({ label, scale = 1, children }: { label: string; scale?: number; children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 170" className="drink-art" role="img" aria-label={label} focusable="false">
      <ellipse className="i-shadow" cx="60" cy="165" rx="38" ry="4.5" />
      <g transform={`translate(60 165) scale(${scale}) translate(-60 -165)`}>{children}</g>
    </svg>
  );
}
