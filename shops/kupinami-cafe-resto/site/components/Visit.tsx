import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { hours, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="section bg-dinding">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
          <div className="lg:col-span-5">
            <h2 id="lokasi-title" className="t-head text-teal-tua">{visit.heading}</h2>
            <address className="t-lead mt-6 font-display font-bold not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
            <div className="mt-6">
              <p className="font-semibold">
                {hours.days} {hours.time}
              </p>
              <p {...mock(hours.fridayBreak.mockup)} className="mt-1">
                {hours.fridayBreak.text}
                <span className="flag mt-1.5 ml-2 align-[1px]">{visit.unconfirmed}</span>
              </p>
            </div>
            <p className="mt-4 flex items-center gap-2.5">
              <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-teal-tua" />
              {visit.parking}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={shop.directionsUrl} target="_blank" rel="noopener" className="btn btn-primary">
                {visit.ctaDirections}
              </a>
              <a href={shop.mapsUrl} target="_blank" rel="noopener" className="btn btn-secondary">
                {visit.ctaMaps}
              </a>
            </div>
          </div>
          <div className="wall-frame mt-10 lg:col-span-7 lg:mt-0">
            <p aria-hidden="true" className="map-placeholder t-small">{visit.mapPlaceholder}</p>
            <iframe
              src={shop.mapEmbed}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map relative block w-full rounded-[2px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
