import { menu } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

// The range: a heading column beside four groups, each under the label's double hairline.
export default function Menu() {
  return (
    <section className="g-dinding section" aria-labelledby="menu">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="md:col-span-2 lg:col-span-4">
            <h2 id="menu" className="t-head">
              {menu.heading}
            </h2>
            <p className="t-body mt-5 measure">{menu.intro}</p>
            <p className="t-small text-muted mt-4 measure" {...mock(menu.note.mockup)}>
              {menu.note.text}
            </p>
          </div>
          <div className="md:col-span-2 lg:col-start-5 lg:col-span-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {menu.groups.map((g) => (
              <div key={g.name} className="double-rule pt-5">
                <h3 className="t-group" data-check>
                  {g.name}
                </h3>
                <ul className="t-body mt-3 space-y-1">
                  {g.items.map((it) => (
                    <li key={it.text} {...mock(it.mockup)}>
                      {it.text}
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
