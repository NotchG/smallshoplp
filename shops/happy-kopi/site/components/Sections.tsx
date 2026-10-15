/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { NameWithChip } from "@/components/PriceChip";
import Coaster from "@/components/art/Coaster";
import PlateArt from "@/components/art/PlateArt";
import { HoursList } from "@/components/TodayHours";
import { mock } from "@/lib/mockup";
import {
  actions,
  contact,
  drinks,
  footer,
  hours,
  menu,
  reviews,
  room,
  shop,
  visit,
  type MenuGroup,
} from "@/content";

/* ---------------- Minuman favorit (sage) ---------------- */
export function Drinks() {
  return (
    <section className="section ground-sage" aria-labelledby="minuman">
      <Container>
        <Reveal className="grid gap-x-5 lg:grid-cols-12 lg:gap-x-10">
          <header className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2 id="minuman" className="t-head">
              {drinks.title}
            </h2>
            <p className="t-body mt-3 max-w-md" {...mock(drinks.intro.mockup)}>
              {drinks.intro.text}
            </p>
          </header>

          <figure className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
            <div className="frame-window aspect-[4/3] bg-zaitun/20">
              <img
                src={drinks.photo.src}
                width={drinks.photo.width}
                height={drinks.photo.height}
                alt={drinks.photo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="t-small mt-3">{drinks.photo.caption}</figcaption>
          </figure>

          <ul className="mt-6 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:mt-4">
            {drinks.items.map((d) => (
              <li
                key={d.name}
                className="flex items-start gap-4 border-t border-kopi/20 py-4 first:border-t-0 lg:gap-5"
                {...mock(d.mockup)}
              >
                {d.visual === "coaster" && d.coaster ? (
                  <Coaster kind={d.coaster} mockup={drinks.artMockup} className="size-16 flex-none lg:size-18" />
                ) : (
                  <img
                    src={drinks.latteThumb.src}
                    width={drinks.latteThumb.width}
                    height={drinks.latteThumb.height}
                    alt="Latte panas dengan latte art bunga, dilihat dari atas"
                    loading="lazy"
                    decoding="async"
                    className="frame-circle size-16 flex-none object-cover lg:size-18"
                  />
                )}
                <div className="pt-1">
                  <h3 className="t-lead font-bold leading-snug">
                    <NameWithChip name={d.name} price={d.price?.text} priceMockup={d.price?.mockup} />
                  </h3>
                  <p className="t-body mt-1" {...mock(d.desc.mockup)}>
                    {d.desc.text}
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

/* ---------------- Makan sekalian (krem) ---------------- */
function MenuGroupBlock({ group }: { group: MenuGroup }) {
  const id = `menu-${group.title.toLowerCase()}`;
  return (
    <div className="border-t border-kopi/15 pb-8 pt-6" role="group" aria-labelledby={id}>
      <div className="flex items-center gap-4">
        <PlateArt kind={group.art} label={group.artLabel} mockup={group.artMockup} className="size-[88px] flex-none" />
        <h3 id={id} className="t-lead font-bold">
          {group.title}
        </h3>
      </div>
      {group.inline ? (
        <p className="t-body mt-5 font-bold">
          <NameWithChip
            name={group.items.map((it) => it.name).join(" · ")}
            price={group.items[group.items.length - 1].price}
          />
        </p>
      ) : (
        <ul className="mt-5 space-y-3.5">
          {group.items.map((it) => (
            <li key={it.name}>
              <p className="t-body font-bold leading-snug">
                <NameWithChip name={it.name} nameMockup={it.mockup} price={it.price} />
              </p>
              {it.desc && <p className="t-small mt-0.5">{it.desc}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Menu() {
  return (
    <section className="section ground-krem" aria-labelledby="makan">
      <Container>
        <Reveal className="grid gap-x-5 lg:grid-cols-12 lg:gap-x-10">
          <div className="md:grid md:grid-cols-12 md:items-start md:gap-x-5 lg:col-span-4 lg:block">
            <div className="md:col-span-7">
              <h2 id="makan" className="t-head">
                {menu.title}
              </h2>
              <p className="t-body mt-3 max-w-md" {...mock(menu.intro.mockup)}>
                {menu.intro.text}
              </p>
              <p className="t-small mt-2 font-bold text-terakota">{menu.note}</p>
            </div>
            <figure className="mt-8 md:col-span-5 md:mt-0 lg:mt-8">
              <div className="frame-window aspect-square bg-sage/30">
                <img
                  src={menu.photo.src}
                  width={menu.photo.width}
                  height={menu.photo.height}
                  alt={menu.photo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="t-small mt-3">{menu.photo.caption}</figcaption>
            </figure>
          </div>
          <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
            {menu.groups.map((g) => (
              <MenuGroupBlock key={g.title} group={g} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Nyaman buat kerja dan ngobrol (sage) ---------------- */
export function Room() {
  return (
    <section className="section ground-sage" aria-labelledby="nyaman">
      <Container>
        <Reveal className="grid gap-x-5 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          <div className="lg:col-span-5">
            <h2 id="nyaman" className="t-head">
              {room.title}
            </h2>
            <p className="t-body mt-3 max-w-md" {...mock(room.intro.mockup)}>
              {room.intro.text}
            </p>
            <ul className="mt-6 space-y-3">
              {room.points.map((p) => (
                <li key={p.text} className="t-body flex items-center gap-3 font-bold" {...mock(p.mockup)}>
                  <span className="smile bg-zaitun" aria-hidden="true" />
                  {p.text}
                </li>
              ))}
            </ul>
          </div>
          <figure className="mt-10 lg:col-span-7 lg:mt-0">
            <div className="frame-window aspect-[4/3] bg-krem/40">
              <img
                src={room.photo.src}
                width={room.photo.width}
                height={room.photo.height}
                alt={room.photo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="t-small mt-3">{room.photo.caption}</figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Kata mereka (zaitun) ---------------- */
export function Reviews() {
  return (
    <section className="section ground-zaitun" aria-labelledby="kata">
      <Container>
        <Reveal className="grid gap-x-5 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <h2 id="kata" className="t-head">
              {reviews.title}
            </h2>
            <p className="t-lead mt-4 font-bold nums">{reviews.rating}</p>
            <p className="t-small mt-2">{reviews.note}</p>
          </div>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
            {reviews.items.map((r) => (
              <li key={r} className="flex gap-3 border-t border-krem/25 py-6">
                <span className="smile mt-[0.62em] bg-mustard" aria-hidden="true" />
                <p className="t-lead">{r}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Kunjungi kami (krem) ---------------- */
export function Visit() {
  return (
    <section className="section ground-krem" aria-labelledby="kunjungi">
      <Container>
        <Reveal className="grid gap-x-5 gap-y-10 md:grid-cols-12 lg:gap-x-10">
          <div className="md:col-span-12 lg:col-span-5">
            <h2 id="kunjungi" className="t-head">
              {visit.title}
            </h2>
            <address className="t-body mt-4 not-italic">
              {shop.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="t-body mt-3 font-bold">{visit.sign}</p>
            <h3 className="sr-only">{visit.hoursTitle}</h3>
            <HoursList className="mt-6 max-w-sm" />
            <p className="mt-6">
              <a
                href={shop.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${visit.mapLink} (membuka tab baru)`}
                className="text-link t-body inline-flex min-h-11 items-center font-bold"
              >
                {visit.mapLink}
              </a>
            </p>
          </div>
          <div className="md:col-span-5 lg:col-span-3">
            <div className="frame-arch mx-auto aspect-[3/4] w-full max-w-64 bg-sage/40 md:h-full md:min-h-90 md:max-w-none lg:aspect-auto">
              <img
                src={visit.photo.src}
                width={visit.photo.width}
                height={visit.photo.height}
                alt={visit.photo.alt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: "50% 70%" }}
              />
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-4">
            <div className="frame-window relative aspect-[4/3] h-full w-full bg-sage/40 md:aspect-auto md:min-h-90">
              {/* Shown until the lazy map loads (or if it never does). */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-6.5-5.8-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.2 12 21 12 21z" />
                  <circle cx="12" cy="9.8" r="2.4" />
                </svg>
                <span className="t-small font-bold">{visit.mapLoading}</span>
              </div>
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 block h-full w-full border-0"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Hubungi kami + footer (zaitun) ---------------- */
export function Contact() {
  return (
    <section className="section ground-zaitun" aria-labelledby="hubungi">
      <Container className="grid gap-x-5 gap-y-8 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-6">
          <h2 id="hubungi" className="t-head">
            {contact.title}
          </h2>
          <p className="t-body mt-3 max-w-md" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
          <p className="t-lead mt-5 font-bold nums">
            <span className="sr-only">{contact.phoneLabel}: </span>
            {shop.phone.display}
          </p>
          <p className="t-hand t-lead mt-6">{shop.slogan}</p>
        </div>
        <div className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-6">
          <ActionButton {...actions.call} icon="phone" variant="light" />
          <ActionButton {...actions.whatsapp} icon="chat" variant="outline-light" />
          <ActionButton {...actions.directions} icon="pin" variant="outline-light" />
          <ActionButton {...actions.grab} icon="bag" variant="outline-light" />
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-zaitun">
      <Container>
        <div className="t-small flex flex-col gap-1 border-t border-krem/30 pb-10 pt-5 md:flex-row md:flex-wrap md:justify-between">
          <p>
            <span className="font-bold">{shop.name}</span> · {shop.address.short} · {hours.summary}
          </p>
          <p>{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
