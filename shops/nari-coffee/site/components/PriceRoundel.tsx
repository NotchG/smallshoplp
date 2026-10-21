import type { Price } from "@/content";
import { mock } from "@/lib/mockup";

// The window poster circles its prices; so does the page. Always an example price for now.
export default function PriceRoundel({
  price,
  tone = "onPaper",
  className = "",
}: {
  price: Price;
  tone?: "onPaper" | "onCobalt";
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={price.label}
      className={`roundel roundel-${tone} ${className}`}
      {...mock(price.mockup)}
    >
      <span aria-hidden="true">
        {price.short}
        <small>rb</small>
      </span>
    </span>
  );
}
