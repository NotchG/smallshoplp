import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FoodArt from "@/components/FoodArt";
import { featured, menu, menuIntro, menuNote, type MenuGroup } from "@/content";
import { mock } from "@/lib/mockup";

function Group({ group }: { group: MenuGroup }) {
  const id = `menu-${group.title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div className="menu-group" aria-labelledby={id} role="group">
      <h3 id={id} className="h-pane flex flex-wrap items-baseline gap-x-3">
        {group.title}
        {group.price && (
          <span className="t-body tabular font-medium text-emas" data-mockup="">
            {group.price}
          </span>
        )}
      </h3>
      <ul className="mt-3 space-y-1.5">
        {group.items.map((item) => (
          <li key={item.name} className="flex flex-wrap items-baseline gap-x-3" {...mock(item.mockup)}>
            <span>{item.name}</span>
            {item.price && <span className="tabular font-medium text-emas">{item.price}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="section on-dark bg-marmer text-dinding">
      <Container>
        <div className="menu-head">
          <h2 id="menu-title" className="h-section">
            {menuIntro.heading}
          </h2>
          <p className="t-lead mt-3 text-abu-terang">{menuIntro.line}</p>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <ul className="featured">
            {featured.map((dish) => (
              <li key={dish.art} className="featured-item" {...mock(dish.mockup)}>
                <div className="table-edge featured-stage">
                  <FoodArt art={dish.art} alt={dish.alt} />
                </div>
                <p className="featured-name t-lead mt-3 font-semibold">{dish.name}</p>
                {dish.price && <p className="tabular mt-1 font-medium text-emas">{dish.price}</p>}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="menu-lists mt-16 lg:mt-20">
          <div className="menu-col">
            <Group group={menu.kopi} />
            <Group group={menu.nonKopi} />
          </div>
          <div className="menu-col">
            <Group group={menu.western} />
            <Group group={menu.pastry} />
          </div>
          <div className="menu-col">
            <Group group={menu.indonesia} />
            <p className="t-small measure text-abu-terang" {...mock(menuNote.mockup)}>
              {menuNote.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
