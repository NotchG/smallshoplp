import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { actions, shop, visit } from "@/content";

// Get them there: address, hours as one compact pair, the house rule, and the map.
export default function VisitBlock() {
  return (
    <section id="kunjungi" aria-labelledby="visit-title" className="section band-ink">
      <Container>
        <Reveal className="grid-12 gap-y-10 lg:items-center">
          <div className="lg:col-span-5">
            <h2 id="visit-title" className="t-head">
              {visit.heading}
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="t-label text-sky">{visit.addressLabel}</dt>
                <dd className="t-body mt-1 max-w-[30ch]">{shop.address}</dd>
              </div>
              <div>
                <dt className="t-label text-sky">{visit.hoursLabel}</dt>
                {shop.hours.map((h) => (
                  <dd key={h.days} className="t-body nums mt-1">
                    {h.days}
                    <span className="ml-3 font-semibold">{h.time}</span>
                  </dd>
                ))}
              </div>
            </dl>
            <p className="t-body mt-6 max-w-[36ch] border-t border-paper/15 pt-5 text-sky">
              {visit.houseRule}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={shop.directions} variant="paper" icon="pin" external>
                {actions.directions}
              </Button>
              <Button href={shop.tel} variant="outline" icon="phone">
                {actions.call}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="map-frame rounded-card">
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="link t-small mt-2 inline-flex min-h-11 items-center gap-1.5 text-sky"
              href={shop.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {actions.openMaps}
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
