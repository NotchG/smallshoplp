import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import HoursTable from "@/components/HoursTable";
import { copy, shop } from "@/content";

// 6. Kunjungi kami: address, hours with today highlighted, directions, map.
// No "masuk" or indoor wording: fixed shop vs roadside bar is still unconfirmed.
export default function Visit() {
  return (
    <section id="kunjungi" aria-labelledby="visit-title" className="section ground-malam hairline-top">
      <Container>
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="visit-title" className="f-head t-head">
              {copy.visit.heading}
            </h2>
            <address className="t-body on-dark mt-6 max-w-[22rem] not-italic">{shop.address}</address>
            <h3 className="t-label mt-8 text-baja">{copy.visit.hoursLabel}</h3>
            <div className="mt-3">
              <HoursTable />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href={shop.directionsUrl} variant="solid-kayu" external>
                {copy.buttons.directions}
              </Button>
              <a href={shop.mapsUrl} className="link t-body inline-flex min-h-11 items-center" target="_blank" rel="noopener noreferrer">
                {copy.visit.openMap}
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="aspect-[4/3] w-full border border-baja bg-malam">
              <iframe
                src={shop.mapEmbedUrl}
                title={copy.visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
