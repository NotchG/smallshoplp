import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import HoursSlats from "@/components/HoursSlats";
import TodayHours from "@/components/TodayHours";
import { DirectionsIcon } from "@/components/Icons";
import { actions, hoursSummary, shop, visit } from "@/content";

// 4:3 on phone and tablet; from 1024 it stretches to the height of the hours column
// beside it so the right half has no dead band.
function MapEmbed() {
  return (
    <div className="flex h-full flex-col">
      <div className="map-frame relative aspect-[4/3] border border-bilah bg-beton lg:aspect-auto lg:flex-1">
        <p className="t-small absolute inset-0 grid place-items-center p-6 text-center text-bilah-muted">
          {shop.addressLines[0]}
        </p>
        <iframe
          src={shop.mapEmbed}
          title={visit.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <a
        href={shop.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex min-h-11 items-center font-semibold underline"
      >
        {visit.mapLink}
      </a>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="kunjungi" className="section bg-bata" aria-labelledby="visit-title">
      <Container>
        <Reveal className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 flex flex-col lg:col-span-6 lg:row-start-1">
            <h2 id="visit-title" className="t-head order-1">
              {visit.heading}
            </h2>
            <address className="t-body order-2 mt-5 not-italic">
              {shop.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <span className="mt-1 block text-bilah-muted">{shop.area}</span>
            </address>
            <div className="order-3 mt-6 lg:order-6 lg:mt-8">
              <ButtonLink href={shop.directionsUrl} variant="solid" icon={<DirectionsIcon />}>
                {actions.directions}
              </ButtonLink>
            </div>
            <div className="order-4 mt-10">
              <h3 className="t-lead font-semibold">{visit.hoursHeading}</h3>
              <TodayHours variant="visit" className="visit-today mt-1" />
              <div className="mt-6 md:flex md:items-start md:gap-10 lg:block">
                <HoursSlats />
                <dl className="hours-list t-body tabular mt-8 grid gap-y-1 sm:grid-cols-3 sm:gap-x-6 md:mt-7 md:grid-cols-1 md:gap-y-4 lg:mt-8 lg:grid-cols-3 lg:gap-y-1">
                  {hoursSummary.map((row) => (
                    <div key={row.days} className="flex gap-4 sm:flex-col sm:gap-0">
                      <dt className="min-w-[7.5rem] font-semibold">{row.days}</dt>
                      <dd>{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <MapEmbed />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
