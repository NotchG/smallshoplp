import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { PinIcon } from "@/components/Icons";
import { actions, shop, visit } from "@/content";

// Kunjungi kami (Hijau ground): address, hours and parking beside the map in a steel frame.
export default function Visit() {
  return (
    <section aria-labelledby="kunjungi-title" className="section on-dark bg-hijau text-kapur">
      <Container>
        <Reveal className="grid-12 items-start gap-y-10">
          <div className="lg:col-span-4">
            <h2 id="kunjungi-title" className="t-head">
              {visit.heading}
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="t-label text-lampu">{visit.addressLabel}</dt>
                <dd className="t-body mt-1">{shop.address}</dd>
              </div>
              <div>
                <dt className="t-label text-lampu">{visit.hoursLabel}</dt>
                {shop.hours.map((h) => (
                  <dd key={h.days} className="t-body mt-1 nums">
                    {h.days} <span className="font-semibold">{h.time}</span>
                  </dd>
                ))}
                <dd className="t-body opacity-85">{shop.hoursNote}</dd>
              </div>
              <div>
                <dt className="t-label text-lampu">{visit.parkingLabel}</dt>
                <dd className="t-body mt-1">{visit.parking}</dd>
              </div>
            </dl>
            <Button href={shop.directionsUrl} icon={<PinIcon />} className="mt-8">
              {actions.directions}
            </Button>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="steel-frame relative aspect-[4/3] bg-[var(--hijau-deep)] md:aspect-[16/10]">
              <p className="t-small absolute inset-0 flex items-center justify-center opacity-70">{visit.mapLoading}</p>
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="t-small mt-3">
              <a href={shop.mapsUrl} className="link inline-flex min-h-11 items-center">
                {visit.mapFallback}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
