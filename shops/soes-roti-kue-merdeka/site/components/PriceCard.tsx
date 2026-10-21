import type { ElementType } from "react";
import type { Product } from "@/content";
import { mock } from "@/lib/mockup";

// "100 gram · Rp 21.000" for weights, "Rp 7.000 / biji" for units, the bare price otherwise.
export function priceLine(p: Product) {
  if (p.price && p.unit) return /\d/.test(p.unit) ? `${p.unit} · ${p.price}` : `${p.price} / ${p.unit}`;
  return p.price ?? p.unit ?? null;
}

// The shop's white price card. Inside a ProductFigure it is the figcaption and overlaps the
// drawing by 12px; standalone it carries its own mockup flag.
export default function PriceCard({
  p,
  as: Tag = "figcaption",
  standalone = false,
  className = "",
}: {
  p: Product;
  as?: ElementType;
  standalone?: boolean;
  className?: string;
}) {
  const line = priceLine(p);
  return (
    <Tag
      className={`price-card ${standalone ? "is-standalone" : ""} ${className}`}
      {...(standalone ? mock(p.mockup) : {})}
    >
      <span className="price-name">{p.name}</span>
      {line && (
        <span className="price-line" {...mock(p.priceMockup)}>
          {line}
        </span>
      )}
    </Tag>
  );
}
