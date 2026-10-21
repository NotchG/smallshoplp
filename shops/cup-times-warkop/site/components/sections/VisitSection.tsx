import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import HoursList from "@/components/HoursList";
import { PinIcon } from "@/components/Icons";
import { hours, shop, ui, visit } from "@/content";

// White ground: address, hours with today marked, directions, and the map.
export default function VisitSection() {
  return (
    <section id="lokasi" className="section bg-label" aria-labelledby="visit-title">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="visit-title" className="t-head font-display text-cup">
              {visit.heading}
            </h2>
            <address className="t-body mt-5 not-italic">
              {shop.addressLines[0]}
              <br />
              {shop.addressLines[1]}
            </address>
            <p className="t-body mt-6 font-bold">{hours.everyDay}</p>
            <div className="t-body mt-1">
              <HoursList />
            </div>
            <div className="mt-8">
              <ButtonLink href={shop.mapsUrl} variant="cup" icon={<PinIcon />}>
                {ui.directions}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="map-frame aspect-[4/3] overflow-hidden rounded-xl bg-frost md:aspect-[16/10]">
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full border-0"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
