import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DirectionsButton from "@/components/DirectionsButton";
import SteelFrame from "@/components/SteelFrame";
import HoursList from "@/components/HoursList";
import MapEmbed from "@/components/MapEmbed";
import Bulb from "@/components/Bulb";
import BulbString from "@/components/BulbString";
import ContactPlaceholder from "@/components/ContactPlaceholder";
import HeroWindow from "@/components/illustrations/HeroWindow";
import PlaceArt from "@/components/illustrations/Places";
import DishArt from "@/components/illustrations/Dishes";
import SnackBaskets from "@/components/illustrations/SnackBaskets";
import { mock } from "@/lib/mockup";
import { contact, dishes, hero, menu, places, praise, shop, ui, visit } from "@/content";

function Hero() {
  return (
    <section aria-labelledby="judul" className="hero bg-brick on-dark">
      <Container className="hero-grid pt-10 md:pt-14 xl:pt-16">
        <div className="hero-text">
          {/* The place line is the h1's subtitle: one heading, "Rene Cafe, Pondok Ranggon, Jakarta Timur" */}
          <h1 id="judul" className="t-display">
            {shop.name}
            <span className="sr-only">, </span>
            <span className="hero-place t-lead">{shop.place}</span>
          </h1>
          <p className="t-body measure mt-4" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <p className="t-body mt-5 flex items-center gap-2.5 font-semibold">
            <Bulb className="text-kaca" />
            {shop.hoursSummary}
          </p>
          <DirectionsButton className="mt-6" />
        </div>
        <div className="hero-window-cell">
          <HeroWindow label={hero.windowLabel} />
        </div>
      </Container>
    </section>
  );
}

function RuangHijau() {
  return (
    <section aria-labelledby="ruang-hijau" className="section bg-daun on-dark">
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-6">
          <h2 id="ruang-hijau" className="t-head lg:col-span-5">
            {places.heading}
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-lead">{places.intro.text}</p>
            <p className="t-body mt-3" {...mock(places.introExtra.mockup)}>
              {places.introExtra.text}
            </p>
          </div>
        </div>
        <Reveal className="panorama mt-10 lg:mt-14">
          {places.items.map((p) => (
            <figure key={p.key}>
              <div className="place-art" role="img" aria-label={p.label}>
                <PlaceArt kind={p.key} />
              </div>
              <figcaption className="place-caption">
                <h3 className="t-lead">{p.name}</h3>
                <p className="t-body mt-2">{p.text.text}</p>
                {p.extra && (
                  <p className="t-body mt-2" {...mock(p.extra.mockup)}>
                    {p.extra.text}
                  </p>
                )}
                {p.note && (
                  <p className="t-small mt-3" {...mock(p.note.mockup)}>
                    {p.note.text}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function WajibDicoba() {
  return (
    <section aria-labelledby="wajib-dicoba" className="section bg-kaca">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <div className="dish-head">
              <h2 id="wajib-dicoba" className="t-head text-daun">
                {dishes.heading}
              </h2>
              <p className="t-body mt-4 max-w-[28ch]">{dishes.intro.text}</p>
            </div>
          </div>
          <Reveal className="lg:col-span-8 lg:col-start-5">
            <ul className="dish-window">
              {dishes.items.map((d) => (
                <li key={d.key} className="dish-pane">
                  <div className="dish-art" role="img" aria-label={d.label}>
                    <DishArt kind={d.key} />
                  </div>
                  <div className="dish-text">
                    <h3 className="t-lead">{d.name}</h3>
                    <p className="t-body mt-1.5" {...mock(d.note.mockup)}>
                      {d.note.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MenuAndalan() {
  return (
    <section aria-labelledby="menu-andalan" className="section bg-kaca pt-0!">
      <Container>
        <h2 id="menu-andalan" className="t-head text-daun">
          {menu.heading}
        </h2>
        {/* Tablet: two columns, Camilan's list and baskets side by side. Desktop: three columns. */}
        <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-x-8 lg:mt-10 lg:grid-cols-12 lg:gap-6">
          {menu.groups.map((g, i) => {
            const last = i === menu.groups.length - 1;
            return (
              <div
                key={g.title}
                className={`lg:col-span-4 ${last ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-x-8 lg:block" : ""}`}
              >
                <div>
                  <h3 className="t-lead">{g.title}</h3>
                  <p className="t-small mt-2" {...mock(g.from.mockup)}>
                    {g.from.text}
                  </p>
                  <ul className="t-body mt-4">
                    {g.items.map((it) => (
                      <li key={it.text} className="border-t border-besi/15 py-2.5" {...mock(it.mockup)}>
                        {it.text}
                      </li>
                    ))}
                  </ul>
                </div>
                {last && (
                  <SteelFrame className="mt-6 md:mt-0 lg:mt-6" label={menu.snacksLabel}>
                    <SnackBaskets />
                  </SteelFrame>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function KataMereka() {
  return (
    <section aria-labelledby="kata-mereka" className="section bg-bata on-dark">
      <Container>
        <h2 id="kata-mereka" className="t-head">
          {praise.heading}
        </h2>
        <p className="t-small mt-5">{praise.source}</p>
        {/* Remove-one-thing pass: this grid no longer fades in; three section reveals remain. */}
        <ul className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          {praise.items.map((p) => (
            <li key={p.text} className="t-lead max-w-[38ch] border-t border-kaca/35 pt-5" {...mock(p.mockup)}>
              {p.text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Kunjungi() {
  return (
    <section aria-labelledby="kunjungi" className="section bg-kaca">
      <Container>
        <h2 id="kunjungi" className="t-head text-daun">
          {visit.heading}
        </h2>
        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:order-2 lg:col-span-5 lg:col-start-8">
            <address className="t-body measure not-italic">{shop.address}</address>
            <p className="t-lead mt-7">{shop.everyDay}</p>
            <HoursList className="mt-3" />
            <DirectionsButton className="mt-8" />
          </div>
          <div className="lg:order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <MapEmbed />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Hubungi() {
  return (
    <section aria-labelledby="hubungi" className="bg-besi on-dark pb-16 md:pb-24">
      <BulbString />
      <Container>
        <Reveal className="mt-6 grid gap-10 md:mt-8 lg:grid-cols-12 lg:items-center lg:gap-6">
          <div className="lg:col-span-6">
            <h2 id="hubungi" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-lead mt-6" {...mock(contact.line.mockup)}>
              {contact.line.text}
            </p>
            <DirectionsButton className="mt-8" />
          </div>
          <ul className="grid gap-4 lg:col-span-5 lg:col-start-8">
            {contact.slots.map((s) => (
              <ContactPlaceholder
                key={s.label}
                label={s.label}
                value={s.value}
                tag={contact.placeholderTag}
                mockup={s.mockup}
              />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-besi on-dark">
      <Container>
        <div className="t-small flex flex-col gap-2 border-t border-kaca/20 py-6 md:flex-row md:flex-wrap md:items-center md:gap-x-8 md:gap-y-1">
          <p>
            <span className="font-semibold">{shop.name}</span> · {shop.address}
          </p>
          <p>{shop.hoursSummary}</p>
          <a href={shop.mapsUrl} target="_blank" rel="noopener" className="text-link self-start md:ml-auto md:self-auto">
            {ui.mapsLink}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <RuangHijau />
        <WajibDicoba />
        <MenuAndalan />
        <KataMereka />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer />
    </>
  );
}
