import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { HoursList } from "@/components/TodayHours";
import { ChatIcon, InstagramIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { actions, footer, shop, visit } from "@/content";

// One strong close: address, hours with today marked, the three actions, and the map.
export function Visit() {
  return (
    <section id="kunjungi" className="visit section on-dark" aria-labelledby="kunjungi-judul">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="kunjungi-judul" className="h-wide t-head">
              {visit.heading}
            </h2>
            <address className="not-italic t-lead mt-5">{shop.addressShort}</address>
            <p className="t-small text-sage mt-2">
              {visit.listingPrefix} {shop.listingName}
            </p>

            <div className="mt-8">
              <HoursList hours={shop.hours} todayTag={visit.todayTag} label={visit.hoursLabel} />
              <p className="t-body font-semibold mt-3">{shop.openDaily}</p>
            </div>

            <div className="visit-actions mt-8">
              <ActionButton href={shop.mapsUrl} external icon={<PinIcon />}>
                {actions.directions}
              </ActionButton>
              <ActionButton
                href={shop.whatsapp.url}
                external
                variant="outline-light"
                icon={<ChatIcon />}
                mockup={shop.whatsapp.mockup}
              >
                {actions.whatsapp}
              </ActionButton>
              <ActionButton href={shop.phoneHref} variant="outline-light" icon={<PhoneIcon />}>
                {actions.call}
              </ActionButton>
            </div>

            <a
              href={shop.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link t-body mt-5"
              aria-label={`${visit.instagramLabel} @${shop.instagram}`}
            >
              <InstagramIcon />
              <span>@{shop.instagram}</span>
            </a>
          </div>

          <div className="map-wrap mt-10 lg:mt-0 lg:col-start-6 lg:col-span-7">
            {/* Shown until the lazy map loads over it */}
            <div className="map-fallback" aria-hidden="true">
              <PinIcon className="map-fallback-pin" />
              <span className="font-bold">{shop.listingName}</span>
              <span className="t-small">{shop.addressLine}</span>
            </div>
            <iframe
              className="map-frame"
              src={shop.mapEmbed}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      <Container>
        <div className="py-8 border-t border-plaster/20 flex flex-col gap-1 md:flex-row md:justify-between t-small">
          <p className="font-bold">{footer.sign}</p>
          <p>{shop.addressLine}</p>
        </div>
      </Container>
    </footer>
  );
}
