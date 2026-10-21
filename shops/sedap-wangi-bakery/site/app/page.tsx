import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import LogoLockup from "@/components/LogoLockup";
import HoursToday from "@/components/HoursToday";
import CakeBox from "@/components/CakeBox";
import Button from "@/components/Button";
import SectionTab from "@/components/SectionTab";
import TentCard, { MiniTag } from "@/components/TentCard";
import DishStrip from "@/components/DishStrip";
import MenuBoard from "@/components/MenuBoard";
import KeyBand from "@/components/KeyBand";
import OrderCard from "@/components/OrderCard";
import HoursTable from "@/components/HoursTable";
import Footer from "@/components/Footer";
import { ChatIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { caseItems, copy, favourites, hours, orders, praise, shop } from "@/content";
import { mock } from "@/lib/mockup";

function Hero() {
  const h = copy.hero;
  return (
    <header className="hero">
      <Container className="grid gap-8 md:grid-cols-12 md:items-center md:gap-6">
        <div className="md:col-span-7 lg:col-span-6">
          <LogoLockup size="hero" id="hero-title" />
          <p className="hero-line t-lead">{h.line.text}</p>
          <HoursToday />
          <div className="hero-actions">
            <Button href={shop.directionsUrl} icon={<PinIcon />} external>
              {h.directions}
            </Button>
            <Button href={shop.whatsapp.general} variant="secondary" icon={<ChatIcon />} mockup={h.whatsapp.mockup} external>
              {h.whatsapp.text}
            </Button>
          </div>
          <p className="hero-links t-body">
            <a className="link link-row num" href={shop.phone.href}>
              {h.call} {shop.phone.display}
            </a>
            <a className="link link-row" href="#dapur">
              <span className="hide-phone">{h.toMenu}</span>
              <span className="show-phone">{h.toMenuShort}</span>
            </a>
          </p>
        </div>
        <div className="md:col-span-5 lg:col-span-6">
          <CakeBox />
        </div>
      </Container>
    </header>
  );
}

function Etalase() {
  const e = copy.etalase;
  const [lemon, ...rest] = favourites;
  return (
    <section id="kue" className="section" aria-labelledby="kue-title">
      <Container>
        <SectionTab id="kue-title" heading={e.heading} />
        <p className="section-intro t-lead measure">{e.intro.text}</p>
        <Reveal>
          <h3 className="subhead t-lead">{e.favouritesTitle}</h3>
          <div className="fav-grid">
            <TentCard cake={lemon} variant="feature" />
            {rest.map((cake) => (
              <TentCard key={cake.id} cake={cake} variant="row" />
            ))}
          </div>
          <p className="t-small mt-3 text-ink/80" {...mock(e.illustrationNote.mockup)}>
            {e.illustrationNote.text}
          </p>

          <h3 className="subhead t-lead mt-14">{e.caseTitle}</h3>
          <ul className="case-grid list-none p-0">
            {caseItems.map((c) => (
              <MiniTag key={c.name} {...c} />
            ))}
          </ul>
          <p className="t-small mt-3 text-ink/80">{e.caseCaption}</p>

          <div className="mt-10 grid gap-4 border-t border-ink/15 pt-6 lg:grid-cols-12 lg:gap-6">
            <p className="t-body lg:col-span-5">{e.deals.text}</p>
            <p className="t-body lg:col-span-6 lg:col-start-7" {...mock(e.alsoSold.mockup)}>
              {e.alsoSold.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Dapur() {
  const d = copy.dapur;
  return (
    <section id="dapur" className="section bg-marble" aria-labelledby="dapur-title">
      <Container>
        <SectionTab id="dapur-title" heading={d.heading} ground="var(--color-marble)" />
        <div className="section-intro">
          <p className="t-lead font-bold" {...mock(d.line.mockup)}>
            {d.line.text}
          </p>
          <p className="t-body mt-1">{d.sub.text}</p>
        </div>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:sticky lg:top-8 lg:col-span-4 lg:self-start">
            <DishStrip />
          </div>
          <div className="lg:col-span-8">
            <MenuBoard />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Pesan() {
  const p = copy.pesan;
  return (
    <section id="pesan" className="tone-maroon bg-maroon text-paper" aria-labelledby="pesan-title">
      <KeyBand id="key-pesan" />
      <div className="section">
        <Container>
          <SectionTab id="pesan-title" heading={p.heading} tone="maroon" />
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <p className="t-lead measure" {...mock(p.intro.mockup)}>
                {p.intro.text}
              </p>
              <p className="t-body mt-6 font-bold">{copy.footer.reservations}</p>
              <p className="t-body">
                <a className="link-row num underline underline-offset-4" href={shop.phone.href}>
                  {shop.phone.display}
                </a>
                <span aria-hidden="true"> · </span>
                <a
                  className="link-row num underline underline-offset-4"
                  href={shop.whatsapp.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...mock(shop.whatsapp.mockup)}
                >
                  {shop.whatsapp.display}
                </a>
              </p>
            </div>
            <Reveal className="grid gap-6 md:grid-cols-2 lg:col-span-8">
              {orders.map((o) => (
                <OrderCard key={o.id} order={o} />
              ))}
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}

function Ulasan() {
  const u = copy.ulasan;
  return (
    <section id="ulasan" className="section bg-blush" aria-labelledby="ulasan-title">
      <Container>
        <SectionTab id="ulasan-title" heading={u.heading} ground="var(--color-blush)" />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <p className="t-lead font-bold text-brick">{u.rating}</p>
            <p className="t-body">{u.count}</p>
            <p className="t-small mt-3 text-ink/80">{u.caption}</p>
          </div>
          <Reveal as="ul" className="praise t-body lg:col-span-8">
            {praise.map((p) => (
              <li key={p.text}>{p.text}</li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Lokasi() {
  const l = copy.lokasi;
  return (
    <section id="lokasi" className="section" aria-labelledby="lokasi-title">
      <Container>
        <SectionTab id="lokasi-title" heading={l.heading} />
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <address className="t-lead not-italic">
              {shop.address.street}
              <br />
              {shop.address.area}
              <br />
              {shop.address.city}
            </address>
            <h3 id="jam-buka" className="t-body mt-8 mb-2 font-bold">
              {l.hoursTitle} · {hours.everyDay.toLowerCase()}
            </h3>
            <HoursTable labelledBy="jam-buka" />
            <p className="t-body mt-6 font-bold">{l.parking.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={shop.directionsUrl} icon={<PinIcon />} external>
                {copy.hero.directions}
              </Button>
              <Button href={shop.whatsapp.general} variant="secondary" icon={<ChatIcon />} mockup={shop.whatsapp.mockup} external>
                WhatsApp
              </Button>
              <Button href={shop.phone.href} variant="secondary" icon={<PhoneIcon />}>
                {copy.hero.call}
              </Button>
            </div>
          </div>
          <div className="map-col lg:col-span-6">
            <div className="map-frame">
              <div className="map-fallback t-body" aria-hidden="true">
                <PinIcon />
                <p className="font-bold">{shop.name}</p>
                <p>{shop.address.street}</p>
              </div>
              <iframe
                src={shop.mapEmbedUrl}
                title={l.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a className="link link-row t-body" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
              {l.mapFallback}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Etalase />
        <Dapur />
        <Pesan />
        <Ulasan />
        <Lokasi />
      </main>
      <Footer />
    </>
  );
}
