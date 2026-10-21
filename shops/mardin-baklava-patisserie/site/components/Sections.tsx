import Container from "./Container";
import Reveal from "./Reveal";
import Button, { icons } from "./Button";
import Wordmark from "./Wordmark";
import HeroCounter from "./HeroCounter";
import SweetScale from "./SweetScale";
import MapEmbed from "./MapEmbed";
import { TodayHours, HoursList } from "./TodayHours";
import Piece from "./art/Piece";
import { KunafePan } from "./art/Kunafe";
import TeaGlass from "./art/TeaGlass";
import BoxArt from "./art/BoxArt";
import PlatterRule from "./art/PlatterRule";
import { mock } from "@/lib/mockup";
import {
  actions,
  boxes,
  contact,
  drinks,
  etalase,
  footer,
  hero,
  hoursLine,
  kunafe,
  pieces,
  praise,
  shop,
  sweetness,
  visit,
} from "@/content";

// Keeps a hyphenated word on one line ("oleh-oleh" must never split at its hyphen).
function NoBreak({ text, word }: { text: string; word: string }) {
  const i = text.toLowerCase().indexOf(word);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="whitespace-nowrap">{text.slice(i, i + word.length)}</span>
      {text.slice(i + word.length)}
    </>
  );
}

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  return (
    <section aria-label={shop.name} className="ground-room hero-pad">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="lg:col-span-8">
            <Wordmark as="h1" />
          </div>
          <div className="mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:pb-1">
            <p className="t-lead" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayHours className="mt-5" />
            <div className="hero-actions mt-5">
              <Button href={shop.directionsUrl} icon="directions" external>
                {actions.directions}
              </Button>
              <Button href={shop.whatsapp.href} variant="secondary" icon="chat" external mockup={shop.whatsapp.mockup}>
                {actions.whatsapp}
              </Button>
            </div>
            <p className="t-small mt-4 text-kraft">{hero.rating}</p>
          </div>
        </div>
        <HeroCounter className="mt-8 lg:mt-12" />
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- Etalase kami */
export function Etalase() {
  return (
    <section id="etalase" aria-labelledby="etalase-h" className="ground-room section">
      <Container>
        <div className="md:grid md:grid-cols-12 md:items-end md:gap-x-6">
          <h2 id="etalase-h" className="t-head md:col-span-6">
            {etalase.heading}
          </h2>
          <p className="t-lead mt-4 md:col-span-6 md:col-start-7 md:mt-0 lg:col-span-5" {...mock(etalase.lead.mockup)}>
            {etalase.lead.text}
          </p>
        </div>
        <Reveal className="mt-10 lg:mt-14">
          <div className="counter-panel ground-filo lg:grid lg:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-full">
              <img
                src="/photos/tray-800.jpg"
                srcSet="/photos/tray-800.jpg 800w, /photos/tray-1600.jpg 1600w"
                sizes="(min-width: 1024px) 500px, calc(100vw - 40px)"
                width={1600}
                height={1260}
                alt={etalase.photoAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
              />
            </div>
            <div className="px-5 py-8 md:p-10 lg:col-span-7 lg:px-12 lg:py-12">
              <ul className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {pieces.map((p) => (
                  <li key={p.id} {...mock(p.mockup)}>
                    <Piece kind={p.id} label={p.alt} className="size-24 lg:size-30" />
                    <p className="t-name mt-3" lang="tr">
                      {p.nameTr}
                    </p>
                    <p className="t-small mt-1 italic">{p.descId}</p>
                    {p.favourite ? (
                      <p className="t-label mt-2 flex items-center gap-2">
                        <span className="size-2.5 flex-none rounded-full border border-room bg-pistachio" aria-hidden="true" />
                        {etalase.favourite}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="t-label mt-10" {...mock(etalase.price.mockup)}>
                {etalase.price.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Kunafe */
export function Kunafe() {
  return (
    <section id="kunafe" aria-labelledby="kunafe-h" className="ground-kunafe section">
      <Container>
        <Reveal className="grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
            <h2 id="kunafe-h" className="t-head">
              {kunafe.heading}
            </h2>
            <p className="t-lead measure mt-4" {...mock(kunafe.lead.mockup)}>
              {kunafe.lead.text}
            </p>
          </div>
          <div className="mx-auto mt-10 w-full max-w-72 md:max-w-96 lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:max-w-[30rem] lg:self-center lg:pr-6">
            <KunafePan label={kunafe.art} className="h-auto w-full" />
          </div>
          <div className="mt-10 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mt-10">
            <ul className="grid gap-5">
              {kunafe.points.map((p) => (
                <li key={p.title} className="border-t border-room/30 pt-4">
                  <p className="t-name">{p.title}</p>
                  <p className="t-body mt-1">{p.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="t-label" {...mock(kunafe.price.mockup)}>
                {kunafe.price.text} · {kunafe.priceNote}
              </span>
            </p>
            <p className="t-small mt-2 italic">{kunafe.far.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ Teman minum teh */
export function Drinks() {
  return (
    <section id="teh" aria-labelledby="teh-h" className="ground-room section">
      <Container className="grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-6 lg:row-start-1 lg:self-end">
          <h2 id="teh-h" className="t-head">
            {drinks.heading}
          </h2>
          <p className="t-lead measure mt-4">{drinks.lead.text}</p>
        </div>
        <div className="mx-auto mt-10 w-full max-w-50 md:max-w-64 lg:col-span-4 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:max-w-90 lg:self-center">
          <TeaGlass label={drinks.art} className="h-auto w-full" />
        </div>
        <div className="mt-10 lg:col-span-6 lg:row-start-2">
          <ul className="border-t border-syrup/40">
            {drinks.menu.map((m) => (
              <li key={m.nameTr} className="flex flex-wrap items-baseline gap-x-3 border-b border-syrup/40 py-4" {...mock(m.mockup)}>
                <span className="t-name text-syrup" lang="tr">
                  {m.nameTr}
                </span>
                <span className="t-body text-kraft">· {m.descId}</span>
                <span className="t-body text-filo">{m.price}</span>
              </li>
            ))}
          </ul>
          <p className="t-lead mt-8 italic" {...mock(drinks.host.mockup)}>
            {drinks.host.text}
          </p>
          <p className="t-body mt-2 text-kraft">{drinks.room.text}</p>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ Seberapa manis? */
export function Sweetness() {
  return (
    <section id="manis" aria-labelledby="manis-h" className="ground-room section-bottom">
      <Container>
        <PlatterRule id="rule-manis" />
        <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <h2 id="manis-h" className="t-head lg:col-span-5">
            {sweetness.heading}
          </h2>
          <p className="t-lead mt-4 lg:col-span-6 lg:col-start-7 lg:mt-0" {...mock(sweetness.lead.mockup)}>
            {sweetness.lead.text}
          </p>
        </div>
        <SweetScale className="mt-12 lg:mt-20" />
        <p className="t-small mt-10 text-kraft lg:mt-12">{sweetness.note.text}</p>
      </Container>
    </section>
  );
}

/* ---------------------------------------------- Untuk oleh-oleh & hampers */
export function Boxes() {
  return (
    <section id="oleh-oleh" aria-labelledby="oleh-h" className="ground-kraft section">
      <Container>
        <Reveal className="bag-frame px-9 py-12 md:p-14 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:px-16 lg:py-16">
          <div className="lg:col-span-5">
            <h2 id="oleh-h" className="t-head">
              <NoBreak text={boxes.heading} word="oleh-oleh" />
            </h2>
            <p className="t-lead mt-4">{boxes.lead.text}</p>
            <p className="t-body measure mt-4" {...mock(boxes.more.mockup)}>
              {boxes.more.text}
            </p>
            <p className="t-label mt-5" {...mock(boxes.occasions.mockup)}>
              {boxes.occasions.text}
            </p>
            <div className="mt-8">
              <Button href={shop.whatsapp.href} icon="chat" external mockup={boxes.cta.mockup}>
                {boxes.cta.text}
              </Button>
            </div>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6 lg:col-span-7 lg:col-start-6 lg:mt-0">
            {boxes.options.map((o) => (
              <li key={o.id} className="flex items-center gap-5 md:flex-col md:items-start md:gap-4" {...mock(o.mockup)}>
                <div className="flex h-28 w-32 flex-none items-end md:h-44 md:w-full lg:h-52">
                  <BoxArt kind={o.id as "box6" | "box12" | "tray"} label={o.alt} className="max-h-full max-w-full" />
                </div>
                <div>
                  <p className="t-name">
                    {o.name} <span className="whitespace-nowrap">{o.size}</span>
                  </p>
                  <p className="t-body mt-1">
                    <NoBreak text={o.price} word="(pre-order)" />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- Kata mereka */
export function Praise() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-h" className="ground-room section">
      <Container className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <h2 id="ulasan-h" className="t-head">
            {praise.heading}
          </h2>
          <p className="t-lead mt-4 text-syrup">{praise.rating}</p>
          <p className="t-small mt-2 text-kraft">{praise.note}</p>
        </div>
        <Reveal className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <ul>
            {praise.items.map((p, i) => (
              <li key={p.topic} className={`py-6 ${i === 0 ? "pt-0 lg:pt-2" : "border-t border-syrup/60"}`}>
                <p className="t-label text-syrup">{p.topic}</p>
                <p className="t-lead mt-2 max-w-[45ch]">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Kunjungi kami */
export function Visit() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-h" className="ground-kraft section">
      <Container>
        <h2 id="kunjungi-h" className="t-head">
          {visit.heading}
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-x-8 lg:mt-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="md:row-span-2 lg:col-span-4 lg:row-span-1">
            <address className="not-italic">
              {shop.addressLines.map((l, i) => (
                <span key={l} className={`block ${i === 0 ? "t-lead mb-1" : "t-body"}`}>
                  {l}
                </span>
              ))}
            </address>
            <h3 className="t-label mt-8">{visit.hoursHeading}</h3>
            <HoursList className="t-body mt-3" />
            <p className="t-body mt-6 flex items-center gap-2 font-semibold">{visit.parking.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={shop.directionsUrl} icon="directions" external>
                {actions.directions}
              </Button>
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden border-[1.5px] border-room lg:col-span-4 lg:aspect-[4/5]">
            <img
              src="/photos/shelves-690.jpg"
              width={690}
              height={704}
              alt={visit.photoAlt}
              fetchPriority="low"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            />
          </figure>
          <div className="lg:col-span-4">
            <MapEmbed />
            <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="t-label mt-3 inline-flex min-h-11 items-center gap-1.5 underline">
              {visit.mapLink}
              {icons.external}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- Hubungi kami */
export function Contact() {
  return (
    <section id="hubungi" aria-labelledby="hubungi-h" className="ground-pistachio band">
      <Container className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6">
        <div className="lg:col-span-5">
          <h2 id="hubungi-h" className="t-head">
            {contact.heading}
          </h2>
          <p className="t-body mt-3" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
        </div>
        <div className="mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <a href={shop.tel} className="phone-link">
            {shop.phone}
          </a>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={shop.whatsapp.href} icon="chat" external mockup={shop.whatsapp.mockup}>
              {actions.whatsapp}
            </Button>
            <Button href={shop.tel} variant="secondary" icon="phone">
              {actions.call}
            </Button>
            <Button href={shop.directionsUrl} variant="secondary" icon="directions" external>
              {actions.directions}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Footer */
export function Footer() {
  return (
    <footer className="ground-room pb-12 pt-12 lg:pb-14 lg:pt-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <div className="lg:col-span-4">
            <Wordmark size="head" />
          </div>
          <div className="t-small text-kraft lg:col-span-5 lg:col-start-5">
            <p>{shop.address}</p>
            <p className="mt-1">{hoursLine}</p>
            <p className="mt-1">
              <a href={shop.tel} className="inline-flex min-h-11 items-center underline">
                {shop.phone}
              </a>
            </p>
          </div>
          <p className="t-small text-syrup lg:col-span-3 lg:col-start-10">{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
