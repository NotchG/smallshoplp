import Container from "@/components/Container";
import { HoursList } from "@/components/TodayHours";
import { shop, visit } from "@/content";

// The terrazzo floor: map and a wall-white info card with today's hours marked.
// No reveal here: it is the destination, and fading it in does no work.
export default function Visit() {
  return (
    <section className="section bg-terrazzo" aria-labelledby="visit-title">
      <Container>
        <div className="visit">
          <div className="visit-card">
            <h2 id="visit-title" className="t-head">
              {visit.heading}
            </h2>
            <dl className="visit-dl mt-6 grid gap-5">
              <div>
                <dt>{visit.addressLabel}</dt>
                <dd className="t-body mt-1">{shop.address}</dd>
              </div>
              <div>
                <dt>{visit.hoursLabel}</dt>
                <dd className="t-body">
                  <HoursList todayTag={visit.todayTag} />
                  <p className="mt-1">
                    {shop.hoursNote}. {visit.parking}
                  </p>
                </dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-1">
              <a className="btn btn-primary" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
                {visit.cta}
              </a>
              <a className="link" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
                {visit.openInMaps}
              </a>
            </div>
          </div>
          <div className="visit-map-wrap">
            {/* Shown until the map loads, or if it can't */}
            <div className="visit-map-fallback t-small" aria-hidden="true">
              <svg width="28" height="36" viewBox="0 0 28 36">
                <path d="M14 1C6.8 1 1 6.6 1 13.6 1 23 14 35 14 35s13-12 13-21.4C27 6.6 21.2 1 14 1Z" fill="#c4622d" />
                <circle cx="14" cy="13.5" r="4.6" fill="#fcfbf8" />
              </svg>
              <span>{visit.mapTitle}</span>
            </div>
            <iframe
              className="visit-map"
              src={shop.mapEmbedUrl}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
