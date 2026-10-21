import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { HotplateChicken, KarageBowl, NasiGorengPlate } from "@/components/Dishes";
import { dishes, foodSection, type Dish } from "@/content";
import { mock } from "@/lib/mockup";

// "Teman ngopi": real food, sitting straight on the pine plank table. Prices are navy here
// (rust never sits on pine).
function Name({ d }: { d: Dish }) {
  return (
    <>
      <h3 className="f-name t-lead inline" {...mock(d.name.mockup)}>
        {d.name.text}
      </h3>
      {d.price && " "}
      {d.price && (
        <span className="price t-body font-bold" {...mock(d.price.mockup)}>
          {d.price.text}
        </span>
      )}
      {d.line && (
        <p className="t-body mt-1.5" {...mock(d.line.mockup)}>
          {d.line.text}
        </p>
      )}
    </>
  );
}

export default function Food() {
  const by = (id: Dish["id"]) => dishes.find((d) => d.id === id)!;
  const karage = by("karage");
  const side = [by("hotplate"), by("nasi-goreng")];
  const text = dishes.filter((d) => !d.drawn);

  return (
    <section id="makanan" aria-labelledby="makanan-h" className="section ground-pine">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
            <h2 id="makanan-h" className="f-display t-head lg:col-span-6">
              {foodSection.heading}
            </h2>
            <p className="t-lead mt-3 max-w-[32ch] lg:col-span-6 lg:col-start-7 lg:mt-0" {...mock(foodSection.intro.mockup)}>
              {foodSection.intro.text}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-14 md:mt-14 lg:grid-cols-12 lg:gap-x-8">
            <article className="md:grid md:grid-cols-2 md:items-center md:gap-8 lg:col-span-6 lg:block">
              <KarageBowl className="w-full max-w-[480px]" />
              <div className="mt-6 md:mt-0 lg:mt-7 lg:max-w-[480px]">
                <Name d={karage} />
              </div>
            </article>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 gap-y-12 min-[520px]:grid-cols-2 min-[520px]:gap-x-6 md:gap-x-8">
                {side.map((d) => (
                  <article key={d.id}>
                    {d.id === "hotplate" ? (
                      <HotplateChicken className="mx-auto w-full max-w-[280px]" />
                    ) : (
                      <NasiGorengPlate className="mx-auto w-full max-w-[280px]" />
                    )}
                    <div className="mt-5">
                      <Name d={d} />
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 border-t-2 border-navy pt-6">
                <h3 className="font-bold">{foodSection.alsoLabel}</h3>
                <ul className="mt-2 space-y-1">
                  {text.map((d) => (
                    <li key={d.id} className="flex flex-wrap items-baseline gap-x-3">
                      <span className="f-name t-lead" {...mock(d.name.mockup)}>
                        {d.name.text}
                      </span>
                      {d.price && (
                        <span className="t-body whitespace-nowrap font-bold" {...mock(d.price.mockup)}>
                          {d.price.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
