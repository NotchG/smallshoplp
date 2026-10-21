import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import NeonSign from "@/components/NeonSign";
import ArchFrame from "@/components/ArchFrame";
import BarFront from "@/components/BarFront";
import Button from "@/components/Button";
import CoffeeBoard from "@/components/CoffeeBoard";
import FoodMenu from "@/components/FoodMenu";
import Rooms from "@/components/Rooms";
import HoursList from "@/components/HoursList";
import MapEmbed from "@/components/MapEmbed";
import ActionRow from "@/components/ActionRow";
import { Kapulaga, Pandan, V60, CumiPlate, Teh } from "@/components/Illos";
import { mock } from "@/lib/mockup";
import { coffee, contact, food, hero, praise, rooms, shop, visit } from "@/content";

const drinkIllos = { kapulaga: Kapulaga, pandan: Pandan, v60: V60 } as const;

export default function Home() {
  return (
    <>
      {/* Hero: the neon sign over the bar front */}
      <header className="hero on-dark bg-cobalt" aria-labelledby="hero-title">
        <Container className="hero-inner grid-12">
          <div className="lg:col-span-7">
            <p className="label text-gold">{hero.todayLabel}</p>
            <NeonSign id="hero-title" className="mt-5" />
            <p className="t-lead mt-7" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <p className="t-body soft measure mt-2 max-w-md">{hero.sub.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={shop.mapsUrl} external>
                {hero.directions}
              </Button>
              <Button href={shop.waUrl} variant="secondary" external>
                <span {...mock(shop.waMockup)}>{hero.whatsapp}</span>
              </Button>
            </div>
            <p className="t-small soft mt-5">{shop.shortAddress}</p>
          </div>
          <div className="mt-6 lg:col-span-5 lg:mt-0 lg:justify-self-end">
            <ArchFrame
              className="max-w-md lg:w-[460px] lg:max-w-none"
              src={hero.image.src}
              width={hero.image.width}
              height={hero.image.height}
              alt={hero.image.alt}
            />
          </div>
        </Container>
        <BarFront />
      </header>

      <main id="konten" tabIndex={-1} className="outline-none">
        {/* Menu kopi: the navy board on the white wall */}
        <section id="menu-kopi" aria-labelledby="menu-kopi-h" className="section">
          <Container>
            <Reveal className="grid-12 items-start">
              <div className="lg:col-span-5">
                <h2 id="menu-kopi-h" className="heading text-cobalt">
                  {coffee.title}
                </h2>
                <p className="t-body measure mt-5">{coffee.lead}</p>
                <ul className="mt-9 grid max-w-md grid-cols-3 gap-4 lg:gap-6">
                  {coffee.featured.map((d) => {
                    const Illo = drinkIllos[d.key];
                    return (
                      <li key={d.key}>
                        <figure>
                          <Illo label={`Ilustrasi ${d.name}`} className="text-cobalt" />
                          <figcaption className="label mt-2.5 text-cobalt">{d.name}</figcaption>
                        </figure>
                      </li>
                    );
                  })}
                </ul>
                <p className="t-small soft mt-4">{coffee.illoCaption}</p>
              </div>
              <div className="lg:col-span-7">
                <CoffeeBoard header={coffee.boardHeader} items={coffee.board} />
                <p className="t-body measure mt-5">{coffee.boardNote}</p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Makan di sini: black marble */}
        <section id="makan" aria-labelledby="makan-h" className="section on-dark on-ink bg-ink">
          <Container>
            <Reveal className="grid-12 items-start">
              <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
                <h2 id="makan-h" className="heading">
                  {food.title}
                </h2>
                <p className="t-lead mt-5" {...mock(food.lead.mockup)}>
                  {food.lead.text}
                </p>
                <p className="t-body soft measure mt-3">{food.body}</p>
              </div>
              <figure className="mt-2 text-gold lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
                <div className="plate-wrap">
                  <CumiPlate label="Ilustrasi cumi bakar sambal matah: nasi berbalut daun pisang, dua sambal, lalapan, cumi di atas kangkung" />
                  <div className="tea-tuck">
                    <Teh label="Ilustrasi teh panas dalam cangkir bergaris emas" />
                  </div>
                </div>
                <figcaption className="mt-3">
                  <span className="label block text-gold">
                    {food.illos[0].name} · {food.illos[1].name}
                  </span>
                  <span className="t-small soft mt-1 block">{coffee.illoCaption}</span>
                </figcaption>
              </figure>
              <div className="mt-4 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:mt-6">
                <FoodMenu groups={food.groups} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Tiga ruang: the building in cross-section */}
        <section id="ruang" aria-labelledby="ruang-h" className="section">
          <Container>
            <div className="grid-12 items-end">
              <h2 id="ruang-h" className="heading text-cobalt lg:col-span-4">
                {rooms.title}
              </h2>
              <p className="t-lead measure lg:col-span-8">{rooms.lead}</p>
            </div>
            <Reveal className="mt-10 lg:mt-14">
              <Rooms items={rooms.items} chip={rooms.bandLabel} />
            </Reveal>
          </Container>
        </section>

        {/* Kata mereka: paraphrased, never quoted */}
        <section id="ulasan" aria-labelledby="ulasan-h" className="section on-dark bg-navy">
          <Container>
            <Reveal className="grid-12">
              <div className="lg:col-span-4">
                <h2 id="ulasan-h" className="heading">
                  {praise.title}
                </h2>
                <p className="t-lead mt-6">
                  <span className="font-medium text-gold">{praise.rating.value}</span> {praise.rating.label}
                </p>
                <p className="t-small soft mt-3">{praise.caption}</p>
              </div>
              <ul className="mt-4 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:mt-2">
                {praise.themes.map((t) => (
                  <li key={t}>
                    <span className="theme-rule" aria-hidden="true" />
                    <p className="t-lead measure">{t}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* Kunjungi kami */}
        <section id="kunjungi" aria-labelledby="kunjungi-h" className="section">
          <Container>
            {/* No reveal here: the map and hours are practical and should simply be there. */}
            <div className="grid-12 items-start">
              <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
                <h2 id="kunjungi-h" className="heading text-cobalt">
                  {visit.title}
                </h2>
                <address className="t-body mt-6 not-italic">
                  {shop.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <p className="label mt-8 text-cobalt">{shop.hoursSummary}</p>
                <HoursList hours={shop.hours} className="mt-3" />
              </div>
              <div className="mt-4 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
                <MapEmbed src={shop.mapEmbed} title={visit.mapTitle} placeholder={visit.mapPlaceholder} />
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
                <Button href={shop.mapsUrl} variant="cobalt" external>
                  {hero.directions}
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Hubungi kami */}
        <section id="hubungi" aria-labelledby="hubungi-h" className="section on-dark bg-cobalt">
          <Container className="grid-12 items-start">
            <div className="lg:col-span-5">
              <h2 id="hubungi-h" className="heading">
                {contact.title}
              </h2>
              <p className="t-lead measure mt-6">{contact.lead}</p>
              <p className="t-body soft measure mt-3" {...mock(contact.privateRoomLine.mockup)}>
                {contact.privateRoomLine.text}
              </p>
            </div>
            <ul className="action-list mt-4 lg:col-span-7 lg:col-start-6 lg:mt-0">
              {contact.rows.map((row) => (
                <li key={row.key}>
                  <ActionRow row={row} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>

      <footer className="on-dark bg-cobalt">
        <Container>
          <div className="grid-12 items-end border-t border-gold/30 pt-10 pb-12">
            <NeonSign as="p" variant="static" className="lg:col-span-5" />
            <div className="t-small soft lg:col-span-7 lg:col-start-6">
              <p lang="en">{shop.brandLine}</p>
              <p className="mt-1">{shop.addressLines.join(", ")}</p>
              <p className="mt-1">{contact.footerNote}</p>
            </div>
          </div>
        </Container>
        <div className="tile-floor" aria-hidden="true" />
      </footer>
    </>
  );
}
