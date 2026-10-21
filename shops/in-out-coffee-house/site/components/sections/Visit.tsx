import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import HoursList from "@/components/HoursList";
import { cta, hoursNote, shop, visit } from "@/content";

// Find it and check the week's hours. The map frame shows the address behind the embed,
// so a blocked map still reads.
export default function Visit() {
  return (
    <section id="kunjungi" className="section" aria-labelledby="kunjungi-title">
      <Container>
        <Reveal className="grid items-start gap-x-8 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="kunjungi-title" className="t-head">
              {visit.title}
            </h2>
            <address className="mt-4 not-italic">{shop.address}</address>
            <p className="t-small mt-1">{shop.areaNote.text}</p>
            <div className="mt-6">
              <ActionButton href={shop.mapsUrl} arrow external>
                {cta.directions}
              </ActionButton>
            </div>
            <h3 className="t-lead mt-10">{visit.hoursTitle}</h3>
            <div className="mt-3">
              <HoursList />
            </div>
            <p className="t-small mt-3">{hoursNote}</p>
          </div>
          <div className="lg:col-span-7">
            <div className="map-frame">
              <div className="map-fallback" aria-hidden="true">
                <p className="font-display text-xl font-bold">{shop.name}</p>
                <p className="t-small mt-1">{shop.addressShort}</p>
              </div>
              <iframe
                src={shop.mapEmbedUrl}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
