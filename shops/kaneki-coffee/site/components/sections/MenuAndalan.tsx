import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Glass, { type GlassVariant } from "@/components/art/Glass";
import { Croissant, Dimsum, Fries } from "@/components/art/Food";
import { menu, type Featured } from "@/content";
import { mock } from "@/lib/mockup";

const drinkArts: GlassVariant[] = ["kopiSusu", "charcoal", "matcha", "peachTea"];

function Caption({ item }: { item: Featured }) {
  return (
    <div className="item-cap">
      <p className="item-name t-body" {...mock(item.name.mockup)}>
        {item.name.text}
      </p>
      <p className="item-price t-body nums" {...mock(item.price.mockup)}>
        {item.price.text}
      </p>
      <p className="item-note" {...mock(item.note.mockup)}>
        {item.note.text}
      </p>
    </div>
  );
}

function FoodArt({ item }: { item: Featured }) {
  if (item.art === "croissant") return <Croissant label={item.label} />;
  if (item.art === "dimsum") return <Dimsum label={item.label} />;
  return <Fries label={item.label} />;
}

// What to order, then the whole menu, readable from any seat.
export default function MenuAndalan() {
  const drinks = menu.featured.filter((f) => drinkArts.includes(f.art as GlassVariant));
  const foods = menu.featured.filter((f) => !drinkArts.includes(f.art as GlassVariant));

  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="section-head">
            <h2 id="menu-title" className="t-head">
              {menu.heading}
            </h2>
            <p className="t-body text-gerinda" {...mock(menu.intro.mockup)}>
              {menu.intro.text} <span className="tag">{menu.examplePrices}</span>
            </p>
          </div>

          <ul className="drinks">
            {drinks.map((d) => (
              <li key={d.art}>
                <div className="drink-stage" data-mockup="">
                  <Glass id={d.art} variant={d.art as GlassVariant} label={d.label} />
                </div>
                <Caption item={d} />
              </li>
            ))}
          </ul>

          <ul className="foods">
            {foods.map((f) => (
              <li key={f.art} className="food">
                <div className="food-stage" data-mockup="">
                  <FoodArt item={f} />
                </div>
                <Caption item={f} />
              </li>
            ))}
          </ul>

          <div className="menu-list">
            <div className="menu-list-head">
              <h3 className="t-lead font-bold">{menu.listHeading}</h3>
              <span className="tag">{menu.examplePrices}</span>
            </div>
            <div className="menu-groups">
              {menu.groups.map((g) => (
                <div key={g.title} className="menu-group">
                  <h4 className="t-body">{g.title}</h4>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.name.text}>
                        <p className="t-body" {...mock(it.name.mockup)}>
                          {it.name.text}
                        </p>
                        {it.price ? (
                          <p className="t-body text-gerinda nums" {...mock(it.price.mockup)}>
                            {it.price.text}
                          </p>
                        ) : (
                          <p className="t-small text-gerinda" {...mock(menu.noPrice.mockup)}>
                            {menu.noPrice.text}
                          </p>
                        )}
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
