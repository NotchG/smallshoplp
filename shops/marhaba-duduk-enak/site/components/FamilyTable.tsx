import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { DISH_ART } from "@/components/Dishes";
import { mock } from "@/lib/mockup";
import { menu } from "@/content";

// One terrazzo table seen from above, the dishes guests talk about set out on it at real
// relative size. Each label sits right beside its dish: name, price, description.
export default function FamilyTable() {
  return (
    <section id="menu" className="section bg-lis" aria-labelledby="menu-title">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-end">
          <h2 id="menu-title" className="t-head font-bold lg:col-span-6">
            {menu.heading}
          </h2>
          <div className="mt-3 lg:mt-0 lg:col-start-7 lg:col-span-6">
            <p className="t-lead" {...mock(menu.intro.mockup)}>
              {menu.intro.text}
            </p>
            <p className="t-body mt-1 text-besi-soft" {...mock(menu.priceNote.mockup)}>
              {menu.priceNote.text}
            </p>
          </div>
        </div>

        <Reveal className="mt-8 md:mt-12">
          <div className="table-top">
            <ul className="dish-list">
              {menu.dishes.map((d) => {
                const { Art, size } = DISH_ART[d.id];
                return (
                  <li key={d.id} className="dish-unit">
                    <div className="dish-art">
                      <div className={`dish--${size}`}>
                        <Art label={d.label} />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="t-lead font-semibold" {...mock(d.name.mockup)}>
                        {d.name.text}
                      </h3>
                      <p className="t-body font-semibold nums" {...mock(d.price.mockup)}>
                        {d.price.text}
                      </p>
                      <p className="t-body mt-1 text-besi-soft" {...mock(d.desc.mockup)}>
                        {d.desc.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="t-small mt-3 text-besi-soft">{menu.caption}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 md:mt-12 lg:grid-cols-12">
          <h3 className="t-body font-semibold col-span-2 lg:col-span-3">
            {menu.extrasHeading}
          </h3>
          {[menu.extras.food, menu.extras.drinks].map((g) => (
            <div key={g.label} className="mt-3 lg:mt-0 lg:col-span-4">
              <p className="t-body font-semibold text-besi-soft">{g.label}</p>
              <ul className="t-body mt-1">
                {g.items.map((it) => (
                  <li key={it.text} {...mock(it.mockup)}>
                    {it.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
