import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { actions, shop, visit } from "@/content";
import VisitHours from "./VisitHours";

// Address, hours (today marked) and the map, with a dinding fallback under the iframe.
export default function KunjungiKami() {
  return (
    <section aria-labelledby="kunjungi-kami" className="section ground-kapur">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-info">
            <h2 id="kunjungi-kami" className="t-head font-display font-extrabold">
              {visit.heading}
            </h2>
            <address className="not-italic mt-3">
              <p className="t-lead">{shop.address}</p>
              <p className="mt-1">{shop.area}</p>
            </address>
            <VisitHours />
            <ActionButton action={actions.directions} variant="light-primary" icon="pin" className="mt-8" />
          </div>
          <div className="visit-map">
            <div className="map-fallback ground-dinding" aria-hidden="true">
              <p className="t-lead font-display font-bold">{shop.name}</p>
              <p className="mt-1">{shop.address}</p>
            </div>
            <iframe
              src={shop.mapEmbedSrc}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
