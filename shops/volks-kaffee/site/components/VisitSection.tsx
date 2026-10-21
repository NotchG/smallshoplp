import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import HoursTable from "@/components/HoursTable";
import { mock } from "@/lib/mockup";
import { buttons, shop, visit } from "@/content";

// The black house plaque from the gate pillar. Decorative: the address already says No. B23.
function HousePlaque() {
  return (
    <span aria-hidden="true" className="t-lead inline-flex items-center gap-2.5 rounded-xl bg-kayu px-3.5 py-1.5 font-extrabold tracking-[0.06em] text-piring">
      <span className="h-1.5 w-1.5 rounded-full bg-piring/40" />
      {shop.houseNumber}
      <span className="h-1.5 w-1.5 rounded-full bg-piring/40" />
    </span>
  );
}

export default function VisitSection() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="section ground-light bg-pagar text-kayu">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="lokasi-title" className="t-head text-awning">
              {visit.title}
            </h2>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-start">
              <HousePlaque />
              <address className="t-body not-italic">
                {shop.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <p className="t-body mt-4 max-w-[44ch]" {...mock(visit.wayfinding.mockup)}>
              {visit.wayfinding.text}
            </p>
            <div className="mt-8">
              <HoursTable />
            </div>
            <p className="t-body mt-5" {...mock(visit.parking.mockup)}>
              {visit.parking.text}
            </p>
            <div className="mt-7">
              <Button href={shop.mapsUrl} variant="primary-light" icon="pin" external>
                {buttons.directions}
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-2">
            <div className="map-frame">
              <iframe src={shop.mapEmbedSrc} title={visit.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link t-body mt-1">
              {buttons.mapsLink}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
