import type { Item } from "@/content";
import { mock } from "@/lib/mockup";

// A paper label stuck on the edge of its own photo: name (700) and price (500, crust),
// 8px apart. Use inside a ProductPhoto's <figcaption>.
export default function PriceCard({
  name,
  price,
  edge = "bottom",
  as: NameTag = "span",
  className = "",
}: {
  name: Item;
  price?: Item;
  edge?: "bottom" | "top";
  as?: "span" | "h3";
  className?: string;
}) {
  return (
    <div className={`price-card ${edge === "top" ? "price-card--top" : ""} ${className}`}>
      <NameTag className="price-name" {...mock(name.mockup)}>
        {name.text}
      </NameTag>
      {price && (
        <span className="price-value tabular" {...mock(price.mockup)}>
          {price.text}
        </span>
      )}
    </div>
  );
}
