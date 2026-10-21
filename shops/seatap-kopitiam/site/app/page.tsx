import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Wordmark from "@/components/Wordmark";
import HeroWall from "@/components/HeroWall";
import TodayHours from "@/components/TodayHours";
import ActionLink from "@/components/ActionLink";
import ProductArt from "@/components/ProductArt";
import ProductTile from "@/components/ProductTile";
import MirrorPhoto from "@/components/MirrorPhoto";
import WeekTiles from "@/components/WeekTiles";
import MapEmbed from "@/components/MapEmbed";
import { IconArrow, IconChat, IconDirections, IconPhone } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import {
  actions,
  banner,
  breakfast,
  bundle,
  contact,
  footer,
  hero,
  hours,
  hoursSummary,
  menu,
  praise,
  praiseSection,
  products,
  room,
  shop,
  visit,
} from "@/content";

function Hero() {
  return (
    <section className="ground-botol hero-pad" aria-labelledby="hero-title">
      <Container className="grid-12">
        <div className="flex flex-col lg:col-span-6 lg:justify-end">
          <div>
            <h1 id="hero-title" className="t-display">
              <span className="sr-only sr-name">{shop.name}</span>
              <Wordmark className="wordmark-hero" />
              <span className="t-head font-display block font-medium" aria-hidden="true">
                {shop.sub}
              </span>
            </h1>
            <p className="t-small tagline mt-4 text-kunyit">{shop.tagline}</p>
          </div>
          <div className="mt-6 lg:mt-10">
            <p className="t-lead measure hero-line" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayHours className="t-body mt-5 font-semibold" />
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionLink href={shop.directionsUrl} icon={<IconDirections />}>
                {actions.directions}
              </ActionLink>
              <ActionLink href={shop.whatsappHref} variant="ghost" mockup={shop.whatsappMockup} icon={<IconChat />}>
                {actions.whatsapp}
              </ActionLink>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <HeroWall alt={hero.photoAlt} />
        </div>
      </Container>
    </section>
  );
}

