import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import { HoursList } from "@/components/TodayHours";
import { IconDirections, IconParking } from "@/components/icons";
import { shop, visit } from "@/content";

// Kunjungi kami (malam). Where, when, parking, map.
export default function Visit() {
  return (
    <section id="kunjungi" className="on-malam section" aria-labelledby="kunjungi-title">
      <Container>
        <Reveal className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="kunjungi-title" className="t-head">
              {visit.title}
            </h2>
            <address className="mt-5 not-italic">{shop.address}</address>
            <p className="t-small mt-8 text-redup">{shop.hoursNote}</p>
            <HoursList />
            <div className="mt-6 flex gap-3 rounded-2xl bg-paper/6 p-4">
              <IconParking className="mt-0.5 shrink-0 text-lampu" size={22} />
              <p className="t-small">
                <span className="sr-only">{visit.parkingLabel}: </span>
                {visit.parking}
              </p>
            </div>
            <a className="btn btn-lampu mt-8" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
              <IconDirections />
              {visit.directions}
            </a>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <MapEmbed src={shop.mapEmbed} title={visit.mapTitle} href={shop.mapsUrl} linkText={visit.mapLink} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
