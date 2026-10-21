import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProductFrame from "@/components/ProductFrame";
import { menu, type Product } from "@/content";
import { mock } from "@/lib/mockup";

function NameAndPrice({ p, featured = false }: { p: Product; featured?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <h3
        className={`t-lead font-medium ${p.nameMockup ? "mock-mark" : ""} ${featured ? "featured-name" : ""}`}
        {...mock(p.nameMockup)}
      >
        {p.name}
      </h3>
      {p.price && (
        <span className="chip" {...mock(p.priceMockup)}>
          {p.price}
        </span>
      )}
    </div>
  );
}

export default function MenuSection() {
  const { featured, products, columns } = menu;
  return (
    <section id="menu" aria-labelledby="menu-title" className="section bg-limewash">
      <Container>
        <Reveal>
          {/* Sabor A Mi: the larger feature. Desktop: frame cols 1–7, heading and text cols 9–12. */}
          <div className="menu-feature">
            <div className="menu-head">
              <h2 id="menu-title" className="t-head">
                {menu.title}
              </h2>
              <p className="t-small measure mt-3 text-muted">{menu.note}</p>
            </div>
            <ProductFrame
              product={featured}
              tag={menu.featuredTag}
              className="menu-feature-art"
              artClassName="art-featured"
            />
            <div className="menu-feature-text">
              <NameAndPrice p={featured} featured />
              <p className="t-body measure mt-3">{featured.desc}</p>
            </div>
          </div>

          {/* The three that follow it */}
          <ul className="product-list mt-12 lg:mt-16">
            {products.map((p) => (
              <li key={p.id} className="product-row">
                <ProductFrame product={p} className="product-art" artClassName="art-small" />
                <div className="product-text">
                  <NameAndPrice p={p} />
                  <p className="t-body mt-2">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Menu lainnya: plain list, all examples */}
          <div className="more-menu mt-14 pt-8 lg:mt-20 lg:pt-10">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="t-lead font-medium">{menu.moreTitle}</h3>
              <p className="t-small text-muted">{menu.moreNote}</p>
            </div>
            <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title} {...mock(col.mockup)}>
                  <h4 className="t-label">
                    {col.title}
                    {col.priceRange && (
                      <span className="font-normal normal-case tracking-normal text-muted"> · {col.priceRange}</span>
                    )}
                  </h4>
                  <ul className="t-body mt-3 space-y-1.5">
                    {col.items.map((it) => (
                      <li key={it.name}>
                        {it.name}
                        {it.price && <span className="ml-2 whitespace-nowrap text-muted">{it.price}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
