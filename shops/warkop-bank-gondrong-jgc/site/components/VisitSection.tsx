import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { IconArrowUpRight, IconPin } from "@/components/Icons";
import { actions, shop, visit } from "@/content";

// The map sits on a panel that already carries the address, so the section still works
// if the embed is blocked or slow.
function MapEmbed() {
  return (
    <div className="map-frame">
      <div className="map-fallback" aria-hidden="true">
        <IconPin />
        <p className="t-lead">{shop.addressShort}</p>
      </div>
      <iframe src={shop.mapEmbedSrc} title={visit.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

export default function VisitSection() {
  return (
    <section id={visit.id} className="section ground-krem" aria-labelledby="visit-heading">
      <Container>
        <Reveal className="grid-page gap-y-10 lg:items-center">
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2 id="visit-heading" className="t-head">
              {visit.heading}
            </h2>
            <address className="t-body not-italic mt-5">
              {shop.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="t-lead tnum mt-5">{visit.hoursLine}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a className="btn btn-red" href={shop.directionsHref} target="_blank" rel="noopener noreferrer">
                <IconPin />
                {actions.directions}
              </a>
              <a className="text-link" href={shop.mapsHref} target="_blank" rel="noopener noreferrer">
                {actions.openMaps}
                <IconArrowUpRight />
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <MapEmbed />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
