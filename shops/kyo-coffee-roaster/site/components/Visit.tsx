import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { shop, visit } from "@/content";

// "Kunjungi kami": address, hours with a fixed 9em day column, parking note, then the map.
export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="section bg-wall">
      <Container>
        <Reveal className="grid-12 row-gap-section">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="lokasi-title" className="t-head head-gap">
              {visit.heading}
            </h2>
            <address className="t-body not-italic lg:max-w-[34ch]">{shop.address}</address>

            <dl className="hours mt-6 nums">
              {shop.hours.map((row) => (
                <div key={row.days} className="hours-row">
                  <dt>{row.days}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="t-body mt-1">{visit.everyday}</p>
            <p className="t-body mt-4">{visit.parking}</p>

            <ButtonLink href={shop.directionsUrl} className="mt-8 w-full sm:w-auto">
              {visit.directions}
            </ButtonLink>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="map-frame">
              <p className="map-fallback t-small" aria-hidden="true">
                {visit.mapLoading}
              </p>
              <iframe
                src={shop.mapEmbedUrl}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={shop.mapsUrl} className="link-quiet t-small mt-1">
              {visit.mapLink}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
