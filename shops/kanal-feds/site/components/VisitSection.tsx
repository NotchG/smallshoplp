import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import HoursTable from "@/components/HoursTable";
import { PinIcon } from "@/components/Icons";
import { hero, shop, visit } from "@/content";

// "Kunjungi kami": find it and plan the visit. Desktop: map cols 1–7, details cols 8–12.
export default function VisitSection() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="section bg-limewash">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2 id="lokasi-title" className="t-head">
              {visit.title}
            </h2>
            <address className="t-lead mt-4 not-italic">{shop.address}</address>
            <p className="t-body mt-2 text-muted">{shop.landmark}</p>
            <div className="mt-6">
              <ActionButton href={shop.mapsUrl} external icon={<PinIcon />}>
                {hero.directions}
              </ActionButton>
            </div>
            <div className="mt-10">
              <HoursTable />
            </div>
          </div>
          <div className="map-frame lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <iframe
              src={shop.mapEmbedUrl}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
