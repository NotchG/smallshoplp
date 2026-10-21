import { kunjungi, shop, ui } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButtons from "@/components/ActionButtons";
import HoursTable from "@/components/HoursTable";
import MapEmbed from "@/components/MapEmbed";

export default function Kunjungi() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-h" className="section bg-wall">
      <Container>
        <h2 id="kunjungi-h" className="t-head">
          {kunjungi.heading}
        </h2>
        <Reveal className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <address className="order-1 not-italic">
              <p className="t-body font-semibold text-cream">{shop.street}</p>
              <p className="t-body text-cream">{shop.area}</p>
              <p className="t-body mt-2 text-mist">{shop.landmark}</p>
            </address>
            <div className="order-2 mt-7 lg:order-3 lg:mt-9">
              <ActionButtons withCall />
              <p className="t-small mt-3 text-mist" {...mock(ui.numbersSoon.mockup)}>
                {ui.numbersSoon.text}
              </p>
            </div>
            <HoursTable className="order-3 mt-9 lg:order-2" />
          </div>
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <MapEmbed />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
