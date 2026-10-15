import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FoodIllustration from "@/components/FoodIllustrations";
import { menu, type MenuCategory, type MenuItem } from "@/content";
import { mock } from "@/lib/mockup";

function CategoryHead({ cat, onDark = false }: { cat: MenuCategory; onDark?: boolean }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <h3 id={`kat-${cat.id}`} className={`t-small t-label ${onDark ? "text-rotan" : ""}`} {...mock(cat.mockup)}>
        {cat.title}
      </h3>
      <p
        className={`t-small font-semibold whitespace-nowrap ${onDark ? "text-rotan" : "text-pabbo"}`}
        {...mock(cat.priceFrom.mockup)}
      >
        {cat.priceFrom.text}
      </p>
    </div>
  );
}

function Dish({ item }: { item: MenuItem }) {
  return (
    <li className="dish">
      <FoodIllustration name={item.illustration} className="dish-ill" />
      <div>
        <h4 className="t-lead" data-check="" {...mock(item.mockup)}>
          {item.name}
        </h4>
        <p className="t-body mt-1.5 text-plafon/80">{item.desc}</p>
      </div>
    </li>
  );
}

function Snack({ item }: { item: MenuItem }) {
  return (
    <li className="snack">
      <FoodIllustration name={item.illustration} className="snack-ill" />
      <div>
        <h4 className="t-lead" data-check="" {...mock(item.mockup)}>
          {item.name}
        </h4>
        <p className="t-body mt-1 text-garis/75">{item.desc}</p>
      </div>
    </li>
  );
}

export default function MenuSection() {
  const snacks = menu.snacks;
  return (
    <section id="menu" className="section on-bantal" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="grid gap-y-4 md:grid-cols-12 md:gap-x-8 md:items-end">
            <h2 id="menu-title" className="t-head md:col-span-6" data-check="">
              {menu.heading}
            </h2>
            <div className="md:col-start-8 md:col-span-5">
              <p className="t-body" {...mock(menu.intro.mockup)}>
                {menu.intro.text}
              </p>
              <p className="t-small mt-2 text-plafon/70" {...mock(menu.caption.mockup)}>
                {menu.caption.text}
              </p>
            </div>
          </div>

          <div className="menu-cats mt-12 md:mt-16">
            {menu.categories.map((cat) => (
              <div key={cat.id} className="menu-cat">
                <CategoryHead cat={cat} />
                <ul className="dish-list" aria-labelledby={`kat-${cat.id}`}>
                  {cat.items.map((item) => (
                    <Dish key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="snack-band on-plafon mt-14 md:mt-20">
            <div className="snack-head">
              <CategoryHead cat={snacks} onDark />
            </div>
            <ul className="snack-list" aria-labelledby={`kat-${snacks.id}`}>
              {snacks.items.map((item) => (
                <Snack key={item.name} item={item} />
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
