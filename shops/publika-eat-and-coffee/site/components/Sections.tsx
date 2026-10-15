// Every section of the page, top to bottom. Copy comes from content.ts only.
import type { CSSProperties } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HallPlan from "@/components/HallPlan";
import { HoursTable, TodayLine } from "@/components/TodayHours";
import { Dish } from "@/components/art/dishes";
import { EveningTable, UsePanel } from "@/components/art/scenes";
import { mock } from "@/lib/mockup";
import { contact, footer, hero, menu, nav, reviews, shop, uses, visit, type DishId } from "@/content";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Header() {
  return (
    <header className="site-header ground-tile">
      <Container className="flex min-h-[72px] items-center justify-between gap-2">
        <span className="font-display t-body font-semibold whitespace-nowrap">{shop.name}</span>
        <nav aria-label={nav.label}>
          <ul className="-mr-[6px] flex items-center md:-mr-[10px]">
            {nav.links.map((l) => (
              <li key={l.href} className={l.desktopOnly ? "hidden md:block" : undefined}>
                <a className="nav-link t-body" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero ground-tile" aria-labelledby="hero-title">
      <Container className="hero-inner">
        <div className="hero-text">
          <h1 id="hero-title" className="t-display">
            {hero.title}
          </h1>
          <p className="t-lead measure mt-5">{hero.lead}</p>
          <div className="hero-actions mt-7">
            <a className="btn btn-fern" href={shop.directionsUrl} {...external}>
              {hero.cta}
            </a>
            <a className="text-link t-body" href="#menu">
              {hero.menuLink}
            </a>
          </div>
          <TodayLine className="t-body mt-3" />
        </div>
      </Container>
      <HallPlan />
    </section>
  );
}

// Plate sizes from design brief §6: desktop / phone, in px.
const PLATE: Record<DishId, { d: number; m: number }> = {
  "nasi-goreng-wagyu": { d: 220, m: 128 },
  "tuna-sambal-matah": { d: 220, m: 128 },
  "kopi-teh": { d: 200, m: 128 },
  "pisang-goreng-teh": { d: 180, m: 128 },
  tiramisu: { d: 160, m: 112 },
  "banana-split": { d: 220, m: 128 },
};

export function Menu() {
  return (
    <section id="menu" className="ground-timber section" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="menu-head">
            <h2 id="menu-title" className="t-head">
              {menu.heading}
            </h2>
            <p className="t-body nums measure" {...mock(menu.intro.mockup)}>
              {menu.intro.text}
            </p>
          </div>
          <ul className="menu-list">
            {menu.items.map((item) => (
              <li
                key={item.id}
                className="menu-item"
                {...mock(item.mockup)}
                style={{ "--plate-d": `${PLATE[item.id].d}px`, "--plate-m": `${PLATE[item.id].m}px` } as CSSProperties}
              >
                <div className="menu-plate">
                  <Dish id={item.id} label={item.illustration} />
                </div>
                <div>
                  <p className="t-small menu-label">{item.label}</p>
                  <h3 className="t-h3" {...mock(item.nameMockup)}>
                    {item.name}
                  </h3>
                  <p className="menu-note t-body measure">{item.note}</p>
                  {item.price && (
                    <p className="menu-price t-body nums" {...mock(item.priceMockup)}>
                      {item.price}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Uses() {
  return (
    <section id="datang" className="ground-tile section" aria-labelledby="datang-title">
      <Container>
        <Reveal>
          <h2 id="datang-title" className="t-head">
            {uses.heading}
          </h2>
          <ul className="uses-list">
            {uses.items.map((u) => (
              <li key={u.id}>
                <div {...mock(u.illustration.mockup)}>
                  <UsePanel id={u.id} label={u.illustration.text} />
                </div>
                <p className="t-small nums">{u.time}</p>
                <h3 className="t-h3 mt-1">{u.title}</h3>
                <p className="t-body measure mt-2">
                  {u.body}
                  {u.extra && (
                    <>
                      {" "}
                      <span {...mock(u.extraMockup)}>{u.extra}</span>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="ground-fern section" aria-labelledby="reviews-title">
      <Container>
        <Reveal className="reviews-grid">
          <div className="reviews-intro">
            <h2 id="reviews-title" className="t-head">
              {reviews.heading}
            </h2>
            <p className="t-lead nums mt-6">{reviews.ratingLine}</p>
            <p className="t-small mt-3">{reviews.caption}</p>
          </div>
          <ul className="reviews-list">
            {reviews.items.map((r) => (
              <li key={r.topic}>
                <p className="t-small">{r.topic}</p>
                <p className="t-lead mt-2">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Visit() {
  return (
    <section id="lokasi" className="ground-steel section" aria-labelledby="lokasi-title">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-info">
            <h2 id="lokasi-title" className="t-head">
              {visit.heading}
            </h2>
            <address className="t-body measure mt-6 not-italic">{shop.address}</address>
            <HoursTable className="t-body mt-6" />
            <a className="btn btn-timber mt-8" href={shop.directionsUrl} {...external}>
              {visit.cta}
            </a>
          </div>
          <div className="visit-map">
            <div className="map-frame">
              <p className="map-fallback t-small">{visit.mapFallback}</p>
              <iframe
                src={shop.embedUrl}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section className="ground-steel pb-[var(--section-y)]" aria-labelledby="contact-title">
      <Container>
        <div className="divider-steel" />
        <Reveal className="contact-grid pt-[var(--section-y)]">
          <div className="contact-text">
            <h2 id="contact-title" className="t-head" {...mock(contact.heading.mockup)}>
              {contact.heading.text}
            </h2>
            <p className="t-body measure mt-5" {...mock(contact.body.mockup)}>
              {contact.body.text}
            </p>
            <div className="contact-actions mt-8">
              <div className="flex flex-col items-start gap-2" {...mock(contact.whatsapp.mockup)}>
                {contact.whatsapp.href ? (
                  <a className="btn btn-timber" href={contact.whatsapp.href} {...external}>
                    {contact.whatsapp.label}
                  </a>
                ) : (
                  <>
                    <span className="btn btn-pending" role="link" aria-disabled="true" aria-describedby="wa-note">
                      {contact.whatsapp.label}
                    </span>
                    <span id="wa-note" className="t-small">
                      {contact.whatsapp.note}
                    </span>
                  </>
                )}
              </div>
              <a className="btn btn-timber" href={shop.directionsUrl} {...external}>
                {contact.directions}
              </a>
            </div>
          </div>
          <div className="contact-art" {...mock(contact.illustration.mockup)}>
            <EveningTable label={contact.illustration.text} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-steel">
      <Container>
        <div className="divider-steel t-small flex flex-col gap-2 py-8 font-medium md:flex-row md:justify-between md:gap-6">
          <p>{footer.line}</p>
          <p>
            {footer.noteBefore}{" "}
            <a className="footer-link" href={shop.listingUrl} {...external}>
              {footer.noteLink}
            </a>
            {footer.noteAfter}
          </p>
        </div>
      </Container>
    </footer>
  );
}
