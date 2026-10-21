import { hero, kerja, menu, nav, shop, sudut, ulasan } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HeroMotion from "@/components/HeroMotion";
import Wordmark from "@/components/Wordmark";
import SplitHeading from "@/components/SplitHeading";
import ArchWindow from "@/components/ArchWindow";
import { HeroHours } from "@/components/TodayHours";
import { CornerDrawing, GardenLeaves } from "@/components/Drawings";
import DishCard from "@/components/DishCard";
import MenuList from "@/components/MenuList";
import VisitBlock from "@/components/VisitBlock";
import ContactBlock from "@/components/ContactBlock";
import Footer from "@/components/Footer";
import { IconChat, IconPin } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <main id="konten">
      {/* Hero: the white room. The name on the wall, two arched windows on one sill. */}
      <HeroMotion className="ground-kapur hero" labelledBy="hero-title">
        <Container>
          <nav aria-label="Navigasi" className="hero-nav hidden md:flex">
            <ul className="flex items-center">
              {nav.map((n) => (
                <li key={n.href}>
                  <a className="nav-link" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="nav-link" href={shop.whatsapp.url} target="_blank" rel="noopener" {...mock(shop.whatsapp.mockup)}>
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <div className="hero-head">
            <Wordmark as="h1" id="hero-title" className="t-display" />
            <p className="wm-sub mt-3 md:mt-4">
              <span aria-hidden="true">{shop.wordmark.sub}</span>
              <span className="hidden md:inline">
                <span aria-hidden="true"> · </span>
                {shop.area}
              </span>
            </p>
          </div>

          <div className="hero-grid sill">
            <div className="hero-copy">
              <p className="t-lead hero-line" {...mock(hero.line.mockup)}>
                {hero.line.text}
              </p>
              <HeroHours className="mt-5" />
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-dark" href={shop.directionsUrl} target="_blank" rel="noopener">
                  <IconPin />
                  Petunjuk Arah
                </a>
                <a className="btn btn-line" href={shop.whatsapp.url} target="_blank" rel="noopener" {...mock(shop.whatsapp.mockup)}>
                  <IconChat />
                  WhatsApp
                </a>
              </div>
              <p className="t-small mt-5 text-abu nums">{hero.rating}</p>
            </div>

            <div className="hero-windows">
              <ArchWindow className="hero-arch">
                <img
                  className="hero-photo"
                  src={hero.photo.src}
                  srcSet={`${hero.photo.srcSmall} 600w, ${hero.photo.src} 900w`}
                  sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 768px) 380px, 100vw"
                  width={hero.photo.width}
                  height={hero.photo.height}
                  alt={hero.photo.alt}
                  fetchPriority="high"
                  decoding="async"
                />
              </ArchWindow>
              <ArchWindow className="garden-arch hidden md:block" fill="daun">
                <GardenLeaves />
              </ArchWindow>
            </div>
          </div>
        </Container>
      </HeroMotion>

        {/* Tiga sudut: the courtyard green, three corners seen through three windows. */}
        <section id="sudut" className="ground-daun section" aria-labelledby="sudut-title">
          <Container>
            <div className="grid gap-y-3 lg:grid-cols-12 lg:items-end lg:gap-x-8">
              <SplitHeading
                id="sudut-title"
                bold={sudut.heading.bold}
                light={sudut.heading.light}
                mockup={sudut.heading.mockup}
                className="t-head lg:col-span-6"
              />
              <p className="t-lead text-daun-muda measure lg:col-span-5 lg:col-start-8">{sudut.intro}</p>
            </div>
            <Reveal className="mt-10 md:mt-14">
              <ul className="corners">
                {sudut.corners.map((c) => (
                  <li key={c.name} className="corner">
                    <ArchWindow className="corner-arch" fill={c.fill}>
                      <CornerDrawing drawing={c.drawing} />
                    </ArchWindow>
                    <div className="corner-text">
                      <h3 className="t-lead font-bold">{c.name}</h3>
                      <p className="mt-1 text-daun-muda">{c.line}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Menu andalan: the kitchen, shown with the owner's own photo. */}
        <section id="menu" className="ground-kapur section" aria-labelledby="menu-title">
          <Container>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-4 menu-intro">
                <SplitHeading id="menu-title" bold={menu.heading.bold} light={menu.heading.light} />
                <p className="t-lead mt-4 measure">{menu.intro}</p>
              </div>
              <Reveal className="lg:col-span-8">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-10">
                  {menu.dishes.map((d) => (
                    <DishCard key={d.name} dish={d} />
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-x-8">
              <MenuList title={menu.bar.title} items={menu.bar.items} />
              <MenuList title={menu.dapur.title} items={menu.dapur.items} />
            </div>
            <p className="t-small mt-6 text-abu">{menu.priceNote}</p>
          </Container>
        </section>

        {/* Betah kerja: the laptop crowd, on young-leaf green. */}
        <section id="kerja" className="ground-muda section" aria-labelledby="kerja-title">
          <Container>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5">
                <SplitHeading id="kerja-title" bold={kerja.heading.bold} light={kerja.heading.light} />
                <p className="mt-4">{kerja.intro}</p>
              </div>
              <Reveal className="lg:col-span-7">
                <ul className="grid gap-x-8 md:grid-cols-2">
                  {kerja.rows.map((r) => (
                    <li key={r.title} className="rule-top pt-4 pb-8">
                      <h3 className="t-lead font-bold">{r.title}</h3>
                      <p className="mt-1">{r.text}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Kata mereka: themes paraphrased from Google reviews. No names, no quotes, no stars. */}
        <section id="ulasan" className="ground-kapur section" aria-labelledby="ulasan-title">
          <Container>
            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-baseline md:gap-x-4">
              <SplitHeading id="ulasan-title" bold={ulasan.heading.bold} light={ulasan.heading.light} />
              <p className="font-semibold nums">{ulasan.rating}</p>
            </div>
            <p className="t-small mt-2 text-abu">{ulasan.note}</p>
            <ul className="mt-10 grid gap-y-10 md:mt-14 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {ulasan.themes.map((t) => (
                <li key={t.label}>
                  <p className="t-label text-abu">{t.label}</p>
                  <p className="t-lead mt-2 measure">{t.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Night: Kunjungi, Hubungi and the footer as one charcoal block under the lamps. */}
        <div className="ground-arang">
          <VisitBlock />
          <ContactBlock />
        </div>
      </main>
      <Footer />
    </>
  );
}
