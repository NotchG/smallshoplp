import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProductIllustration from "@/components/ProductIllustration";
import { mock } from "@/lib/mockup";
import { menu, waLink, waMessages, shop } from "@/content";

// 3. The menu on the upstairs steel grid: owner-2 as the 2×2 lead cell, four drawings,
// then the example lists in three columns.
export default function Menu() {
  const lead = menu.lead;
  return (
    <section className="section section-joined" aria-labelledby="menu">
      <Container>
        <Reveal>
          <div className="grid-12 items-end gap-y-3">
            <h2 id="menu" className="t-head col-span-12 lg:col-span-6">
              {menu.heading}
            </h2>
            <p className="t-body measure col-span-12 lg:col-span-5 lg:col-start-8">{menu.intro}</p>
          </div>

          <div className="menu-grid mt-8 lg:mt-12">
            <figure className="menu-cell menu-lead" {...mock(lead.mockup)}>
              <div className="menu-photo">
                <img
                  src="/img/es-jeruk-float.jpg"
                  width={1000}
                  height={1000}
                  alt={lead.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="px-4 pt-3 pb-4 lg:px-6 lg:pt-4 lg:pb-5">
                <p className="t-lead">
                  {lead.name}
                  <span className="price ml-3">{lead.price}</span>
                </p>
                <p className="t-small mt-1">{lead.note}</p>
              </figcaption>
            </figure>

            {menu.featured.map((item) => (
              <figure
                key={item.name}
                className="menu-cell flex flex-col px-3 pt-3 pb-4 lg:px-6 lg:pt-5 lg:pb-6"
                {...mock(item.mockup)}
              >
                <ProductIllustration
                  kind={item.drawing!}
                  label={item.drawingLabel!}
                  className="mx-auto block h-auto w-full max-w-[240px]"
                />
                <figcaption className="mt-2">
                  <p className="t-body font-bold leading-snug">
                    {item.name}
                    <span className="price block md:ml-3 md:inline">{item.price}</span>
                  </p>
                  {item.note && <p className="t-small mt-0.5">{item.note}</p>}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="grid-12 mt-12 gap-y-10 lg:mt-16">
            {menu.columns.map((col, i) => (
              <div key={i} className="col-span-12 space-y-10 md:col-span-6 lg:col-span-4">
                {col.map((cat) => (
                  <div key={cat.title} className="border-t-2 border-tinta pt-4">
                    <h3 className="t-lead">
                      {cat.title}
                      {cat.range && (
                        <span className="price t-body ml-3" {...mock(cat.range.mockup)}>
                          {cat.range.text}
                        </span>
                      )}
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {cat.items.map((it) => (
                        <li key={it.name} className="t-body" {...mock(it.mockup)}>
                          {it.name}
                          {it.price && <span className="price ml-3">{it.price}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {i === menu.columns.length - 1 && (
                  <div>
                    <p className="t-small">{menu.note}</p>
                    <a
                      href={waLink(waMessages.menu)}
                      target="_blank"
                      rel="noopener"
                      aria-describedby="tab-baru"
                      className="tap-link t-body"
                      {...mock(shop.whatsapp.mockup)}
                    >
                      {menu.waLinkLabel}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
