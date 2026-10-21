import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { DishFlatbread, DishPlatter, DishTea } from "@/components/Dishes";
import { mock } from "@/lib/mockup";
import { menu, type Dish } from "@/content";

function DishFigure({ dish, className = "", artClass = "" }: { dish: Dish; className?: string; artClass?: string }) {
  const Art = dish.id === "platter" ? DishPlatter : dish.id === "flatbread" ? DishFlatbread : DishTea;
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <Art label={dish.alt} className={artClass} />
      <figcaption className="t-small mt-3 text-center font-medium text-ink" {...mock(dish.label.mockup)}>
        {dish.label.text}
      </figcaption>
    </figure>
  );
}

// The white table among the red sofas, laid out as in photo-2:
// flatbread back-left, glass back-right, platter in front.
function MenuTable() {
  const by = (id: Dish["id"]) => menu.dishes.find((d) => d.id === id)!;
  return (
    <div className="menu-table rounded-2xl bg-linen px-5 pb-6 pt-7 sm:px-10 sm:pb-9 sm:pt-10">
      <div className="grid grid-cols-[1.4fr_1fr] items-start gap-x-4 gap-y-6 sm:gap-x-10">
        <DishFigure dish={by("flatbread")} />
        <DishFigure dish={by("tea")} className="pt-2" artClass="max-w-[78%]" />
        <DishFigure dish={by("platter")} className="col-span-2 mx-auto w-[86%] sm:w-[68%]" />
      </div>
    </div>
  );
}

function MenuList() {
  return (
    <div className="space-y-8">
      {menu.groups.map((g) => (
        <div key={g.name}>
          <h3 className="t-lead text-linen">
            {g.name}
            <span aria-hidden="true" className="mx-2 font-normal text-plaster">·</span>
            <span className="font-normal text-plaster" {...mock(g.price.mockup)}>
              {g.price.text}
            </span>
          </h3>
          <ul className="mt-2 space-y-1">
            {g.items.map((it) => (
              <li key={it.text} className="t-body text-linen" {...mock(it.mockup)}>
                {it.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Real dishes first, then the wider menu. Desktop: text cols 1–5, table cols 6–12 over both rows.
export default function Menu() {
  return (
    <section className="on-dark section bg-velvet" aria-labelledby="menu-title">
      <Container className="grid-12 lg:grid-rows-[auto_1fr]">
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <h2 id="menu-title" className="t-head text-linen">
            {menu.heading}
          </h2>
          <p className="t-body measure mt-4 text-plaster" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>
        </div>

        <Reveal className="mt-10 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:mt-0">
          <MenuTable />
        </Reveal>

        <div className="mt-12 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:mt-12">
          <MenuList />
          {menu.shisha.show ? <p className="t-body mt-8 text-plaster">{menu.shisha.text}</p> : null}
          <p className="t-small mt-8 text-plaster" {...mock(menu.priceNote.mockup)}>
            {menu.priceNote.text}
          </p>
        </div>
      </Container>
    </section>
  );
}
