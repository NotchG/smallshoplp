import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ArchPhoto from "@/components/ArchPhoto";
import Button from "@/components/Button";
import HoursTable from "@/components/sections/HoursTable";
import { contact, shop, visit } from "@/content";

// "Kunjungi kami": get there, and never arrive on a closed day. 4/4/4 at desktop:
// details | facade photo | map. On phone the map comes before the photo.
export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="bg-kapur">
      <Container className="section">
        <Reveal className="grid gap-y-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="order-1 lg:col-span-4">
            <h2 id="lokasi-title" className="t-head">
              {visit.heading}
            </h2>
            <p className="t-lead mt-3">{visit.lead}</p>
            <address className="t-body mt-6 not-italic">
              {shop.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <HoursTable caption={visit.hoursCaption} todayLabel={visit.todayLabel} />
            <Button href={shop.mapsUrl} className="mt-8">
              {contact.directions}
            </Button>
          </div>

          <ArchPhoto
            className="order-3 md:order-2 lg:col-span-4"
            variant="full"
            src={visit.photo.src}
            alt={visit.photo.alt}
            width={visit.photo.width}
            height={visit.photo.height}
            caption={visit.photo.caption}
          />

          <div className="map-box order-2 md:order-3 md:col-span-2 lg:col-span-4">
            {/* Shown until (or unless) the embed loads. */}
            <p className="map-fallback t-body">
              <span className="font-semibold">{visit.mapFallback}</span>
              <a href={shop.mapsUrl} className="inline-flex min-h-11 items-center px-2 underline">
                {visit.mapLink}
              </a>
            </p>
            <iframe
              src={shop.mapEmbed}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
