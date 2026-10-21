import Container from "@/components/Container";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import WeekHours from "@/components/WeekHours";
import { hero, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";

export default function Visit() {
  return (
    <section className="ground-batu section" aria-labelledby="kunjungi-judul">
      <Reveal>
        <Container>
          <Plate as="h2" id="kunjungi-judul" head className="t-head sign-caps">
            {visit.heading}
          </Plate>
          <p className="t-lead font-semibold mt-5 measure balance" {...mock(visit.line.mockup)}>
            {visit.line.text}
          </p>

          <div className="mt-8 lg:mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Blue direction sign with the address */}
              <Plate variant="blue" className="flex gap-4 items-start p-6 md:p-7">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 h-9 flex-none mt-0.5" fill="currentColor">
                  <path d="M12 2.5 20 11h-5v10.5H9V11H4z" />
                </svg>
                <address className="not-italic">
                  <span className="block t-lead font-bold balance">{shop.addressLines[0]}</span>
                  <span className="block mt-1">{shop.addressLines[1]}</span>
                  <span className="block">{shop.addressLines[2]}</span>
                </address>
              </Plate>

              <Plate variant="white" className="p-6 md:p-7">
                <WeekHours />
              </Plate>

              <div>
                <ButtonLink href={shop.mapsUrl} external icon="route" onLight>
                  {hero.ctaDirections}
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="map-frame">
                <div className="map-fallback t-small" aria-hidden="true">
                  <span className="t-body font-bold">Peta Google Maps</span>
                  <span>{shop.address}</span>
                </div>
                <iframe
                  src={shop.mapEmbed}
                  title="Peta lokasi Indokopi"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
