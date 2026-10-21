import Container from "@/components/Container";
import { ActionButton } from "@/components/ActionButton";
import { actions, shop, visit } from "@/content";

// Address, the full week's hours and the map. No motion here.
export default function VisitSection() {
  return (
    <section id="kunjungi" className="section" aria-labelledby="visit-title">
      <Container className="visit-grid">
        <div className="visit-info">
          <h2 id="visit-title" className="h2">
            {visit.heading}
          </h2>
          <address className="mt-6 not-italic t-lead">
            {shop.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <h3 className="h3 mt-8">{visit.hoursTitle}</h3>
          {shop.hours.map((h) => (
            <p key={h.days} className="mt-2 font-bold">
              {h.days} <span className="price">{h.time}</span>
            </p>
          ))}
          <p>{shop.hoursNote}</p>
        </div>
        <div className="visit-map">
          <iframe
            src={shop.mapEmbedUrl}
            title={visit.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="visit-cta">
          <ActionButton href={shop.mapsUrl} variant="outline">
            {actions.openMaps}
          </ActionButton>
        </div>
      </Container>
    </section>
  );
}
