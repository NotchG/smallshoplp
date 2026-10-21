import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DishCard, { NamePrice } from "@/components/DishCard";
import { menu } from "@/content";
import { mock, mockItem } from "@/lib/mockup";

// Walnut ground: the table seen from above. Owner's lamb shank photo + two drawings + the rest of the menu.
export default function MenuAndalan() {
  const [lamb, ...others] = menu.featured;
  return (
    <section id="menu" aria-labelledby="menu-h" className="section bg-walnut text-rattan">
      <Container>
        <Reveal className="grid-12 gap-y-8 lg:gap-y-14">
          <div className="lg:col-span-6 lg:self-end">
            <h2 id="menu-h" className="font-display t-head">
              {menu.heading}
            </h2>
          </div>
          <div className="-mt-4 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:self-end">
            <p {...mockItem(menu.intro, "t-lead")}>{menu.intro.text}</p>
            <p className="t-small mt-2 text-rattan-dim">{menu.legend}</p>
          </div>

          <figure className="lg:col-span-6">
            <img
              src="/lamb-shank.jpg"
              alt={lamb.alt}
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full max-w-[580px] rounded-[12px] object-cover"
            />
            <figcaption className="mt-4 max-w-[46ch]">
              <NamePrice dish={lamb} />
              <p className="mt-2 text-rattan-dim">{lamb.desc}</p>
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
              {others.map((dish) => (
                <DishCard key={dish.name.text} dish={dish} />
              ))}
            </div>

            <hr className="my-10 border-0 border-t border-rattan/20" />

            <h3 className="font-display t-lead">{menu.moreHeading}</h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {menu.more.map((item) => (
                <li key={item.name.text} className="flex flex-wrap items-baseline gap-x-3">
                  <span {...mock(item.name.mockup)}>{item.name.text}</span>
                  {item.price && (
                    <span className="nums font-medium text-gold" {...mock(item.price.mockup)}>
                      {item.price.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
