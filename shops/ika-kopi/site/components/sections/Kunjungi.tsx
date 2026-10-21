import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButtons from "@/components/ActionButtons";
import { shop, visit } from "@/content";

// The map plus everything needed to arrive. DOM order is the phone order (text, then map).
export default function Kunjungi() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-h" className="section pt-0">
      <Container>
        <Reveal className="grid-12 lg:items-center">
          <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <h2 id="lokasi-h" className="t-head font-display text-accent">{visit.heading}</h2>
            <address className="mt-5 not-italic">{shop.address}</address>
            <p className="mt-4">
              <span className="font-semibold">{shop.hours.days} <span className="whitespace-nowrap">{shop.hours.time}</span></span>
              <span className="tail text-muted"><span className="tail-dot">{"\u00a0· "}</span>{shop.hours.note}</span>
            </p>
            <p className="mt-2 text-muted">{visit.parkingLine}</p>
            <ActionButtons actions={["directions"]} className="mt-6" />
          </div>
          <div className="mt-4 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0">
            <iframe
              src={shop.mapEmbedUrl}
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
