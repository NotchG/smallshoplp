import type { Product } from "@/content";
import { mock } from "@/lib/mockup";
import Illustration from "@/components/illustrations";
import PriceTag from "@/components/PriceTag";

// A travertine tray with one bagged bun; the tag overlaps the tray's lower-left edge,
// so it touches the bun it prices.
export default function TrayCard({ product }: { product: Product }) {
  return (
    <li className="flex flex-col" {...mock(product.mockup)}>
      <div className="tray tray-card">
        <Illustration id={product.illustration} className="tray-art" />
      </div>
      <PriceTag product={product} className="tray-tag" />
      {product.note && (
        <p className="t-small mt-3 pl-3 font-medium" {...mock(product.note.mockup)}>
          {product.note.text}
        </p>
      )}
    </li>
  );
}
