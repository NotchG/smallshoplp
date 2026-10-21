import Container from "@/components/Container";
import ArchFrame from "@/components/ArchFrame";
import ButtonLink from "@/components/ButtonLink";
import { hero, shop, visit } from "@/content";

// The map sits in an arch like their wall niches, with the niche colour around it.
function VisitMap() {
  return (
    <ArchFrame className="aspect-[4/5] w-full p-3 sm:aspect-[4/3] lg:aspect-[690/560]">
      <div className="arch relative h-full w-full bg-plaster">
        {/* Shows until (or if) the map loads; the iframe paints over it. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center text-ink" aria-hidden="true">
          <svg width="28" height="36" viewBox="0 0 28 36" className="text-velvet">
            <path d="M14 34C14 34 3 21.5 3 13.5A11 11 0 0 1 25 13.5C25 21.5 14 34 14 34Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="14" cy="13.5" r="4" fill="currentColor" />
          </svg>
          <p className="t-small font-medium">{shop.street}</p>
        </div>
        <iframe
          src={shop.mapEmbed}
          title={visit.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative block h-full w-full border-0"
        />
      </div>
    </ArchFrame>
  );
}

// Phone: heading, address, map, hours, button. Desktop: map cols 1–7, details cols 9–12.
export default function Visit() {
  return (
    <section className="section section-follow bg-plaster" aria-labelledby="visit-title">
      <Container className="grid-12 lg:grid-rows-[1fr_auto]">
        <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:self-end">
          <h2 id="visit-title" className="t-head text-velvet">
            {visit.heading}
          </h2>
          <address className="t-lead mt-4 not-italic text-ink">{shop.address}</address>
        </div>

        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
          <VisitMap />
        </div>

        <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:mt-8">
          <div className="t-body text-ink">
            {shop.hours.map((h) => (
              <p key={h.days}>
                <span className="font-semibold">{h.days}</span> {h.time}
              </p>
            ))}
            <p>{shop.openEveryDay}</p>
            <p className="mt-3">
              <a href={shop.phoneHref} className="inline-flex min-h-11 items-center underline" aria-label={`${visit.phoneLabel} ${shop.phoneDisplay}`}>
                {shop.phoneDisplay}
              </a>
            </p>
          </div>
          <ButtonLink href={shop.mapsUrl} external srText={hero.directionsSr} className="mt-6 w-full sm:w-auto">
            {hero.directions}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
