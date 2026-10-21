import Container from "@/components/Container";
import HoursTable from "@/components/HoursTable";
import Reveal from "@/components/Reveal";
import { IconDirections, IconPin } from "@/components/Icons";
import { hero, shop, visit } from "@/content";

// Get there. Night ground (baja); kuning button and today's row keep it warm, not gloomy.
export default function Visit() {
  return (
    <section id="lokasi" className="section ground-baja bg-baja text-beton" aria-labelledby="lokasi-title">
      <Container>
        <h2 id="lokasi-title" className="t-head head-gap">
          {visit.heading}
        </h2>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <p className="t-body measure">{shop.address}</p>
            <a className="btn btn-sun mt-5" href={shop.directionsHref}>
              <IconDirections />
              {hero.ctaDirections}
            </a>
            <div className="mt-10">
              <h3 id="jam-buka-title" className="t-body font-extrabold">
                {visit.hoursLabel}
              </h3>
              <p className="t-body mt-1 text-on-baja">{shop.hoursSummary}</p>
              <div className="mt-4 -ml-3">
                <HoursTable labelledBy="jam-buka-title" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-baja-line lg:aspect-4/3">
              {/* Shows until the lazy map loads, or if it can't. */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-on-baja" aria-hidden="true">
                <IconPin />
                <span className="t-small">{shop.addressShort}</span>
              </div>
              <iframe
                src={shop.mapEmbedSrc}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative h-full w-full border-0"
              />
            </div>
            <a className="link link-rest t-body mt-2" href={shop.mapsHref}>
              {visit.mapLink}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
