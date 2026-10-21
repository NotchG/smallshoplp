import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HoursTable from "@/components/HoursTable";
import Button from "@/components/Button";
import { labels, shop, visit } from "@/content";

export default function Visit() {
  return (
    <section id="kunjungi" aria-labelledby="visit-title" className="section visit">
      <Container>
        <Reveal className="visit-grid">
          <div className="visit-info">
            <h2 id="visit-title" className="h-section">
              {visit.heading}
            </h2>
            <address className="t-lead mt-5 not-italic font-medium">{shop.address}</address>
            <p className="mt-8 font-semibold">{shop.hoursNote}</p>
            <HoursTable />
            <Button href={shop.directionsUrl} className="mt-8">
              {labels.directions}
            </Button>
          </div>
          <div className="visit-map">
            <iframe
              src={shop.mapEmbedUrl}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
