import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import ActionButton from "@/components/ActionButton";
import { actions, hoursRange, shop, visit } from "@/content";

// Find it and know the seating. DOM order: info first, then the map (shown left on desktop).
export default function Visit() {
  return (
    <section aria-labelledby="kunjungi-title" className="ground-nampan section">
      <Reveal>
        <Container className="grid gap-y-10 md:grid-cols-12 md:gap-x-8 lg:gap-x-6">
          <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:self-center">
            <h2 id="kunjungi-title" className="t-head heading">
              {visit.heading}
            </h2>
            <address className="t-body mt-5 not-italic">{shop.address}</address>
            <p className="t-body mt-1 text-bangku">{shop.nearby}</p>
            <p className="t-lead tnum mt-6 font-bold">
              {shop.hours.label} {hoursRange}
            </p>
            <p className="t-body mt-2 max-w-[36ch]">{visit.seating}</p>
            <div className="mt-8">
              <ActionButton href={shop.directionsUrl} variant="maroon" icon="directions" className="w-full sm:w-auto">
                {actions.directions}
              </ActionButton>
            </div>
          </div>
          <MapEmbed className="md:col-span-7 md:col-start-1 md:row-start-1" />
        </Container>
      </Reveal>
    </section>
  );
}
