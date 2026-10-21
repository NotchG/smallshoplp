import { hero, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";

export default function Kunjungi() {
  return (
    <section id="kunjungi" className="section ground-tinta" aria-labelledby="kunjungi-judul">
      <Container>
        <Reveal className="grid-12">
          <div className="visit-text">
            <h2 id="kunjungi-judul" className="t-head font-display font-extrabold">
              {visit.heading}
            </h2>
            <p className="visit-hours t-lead num">{visit.hoursLine}</p>
            <address className="visit-address">
              <p>{shop.address}</p>
              <p {...mock(shop.landmark.mockup)}>{shop.landmark.text}</p>
              <p {...mock(visit.nearby.mockup)}>{visit.nearby.text}</p>
            </address>
            <div className="visit-actions">
              <ActionButton href={shop.directionsHref} variant="limau" external>
                {hero.directionsLabel}
              </ActionButton>
              <a href={shop.mapsHref} className="text-link" target="_blank" rel="noopener noreferrer">
                {visit.mapsLinkLabel}
              </a>
            </div>
          </div>
          <div className="map-frame">
            {/* Shown until the map loads, or if it can't. */}
            <div className="map-fallback" aria-hidden="true">
              <p className="t-lead font-display font-bold">{shop.name}</p>
              <p className="t-small">{shop.address}</p>
              <p className="t-small">{visit.mapFallbackNote}</p>
            </div>
            <iframe
              src={shop.mapEmbedSrc}
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
