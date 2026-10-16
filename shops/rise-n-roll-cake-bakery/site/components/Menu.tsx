import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Latte, MatahBowl, Risol, SusKrakelin } from "@/components/MenuDrawings";
import { menuGroups, menuSection, type MenuGroup } from "@/content";
import { mock } from "@/lib/mockup";

const drawings = { risol: Risol, bowl: MatahBowl, sus: SusKrakelin, latte: Latte } as const;

function Group({ g }: { g: MenuGroup }) {
  const Drawing = drawings[g.drawing];
  const id = `menu-${g.drawing}`;
  return (
    <li className="menu-group" aria-labelledby={id}>
      <Drawing label={g.drawingLabel} className="menu-drawing" />
      <div>
        <h3 id={id} className="menu-title">
          {g.title}
        </h3>
        {g.priceNote && (
          <p className="menu-price-note t-small" {...mock(g.priceNote.mockup)}>
            {g.priceNote.text}
          </p>
        )}
        <ul className="menu-items t-body">
          {g.items.map((it) => (
            <li key={it.name} {...mock(it.mockup)}>
              {it.name}
              {it.price && (
                <span className="menu-item-price" {...mock(it.price.mockup)}>
                  {it.price.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// The walnut table top: one slice turns into lunch.
export default function Menu() {
  return (
    <section className="section bg-walnut text-wall on-dark" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="menu-head">
            <h2 id="menu-title" className="t-head">
              {menuSection.heading}
            </h2>
            <p className="t-body measure" {...mock(menuSection.sub.mockup)}>
              {menuSection.sub.text}
            </p>
          </div>
          <ul className="menu-grid">
            {menuGroups.map((g) => (
              <Group key={g.title} g={g} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
