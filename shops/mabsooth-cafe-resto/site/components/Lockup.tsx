import type { ElementType } from "react";
import { shop } from "@/content";

// The bar sign: MABSOOTH / مبسوط / CAFE & RESTO. In the hero it is the h1, whose accessible
// name reads "Mabsooth Cafe & Resto" (the Arabic line is aria-hidden).
export default function Lockup({
  size = "hero",
  as: Tag = size === "hero" ? "h1" : "div",
  className = "",
}: {
  size?: "hero" | "small";
  as?: ElementType;
  className?: string;
}) {
  if (size === "hero") {
    return (
      <Tag className={`lockup lockup-hero t-display text-center ${className}`}>
        <span className="lockup-word block font-display t-display uppercase text-gold">{shop.wordmark}</span>{" "}
        <span lang="ar" dir="rtl" aria-hidden="true" className="lockup-ar block font-display text-gold">
          {shop.arabic}
        </span>{" "}
        <span className="lockup-sub block t-caps text-rattan">{shop.sub}</span>
      </Tag>
    );
  }
  return (
    <Tag className={`lockup lockup-small ${className}`}>
      <span className="flex items-baseline gap-3">
        <span className="lockup-small-word font-display uppercase">{shop.wordmark}</span>{" "}
        <span lang="ar" dir="rtl" aria-hidden="true" className="lockup-small-ar font-display">
          {shop.arabic}
        </span>
      </span>{" "}
      <span className="lockup-small-sub block t-caps t-small">{shop.sub}</span>
    </Tag>
  );
}