function Sarapan() {
  return (
    <section className="ground-krem section" aria-labelledby="sarapan-title">
      <Container>
        <Reveal className="grid-12 lg:grid-rows-[1fr_auto_auto_1fr]">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
            <h2 id="sarapan-title" className="t-head heading">
              {breakfast.heading}
            </h2>
            <p className="t-lead mt-3 measure" {...mock(breakfast.lead.mockup)}>
              {breakfast.lead.text}
            </p>
          </div>
          <div className="tile-kunyit sarapan-tile flex items-center justify-center lg:col-span-5 lg:row-span-4 lg:row-start-1">
            <ProductArt id="sarapan" label={breakfast.art} className="sarapan-art" viewBox="0 46 200 150" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-3">
            <p className="t-body measure" {...mock(breakfast.intro.mockup)}>
              {breakfast.intro.text}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {breakfast.items.map((i) => (
                <li key={i.name.text} className="t-body flex flex-wrap items-baseline gap-x-3">
                  <span className="font-semibold" {...mock(i.name.mockup)}>
                    {i.name.text}
                  </span>
                  <span className="font-semibold text-bata" {...mock(i.price.mockup)}>
                    {i.price.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Menu() {
  return (
    <section className="ground-krem menu-section" aria-labelledby="menu-title">
      <Reveal className="menu-wall-wrap">
        <div className="menu-wall">
          <div className="wall-head">
            <h2 id="menu-title" className="t-head heading">
              {menu.heading}
            </h2>
            <p className="t-body mt-3 measure" {...mock(menu.intro.mockup)}>
              {menu.intro.text}
            </p>
          </div>
          {products.map((p) => (
            <ProductTile key={p.id} p={p} />
          ))}
          <span className="wall-plain tile-sage" data-area="plainA" aria-hidden="true" />
          <span className="wall-plain tile-sage" data-area="plainB" aria-hidden="true" />
          <article className="wall-tile wall-bundle tile-bata">
            <div className="bundle-text">
              <h3 className="t-lead heading" {...mock(bundle.name.mockup)}>
                {bundle.name.text}
              </h3>
              <p className="t-body mt-1 font-semibold" {...mock(bundle.price.mockup)}>
                {bundle.price.text}
              </p>
              <p className="t-small mt-2 font-medium" {...mock(bundle.note.mockup)}>
                {bundle.note.text}
              </p>
            </div>
            <div className="bundle-art-box">
              <ProductArt id="paket" label={bundle.art} className="h-full w-full" />
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}

function Ruang() {
  return (
    <section className="ground-botol section" aria-labelledby="ruang-title">
      <Container>
        <Reveal className="grid-12 lg:grid-rows-[1fr_auto_auto_1fr]">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
            <h2 id="ruang-title" className="t-head heading">
              {room.heading}
            </h2>
          </div>
          <div className="flex items-center justify-center py-3 lg:col-span-6 lg:row-span-4 lg:row-start-1">
            <MirrorPhoto alt={room.photoAlt} />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-3">
            <p className="t-lead measure" {...mock(room.lead.mockup)}>
              {room.lead.text}
            </p>
            <p className="t-body mt-4 measure" {...mock(room.body.mockup)}>
              {room.body.text}
            </p>
            <p className="t-body mt-6 flex items-center gap-3 font-semibold" {...mock(room.music.mockup)}>
              <span className="bullet tile-kunyit" aria-hidden="true" />
              {room.music.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Kata() {
  return (
    <section className="ground-kunyit section" aria-labelledby="kata-title">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-4">
            <h2 id="kata-title" className="t-head heading">
              {praiseSection.heading}
            </h2>
            <p className="t-small mt-4 font-medium">{praiseSection.rating}</p>
            <p className="t-small font-medium">{praiseSection.note}</p>
          </div>
          <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:pt-3">
            {praise.map((p) => (
              <li key={p.text} className="flex gap-4">
                <span className={`bullet tile-${p.tile} mt-2`} aria-hidden="true" />
                <p className="t-lead font-display font-medium" {...mock(p.mockup)}>
                  {p.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

function Kunjungi() {
  return (
    <section className="ground-krem section" aria-labelledby="kunjungi-title">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <h2 id="kunjungi-title" className="t-head heading">
              {visit.heading}
            </h2>
            <address className="t-body mt-4 not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="t-small mt-5 mb-2 font-semibold">{visit.open}</p>
            <WeekTiles />
            <p className="t-body mt-6 flex gap-3" {...mock(visit.parking.mockup)}>
              <span className="bullet tile-bata mt-1" aria-hidden="true" />
              <span>{visit.parking.text}</span>
            </p>
            <div className="mt-6">
              <ActionLink href={shop.directionsUrl} variant="dark" icon={<IconDirections />}>
                {actions.directions}
              </ActionLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <MapEmbed src={shop.mapEmbedUrl} title={visit.mapTitle} address={shop.addressLines} />
            <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link t-body mt-1 gap-2">
              {actions.maps}
              <IconArrow />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Hubungi() {
  return (
    <section className="ground-botol section" aria-labelledby="hubungi-title">
      <Container className="grid-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 id="hubungi-title" className="t-head heading">
            {contact.heading}
          </h2>
          <p className="t-lead mt-4 measure" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-5 lg:col-start-8">
          <ActionLink
            href={shop.whatsappHref}
            mockup={shop.whatsappMockup}
            icon={<IconChat />}
            sub={shop.phone}
            className="contact-action"
          >
            {actions.whatsapp}
          </ActionLink>
          <ActionLink href={shop.phoneHref} variant="ghost" icon={<IconPhone />} sub={shop.phone} className="contact-action">
            {actions.call}
          </ActionLink>
          <ActionLink href={shop.directionsUrl} variant="ghost" icon={<IconDirections />} className="contact-action">
            {actions.directions}
          </ActionLink>
          <p className="t-small mt-3 font-medium" {...mock(contact.payment.mockup)}>
            {contact.payment.text}
          </p>
          <p className="t-small font-medium" {...mock(contact.instagram.mockup)}>
            {contact.instagram.text}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ground-tinta">
      <Container className="py-12 lg:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="t-lead">
              <span className="sr-only sr-name">{shop.name}</span>
              <Wordmark />
              <span className="font-display font-medium" aria-hidden="true">
                {" "}
                {shop.sub}
              </span>
            </p>
            <p className="t-small tagline mt-2 text-kunyit">{shop.tagline}</p>
          </div>
          <div className="t-small">
            <p className="font-semibold">{footer.addressLabel}</p>
            <p className="mt-1">{shop.address}</p>
          </div>
          <div className="t-small">
            <p className="font-semibold">{footer.hoursLabel}</p>
            <p className="mt-1">{hoursSummary}</p>
            <p className="sr-only">
              {hours.map((d) => `${d.day} ${d.open}–${d.close}`).join(", ")}
            </p>
          </div>
        </div>
        <p className="t-small mt-10 border-t border-krem/20 pt-6 text-krem/80">{banner}</p>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1}>
        <Hero />
        <Sarapan />
        <Menu />
        <Ruang />
        <Kata />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer />
    </>
  );
}
