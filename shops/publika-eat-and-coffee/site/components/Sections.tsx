// Every section of the page, top to bottom (design brief §7). Copy comes from content.ts only.
import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import LongTable from "./LongTable";
import SodaHero from "./SodaHero";
import { Button, PendingButton } from "./Button";
import { HoursTable } from "./TodayHours";
import { Dish } from "./art/dishes";
import { UsePanel, UsesStrip } from "./art/scenes";
import { mock } from "@/lib/mockup";
import { contact, footer, hero, menu, nav, reviews, shop, uses, visit, type MenuItem } from "@/content";

export function Header() {
  return (
    // follows the hero's ground (tile, timber or fern) through the root --soda-* variables
    <header className="site-header soda-ground">
      <Container className="site-header-inner">
        <p className="wordmark">{shop.name}</p>
        <nav aria-label={nav.label} className="site-nav">
          <ul>
            {nav.links.map((l) => (
              <li key={l.href} className={l.wide ? "nav-wide" : undefined}>
                <a className="nav-link" href={l.href}>
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-cta" href={shop.directionsUrl}>
          {hero.cta}
        </a>
      </Container>
    </header>
  );
}

export function Hero() {
  return <SodaHero />;
}

// Display sizes (desktop / phone), in px: design brief §6.
const VISUAL_SIZE: Record<string, [number, number]> = {
  "nasi-goreng-wagyu": [220, 128],
  "tuna-sambal-matah": [220, 128],
  "kopi-teh": [220, 128],
  "pisang-goreng-teh": [196, 128],
  tiramisu: [172, 112],
  "banana-split": [220, 128],
};

function MenuVisual({ item }: { item: MenuItem }) {
  const [d, m] = VISUAL_SIZE[item.id];
  const style = { "--v-d": `${d}px`, "--v-m": `${m}px` } as CSSProperties;
  const vis = item.visual;
  return (
    <div className="menu-visual" style={style}>
      {vis.kind === "photo" ? (
        <Image src={vis.src} width={vis.width} height={vis.height} alt={vis.alt} sizes="(min-width: 768px) 220px, 128px" loading="lazy" />
      ) : (
        item.dish && <Dish id={item.dish} label={vis.label} {...mock(vis.mockup)} />
      )}
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="section ground-timber" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <h2 id="menu-title" className="t-head">
            {menu.heading}
          </h2>
          <p className="menu-intro measure" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>
          <ul className="menu-list">
            {menu.items.map((item) => (
              <li key={item.id} className="menu-item">
                <MenuVisual item={item} />
                <div className="menu-text">
                  <p className="t-small">{item.label}</p>
                  <h3 className="menu-name t-h3" {...mock(item.nameMockup)}>
                    {item.name}
                  </h3>
                  <p className="menu-note measure">{item.note}</p>
                  {item.price && (
                    <p className="menu-price nums" {...mock(item.priceMockup)}>
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
    <section id="datang" className="section ground-tile" aria-labelledby="datang-title">
      <Container>
        <Reveal>
          <h2 id="datang-title" className="t-head">
            {uses.heading}
          </h2>
          <UsesStrip order={uses.items.map((u) => u.id)} label={uses.stripLabel.text} {...mock(uses.stripLabel.mockup)} />
          <ul className="uses-list">
            {uses.items.map((u) => (
              <li key={u.id} className="use">
                <UsePanel id={u.id} label={u.drawing.text} {...mock(u.drawing.mockup)} />
                <div className="use-text">
                  <p className="t-small nums">{u.time}</p>
                  <h3 className="use-title t-h3">{u.title}</h3>
                  <p className="use-body measure">
                    {u.body}
                    {u.extra && (
                      <>
                        {" "}
                        <span {...mock(u.extraMockup)}>{u.extra}</span>
                      </>
                    )}
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

export function Reviews() {
  return (
    <section className="section ground-fern" aria-labelledby="ulasan-title">
      <Container>
        <Reveal className="reviews-grid">
          <div className="reviews-intro">
            <h2 id="ulasan-title" className="t-head">
              {reviews.heading}
            </h2>
            <p className="rating-line t-lead nums">{reviews.ratingLine}</p>
            <p className="reviews-caption t-small">{reviews.caption}</p>
          </div>
          <ul className="reviews-list">
            {reviews.items.map((r) => (
              <li key={r.topic}>
                <p className="t-small">{r.topic}</p>
                <p className="review-text t-lead">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

function MapPin() {
  return (
    <svg viewBox="0 0 40 52" aria-hidden="true" focusable="false">
      <path d="M20 0C9 0 0 8.6 0 19.4 0 33 20 52 20 52s20-19 20-32.6C40 8.6 31 0 20 0Z" fill="var(--color-timber)" />
      <circle cx="20" cy="19" r="7" fill="var(--color-steel)" />
    </svg>
  );
}

export function Visit() {
  return (
    <section id="lokasi" className="section visit ground-steel" aria-labelledby="lokasi-title">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-info">
            <h2 id="lokasi-title" className="t-head">
              {visit.heading}
            </h2>
            <address className="visit-address">{shop.address}</address>
            <HoursTable className="visit-hours" />
            <div className="visit-cta">
              <Button href={shop.directionsUrl} variant="timber">
                {visit.cta}
              </Button>
            </div>
          </div>
          <div className="visit-map">
            <div className="map-frame">
              <div className="map-fallback t-small">
                <MapPin />
                <span>{shop.addressShort}</span>
              </div>
              <iframe
                src={shop.embedUrl}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="map-link">
              <a className="text-link" href={shop.listingUrl}>
                {visit.mapLink}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Contact() {
  const wa = contact.whatsapp;
  return (
    <section id="rombongan" className="section contact ground-steel" aria-labelledby="rombongan-title">
      <Container>
        <div className="contact-inner">
          <div className="contact-grid">
            <h2 id="rombongan-title" className="t-head" {...mock(contact.heading.mockup)}>
              {contact.heading.text}
            </h2>
            <div className="contact-text">
              <p className="measure" {...mock(contact.body.mockup)}>
                {contact.body.text}
              </p>
              <div className="contact-actions">
                <div className="wa-group" {...mock(wa.mockup)}>
                  {wa.href ? (
                    <Button href={wa.href} variant="timber">
                      {wa.label}
                    </Button>
                  ) : (
                    <PendingButton>{wa.label}</PendingButton>
                  )}
                  <p className="wa-note t-small">{wa.note}</p>
                </div>
                <Button href={shop.directionsUrl} variant="timber">
                  {contact.cta}
                </Button>
              </div>
            </div>
          </div>
          <LongTable />
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-steel">
      <Container className="t-small">
        <div className="site-footer-rule">
          <p>{footer.line}</p>
          <p className="footer-note">
            {footer.noteBefore}
            <a className="footer-link" href={shop.listingUrl}>
              {footer.noteLink}
            </a>
            {footer.noteAfter}
          </p>
        </div>
      </Container>
    </footer>
  );
}
