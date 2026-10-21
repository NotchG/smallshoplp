import { menu } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MenuList from "@/components/MenuList";
import { mock } from "@/lib/mockup";

// 2 Menu andalan (paper): the kitchen is the point.
export default function MenuAndalan() {
  return (
    <section className="ground-paper section" aria-labelledby="menu-h">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-5">
            <h2 id="menu-h" className="f-display t-head">
              {menu.heading}
            </h2>
            <p className="t-lead measure mt-4">{menu.intro}</p>
            <figure className="mt-10 flex flex-col items-center lg:mt-12">
              <div className="plate">
                <img
                  src={menu.plate.src}
                  alt={menu.plate.alt}
                  width={menu.plate.w}
                  height={menu.plate.h}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover"
                />
              </div>
              <figcaption className="caption t-small text-center">{menu.plate.caption}</figcaption>
            </figure>
          </div>
          <div className="mt-10 lg:col-span-6 lg:col-start-7 lg:mt-2">
            <MenuList dishes={menu.dishes} />
            <h3 className="f-name t-lead mt-12">{menu.alsoHeading}</h3>
            <ul className="bullet-list mt-4">
              {menu.also.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-6 font-bold" {...mock(menu.breakfast.mockup)}>
              {menu.breakfast.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
