import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButtons from "@/components/ActionButtons";
import { contact, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";
import { nb } from "@/lib/text";

// Shown under the map until Google's iframe paints over it (or if it never loads).
function MapPlaceholder() {
  return (
    <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-dongker">
      <svg viewBox="0 0 24 32" className="h-10 w-8" focusable="false">
        <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.5 12 32 12 32s12-11.5 12-20.3C24 5.2 18.6 0 12 0z" fill="#bf3328" />
        <circle cx="12" cy="11.5" r="4.5" fill="#fdfdfb" />
      </svg>
      <p className="t-small font-semibold">{shop.addressLines[0]}</p>
      <p className="t-small">{visit.mapLoading}</p>
    </div>
  );
}

// 6. Mampir ke rumah mantan (5/7) and 7. Kabarin dulu (3-up plaques), one dongker band.
export default function VisitContact() {
  return (
    <div className="on-dark bg-dongker text-kapur">
      <section aria-labelledby="mampir-h" className="section">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-5">
              <h2 id="mampir-h" className="h2">
                {visit.heading}
              </h2>
              <p className="t-lead mt-4" {...mock(visit.lead.mockup)}>
                {nb(visit.lead.text)}
              </p>

              <address className="mt-8 not-italic">
                {shop.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>

              <dl className="t-lead mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
                {shop.hours.map((h) => (
                  <div key={h.days} className="contents">
                    <dt>{h.days}</dt>
                    <dd className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
                      <span className="whitespace-nowrap">{h.time}</span>
                      {h.later && <span className="tag-later">{visit.laterLabel}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3">{visit.everyDay}</p>

              <div className="mt-8">
                <ActionButtons tone="dark" withWhatsapp={false} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="map-frame">
                <MapPlaceholder />
                <iframe
                  src={shop.mapEmbedUrl}
                  title={visit.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                className="t-small mt-3 inline-flex min-h-11 items-center underline"
                href={shop.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {visit.mapFallback}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="kabarin-h">
        <Container>
          <Reveal className="border-t border-kapur/20 pb-16 pt-14 lg:pb-24 lg:pt-20">
            <div className="grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-8">
              <h2 id="kabarin-h" className="h2 lg:col-span-4">
                {contact.heading}
              </h2>
              <p className="lg:col-span-8">{contact.sub}</p>
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
              {contact.plaques.map((p, i) => (
                <li key={p.label} className={i === contact.plaques.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}>
                  <a
                    className="plaque h-full"
                    href={p.href}
                    {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...mock(p.mockup)}
                  >
                    <span className="label plaque-label">{p.label}</span>
                    <span className="plaque-value">{p.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}
