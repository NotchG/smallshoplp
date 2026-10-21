import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import VisitMap from "@/components/VisitMap";
import ActionLink from "@/components/ActionLink";
import { labels, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

// Kunjungi kami: getting there. Map left on desktop, details right; details first on phone.
export default function Visit() {
  return (
    <section className="ground-batu section" aria-labelledby="visit-title">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-x-6">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2 id="visit-title" className="t-head text-merbau">
              {visit.heading}
            </h2>
            <address className="t-body mt-6 not-italic">{shop.addressFull}</address>
            {shop.hours.map((h) => (
              <p key={h.days} className="nums mt-4 font-semibold">
                {h.days} {h.time}
              </p>
            ))}
            <p className="t-small text-baja-soft">{shop.hoursNote}</p>
            <ul className="visit-notes mt-7">
              {visit.notes.map((n) => (
                <li key={n.text} {...mock(n.mockup)}>
                  {n.text}
                </li>
              ))}
            </ul>
            <ActionLink href={shop.mapsUrl} variant="secondary-light" icon="external" external className="mt-8">
              {labels.openMaps}
            </ActionLink>
          </div>
          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <VisitMap src={shop.mapEmbedUrl} title={visit.mapTitle} fallback={shop.addressShort} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
