import Container from "@/components/Container";
import DishArt from "@/components/DishArt";
import GableFrame from "@/components/GableFrame";
import Reveal from "@/components/Reveal";
import { menu } from "@/content";
import { mock } from "@/lib/mockup";

// The food, on one full-bleed kuning field: the yellow of the owner's own photo backdrop.
// Prices sit 8px under their dish names. Rules between rows, never cards or dotted leaders.
export default function MenuSection() {
  const f = menu.featured;
  return (
    <section id="menu" className="section bg-kuning" aria-labelledby="menu-title">
      <Container>
        <div className="head-gap lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <h2 id="menu-title" className="t-head lg:col-span-5">
            {menu.heading}
          </h2>
          <p className="t-body measure mt-3 text-on-kuning lg:col-span-7 lg:col-start-6 lg:mt-0">{menu.sub}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-6">
          <figure className="lg:col-span-5">
            <GableFrame
              img={f.image}
              aspectClass="aspect-4/5"
              sizes="(min-width: 1024px) 486px, 100vw"
              edge
              melt
              className="mx-auto max-w-md lg:max-w-none"
            />
            <figcaption className="relative -mt-6 text-center lg:-mt-10">
              <span className="t-lead block">{f.name}</span>
              <span className="t-body mt-2 block font-semibold tnum" {...mock(f.price.mockup)}>
                {f.price.text}
              </span>
            </figcaption>
          </figure>

          <Reveal className="lg:col-span-7 lg:col-start-6">
            <ul>
              {menu.items.map((d) => (
                <li key={d.name} className="rule flex items-center gap-5 py-5 md:gap-8">
                  {d.art && (
                    <div className="flex flex-none flex-col items-center">
                      <DishArt kind={d.art} label={d.artLabel ?? d.name} />
                      <span className="t-small mt-2 text-on-kuning" aria-hidden="true">
                        {menu.artCaption}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="t-lead" {...mock(d.nameMockup)}>
                      {d.name}
                    </h3>
                    <p className="t-body mt-2 font-semibold tnum" {...mock(d.price.mockup)}>
                      {d.price.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Juga ada spans the full width under both columns, so neither column ends in a blank. */}
        <Reveal className="rule pt-6 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <h3 className="t-body font-extrabold lg:col-span-12">{menu.moreHeading}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-6 md:gap-x-8 lg:col-span-12 lg:grid-cols-4 lg:gap-x-6">
            {menu.more.map((m) => (
              <li key={m.name} {...mock(m.mockup)}>
                <span className="t-body block font-bold">{m.name}</span>
                <span className="t-body block">{m.items}</span>
                <span className="t-body mt-2 block font-semibold tnum">{m.price}</span>
              </li>
            ))}
          </ul>
          <p className="t-small mt-6 text-on-kuning lg:col-span-12">{menu.priceNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
