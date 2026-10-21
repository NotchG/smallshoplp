import { Fragment } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignPanel from "@/components/SignPanel";
import HeroSign from "@/components/HeroSign";
import ActionButton from "@/components/ActionButton";
import Festoon from "@/components/Festoon";
import { mock } from "@/lib/mockup";
import {
  actions,
  contact,
  hero,
  kitchen,
  menu,
  praise,
  rooftop,
  shop,
  visit,
  type Dish,
} from "@/content";

function Hero() {
  const { caption } = hero;
  return (
    <section className="ground-beton" aria-label="Pintu Dua Coffee">
      <Container className="hero">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8 md:items-start">
          <div className="md:col-span-7">
            <HeroSign>
              <SignPanel size="hero" as="h1" lines={shop.signLines} sub={shop.subtitle.text} />
            </HeroSign>
            <p className="t-lead mt-10 max-w-[26ch]" {...mock(hero.sub.mockup)}>
              {hero.sub.text}
            </p>
            <p className="t-label mt-4 flex items-center gap-3 text-abu-beton">
              <span className="lamp-dot" aria-hidden="true" />
              <span>
                {hero.todayLabel} · <span className="nums text-papan">{hero.todayTime}</span>
              </span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionButton href={shop.mapsUrl} variant="lampu" external>
                {actions.directions}
              </ActionButton>
              <ActionButton href={shop.whatsapp.text} variant="line-dark" external {...mock(shop.whatsapp.mockup)}>
                {actions.whatsapp}
              </ActionButton>
            </div>
          </div>

          <figure className="hero-photo md:col-span-5 lg:col-start-9 lg:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={hero.photo.width}
              height={hero.photo.height}
              fetchPriority="high"
              className="photo"
            />
            <figcaption className="mt-3">
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-semibold" {...mock(caption.name.mockup)}>
                  {caption.name.text}
                </span>
                <span className="nums text-abu-beton" {...mock(caption.price.mockup)}>
                  {caption.price.text}
                </span>
              </p>
              <p className="t-small mt-1 text-abu-beton">{caption.desc.text}</p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

function Rooftop() {
  return (
    <section className="ground-malam rooftop" aria-labelledby="rooftop-h">
      <Container>
        <Festoon />
        <Reveal className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-6">
            <p className="t-label text-abu-beton">{rooftop.label}</p>
            <h2 id="rooftop-h" className="t-head mt-4" {...mock(rooftop.heading.mockup)}>
              {rooftop.heading.text}
            </h2>
            <p className="t-lead mt-6 max-w-[30ch] text-abu-beton">{rooftop.lead.text}</p>
          </div>
          <dl className="floor-rows md:col-start-8 md:col-span-5 md:self-end">
            {rooftop.rows.map((row) => (
              <div key={row.key} className="floor-row">
                <dt className="t-label text-abu-beton">{row.key}</dt>
                <dd className="mt-2">
                  {row.text.text}{" "}
                  <span className="text-papan font-semibold" {...mock(row.extra.mockup)}>
                    {row.extra.text}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li>
      <p className="flex flex-wrap items-baseline gap-x-3">
        <span className="font-medium" {...mock(dish.name.mockup)}>
          {dish.name.text}
        </span>
        {dish.price && (
          <span className="nums text-lampu" {...mock(dish.price.mockup)}>
            {dish.price.text}
          </span>
        )}
      </p>
      {dish.desc && (
        <p className="t-small text-abu-beton" {...mock(dish.desc.mockup)}>
          {dish.desc.text}
        </p>
      )}
    </li>
  );
}

function CounterSteps() {
  return (
    <ol className="counter-steps" aria-label="Cara pesan di bar">
      {menu.counter.map((step, i) => (
        <li key={step.sign}>
          <span className="placard">{step.sign}</span>
          <p className="t-small mt-2 text-abu-semen">{step.text.text}</p>
          {i === 0 && (
            <svg className="counter-arrow" viewBox="0 0 16 28" aria-hidden="true" focusable="false">
              <path d="M8 2v22M2 18l6 6 6-6" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

function Menu() {
  const sig = menu.signature;
  return (
    <div className="bg-malam">
      <section className="ground-semen arc-top section" aria-labelledby="menu-h">
        <Container>
          <Reveal className="menu-grid">
            <div className="menu-intro">
              <h2 id="menu-h" className="t-head">
                {menu.heading}
              </h2>
              <p className="t-lead mt-4 text-abu-semen">{menu.lead.text}</p>
            </div>

            <div className="menu-card">
              <div>
                <h3 className="t-label text-lampu">{menu.signatureLabel}</h3>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-3">
                  <span className="t-lead" {...mock(sig.name.mockup)}>
                    {sig.name.text}
                  </span>
                  {sig.price && (
                    <span className="nums text-lampu" {...mock(sig.price.mockup)}>
                      {sig.price.text}
                    </span>
                  )}
                </p>
                {sig.desc && <p className="t-small mt-1 text-abu-beton">{sig.desc.text}</p>}
              </div>
              <div className="menu-groups">
                {menu.groups.map((g) => (
                  <div key={g.title}>
                    <h3 className="t-label text-abu-beton">{g.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {g.items.map((d) => (
                        <DishRow key={d.name.text} dish={d} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="t-small menu-note text-abu-beton" {...mock(menu.note.mockup)}>
                {menu.note.text}
              </p>
            </div>

            <div className="menu-steps">
              <CounterSteps />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

function Kitchen() {
  return (
    <section className="ground-semen section kitchen" aria-labelledby="dapur-h">
      <Container>
        <Reveal>
          <div className="grid gap-y-4 md:grid-cols-12 md:gap-x-8 md:items-baseline">
            <h2 id="dapur-h" className="t-head md:col-span-6">
              {kitchen.heading}
            </h2>
            <p className="t-lead text-abu-semen md:col-span-6" {...mock(kitchen.lead.mockup)}>
              {kitchen.lead.text}
            </p>
          </div>
          <div className="mt-10 grid gap-y-12 md:mt-12 md:grid-cols-2 md:gap-x-8">
            {kitchen.dishes.map((d) => (
              <figure key={d.photo.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.photo.src}
                  alt={d.photo.alt}
                  width={d.photo.width}
                  height={d.photo.height}
                  loading="lazy"
                  decoding="async"
                  className="photo"
                  style={{ maxWidth: d.photo.width }}
                />
                <figcaption className="mt-3">
                  <p className="flex flex-wrap items-baseline gap-x-3">
                    <span className="t-lead" {...mock(d.name.mockup)}>
                      {d.name.text}
                    </span>
                    <span className="nums text-abu-semen" {...mock(d.price.mockup)}>
                      {d.price.text}
                    </span>
                  </p>
                  <p className="mt-1 text-abu-semen">{d.desc.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 id="dapur-extra" className="t-label text-abu-semen">
              {kitchen.extrasLabel}
            </h3>
            <ul className="inline-list leading-relaxed" aria-labelledby="dapur-extra">
              {kitchen.extras.map((x) => (
                <Fragment key={x.text}>
                  <li {...mock(x.mockup)}>{x.text}</li>{" "}
                </Fragment>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Praise() {
  return (
    <section className="ground-beton section" aria-labelledby="praise-h">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <h2 id="praise-h" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-lead mt-4 nums">{praise.rating}</p>
            <p className="t-small mt-6 max-w-[30ch] text-abu-beton">{praise.note}</p>
          </div>
          <ul className="praise-grid lg:col-span-8">
            {praise.items.map((p) => (
              <li key={p.text} className="t-lead">
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

function Visit() {
  return (
    <section className="ground-semen section" aria-labelledby="visit-h">
      <Container>
        <Reveal className="grid gap-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 id="visit-h" className="t-head">
              {visit.heading}
            </h2>
            <h3 className="t-label mt-10 text-abu-semen">{visit.addressLabel}</h3>
            <address className="mt-3 not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <ActionButton href={shop.mapsUrl} variant="line-light" external className="mt-5">
              {actions.directions}
            </ActionButton>

            <h3 className="t-label mt-10 text-abu-semen">{visit.hoursLabel}</h3>
            <table className="hours mt-3">
              <tbody>
                {shop.hours.map((h) => (
                  <tr key={h.days}>
                    <th scope="row">{h.days}</th>
                    <td className="nums">{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-abu-semen">{visit.closingLine}</p>
          </div>

          <div className="md:col-span-7 lg:col-start-6">
            <div className="map-frame">
              <iframe
                title={visit.mapTitle}
                src={shop.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="t-small mt-1">
              <a href={shop.placeUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                {visit.mapFallback}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section className="ground-malam section contact" aria-labelledby="contact-h">
      <Container>
        <Reveal className="grid gap-12 md:grid-cols-12 md:gap-x-8 md:items-end">
          <div className="md:col-span-6 lg:col-span-7">
            <SignPanel size="mark" as="p" lines={shop.signLines} sub={shop.subtitle.text} />
            <p className="t-label mt-12 text-abu-beton">{contact.label}</p>
            <h2 id="contact-h" className="t-head mt-4" {...mock(contact.heading.mockup)}>
              {contact.heading.text}
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4">
            <ActionButton href={shop.whatsapp.text} variant="lampu" external {...mock(shop.whatsapp.mockup)}>
              {actions.whatsapp}
            </ActionButton>
            <ActionButton href={`tel:${shop.phoneTel}`} variant="line-dark">
              {actions.call} <span className="nums">{shop.phoneDisplay}</span>
            </ActionButton>
            <ActionButton href={shop.mapsUrl} variant="line-dark" external>
              {actions.directions}
            </ActionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Rooftop />
        <Menu />
        <Kitchen />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <footer className="ground-malam">
        <Container className="site-footer t-small text-abu-beton">
          <p>
            {shop.name} · {shop.address} · <span className="whitespace-nowrap">
              {shop.hours[0].days} <span className="nums">{shop.hours[0].time}</span>
            </span>
          </p>
        </Container>
      </footer>
    </>
  );
}
