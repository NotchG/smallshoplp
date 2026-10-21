import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { drinks } from "@/content";
import { mock } from "@/lib/mockup";

// A counter board on the honey-oak field: three columns, prices inline after the name.
export default function Drinks() {
  return (
    <section id="minuman" className="drinks section" aria-labelledby="minuman-judul">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-end">
            <h2 id="minuman-judul" className="h-wide t-head lg:col-span-6">
              {drinks.heading}
            </h2>
            <p className="t-body mt-4 lg:mt-0 lg:col-start-8 lg:col-span-5 measure">{drinks.intro}</p>
          </div>

          <div className="drinks-board mt-10 md:mt-14">
            {drinks.columns.map((c) => (
              <div key={c.label} className="drinks-col">
                <h3 className="kicker">
                  {c.label}
                  {c.range && (
                    <span className="drink-price normal-case tracking-normal" {...mock(c.range.mockup)}>
                      {c.range.text}
                    </span>
                  )}
                </h3>
                <ul role="list" className="mt-4">
                  {c.items.map((d) => (
                    <li key={d.name} className="drink t-body" {...mock(d.mockup)}>
                      <span className="drink-name">{d.name}</span>
                      {d.price && (
                        <span className="drink-price" {...mock(d.priceMockup)}>
                          {d.price}
                        </span>
                      )}
                      {d.tag && <span className="tag tag-walnut">{d.tag}</span>}
                      {d.note && <span className="drink-note block">{d.note}</span>}
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
