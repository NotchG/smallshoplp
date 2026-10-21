import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button, { IconPin } from "@/components/Button";
import { HoursList } from "@/components/TodayHours";
import { cta, shop, visit } from "@/content";

// Kunjungi kami: the map in an 8px steel frame (the window grammar), details beside it.
export default function VisitBlock() {
  return (
    <section id="lokasi" className="section bg-lis" aria-labelledby="lokasi-title">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-start">
          <div className="lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:pl-4">
            <h2 id="lokasi-title" className="t-head font-bold">
              {visit.heading}
            </h2>
            <address className="t-lead mt-4 not-italic">{shop.address}</address>
            <p className="t-body mt-2 text-besi-soft">{shop.landmark}</p>
            <HoursList className="t-body mt-6" />
            <p className="t-body mt-4">{shop.parking}</p>
            <div className="mt-6">
              <Button href={shop.mapsUrl} external variant="solid" icon={<IconPin />}>
                {cta.directions}
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1">
            <div className="map-frame">
              <div className="map-frame__view">
                <div className="map-frame__placeholder t-body" aria-hidden="true">
                  <IconPin />
                  <span className="font-semibold text-besi">{shop.name}</span>
                  <span>{shop.addressShort}</span>
                </div>
                <iframe
                  src={shop.mapEmbedUrl}
                  title={visit.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="on-dark px-4 py-1">
                <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link t-small text-lis">
                  {visit.mapFallback}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
