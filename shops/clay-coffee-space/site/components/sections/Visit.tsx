import { shop, visit, hero } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ArchFrame from "@/components/ui/ArchFrame";
import ActionButton from "@/components/ui/ActionButton";
import { MapPin, NavArrow } from "@/components/ui/Icons";

export default function Visit() {
  return (
    <section aria-labelledby="visit-title" className="section section-follow">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-copy">
            <h2 id="visit-title" className="t-head">
              {visit.heading}
            </h2>
            <address className="t-lead mt-5 not-italic">{shop.address}</address>
            <ul className="visit-facts">
              <li className="visit-hours">
                <span className="status-dot" aria-hidden="true" />
                {shop.hours.week}
              </li>
              <li {...mock(visit.parking.mockup)}>{visit.parking.text}</li>
              <li className="text-kanvas" {...mock(visit.lateLine.mockup)}>
                {visit.lateLine.text}
              </li>
            </ul>
            <ActionButton href={shop.directionsUrl} external icon={<NavArrow />} className="mt-8">
              {hero.directions}
            </ActionButton>
          </div>
          <ArchFrame map className="visit-map" shapeClassName="arch-outline">
            <div className="map-fallback" aria-hidden="true">
              <MapPin />
              <span className="t-label">{shop.addressShort}</span>
            </div>
            <iframe
              src={shop.mapEmbedUrl}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ArchFrame>
        </Reveal>
      </Container>
    </section>
  );
}
