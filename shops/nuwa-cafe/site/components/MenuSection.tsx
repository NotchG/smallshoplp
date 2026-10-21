import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { menu, type MenuGroup as Group, type MenuItem } from "@/content";
import { mock } from "@/lib/mockup";

function ItemList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="menu-list">
      {items.map((it) => (
        <li key={it.name} {...mock(it.mockup)}>
          <span className="name">{it.name}</span>
          {it.note ? <span className="note"> · {it.note}</span> : null}
          {it.price ? <span className="price">{it.price}</span> : null}
        </li>
      ))}
    </ul>
  );
}

// A group heading with its price range on the same line.
export function MenuGroup({ group }: { group: Group }) {
  return (
    <div className="menu-group" {...mock(group.mockup)}>
      <h3 className="h3">
        {group.title} <span className="price">{group.range}</span>
      </h3>
      <ItemList items={group.items} />
    </div>
  );
}

// Ramen first (the photo's bowl), then the example groups, then the lunch set strip.
export default function MenuSection() {
  const { ramen, lunchSet } = menu;
  return (
    <section id="menu" className="section bg-blush" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="menu-head grid-12">
            <h2 id="menu-title" className="h2">
              {menu.heading}
            </h2>
            <div className="menu-intro">
              <p className="t-lead" {...mock(menu.intro.mockup)}>
                {menu.intro.text}
              </p>
              <p className="t-small" {...mock(menu.note.mockup)}>
                {menu.note.text}
              </p>
            </div>
          </div>

          <div className="menu-body grid-12">
            <div className="menu-ramen menu-group">
              <h3 className="h3">
                {ramen.title}{" "}
                <span className="price" {...mock(ramen.range.mockup)}>
                  {ramen.range.text}
                </span>
              </h3>
              <p className="ramen-desc">{ramen.description}</p>
              <ItemList items={ramen.items} />
            </div>
            <div className="menu-groups">
              {menu.groups.map((g) => (
                <MenuGroup key={g.title} group={g} />
              ))}
            </div>
          </div>

          <div className="lunch-strip" {...mock(lunchSet.mockup)}>
            <h3 className="h3">{lunchSet.title}</h3>
            <span>{lunchSet.text}</span>
            <span className="price">{lunchSet.price}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
