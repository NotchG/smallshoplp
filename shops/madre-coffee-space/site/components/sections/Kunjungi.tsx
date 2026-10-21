import { actions, kunjungi, shop } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HoursTable from "@/components/HoursTable";
import ActionButton from "@/components/ActionButton";
import Icon from "@/components/Icon";

// 8 Kunjungi kami (paper): map beside address and the week's hours.
export default function Kunjungi() {
  return (
    <section className="ground-paper section" aria-labelledby="kunjungi-h">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2 id="kunjungi-h" className="f-display t-head">
              {kunjungi.heading}
            </h2>
            <address className="t-lead measure mt-4 not-italic">{shop.address}</address>
            <p className="mt-8 font-extrabold">{kunjungi.everyDay}</p>
            <HoursTable className="mt-2" />
            <ActionButton href={shop.mapsUrl} className="mt-8">
              <Icon name="pin" />
              {actions.directions}
            </ActionButton>
          </div>
          <div className="mt-10 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0">
            <div className="map-wrap">
              <div className="map-fallback" aria-hidden="true">
                <Icon name="pin" />
                <span className="font-bold">{shop.name}</span>
                <span className="t-small">{shop.addressShort}</span>
              </div>
              <iframe
                className="map"
                loading="lazy"
                title={kunjungi.mapTitle}
                src={shop.mapEmbed}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
