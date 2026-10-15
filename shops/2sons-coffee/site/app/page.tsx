import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Cell, Shelf } from "@/components/Shelf";
import HeroShelf from "@/components/HeroShelf";
import TodayHours from "@/components/TodayHours";
import PhotoCell from "@/components/PhotoCell";
import ProductCell from "@/components/ProductCell";
import ButtonLink from "@/components/ButtonLink";
import LedList from "@/components/LedList";
import MapEmbed from "@/components/MapEmbed";
import SiteFooter from "@/components/SiteFooter";
import { coffee, contact, food, hero, labels, praise, room, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

export default function Home() {
  const [can, espresso, manualBrew] = coffee.products;
  const [melt, eggToast] = food.products;

  return (
    <>
      <main id="konten" tabIndex={-1} className="outline-none">
        {/* 1. Hero: the shop's own lit shelf, lights coming on */}
        <section className="hero" aria-label={shop.name}>
          <Container>
            <HeroShelf>
              <Cell veil className="hero-cell hero-name">
                {/* One text unit, like the fascia: big "2sons", small "coffee" tucked under its end. */}
                <h1 className="lockup t-display cell-body">
                  {hero.wordmark}
                  <span className="sr-only"> </span>
                  <span className="lockup-sub">{hero.wordmarkSub}</span>
                </h1>
                <div className="cell-body hero-foot">
                  <p className="t-lead measure" {...mock(hero.line.mockup)}>
                    {hero.line.text}
                  </p>
                  <p className="t-small">{shop.addressShort}</p>
                  <div className="actions hero-actions">
                    <ButtonLink href={shop.directionsUrl} external grow>
                      {labels.directions}
                    </ButtonLink>
                    <ButtonLink href={shop.phoneHref} variant="secondary" grow>
                      {labels.call}
                    </ButtonLink>
                  </div>
                </div>
              </Cell>

              <Cell veil className="hero-cell hero-hours">
                <div className="cell-body">
                  <TodayHours />
                </div>
                <div className="cell-body">
                  <p className="t-lead font-medium">{shop.hours.time}</p>
                  <p className="t-small mt-1">{shop.hours.days}</p>
                </div>
              </Cell>

              <PhotoCell veil priority photo={hero.photo} className="hero-cell hero-photo" mediaClassName="aspect-4/3" />
            </HeroShelf>
          </Container>
        </section>

        {/* 2. kopinya bener. */}
        <section className="section" aria-labelledby="kopi-h">
          <Container>
            <Reveal className="wall-grid">
              <div className="wall-text coffee-wall">
                <h2 id="kopi-h" className="t-head">
                  {coffee.heading}
                </h2>
                <p className="t-lead measure" {...mock(coffee.lead.mockup)}>
                  {coffee.lead.text}
                </p>
              </div>
              <Shelf className="coffee-shelf">
                <ProductCell product={can} className="coffee-can" mediaClassName="media-fill aspect-4/5" />
                <ProductCell product={espresso} layout="row" />
                <ProductCell product={manualBrew} layout="row" />
              </Shelf>
            </Reveal>
          </Container>
        </section>

        {/* 3. bukan cuma kopi. */}
        <section className="section" aria-labelledby="makan-h">
          <Container>
            <Reveal className="wall-grid">
              <div className="wall-text food-wall">
                <h2 id="makan-h" className="t-head">
                  {food.heading}
                </h2>
                <p className="t-body measure" {...mock(food.lead.mockup)}>
                  {food.lead.text}
                </p>
              </div>
              <Shelf className="food-shelf">
                <ProductCell product={melt} size="lg" className="food-melt" />
                <ProductCell product={eggToast} className="food-egg" />
              </Shelf>
            </Reveal>
          </Container>
        </section>

        {/* 4. betah lama di sini. */}
        <section className="section" aria-labelledby="ruang-h">
          <Container>
            <Reveal className="grid gap-8 lg:gap-12">
              <div className="room-top">
                <div className="wall-text room-text">
                  <h2 id="ruang-h" className="t-head">
                    {room.heading}
                  </h2>
                  {room.lead.map((line) => (
                    <p key={line.text} className="t-lead measure" {...mock(line.mockup)}>
                      {line.text}
                    </p>
                  ))}
                </div>
                <LedList items={room.reasons} label={room.reasonsLabel} className="room-reasons t-body" />
              </div>
              <Shelf className="room-shelf">
                {room.photos.map((photo, i) => (
                  <PhotoCell
                    key={photo.src}
                    photo={photo}
                    mediaClassName={i === 0 ? "media-fill aspect-4/5 md:aspect-3/2" : "media-fill aspect-3/4"}
                  />
                ))}
              </Shelf>
            </Reveal>
          </Container>
        </section>

        {/* 5. kata mereka. Paraphrased themes only: no quotes, no names, no stars. */}
        <section className="section" aria-labelledby="ulasan-h">
          <Container>
            <Reveal className="wall-grid">
              <div className="wall-text praise-wall">
                <h2 id="ulasan-h" className="t-head">
                  {praise.heading}
                </h2>
                <p className="t-small font-medium">{praise.rating}</p>
              </div>
              <LedList items={praise.themes} className="praise-list t-lead" />
            </Reveal>
          </Container>
        </section>

        {/* 6. kunjungi kami. */}
        <section className="section" aria-labelledby="lokasi-h">
          <Container>
            <Reveal className="grid gap-6 lg:gap-12">
              <h2 id="lokasi-h" className="t-head">
                {visit.heading}
              </h2>
              <Shelf className="visit-shelf">
                <Cell className="visit-info">
                  <div className="cell-body">
                    <address className="t-body not-italic">
                      {shop.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <div className="actions mt-5">
                      <ButtonLink href={shop.directionsUrl} external>
                        {labels.directions}
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="cell-body">
                    <p className="t-small">{visit.hoursLabel}</p>
                    <p className="t-lead font-medium mt-1">{visit.hoursTime}</p>
                  </div>
                </Cell>
                <MapEmbed />
              </Shelf>
            </Reveal>
          </Container>
        </section>

        {/* 7. hubungi kami. */}
        <section className="section" aria-labelledby="kontak-h">
          <Container>
            <Reveal>
              <Shelf>
                <Cell className="contact-cell">
                  <div className="cell-body">
                    <div className="contact-text wall-text">
                      <h2 id="kontak-h" className="t-head">
                        {contact.heading}
                      </h2>
                      <p className="t-body measure" {...mock(contact.line.mockup)}>
                        {contact.line.text}
                      </p>
                    </div>
                    <div className="contact-actions">
                      <p className="t-lead font-medium">
                        <a href={shop.phoneHref} className="inline-flex min-h-11 items-center underline">
                          {shop.phone}
                        </a>
                      </p>
                      <div className="actions mt-4">
                        <ButtonLink href={shop.phoneHref}>{labels.call}</ButtonLink>
                        <ButtonLink
                          href={shop.whatsappHref.text}
                          variant="secondary"
                          external
                          mockup={shop.whatsappHref.mockup}
                        >
                          {labels.whatsapp.text}
                        </ButtonLink>
                        <ButtonLink href={shop.directionsUrl} variant="secondary" external>
                          {labels.directions}
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </Cell>
              </Shelf>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
