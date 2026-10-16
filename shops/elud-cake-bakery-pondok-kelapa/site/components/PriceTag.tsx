import type { Product } from "@/content";
import { mock } from "@/lib/mockup";

// Elud's magenta shelf tag. Old price struck, new price big. Magenta means "price", nothing else.
// size="hero" carries the signature: the strike draws, the new price drops in, the tag nudges.
// Screen readers hear "Harga sebelumnya Rp 15.000, harga sekarang Rp 9.000".
export default function PriceTag({
  product,
  size = "item",
  className = "",
  as: Tag = "h3",
}: {
  product: Product;
  size?: "item" | "hero";
  className?: string;
  as?: "h3" | "p";
}) {
  const hero = size === "hero";
  // "Rp 9.000" never breaks between currency and number.
  const nb = (v?: string) => v?.replace(/ /g, "\u00a0");
  return (
    <div className={`tag ${hero ? "tag-hero sig-tag" : ""} ${className}`}>
      <Tag className="tag-name" {...mock(product.nameMockup)}>
        {product.name}
      </Tag>
      {(product.price || product.was) && (
        <p className="tag-prices" {...mock(product.priceMockup)}>
          {product.was && <span className="vh">Harga sebelumnya</span>}
          {product.was && (
            <s className="tag-was">
              {nb(product.was)}
              {hero && (
                <span aria-hidden="true" className="strike">
                  <span className="strike-bar sig-strike" />
                </span>
              )}
            </s>
          )}
          {product.price && <span className="vh">{product.was ? ", harga sekarang" : "Harga"}</span>}
          {product.price && (
            <span className={`tag-now ${hero ? "sig-now" : ""}`}>
              {product.pricePrefix && <span className="tag-unit">{`${product.pricePrefix} `}</span>}
              {nb(product.price)}
              {product.priceUnit && <span className="tag-unit">{` ${product.priceUnit}`}</span>}
            </span>
          )}
        </p>
      )}
    </div>
  );
}
