import Container from "@/components/Container";
import HoursCard from "@/components/HoursCard";
import ActionButton from "@/components/ActionButton";
import { NoEntryIcon, PinIcon } from "@/components/Icons";
import { actions, shop, visit } from "@/content";

// Kunjungi kami: the black back room. Hours with today marked, address, directions,
// the house rule as a small sign, and the map (never the map alone).
export default function Visit() {
  return (
    <section id="kunjungi" className="section ground-garasi" aria-labelledby="kunjungi-h">
      <Container>
        <div className="visit-grid">
          <div className="visit-info">
            <h2 id="kunjungi-h" className="h-section text-fascia">
              {visit.heading}
            </h2>
            <HoursCard variant="week" />
            <address className="not-italic t-body visit-address">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <div>
              <ActionButton href={shop.mapsUrl} ground="dark" icon={<PinIcon />}>
                {actions.directions}
              </ActionButton>
            </div>
          </div>
          <div className="visit-map">
            <iframe
              src={shop.mapEmbedUrl}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            />
          </div>
          <p className="house-rule t-body visit-rule">
            <NoEntryIcon />
            <span>{visit.houseRule}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
