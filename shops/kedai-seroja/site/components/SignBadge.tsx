import type { ElementType } from "react";
import { shop } from "@/content";

// The red KEDAI SEROJA sign from the gable: a rounded trapezoid with an inset white outline.
// The sign shape is decoration (aria-hidden); the name on top is live text.
const OUTER =
  "M44 0H556Q600 0 593.95 43.58L556.05 316.42Q550 360 506 360H94Q50 360 43.95 316.42L6.05 43.58Q0 0 44 0Z";
const INNER =
  "M48.67 18H551.33Q579.33 18 575.48 45.73L538.17 314.27Q534.32 342 506.32 342H93.68Q65.68 342 61.83 314.27L24.52 45.73Q20.67 18 48.67 18Z";

export default function SignBadge({
  size = "hero",
  as: Tag = "span",
  id,
}: {
  size?: "hero" | "mini";
  as?: ElementType;
  id?: string;
}) {
  return (
    <Tag id={id} className={`sign sign-${size}`}>
      <svg viewBox="0 0 600 360" aria-hidden focusable="false">
        <path d={OUTER} fill="var(--color-merah)" />
        <path d={INNER} fill="none" stroke="var(--color-putih)" strokeWidth={size === "mini" ? 12 : 7} />
      </svg>
      {/* One text node on two lines (pre-line), so the accessible name reads "Kedai Seroja". */}
      <span className="sign-text">{`${shop.nameLines[0]}\n${shop.nameLines[1]}`}</span>
    </Tag>
  );
}
