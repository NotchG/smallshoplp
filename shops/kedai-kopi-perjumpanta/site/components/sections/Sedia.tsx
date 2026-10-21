import { sedia, type MenuItem } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { artFor, artLabel } from "@/components/Art";

function MenuLine({ item }: { item: MenuItem }) {
  return (
    <li {...mock(item.mockup)}>
      <span className="menu-name t-lead">{item.name}</span>
      {item.price && (
        <span className="menu-price t-body" {...mock(item.price.mockup)}>
          {item.price.text}
        </span>
      )}
      {item.extra && (
        <span className="menu-extra t-small" {...mock(item.extra.mockup)}>
          ({item.extra.text})
        </span>
      )}
    </li>
  );
}

export default function Sedia() {
  return (
    <section id="sedia" className="ground-limau" aria-labelledby="sedia-judul">
      <div className="section">
        <Container>
          <Reveal className="grid-12">
            <div className="sedia-banner">
              <span className="eyelet" aria-hidden="true" />
              <span className="eyelet" aria-hidden="true" />
              <span className="eyelet" aria-hidden="true" />
              <span className="eyelet" aria-hidden="true" />
              <h2 id="sedia-judul" className="sedia-h2 t-head">
                {sedia.heading}
              </h2>
              <div className="sedia-groups">
                {sedia.groups.map((g) => (
                  <div key={g.id} className="sedia-group">
                    <h3 id={`grup-${g.id}`} className="t-small">
                      {g.label}
                    </h3>
                    <ul aria-labelledby={`grup-${g.id}`}>
                      {g.items.map((item) => (
                        <MenuLine key={item.name} item={item} />
                      ))}
                    </ul>
                    {g.note && (
                      <p className="group-note t-small" {...mock(g.note.mockup)}>
                        {g.note.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="sedia-aside">
              <p className="sedia-lead t-lead" {...mock(sedia.lead.mockup)}>
                {sedia.lead.text}
              </p>
              <p className="sedia-note t-small" {...mock(sedia.priceNote.mockup)}>
                {sedia.priceNote.text}
              </p>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* The wooden table: four dishes drawn, each with its name and example price under it. */}
      <div className="product-band ground-kayu">
        <Container>
          <ul className="product-grid">
            {sedia.table.map((p) => {
              const Art = artFor[p.art];
              return (
                <li key={p.name} className="product">
                  <div className="product-art">
                    <Art label={artLabel[p.art]} />
                  </div>
                  <p className="product-name t-lead">{p.name}</p>
                  <p className="product-price t-body" {...mock(p.price.mockup)}>
                    {p.price.text}
                  </p>
                  {p.note && (
                    <p className="product-note t-small" {...mock(p.note.mockup)}>
                      {p.note.text}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </section>
  );
}
