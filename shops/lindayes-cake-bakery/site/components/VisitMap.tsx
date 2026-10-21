import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import OpenStatus from "@/components/OpenStatus";
import { IconArrow, IconPin } from "@/components/Icons";
import { hero, hours, kunjungi, newTab, shop } from "@/content";

export default function VisitMap() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-h" className="section section-follow ground-light bg-glass">
      <Reveal>
        <Container>
          <div className="divider" aria-hidden="true" />
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 id="kunjungi-h" className="t-head font-display">
                {kunjungi.heading}
              </h2>
              <address className="t-body mt-5 not-italic">
                {shop.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <OpenStatus label={hours.label} className="mt-4" />
              <p className="t-body mt-4 text-muted">{kunjungi.wayfinding}</p>
              <Button href={shop.directionsHref} variant="primary-light" external icon={<IconPin />} className="mt-6">
                {hero.directions}
              </Button>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="map-box overflow-hidden">
                {/* shown until the lazy map loads, or if it can't */}
                <div className="map-empty" aria-hidden="true">
                  <IconPin className="size-8 text-awning" />
                  <span className="t-small">{shop.addressShort}</span>
                </div>
                <iframe
                  src={shop.mapsEmbed}
                  title={kunjungi.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={shop.mapsUrl}
                target="_blank"
                rel="noopener"
                aria-label={`${kunjungi.mapLink} ${newTab}`}
                className="text-link t-small mt-1 text-teal"
              >
                {kunjungi.mapLink}
                <IconArrow className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
