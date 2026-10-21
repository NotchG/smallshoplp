import { Fragment } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import HoursTable from "@/components/HoursTable";
import { BikeIcon, PinIcon } from "@/components/Icons";
import { actions, shop, visit } from "@/content";

// "Kunjungi kami": map, address, directions, the week's hours with today marked, parking.
export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-h" className="section bg-plaster">
      <Container>
        <Reveal>
          <h2 id="lokasi-h" className="f-display t-head">
            {visit.heading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-y-10 md:mt-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <div className="map-wrap">
                {/* Shows until the Google map loads (or if it can't). */}
                <div className="map-fallback" aria-hidden="true">
                  <PinIcon className="size-9" />
                  <span className="t-small font-medium">{visit.mapFallback}</span>
                </div>
                <iframe
                  className="map-frame"
                  src={shop.mapEmbedUrl}
                  title={visit.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:col-span-5 lg:block">
              <div>
                <address className="t-lead not-italic">
                  {shop.addressLines.map((l, i) => (
                    <Fragment key={l}>
                      {i > 0 && <br />}
                      {l}
                    </Fragment>
                  ))}
                </address>
                <ActionButton href={shop.directionsUrl} variant="solid" icon="pin" className="mt-6">
                  {actions.directions}
                </ActionButton>
              </div>
              <div className="mt-10 md:mt-0 lg:mt-10">
                <h3 className="font-bold">{visit.hoursHeading}</h3>
                <HoursTable className="mt-3" />
                <p className="mt-6 flex items-center gap-3">
                  <BikeIcon className="size-8 shrink-0" />
                  {shop.parking.text}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
