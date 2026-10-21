import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import LatteCup from "@/components/LatteCup";
import Renceng from "@/components/Renceng";
import RotiBakar from "@/components/RotiBakar";
import PriceChip from "@/components/PriceChip";
import { mock } from "@/lib/mockup";
import { cupTimes, hero, menu, warkop } from "@/content";

// The menu splits along the name: "Cup Times" (the latte cups), a strip of sachets as the "&",
// then "& Warkop" (roti bakar, Indomie, sachet drinks).
export default function MenuSection() {
  return (
    <section id="menu" className="section bg-frost" aria-labelledby="menu-title">
      <Container>
        <div className="max-w-[40rem]">
          <h2 id="menu-title" className="t-head font-display text-cup">
            {menu.heading}
          </h2>
          <p className="t-lead mt-3 font-medium">
            {menu.lead} <span className="sm:block">{menu.tagline}</span>
          </p>
        </div>

        <Reveal className="mt-12 md:mt-16">
          <h3 className="t-lead-display text-cup">{cupTimes.heading}</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">
            <ul className="grid gap-5 md:grid-cols-3 md:gap-4 lg:order-2 lg:col-span-7">
              {cupTimes.lattes.map((l) => (
                <li key={l.name}>
                  <LatteCup name={l.name} price={l.price} brand={hero.sticker.brand} tint={l.tint} tilt={l.tilt} />
                </li>
              ))}
            </ul>
            <figure className="lg:order-1 lg:col-span-5">
              <img
                src={cupTimes.photo.src}
                width={cupTimes.photo.width}
                height={cupTimes.photo.height}
                alt={cupTimes.photo.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-xl"
              />
              <figcaption className="t-small mt-2 text-ink/80">{cupTimes.photo.caption}</figcaption>
            </figure>
          </div>
        </Reveal>

        <Renceng className="mt-14 md:mt-20" />

        <Reveal className="mt-10 md:mt-12">
          <h3 className="t-lead-display text-cup">{warkop.heading}</h3>
          <p className="t-body mt-2 max-w-[56ch]" {...mock(warkop.intro.mockup)}>
            {warkop.intro.text}
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <RotiBakar className="block w-full max-w-[19rem]" />
              <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="t-body font-bold">{warkop.roti.name}</span>
                <PriceChip mockup={warkop.roti.price.mockup}>{warkop.roti.price.text}</PriceChip>
              </p>
              <p className="t-body text-ink/80" {...mock(warkop.roti.variants.mockup)}>
                {warkop.roti.variants.text}
              </p>
            </div>
            <div className="md:col-span-7 md:pt-2">
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {warkop.items.map((it) => (
                  <li key={it.name} {...mock(it.mockup)}>
                    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span className="t-body font-medium">{it.name}</span>
                      {it.price ? <PriceChip mockup={it.mockup}>{it.price}</PriceChip> : null}
                    </p>
                    {it.note ? <p className="t-small mt-1 text-ink/80">{it.note}</p> : null}
                  </li>
                ))}
              </ul>
              <p className="t-body mt-8 border-t border-cup/25 pt-5">
                <span className="font-bold">{warkop.alsoLabel}</span>{" "}
                {warkop.alsoServed.map((a, i) => (
                  <span key={a.text} {...mock(a.mockup)}>
                    {a.text}
                    {i < warkop.alsoServed.length - 1 ? ", " : "."}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
