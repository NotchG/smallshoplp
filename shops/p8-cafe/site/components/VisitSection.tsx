import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { HoursTable } from "@/components/TodayHours";
import { IconPin } from "@/components/Icons";
import { actions, hoursSummary, shop, visit } from "@/content";

// 8. Kunjungi kami: map on the left, address, hours and directions on the right.
export default function VisitSection() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-judul" className="bg-roster">
      <div className="slab" aria-hidden="true" />
      <div className="section">
        <Container>
          <Reveal className="grid-12 visit-grid">
            <div className="visit-facts">
              <h2 id="lokasi-judul" className="t-head">
                {visit.title}
              </h2>
              <address className="t-lead mt-5 not-italic">
                {shop.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="t-body mt-6 font-semibold">{hoursSummary}</p>
              <div className="mt-2">
                <HoursTable />
              </div>
              <Button
                href={shop.mapsUrl}
                external
                variant="ink"
                icon={<IconPin />}
                label={{ text: actions.directions }}
                className="mt-7"
              />
            </div>
            <div className="visit-map">
              <iframe
                className="map-frame"
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
