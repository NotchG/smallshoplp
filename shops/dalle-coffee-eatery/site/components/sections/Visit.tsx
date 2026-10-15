import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import ActionButton from "@/components/ActionButton";
import { shop, visit } from "@/content";

export default function Visit() {
  return (
    <section id="lokasi" className="section bg-niche on-plaster" aria-labelledby="lokasi-title">
      <Container>
        <Reveal>
          <div className="grid-12 gap-y-8">
            <div className="lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:self-center">
              <h2 id="lokasi-title" className="t-head">
                {visit.heading}
              </h2>
              <address className="t-body mt-4 not-italic">{shop.address}</address>
              <p className="t-body mt-3 font-semibold whitespace-nowrap">{visit.hoursLine}</p>
              <ActionButton href={shop.directionsUrl} variant="steel" external className="mt-6">
                {visit.button}
              </ActionButton>
            </div>
            <div className="lg:col-start-1 lg:col-span-7 lg:row-start-1">
              <MapEmbed
                src={shop.mapEmbed}
                title={visit.mapTitle}
                place={visit.mapPlace}
                area={visit.mapArea}
                loading={visit.mapLoading}
              />
              <a href={shop.placeUrl} target="_blank" rel="noopener noreferrer" className="t-small mt-1 inline-block py-3.5 underline">
                {visit.mapLink}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
