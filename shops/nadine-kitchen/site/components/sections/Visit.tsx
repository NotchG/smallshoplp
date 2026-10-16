import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { PinIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { shop, visit } from "@/content";

export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-title" className="section">
      <Reveal>
        <Container className="grid items-start gap-x-6 gap-y-10 md:grid-cols-12 md:items-stretch">
          <div className="flex flex-col md:col-span-7 md:col-start-6 md:row-start-1">
            <h2 id="lokasi-title" className="t-head">
              {visit.heading}
            </h2>
            <p className="t-lead head-gap mt-2" {...mock(visit.sub.mockup)}>
              {visit.sub.text}
            </p>

            <div className="grid gap-6 sm:grid-cols-7 md:grid-cols-1 lg:grid-cols-7">
              <div className="sm:col-span-4 md:col-span-1 lg:col-span-4">
                <h3 className="label text-grape-soft">{visit.addressLabel}</h3>
                <address className="t-body not-italic">
                  {shop.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="t-small t-strong mt-2">{shop.landmark}</p>
              </div>
              <div className="sm:col-span-3 md:col-span-1 lg:col-span-3">
                <h3 className="label text-grape-soft">{visit.hoursLabel}</h3>
                <p className="t-body">{shop.hours}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 md:flex-col md:items-start md:gap-3 lg:flex-row lg:items-center lg:gap-6">
              <a
                className="btn btn-secondary shrink-0 self-start whitespace-nowrap"
                href={visit.directions.href}
                target="_blank"
                rel="noopener"
              >
                <PinIcon />
                {visit.directions.label}
              </a>
              <p className="t-body" {...mock(visit.delivery.mockup)}>
                {visit.delivery.text}
              </p>
            </div>

            <div className="map-box card relative mt-8 overflow-hidden bg-toska">
              {/* Shown until the map paints over it (slow network, blocked embeds). */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center"
                aria-hidden="true"
              >
                <PinIcon className="h-8 w-8 text-laut" />
                <p className="t-body t-strong">{shop.address[0]}</p>
                <p className="t-small text-grape-soft">{shop.landmark}</p>
              </div>
              <iframe
                className="absolute inset-0"
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <figure className="card field-toska self-start p-3 md:col-span-5 md:col-start-1 md:row-start-1">
            <img
              className="photo aspect-[9/16]"
              src={visit.photo.src}
              alt={visit.photo.alt}
              width={visit.photo.width}
              height={visit.photo.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="t-small t-strong mt-3 px-1 pb-1">{visit.caption}</figcaption>
          </figure>
        </Container>
      </Reveal>
    </section>
  );
}
