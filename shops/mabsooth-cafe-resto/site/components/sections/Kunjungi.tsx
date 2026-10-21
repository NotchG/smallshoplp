import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButtons from "@/components/ActionButtons";
import HoursChart from "@/components/HoursChart";
import { actions, hoursCopy, shop, visit } from "@/content";

// Rattan ground: address, the hours drawn as bars, directions, map.
export default function Kunjungi() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-h" className="section section-join-bottom ground-rattan bg-rattan text-walnut">
      <Container>
        <Reveal className="grid-12 gap-y-8 lg:grid-rows-[auto_1fr_auto] lg:gap-y-8">
          <div className="lg:col-span-5 lg:row-start-1">
            <h2 id="kunjungi-h" className="font-display t-head">
              {visit.heading}
            </h2>
            <address className="mt-4 not-italic">
              {shop.addressLines[0]}
              <br />
              {shop.addressLines[1]}
            </address>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:pt-3">
            <h3 id="jam-h" className="font-display t-lead">
              {hoursCopy.everyDay}
            </h3>
            <HoursChart labelledBy="jam-h" className="mt-4" />
          </div>

          <ActionButtons tone="light" className="lg:col-span-5 lg:row-start-2 lg:self-start" />

          <div className="lg:col-span-12">
            <div className="map-frame">
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full border-0"
              />
            </div>
            <a className="text-link mt-1" href={shop.mapsUrl}>
              {actions.openMaps}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
