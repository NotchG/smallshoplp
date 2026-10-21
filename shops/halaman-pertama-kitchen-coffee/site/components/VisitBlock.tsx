import { hoursNote, kunjungi, shop } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import { HoursTable } from "@/components/TodayHours";
import { RattanLamps } from "@/components/Drawings";
import { IconPin } from "@/components/Icons";

// Kunjungi kami: map, address, the week's hours and the parking line, on the night ground.
export default function VisitBlock() {
  const { street, area, city } = shop.address;
  return (
    <section id="kunjungi" className="section visit relative" aria-labelledby="kunjungi-title">
      <div className="lamps" aria-hidden="true">
        <RattanLamps count={3} className="hidden md:block" />
        <RattanLamps count={1} className="md:hidden" />
      </div>
      <Container>
        <Reveal className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-6 md:col-start-7 md:row-start-1 lg:col-span-5 lg:col-start-8">
            <SplitHeading id="kunjungi-title" bold={kunjungi.heading.bold} light={kunjungi.heading.light} />
            <address className="t-lead not-italic mt-4">
              {street},<br />
              {area},<br />
              {city}
            </address>
            <a className="btn btn-light mt-6" href={shop.directionsUrl} target="_blank" rel="noopener">
              <IconPin />
              Petunjuk Arah
            </a>
            <div className="mt-10">
              <HoursTable />
              <p className="mt-3 font-semibold">{hoursNote}</p>
            </div>
            <p className="mt-6 text-daun-muda measure">{kunjungi.parking}</p>
          </div>
          <div className="map-frame md:col-span-6 md:col-start-1 md:row-start-1">
            <div className="map-fallback">
              <IconPin />
              <p className="text-kapur">
                {street}
                <br />
                {area}
              </p>
              <p className="t-small text-daun-muda">Peta Google Maps</p>
            </div>
            <iframe
              src={shop.mapEmbedUrl}
              title={kunjungi.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
