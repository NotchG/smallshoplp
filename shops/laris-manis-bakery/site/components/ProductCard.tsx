import type { Product } from "@/content";
import { mock } from "@/lib/mockup";
import ProductIllo from "./illos/ProductIllo";

// featured: large white-tile panel (4:3) with text under it.
// row: square tile panel left, text right.
// round: cake or jar straight on the kuning field, text under it.
export default function ProductCard({
  product,
  variant,
  className = "",
}: {
  product: Product;
  variant: "featured" | "row" | "round";
  className?: string;
}) {
  const onKuning = variant === "round";
  const text = (
    <div className={variant === "row" ? "" : "mt-5"}>
      <div className="name-price">
        <h3 className="t-lead font-extrabold text-tinta" {...mock(product.name.mockup)}>
          {product.name.text}
        </h3>
        <p
          className={`price font-extrabold ${onKuning ? "text-biru-krat" : "text-oranye-label"}`}
          {...mock(product.price.mockup)}
        >
          {product.price.text}
        </p>
      </div>
      <p className="t-body mt-1 max-w-[38ch]" {...mock(product.note.mockup)}>
        {product.note.text}
      </p>
    </div>
  );

  if (variant === "round") {
    return (
      <article id={product.id} className={`product-card round-card ${className}`}>
        <div className="panel-illo">
          <ProductIllo kind={product.illustration} uid={`card-${product.id}`} label={product.alt} className="block h-auto w-full" />
        </div>
        {text}
      </article>
    );
  }

  if (variant === "row") {
    return (
      <article id={product.id} className={`product-card card-row ${className}`}>
        <div className="tile-panel aspect-square grid place-items-center">
          <div className="panel-illo h-[84%]">
            <ProductIllo kind={product.illustration} uid={`card-${product.id}`} label={product.alt} className="block h-full w-auto" />
          </div>
        </div>
        {text}
      </article>
    );
  }

  return (
    <article id={product.id} className={`product-card ${className}`}>
      <div className="tile-panel aspect-[4/3] grid place-items-center">
        <div className="panel-illo h-[86%]">
          <ProductIllo kind={product.illustration} uid={`card-${product.id}`} label={product.alt} className="block h-full w-auto" />
        </div>
      </div>
      {text}
    </article>
  );
}
