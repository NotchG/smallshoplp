import type { ReactNode } from "react";
import type { Product } from "@/content";
import { mock } from "@/lib/mockup";
import PriceCard from "@/components/PriceCard";

// The only way products are placed: drawing + its own price card right under it.
export default function ProductFigure({
  p,
  children,
  illusClassName = "",
  className = "",
  cardClassName = "",
}: {
  p: Product;
  children: ReactNode;
  illusClassName?: string;
  className?: string;
  cardClassName?: string;
}) {
  return (
    <figure className={`product-figure ${className}`} {...mock(p.mockup)}>
      <div className={`illus ${illusClassName}`}>{children}</div>
      <PriceCard p={p} className={cardClassName} />
    </figure>
  );
}
