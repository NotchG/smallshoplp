import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import HoursList from "./HoursList";
import { hours, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

export default function Visit() {
  return (
    <section id="lokasi" className="section" aria-labelledby="visit-title">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-info">
            <p className="kicker">{visit.kicker}</p>
            <h2 id="visit-title" className="visit-title t-head" {...mock(visit.title.mockup)}>
              {visit.title.text}
            </h2>
            <address className="visit-address">
              {shop.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="visit-everyday t-lead">{hours.everyDay}</p>
            <HoursList />
            <Button href={shop.mapsUrl} className="visit-cta">
              {visit.directions}
            </Button>
          </div>
          <div className="map-frame">
            <span className="map-fallback">{visit.mapFallback}</span>
            <iframe
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
