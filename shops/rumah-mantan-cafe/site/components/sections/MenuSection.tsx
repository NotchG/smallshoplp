import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import LatteRooster from "@/components/art/LatteRooster";
import { Carbonara, NasiGoreng } from "@/components/art/Plates";
import { menu, type Dish } from "@/content";
import { mock } from "@/lib/mockup";
import { nb } from "@/lib/text";

// 3. Menu andalan: four products as pictures (three drawn, one the owner's photo), then lists.
function DishArt({ dish }: { dish: Dish }) {
  if (dish.art === "hotdog") {
    const p = menu.hotdogPhoto;
    return (
      <img
        className="block h-full w-full object-cover"
        src={p.src}
        width={p.width}
        height={p.height}
        alt={p.alt}
        loading="lazy"
        decoding="async"
      />
    );
  }
  const Art = dish.art === "nasi" ? NasiGoreng : Carbonara;
  return <Art className="block h-full w-full" />;
}

export default function MenuSection() {
  const { featured } = menu;
  return (
    <section aria-labelledby="menu-h" className="section bg-rumah">
      <Container>
        <Reveal>
          <h2 id="menu-h" className="h2">
            {menu.heading}
          </h2>
          <p className="measure mt-5">{menu.intro}</p>
          <p className="mt-3 font-semibold">
            {menu.priceLine.map((p, i) => (
              <span key={p.text}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <span className="whitespace-nowrap" {...mock(p.mockup)}>
                  {p.text}
                </span>
              </span>
            ))}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8 lg:mt-14">
            {/* featured: the latte on its rooster saucer */}
            <article className="md:col-span-6">
              <div className="tile aspect-square w-full max-w-[520px]">
                <LatteRooster className="block h-full w-full" />
              </div>
              <p className="t-small mt-2">{menu.illustrationLabel}</p>
              <h3 className="h3 mt-4" {...mock(featured.name.mockup)}>
                {featured.name.text}
              </h3>
              <p className="measure mt-2">{featured.desc}</p>
            </article>

            <ul className="md:col-span-6 md:self-center">
              {menu.dishes.map((dish) => (
                <li key={dish.art} className="dish-row flex items-start gap-4 py-5 first:pt-0 last:pb-0 lg:gap-6 lg:py-6">
                  <div className="flex-none">
                    <div className="tile dish-tile" {...mock(dish.artMockup)}>
                      <DishArt dish={dish} />
                    </div>
                    {dish.art !== "hotdog" && (
                      <p className="t-small mt-1.5">
                        {menu.illustrationLabel}
                      </p>
                    )}
                  </div>
                  <div className="min-w-0 pt-1">
                    <h3 className="h3" {...mock(dish.name.mockup)}>
                      {dish.name.text}
                    </h3>
                    <p className="mt-2">{nb(dish.desc)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-8 border-t border-dongker/25 pt-10 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {menu.lists.map((list) => (
              <div key={list.heading}>
                <h3 className="h3">{list.heading}</h3>
                <ul className="mt-3 space-y-1.5">
                  {list.items.map((item) => (
                    <li key={item.text} {...mock(item.mockup)}>
                      {item.text}
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
