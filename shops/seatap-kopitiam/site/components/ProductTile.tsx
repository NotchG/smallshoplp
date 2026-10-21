import type { Product } from "@/content";
import { mock } from "@/lib/mockup";
import ProductArt from "@/components/ProductArt";

// One tile of the menu wall: the drawing up top, the name with its price right under it,
// then the one-line note. Flat, square, flush with its neighbours.
export default function ProductTile({ p }: { p: Product }) {
  return (
    <article className={`wall-tile tile-${p.tile} flex flex-col justify-between gap-3 p-4 lg:p-5 xl:p-6`} data-area={p.id}>
      <ProductArt id={p.id} label={p.art} className="product-art" />
      <div>
        <h3 className="t-lead heading" {...mock(p.name.mockup)}>
          {p.name.text}
        </h3>
        {p.price ? (
          <p className="t-body mt-1 font-semibold" {...mock(p.price.mockup)}>
            {p.price.text}
          </p>
        ) : null}
        <p className="t-small mt-2 font-medium" {...mock(p.note.mockup)}>
          {p.note.text}
        </p>
      </div>
    </article>
  );
}
