import type { Product } from "@/content";
import { Cell } from "@/components/Shelf";
import ArtTile from "@/components/ArtTile";
import PhotoCell from "@/components/PhotoCell";
import { mock } from "@/lib/mockup";

// One product in its cubby. Fixed caption order, like a bean-bag label:
// name, then the price 8px under it, then one line about it.
function ProductText({ product }: { product: Product }) {
  const { name, price, note } = product;
  return (
    <div className="product-text">
      <h3 className="t-lead product-name" {...mock(name.mockup)}>
        {name.text}
      </h3>
      {price && (
        <p className="t-small product-price" {...mock(price.mockup)}>
          {price.text}
        </p>
      )}
      <p className="t-body product-note" {...mock(note.mockup)}>
        {note.text}
      </p>
    </div>
  );
}

export default function ProductCell({
  product,
  layout = "stack",
  size = "sm",
  className = "",
  mediaClassName,
}: {
  product: Product;
  layout?: "stack" | "row";
  size?: "sm" | "lg";
  className?: string;
  mediaClassName?: string;
}) {
  const { visual } = product;

  if (visual.kind === "photo") {
    return (
      <PhotoCell
        className={`product ${className}`}
        mediaClassName={mediaClassName}
        photo={{ src: visual.src, alt: visual.alt, position: visual.position, width: visual.width, height: visual.height }}
      >
        <ProductText product={product} />
      </PhotoCell>
    );
  }

  return (
    <Cell className={`product product--${layout} ${className}`} {...mock(product.mockup)}>
      <div className="cell-body product-inner">
        <ArtTile id={visual.id} label={visual.label} size={size} />
        <ProductText product={product} />
      </div>
    </Cell>
  );
}
