import { hero, hours, shop, visit } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HoursTable from "@/components/HoursTable";
import BoxButton from "@/components/BoxButton";

// Find it: info first in the DOM and on the left, the map beside it.
export default function Visit() {
  return (
    <section className="g-dinding section" aria-labelledby="kunjungi">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="lg:col-span-5">
            <h2 id="kunjungi" className="t-head">
              {visit.heading}
            </h2>
            <address className="t-lead mt-5 not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="t-body mt-4 measure">{visit.access}</p>
            <p className="t-body text-muted measure">{visit.shared}</p>
            <HoursTable caption={visit.hoursCaption} className="t-body mt-7" />
            <p className="t-body text-muted mt-1">{hours.note}</p>
            <BoxButton href={shop.directionsUrl} variant="solid-kaca" external className="mt-7">
              {hero.directions}
            </BoxButton>
          </div>
          <div className="lg:col-start-6 lg:col-span-7 map-col">
            <div className="map-frame">
              <iframe
                src={shop.mapEmbedSrc}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
