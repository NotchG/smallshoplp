import { menu, type MenuItem } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "../Container";
import Reveal from "../Reveal";
import { menuArt } from "../art/MenuArt";

function Tile({ art, label, bg }: { art: MenuItem["art"]; label: string; bg?: string }) {
  const Art = menuArt[art];
  return (
    <div className={`tile ${bg ?? ""}`} role="img" aria-label={label}>
      <Art />
    </div>
  );
}

function DrinkCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card p-4 lg:p-5 flex gap-4 lg:flex-col" {...mock(item.mockup)}>
      <Tile art={item.art} label={item.artLabel} />
      <div>
        <h3 className="t-lead font-semibold">{item.name}</h3>
        <p className="font-bold tabular mt-1">{item.price}</p>
        <p className="mt-1">{item.line}</p>
      </div>
    </article>
  );
}

export default function Menu() {
  const { feature, nonCoffee, snacks } = menu;
  return (
    <section id="menu" aria-labelledby="menu-h" className="wall-kuning section">
      <Container>
        <Reveal>
          <h2 id="menu-h" className="font-display t-head">{menu.heading}</h2>
          <p className="mt-4 t-lead font-semibold measure">{menu.praiseLine}</p>
          <p className="mt-1 t-small font-medium" {...mock(menu.note.mockup)}>{menu.note.text}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <figure className="relative lg:col-span-5 max-w-md md:max-w-none md:grid md:grid-cols-[minmax(0,360px)_1fr] md:gap-x-8 md:items-end lg:block lg:max-w-110">
              <p className="bubble mb-7 md:col-span-2 md:justify-self-start lg:absolute lg:-left-5 lg:top-0 lg:z-10">{menu.slogan}</p>
              <div className="photo-frame lg:mt-16">
                <div className="crop-coffee">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={feature.photo} alt={feature.photoAlt} width={960} height={1280} loading="lazy" decoding="async" />
                </div>
              </div>
              <figcaption className="mt-4 md:mt-0 md:pb-2 lg:mt-4 lg:pb-0" {...mock(feature.mockup)}>
                <h3 className="t-lead font-semibold">{feature.name}</h3>
                <p className="font-bold tabular mt-1">{feature.price}</p>
                <p className="mt-1">{feature.line}</p>
              </figcaption>
            </figure>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2 content-start lg:gap-6">
              {menu.drinks.map((d) => (
                <DrinkCard key={d.name} item={d} />
              ))}
              <article className="menu-card p-4 lg:p-5" {...mock(nonCoffee.mockup)}>
                <h3 className="t-lead font-semibold">{nonCoffee.title}</h3>
                <p className="font-bold tabular mt-1">{nonCoffee.price}</p>
                <ul className="mt-3 divide-y-2 divide-kuning">
                  {nonCoffee.items.map((n) => (
                    <li key={n} className="py-2">{n}</li>
                  ))}
                </ul>
              </article>
            </div>

            <article className="menu-card lg:col-span-12 p-4 lg:p-5 flex flex-col gap-4 sm:flex-row sm:items-center lg:gap-8" {...mock(snacks.mockup)}>
              <div className="flex gap-4 items-center lg:gap-6">
                <Tile art={snacks.art} label={snacks.artLabel} />
                <div>
                  <h3 className="t-lead font-semibold">{snacks.title}</h3>
                  <p className="font-bold tabular mt-1">{snacks.price}</p>
                  <p className="mt-1">{snacks.line}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 sm:flex-1 sm:justify-end">
                {snacks.items.map((s) => (
                  <li key={s} className="rounded-md bg-kuning px-3 py-2 font-medium">{s}</li>
                ))}
              </ul>
            </article>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
