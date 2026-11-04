import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import { labels, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

// 6. Kunjungi kami: map cols 1–7 on a kabut frame, the address and wayfinding cols 8–12
// (cols 9–12 in the brief made the heading wrap at 1440).
// Not revealed: the remove-one-thing pass cut the fade here, the address and map simply stand.
export default function VisitMap() {
  return (
    <section aria-labelledby="kunjungi" className="section section-flow">
      <Container>
        <div className="g12 g12-split-rows">
          <div className="lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:pl-4">
            <h2 id="kunjungi" className="t-head">
              {visit.heading}
            </h2>
            <address className="mt-5 t-body not-italic">
              {shop.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 t-body text-lis" {...mock(visit.wayfinding.mockup)}>
              {visit.wayfinding.text}
            </p>
            <p className="mt-4 t-body font-bold">{shop.hours}</p>
            <p className="t-body text-lis" {...mock(visit.callFirst.mockup)}>
              {visit.callFirst.text}
            </p>
          </div>

          <div className="mt-8 lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-3 lg:mt-0">
            <div className="map-frame">
              <iframe
                src={shop.mapEmbedUrl}
                title={labels.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={shop.mapsUrl} className="link mt-2 t-small" target="_blank" rel="noopener noreferrer">
              {labels.openMaps}
            </a>
          </div>

          <div className="mt-6 lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:self-start lg:mt-8 lg:pl-4">
            <ActionButton href={shop.directionsUrl} variant="primary" external className="w-full sm:w-auto sm:px-8">
              {labels.directions}
            </ActionButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
