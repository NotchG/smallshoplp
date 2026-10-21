import Container from "./Container";
import Reveal from "./Reveal";
import ButtonLink from "./ButtonLink";
import HoursTable from "./HoursTable";
import MapEmbed from "./MapEmbed";
import { labels, shop, visit } from "@/content";

// Getting there and when: map on the left, address, directions and the week's hours on the right.
export default function VisitSection() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-h" className="bg-kotak pb-section">
      <Container>
        <Reveal>
          <h2 id="kunjungi-h" className="t-head">
            {visit.heading}
          </h2>
          <div className="mt-7 grid gap-x-8 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
              <address className="t-body measure not-italic">{shop.address}</address>
              <div className="mt-4">
                <ButtonLink href={shop.mapsUrl} icon="map" external>
                  {labels.directions}
                </ButtonLink>
              </div>
              <h3 id="jam-h" className="t-lead serif font-semibold mt-9">{labels.hoursHeading}</h3>
              <div className="mt-3">
                <HoursTable />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
              <MapEmbed />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
