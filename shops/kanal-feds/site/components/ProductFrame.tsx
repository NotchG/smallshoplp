import ProductIllustration from "@/components/Illustrations";
import type { Product } from "@/content";
import { menu } from "@/content";
import { mock } from "@/lib/mockup";

// Walnut slab frame (after the box-frame tables) holding a product illustration,
// with "Ilustrasi · foto menyusul" right under it.
export default function ProductFrame({
  product,
  tag,
  className = "",
  artClassName = "",
}: {
  product: Product;
  tag?: string;
  className?: string;
  artClassName?: string;
}) {
  return (
    <figure className={className} {...mock(product.illustrationMockup)}>
      <div className="slab relative">
        <div className={`slab-art ${artClassName}`} data-art={product.illustration}>
          <ProductIllustration name={product.illustration} label={product.alt} />
        </div>
        {tag && <span className="slab-tag t-label">{tag}</span>}
      </div>
      <figcaption className="t-small mt-2 text-muted">{menu.caption}</figcaption>
    </figure>
  );
}
