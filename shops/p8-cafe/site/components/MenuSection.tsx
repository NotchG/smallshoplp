import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CupcakeRedVelvet, EsKopiBolaEs } from "@/components/Illustrations";
import { mock } from "@/lib/mockup";
import { menu } from "@/content";

// 3. Menu andalan: the "ORDER HERE" display case. Two tent cards, then four lists.
// Drinks and cookies first, rice last. Prices follow their names, never right-aligned.
export default function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-judul" className="bg-roster">
      <div className="slab" aria-hidden="true" />
      <div className="section">
        <Container>
          <Reveal>
            <div className="grid-12 menu-top">
              <div className="menu-intro">
                <h2 id="menu-judul" className="t-head">
                  {menu.title}
                </h2>
                <p className="t-lead mt-4 max-w-[24ch]">{menu.lead}</p>
                <p className="t-small mt-5">
                  <span className="mock-sample">{menu.legend}</span>
                </p>
              </div>
              <ul className="menu-features">
                {menu.features.map((f) => (
                  <li key={f.name.text} className="tent">
                    <div className="tent-illus">
                      {f.illus === "es-kopi" ? (
                        <EsKopiBolaEs className="h-full w-auto" />
                      ) : (
                        <CupcakeRedVelvet className="h-full w-auto" />
                      )}
                    </div>
                    <div className="tent-text">
                      <h3 className="t-h3 feature-name">
                        <span {...mock(f.name.mockup)}>{f.name.text}</span>{" "}
                        <span className="feature-price tabular">
                          · <span {...mock(f.price.mockup)}>{f.price.text}</span>
                        </span>
                      </h3>
                      <p className="t-body mt-2">{f.desc}</p>
                    </div>
                    <span className="tent-foot" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-lists">
              {menu.groups.map((g) => (
                <div key={g.title} className="hairline pt-5">
                  <h3 className="t-h3">{g.title}</h3>
                  {"priceNote" in g && g.priceNote && (
                    <p className="t-body mt-1 font-semibold tabular">
                      <span {...mock(g.priceNote.mockup)}>{g.priceNote.text}</span>
                    </p>
                  )}
                  <ul className="mt-3 space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it.text} className="t-body">
                        <span {...mock(it.mockup)}>{it.text}</span>
                        {it.price && (
                          <span className="font-semibold tabular">
                            {" "}
                            · <span {...mock(it.price.mockup)}>{it.price.text}</span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {"note" in g && g.note && <p className="t-body mt-5 max-w-[34ch]">{g.note}</p>}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
