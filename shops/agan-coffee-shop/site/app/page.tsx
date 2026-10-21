import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Awning from "@/components/Awning";
import OpenSign from "@/components/OpenSign";
import ProductPhoto from "@/components/ProductPhoto";
import MenuList from "@/components/MenuList";
import Amenities from "@/components/Amenities";
import Praise from "@/components/Praise";
import HoursTable from "@/components/HoursTable";
import MapEmbed from "@/components/MapEmbed";
import ActionButton from "@/components/ActionButton";
import RosterBand from "@/components/RosterBand";
import { mock } from "@/lib/mockup";
import {
  amenities,
  contact,
  drinks,
  food,
  hero,
  hours,
  hoursSummary,
  photos,
  praise,
  shop,
  visit,
} from "@/content";

export default function Home() {
  return (
    <>
      {/* Hero: the awning, the BUKA sign hanging under it, and the owner's croissant-and-latte shot. */}
      <header className="on-concrete">
        <Awning name={shop.name} />
        <div className="hero">
          <Container className="grid-12 md-split hero-grid">
            <div className="hero-copy md:col-span-5">
              <OpenSign rows={hours} fallback={hoursSummary} />
              <p className="t-lead hero-tagline" {...mock(hero.tagline.mockup)}>
                {hero.tagline.text}
              </p>
              <p className="t-body hero-address">{shop.addressShort}</p>
              <div className="hero-actions">
                <ActionButton href={shop.directionsUrl}>Petunjuk Arah</ActionButton>
                <ActionButton href={shop.whatsapp.url} variant="secondary">
                  <span {...mock(shop.whatsapp.mockup)}>WhatsApp</span>
                </ActionButton>
              </div>
            </div>
            <ProductPhoto
              photo={photos.hero}
              priority
              className="hero-photo md:col-start-6 md:col-span-7"
            />
          </Container>
        </div>
        <RosterBand />
      </header>

      <main id="konten">
        {/* Menu andalan: black glass, lettered like the shop window. */}
        <section id="menu" className="section on-steel bg-steel text-lettering" aria-labelledby="menu-title">
          <Container>
            <Reveal className="grid-12 lg-split">
              <div className="lg:col-span-5">
                <h2 id="menu-title" className="t-head h2">
                  {drinks.title}
                </h2>
                <p className="t-lead section-intro" {...mock(drinks.intro.mockup)}>
                  {drinks.intro.text}
                </p>
                {drinks.groups.map((group) => (
                  <div key={group.title} className="menu-group">
                    <h3 className="t-script-h3 menu-group-title">{group.title}</h3>
                    <MenuList items={group.items} check="Americano" />
                  </div>
                ))}
                <p className="t-small footnote">{drinks.footnote}</p>
              </div>
              <div className="photo-pair lg:col-span-7 menu-photos">
                <ProductPhoto photo={photos.latte} framed={false} className="menu-photo-a" />
                <ProductPhoto photo={photos.frappe} framed={false} className="menu-photo-b" />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Teman ngopi: the food, on concrete. */}
        <section id="makanan" className="section on-concrete" aria-labelledby="food-title">
          <Container>
            <Reveal className="grid-12 lg-split">
              <div className="lg:col-span-4">
                <h2 id="food-title" className="t-head h2">
                  {food.title}
                </h2>
                <p className="t-lead section-intro" {...mock(food.intro.mockup)}>
                  {food.intro.text}
                </p>
                <div className="menu-group">
                  <MenuList items={food.items} />
                </div>
                <p className="t-small footnote">{food.footnote}</p>
              </div>
              <div className="photo-pair lg:col-span-8 food-photos">
                <ProductPhoto photo={photos.dimsum} />
                <ProductPhoto photo={photos.snack} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Nongkrong atau kerja: the terracotta roster wall. */}
        <section id="nongkrong" className="section on-roster bg-roster text-steel" aria-labelledby="stay-title">
          <Container>
            <Reveal className="grid-12 lg-split stay-grid">
              <div className="stay-head">
                <h2 id="stay-title" className="t-head h2">
                  {amenities.title}
                </h2>
                <p className="t-lead section-intro" {...mock(amenities.intro.mockup)}>
                  {amenities.intro.text}
                </p>
              </div>
              <ProductPhoto photo={photos.pavilion} className="stay-photo" />
              <div className="stay-list">
                <Amenities items={amenities.items} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Kata mereka: paraphrased Google reviews. */}
        <section id="ulasan" className="section on-steel bg-steel text-lettering" aria-labelledby="praise-title">
          <Container>
            {/* No Reveal here: three section fades are enough (remove-one-thing pass). */}
            <div className="grid-12 lg-split">
              <div className="lg:col-span-4">
                <h2 id="praise-title" className="t-head h2">
                  {praise.title}
                </h2>
                <p className="t-body rating">
                  {shop.rating.value} dari 5 · {shop.rating.count} ulasan Google
                </p>
              </div>
              <div className="lg:col-start-5 lg:col-span-8">
                <Praise items={praise.items} />
                <p className="t-small footnote">{praise.note}</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Kunjungi kami: what to look for from the road, the hours, the map. Never fades in. */}
        <section id="kunjungi" className="section on-concrete" aria-labelledby="visit-title">
          <Container className="visit-grid">
            <div className="visit-head">
              <h2 id="visit-title" className="t-head h2">
                {visit.title}
              </h2>
            </div>
            <ProductPhoto photo={photos.awning} className="visit-photo" />
            <div className="visit-info">
              <address className="t-body not-italic">{shop.address}</address>
              <ActionButton href={shop.directionsUrl} className="visit-cta">
                Petunjuk Arah
              </ActionButton>
              <HoursTable rows={hours} className="visit-hours" />
              <ul className="t-body visit-notes">
                {visit.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
            <MapEmbed src={shop.mapEmbedUrl} className="visit-map" />
          </Container>
        </section>
      </main>

      {/* Hubungi kami: the red field closes the page, like the awning opened it. */}
      <footer id="hubungi" className="section on-awning bg-awning text-lettering" aria-labelledby="contact-title">
        <Container className="grid-12 md-split">
          <div className="md:col-span-7">
            <h2 id="contact-title" className="t-head h2">
              {contact.title}
            </h2>
            <p className="t-lead section-intro" {...mock(contact.closing.mockup)}>
              {contact.closing.text}
            </p>
            <div className="contact-actions">
              <ActionButton href={shop.whatsapp.url} ground="awning">
                <span {...mock(shop.whatsapp.mockup)}>WhatsApp</span> {shop.phoneDisplay}
              </ActionButton>
              <ActionButton href={`tel:${shop.phoneTel}`} ground="awning" variant="secondary">
                Telepon
              </ActionButton>
              <ActionButton href={shop.instagram.url} ground="awning" variant="secondary">
                Instagram {shop.instagram.handle}
              </ActionButton>
              <ActionButton href={shop.directionsUrl} ground="awning" variant="secondary">
                Petunjuk Arah
              </ActionButton>
            </div>
          </div>
          <div className="contact-card md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4">
            <p className="wordmark">{shop.name}</p>
            <p className="t-body">{shop.addressShort}</p>
            {contact.hoursLines.map((line) => (
              <p key={line} className="t-body nowrap">
                {line}
              </p>
            ))}
          </div>
        </Container>
      </footer>
    </>
  );
}
