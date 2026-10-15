import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CeilingLights from "@/components/CeilingLights";
import TodayHours from "@/components/TodayHours";
import ActionButton from "@/components/ActionButton";
import DrinkCard from "@/components/DrinkCard";
import PlateItem from "@/components/PlateItem";
import HoursBars from "@/components/HoursBars";
import DrinkArt from "@/components/art/DrinkArt";
import { mock } from "@/lib/mockup";
import { range } from "@/lib/hours";
import {
  actions,
  contact,
  footer,
  hero,
  hours,
  kopi,
  praise,
  shop,
  teman,
  visit,
  work,
} from "@/content";

// The page is Kawan Kopi's own bar cut in section, top to bottom: lit ceiling panels,
// the teak wall with the name, the black counter edge with drinks on it, the tile front.
export default function Home() {
  return (
    <>
      <main id="konten">
        {/* ---------- Hero: ceiling · wall · counter edge ---------- */}
        <div>
          <CeilingLights />
          <div className="ground-kayu">
            <Container className="grid-12 gap-y-6">
              <div className="col-span-12 pt-7 md:pt-14 lg:col-span-7 lg:pb-16 xl:pt-18">
                <h1 className="t-display">
                  {shop.shortName}
                  <span className="hero-area t-lead mt-2 block md:mt-3">{shop.area}</span>
                </h1>
                <p className="t-lead measure-lead mt-5 md:mt-7" {...mock(hero.line.mockup)}>
                  {hero.line.text}
                </p>
              </div>
              <div className="hero-drinks on-dark col-span-12 flex items-end justify-end gap-4 md:gap-6 lg:col-span-5 xl:gap-7">
                {hero.drinks.map((id) => (
                  <DrinkArt key={id} id={id} uid={`hero-${id}`} />
                ))}
              </div>
            </Container>
          </div>
          <div className="counter-edge" />
        </div>

        {/* ---------- Tile front: today's hours + actions, then Kopi kami ---------- */}
        <div className="tile-ground">
          <div className="pt-7 pb-10 md:pt-10 md:pb-12">
            <Container className="grid-12 items-center gap-y-6">
              <div className="col-span-12 md:col-span-6 lg:col-span-5">
                <TodayHours />
              </div>
              <div className="col-span-12 flex flex-col gap-3 sm:flex-row md:col-span-6 lg:col-span-7">
                <ActionButton href={shop.directionsUrl} label={actions.directions.label} external>
                  {actions.directions.text}
                </ActionButton>
                <ActionButton href={`tel:${shop.tel}`} label={actions.call.label} variant="ghost">
                  {actions.call.text}
                </ActionButton>
              </div>
            </Container>
          </div>

          <section
            id="kopi-kami"
            aria-labelledby="kopi-kami-judul"
            className="pt-[calc(var(--section-y)*0.75)] pb-[var(--section-y)]"
          >
            <Container>
              <div className="grid-12 items-end gap-y-4">
                <h2 id="kopi-kami-judul" className="t-head col-span-12 lg:col-span-5">
                  {kopi.heading}
                </h2>
                <p className="t-lead measure-lead col-span-12 lg:col-span-7">{kopi.intro}</p>
              </div>
              <Reveal className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
                {kopi.drinks.map((drink) => (
                  <DrinkCard key={drink.art} drink={drink} />
                ))}
              </Reveal>
            </Container>
          </section>
        </div>

        {/* ---------- Teman ngopi (kayu) ---------- */}
        <section id="teman-ngopi" aria-labelledby="teman-ngopi-judul" className="ground-kayu section">
          <Container>
            <div className="grid-12 items-end gap-y-4">
              <h2 id="teman-ngopi-judul" className="t-head col-span-12 lg:col-span-5">
                {teman.heading}
              </h2>
              <p className="t-lead measure-lead col-span-12 lg:col-span-7">{teman.intro}</p>
            </div>
            <Reveal className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-4 md:gap-x-6">
              {teman.plates.map((plate) => (
                <PlateItem key={plate.art} plate={plate} />
              ))}
            </Reveal>
          </Container>
        </section>

        {/* ---------- Kerja atau santai (lampu) ---------- */}
        <section id="kerja-atau-santai" aria-labelledby="kerja-judul" className="ground-lampu section">
          <Container className="grid-12 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <h2 id="kerja-judul" className="t-head">
                {work.heading}
              </h2>
              <p className="t-lead measure-lead mt-5 md:mt-7">{work.statement}</p>
            </div>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7">
              <HoursBars />
              <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {work.facts.map((fact) => (
                  <li key={fact.text} className="flex gap-3" {...mock(fact.mockup)}>
                    <span className="tile-bullet" aria-hidden="true" />
                    <span>{fact.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Kata mereka (lampu) ---------- */}
        <section
          id="kata-mereka"
          aria-labelledby="kata-judul"
          className="ground-lampu pb-[var(--section-y)]"
        >
          <Container>
            <div className="grid-12 gap-y-10 border-t border-tinta/15 pt-[var(--section-y)]">
              <div className="col-span-12 lg:col-span-4">
                <h2 id="kata-judul" className="t-head">
                  {praise.heading}
                </h2>
                <p className="t-lead mt-5 md:mt-7">{praise.rating}</p>
                <p className="t-small mt-2 text-ubin">{praise.source}</p>
              </div>
              <Reveal className="col-span-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:border-l lg:border-tinta/15 lg:pl-10">
                {praise.themes.map((item) => (
                  <div key={item.theme} className="border-t border-tinta/15 pt-5">
                    <h3 className="t-small text-kayu">{item.theme}</h3>
                    <p className="t-lead mt-2">{item.text}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ---------- Kunjungi kami (tile) ---------- */}
        <section id="kunjungi-kami" aria-labelledby="kunjungi-judul" className="tile-ground section">
          <Reveal>
            <Container className="grid-12 gap-y-8 lg:gap-y-10">
              <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-1">
                <h2 id="kunjungi-judul" className="t-head">
                  {visit.heading}
                </h2>
                <address className="t-lead measure-lead mt-5 not-italic md:mt-7">{shop.address}</address>
                <ActionButton
                  href={shop.directionsUrl}
                  label={actions.directions.label}
                  external
                  className="mt-7 w-full sm:w-auto"
                >
                  {actions.directions.text}
                </ActionButton>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
                <div className="map-frame">
                  <svg className="map-pin" viewBox="0 0 36 48" aria-hidden="true">
                    <path
                      d="M18 2 C9 2 2 9 2 18 C2 30 18 46 18 46 C18 46 34 30 34 18 C34 9 27 2 18 2 Z"
                      fill="var(--color-matahari)"
                    />
                    <circle cx="18" cy="18" r="6" fill="var(--color-tinta)" />
                  </svg>
                  <iframe
                    src={shop.mapEmbedUrl}
                    title={visit.mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-2">
                <h3 className="font-semibold">{visit.hoursHeading}</h3>
                <dl className="tabular mt-2">
                  {hours.map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 border-b border-lampu/20 py-2.5">
                      <dt>{row.label}</dt>
                      <dd>{range(row)}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6">{visit.parking.text}</p>
                <p className="mt-1" {...mock(visit.parkingTip.mockup)}>
                  {visit.parkingTip.text}
                </p>
              </div>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Hubungi kami (kayu) ---------- */}
        <section id="hubungi-kami" aria-labelledby="hubungi-judul" className="ground-kayu section">
          <Reveal>
            <Container className="grid-12 items-end gap-y-8">
              <div className="col-span-12 lg:col-span-6">
                <h2 id="hubungi-judul" className="t-head">
                  {contact.heading}
                </h2>
                <p className="t-lead measure-lead mt-5 md:mt-7" {...mock(contact.line.mockup)}>
                  {contact.line.text}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <p className="t-lead tabular font-semibold">{shop.phone}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ActionButton href={`tel:${shop.tel}`} label={actions.call.label}>
                    {actions.call.text}
                  </ActionButton>
                  <ActionButton
                    href={shop.whatsapp.url}
                    label={actions.whatsapp.label}
                    variant="ghost"
                    external
                    mockup={shop.whatsapp.mockup}
                  >
                    {actions.whatsapp.text}
                  </ActionButton>
                  <ActionButton href={shop.directionsUrl} label={actions.directions.label} variant="ghost" external>
                    {actions.directions.text}
                  </ActionButton>
                </div>
              </div>
            </Container>
          </Reveal>
        </section>
      </main>

      <footer className="ground-tinta">
        <Container className="t-small py-8 font-medium text-lampu/80">{footer.line}</Container>
      </footer>
    </>
  );
}
