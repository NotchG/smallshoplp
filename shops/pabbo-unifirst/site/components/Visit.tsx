import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import Icon from "@/components/Icons";
import { labels, links, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

function MapEmbed() {
  return (
    <div className="map-frame">
      <div className="map-loading" aria-hidden="true">
        <span className="map-pin">
          <Icon name="pin" />
        </span>
        <p className="t-small t-label">{labels.mapLoading}</p>
      </div>
      <iframe
        src={links.mapEmbed}
        title={labels.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-iframe"
      />
    </div>
  );
}

export default function Visit() {
  return (
    <section id="lokasi" className="section on-bantal" aria-labelledby="lokasi-title">
      <Container>
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="lokasi-title" className="t-head" data-check="">
              {visit.heading}
            </h2>
            <p className="t-lead mt-4" {...mock(shop.locationLabel.mockup)}>
              {shop.locationLabel.text}
            </p>
            <address className="t-body mt-4 not-italic">
              {shop.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <ul className="t-small t-label mt-6 space-y-1">
              <li>{shop.hoursRow}</li>
              <li>{shop.priceLevel}</li>
            </ul>
            <ActionButton href={links.directions} icon="pin" external className="mt-8">
              {labels.directions}
            </ActionButton>
          </div>
          <div className="lg:col-start-6 lg:col-span-7">
            <MapEmbed />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
