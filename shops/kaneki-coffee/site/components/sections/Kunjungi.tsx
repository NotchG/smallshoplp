import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { shop, ui, visit } from "@/content";
import { mock } from "@/lib/mockup";

// Find it: the address, a landmark inside the housing area, the hours beside the action.
export default function Kunjungi() {
  return (
    <section id="kunjungi" className="section" aria-labelledby="visit-title">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-details">
            <h2 id="visit-title" className="t-head">
              {visit.heading}
            </h2>
            <address className="t-lead">{shop.address}</address>
            <p className="landmark t-body" {...mock(shop.landmark.mockup)}>
              {shop.landmark.text}
            </p>
            <dl className="visit-hours t-body">
              <dt>{visit.hoursLabel}</dt>
              <dd className="nums">
                {shop.hours.days} {shop.hours.range}
              </dd>
              <dd className="note">{shop.hours.note}</dd>
            </dl>
            <Button href={shop.directionsUrl} icon="pin" external>
              {ui.directions}
            </Button>
          </div>
          <div className="visit-map">
            <div className="map-frame">
              <div className="map-wait" aria-hidden="true">
                <Icon name="pin" />
                <p className="t-body font-medium">{visit.mapWait}</p>
                <p className="t-small text-gerinda">{shop.addressShort}</p>
              </div>
              <iframe
                src={shop.mapEmbedUrl}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={shop.mapsUrl} className="text-link map-link" target="_blank" rel="noopener noreferrer">
              {ui.openInMaps}
              <Icon name="external" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
