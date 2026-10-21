import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CanGlass from "@/components/CanGlass";
import PriceRoundel from "@/components/PriceRoundel";
import { menu } from "@/content";
import { mock } from "@/lib/mockup";

// What to order, and that it's affordable: the owner's drink photo, two drinks drawn in
// Nari's can-shaped glasses, the rest of the drinks, then the food with circled prices.
export default function MenuAndalan() {
  const photo = menu.photoDrink;
  return (
    <section id="menu" aria-labelledby="menu-title" className="section band-paper">
      <Container>
        <Reveal>
          <h2 id="menu-title" className="t-head">
            {menu.heading}
          </h2>
          <p className="t-body mt-4 max-w-[38ch] text-steel" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>

          <div className="grid-12 mt-10 gap-y-12 lg:mt-14">
            <figure className="md:col-span-5">
              <img
                className="rounded-card aspect-[4/5] w-full bg-sky object-cover"
                src={menu.photo.src}
                srcSet={`${menu.photo.srcSmall} 800w, ${menu.photo.src} 1600w`}
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, 100vw"
                width={menu.photo.width}
                height={menu.photo.height}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="t-small mt-3 text-steel">
                <span className="font-semibold text-ink" {...mock(photo.nameMockup)}>
                  {photo.name}
                </span>
                <span aria-hidden="true"> · </span>
                {menu.photoCredit}
              </figcaption>
            </figure>

            <div className="md:col-span-7 md:col-start-6">
              <h3 className="t-label text-cobalt">{menu.drinksLabel}</h3>
              <ul className="mt-4 grid gap-4 lg:grid-cols-2">
                {menu.featuredDrinks.map((d) => (
                  <li
                    key={d.name}
                    className="rounded-card flex items-center gap-5 bg-sky p-5 lg:flex-col lg:items-start lg:p-6"
                  >
                    <CanGlass
                      variant={d.variant as "luna" | "taro"}
                      label={d.alt ?? d.name}
                      className="h-[140px] w-[84px] flex-none lg:h-[200px] lg:w-[120px]"
                    />
                    <div className="min-w-0">
                      <div className="flex min-h-11 items-center gap-3 md:min-h-12">
                        <h4 className="t-serif t-lead" {...mock(d.nameMockup)}>
                          {d.name}
                        </h4>
                        {d.price && <PriceRoundel price={d.price} />}
                      </div>
                      {d.desc && (
                        <p className="t-body mt-2 text-steel" {...mock(d.desc.mockup)}>
                          {d.desc.text}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="t-label text-cobalt">{menu.otherDrinksLabel}</h3>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                  {menu.otherDrinks.map((d) => (
                    <li key={d.text} className="t-body font-semibold" {...mock(d.mockup)}>
                      {d.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:mt-2">
              <h3 className="t-label text-cobalt">{menu.foodLabel}</h3>
              <ul className="mt-2 md:mt-4 md:grid md:grid-cols-3 md:gap-x-8">
                {menu.food.map((f) => (
                  <li
                    key={f.name}
                    className="border-b border-ink/12 py-4 last:border-b-0 md:border-b-0 md:border-t md:pt-5 md:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="t-body font-semibold" {...mock(f.nameMockup)}>
                        {f.name}
                      </span>
                      {f.price && <PriceRoundel price={f.price} />}
                    </div>
                    {f.desc && (
                      <p className="t-body mt-1 text-steel" {...mock(f.desc.mockup)}>
                        {f.desc.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
