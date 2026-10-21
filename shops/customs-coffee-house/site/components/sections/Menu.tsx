import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CheckerEdge from "@/components/CheckerEdge";
import ManualBrewArt from "@/components/ManualBrewArt";
import { featured, menu, menuBoard, type Featured } from "@/content";
import { mock } from "@/lib/mockup";

function ProductFigure({ item, lead = false }: { item: Featured; lead?: boolean }) {
  return (
    <figure className="product">
      {item.image === "art" ? (
        <div className="relative">
          <ManualBrewArt label={item.alt} />
          <span className="art-tag t-label t-small" aria-hidden="true">
            Ilustrasi<span className="hidden lg:inline"> · foto menyusul</span>
          </span>
        </div>
      ) : (
        <img
          src={item.image}
          width={item.width}
          height={item.height}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="figure-img"
        />
      )}
      <figcaption className="product-caption">
        <h3 className={`product-title ${lead ? "t-lead" : "product-title-sm"}`}>
          <span className="product-name" {...mock(item.name.mockup)}>
            {item.name.text}
          </span>{" "}
          <span className="price t-cond tnum whitespace-nowrap" {...mock(item.price.mockup)}>
            <span aria-hidden="true" className="price-sep">
              ·
            </span>
            {item.price.text}
          </span>
        </h3>
        <p className={lead ? "t-body" : "t-small product-desc-sm"} {...mock(item.desc.mockup)}>
          {item.desc.text}
        </p>
      </figcaption>
    </figure>
  );
}

// Menu andalan: the checkerboard table. Vietnam Drip leads; the menu board sits below.
export default function Menu() {
  const [lead, ...rest] = featured;
  return (
    <section id="menu" className="ground-garasi" aria-labelledby="menu-h">
      <CheckerEdge />
      <div className="section">
        <Container>
          <Reveal>
            <div className="menu-grid">
              <div className="menu-head">
                <h2 id="menu-h" className="h-section text-fascia">
                  {menu.heading}
                </h2>
                <p className="t-lead section-intro-dark">{menu.intro}</p>
              </div>
              <div className="menu-lead">
                <ProductFigure item={lead} lead />
              </div>
              <div className="menu-pair">
                {rest.map((item) => (
                  <ProductFigure key={item.name.text} item={item} />
                ))}
              </div>
            </div>

            <div className="menu-board">
              {menuBoard.map((group) => (
                <div key={group.label} className={`menu-group menu-group-${group.items.length > 3 ? "wide" : "narrow"}`}>
                  <h3 className="t-label t-small text-fascia">{group.label}</h3>
                  <ul className="inline-list t-body">
                    {group.items.map((it) => (
                      <li key={it.name.text}>
                        <span {...mock(it.name.mockup)}>{it.name.text}</span>
                        {it.price && (
                          <span className="inline-price price t-cond tnum" {...mock(it.price.mockup)}>
                            {it.price.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="menu-note t-small" {...mock(menu.note.mockup)}>
                {menu.note.text}
              </p>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
