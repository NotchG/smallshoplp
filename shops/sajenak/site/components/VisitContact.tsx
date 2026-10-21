import Container from "./Container";
import Reveal from "./Reveal";
import { HoursTable } from "./TodayHours";
import { IconArrowRight, IconChat, IconPhone } from "./Icons";
import { mock } from "@/lib/mockup";
import { contact, footer, hoursCopy, shop, visit } from "@/content";

// Static string lights along the top edge of the night field: one swag, nine flat Rotan bulbs.
// The wire stretches with the width; the bulbs are HTML so they keep their shape.
const BULBS = 9;
const WIRE_TOP = 10; // px, at the edges
const SAG = 34; // px, at the middle
function StringLights() {
  const bulbs = Array.from({ length: BULBS }, (_, i) => {
    const t = (i + 1) / (BULBS + 1);
    const y = WIRE_TOP + SAG * (1 - (2 * t - 1) ** 2);
    return { left: `${t * 100}%`, top: y };
  });
  return (
    <div className="lights" aria-hidden>
      <svg viewBox="0 0 100 72" preserveAspectRatio="none">
        <path
          d={`M0 ${WIRE_TOP} Q 50 ${WIRE_TOP + SAG * 2} 100 ${WIRE_TOP}`}
          fill="none"
          stroke="rgb(246 244 239 / 0.45)"
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {bulbs.map((b) => (
        <span key={b.left} className="bulb" style={{ left: b.left, top: b.top - 1 }} />
      ))}
    </div>
  );
}

export default function VisitContact() {
  return (
    <div className="field-malam">
      <StringLights />
      <section id="lokasi" className="pb-[var(--section-y)] pt-12 lg:pt-16" aria-labelledby="lokasi-title">
        <Container>
          <Reveal className="grid-12 gap-y-10">
            <div className="lg:col-span-5">
              <h2 id="lokasi-title" className="t-head">
                {visit.title}
              </h2>
              <address className="mt-5 not-italic">
                {shop.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={shop.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[44px] items-center gap-2 font-semibold text-rotan underline"
              >
                {visit.directions}
                <IconArrowRight className="h-[1.1em] w-[1.1em]" />
              </a>
              <h3 className="t-lead mt-8">{visit.hoursCaption}</h3>
              <div className="mt-2 max-w-[26rem]">
                <HoursTable />
              </div>
              <p className="mt-3">{hoursCopy.everyDay}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="map-frame">
                {/* Shown until (or if) the Google map loads over it. */}
                <div className="map-fallback" aria-hidden>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="t-small">Jl. Rawa Domba No.47A</span>
                </div>
                <iframe
                  src={shop.mapEmbed}
                  title={visit.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="kontak" className="pb-[var(--section-y)]" aria-labelledby="kontak-title">
        <Container>
          <div className="border-t border-[rgb(246_244_239/0.18)] pt-14 lg:pt-20">
            <Reveal className="grid-12 items-end gap-y-8">
              <div className="lg:col-span-7">
                <h2 id="kontak-title" className="t-head">
                  {contact.title}
                </h2>
                <p className="mt-4 max-w-[44ch] text-pretty" {...mock(contact.line.mockup)}>
                  {contact.line.text}
                </p>
                <p className="t-lead mt-8 max-w-[24ch] text-rotan" {...mock(contact.closing.mockup)}>
                  {contact.closing.text}
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-5 lg:items-stretch lg:pl-10">
                <a
                  className="btn btn-primary w-full"
                  href={shop.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...mock(shop.whatsapp.mockup)}
                >
                  <IconChat />
                  {contact.whatsapp}
                </a>
                <a className="btn btn-ghost w-full tnum" href={`tel:${shop.tel}`}>
                  <IconPhone />
                  {contact.call}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <footer className="pb-10">
        <Container>
          <div className="flex flex-col gap-2 border-t border-[rgb(246_244_239/0.18)] pt-6 t-small font-normal lg:flex-row lg:items-baseline lg:gap-8">
            <p className="font-semibold text-kapur">{footer.name}</p>
            <p className="footer-muted">{shop.address}</p>
            <p className="footer-muted lg:ml-auto">{footer.draft}</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
