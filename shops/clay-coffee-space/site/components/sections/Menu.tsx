import { menu } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ArchFrame from "@/components/ui/ArchFrame";
import { ProductArtwork } from "@/components/art/Products";

// Under the tan umbrellas: kanvas field, four products in the pavilion's arched windows,
// then the whole list, dense like a letter board.
export default function Menu() {
  return (
    <section aria-labelledby="menu-title" className="section field-kanvas">
      <Container>
        <Reveal>
          <div className="menu-head">
            <h2 id="menu-title" className="t-head">
              {menu.heading}
            </h2>
            <div className="menu-intro">
              <p className="t-lead" {...mock(menu.lead.mockup)}>
                {menu.lead.text}
              </p>
              <p className="menu-note" {...mock(menu.note.mockup)}>
                {menu.note.text}
              </p>
            </div>
          </div>

          <ul className="products" aria-label="Menu pilihan">
            {menu.featured.map((p) => (
              <li key={p.name}>
                <figure className="product" {...mock(p.mockup)}>
                  <ArchFrame shapeClassName="bg-bingkai">
                    <ProductArtwork art={p.art} label={p.alt} id={`art-${p.art}`} />
                  </ArchFrame>
                  <figcaption className="product-cap">
                    <span className="product-name">{p.name}</span>
                    <span className="product-price tabular">{p.price}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="menu-list">
            {menu.categories.map((c) => (
              <div key={c.label} className="menu-cat">
                <div className="menu-cat-head">
                  <h3 className="t-label">{c.label}</h3>
                  {c.range && (
                    <p className="menu-range tabular" {...mock(true)}>
                      {c.range}
                    </p>
                  )}
                </div>
                <ul>
                  {c.items.map((i) => (
                    <li key={i.name} className="menu-item" {...mock(i.mockup)}>
                      <span>{i.name}</span>
                      {i.price && <span className="menu-price tabular">{i.price}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
