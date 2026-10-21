import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { FooterMark } from "@/components/Wordmark";
import { footer, links, shop, visit as v } from "@/content";
import { mock } from "@/lib/mockup";

export default function Visit() {
  const [directions, whatsapp, call] = v.actions;
  return (
    <>
      <section id={v.id} aria-labelledby="kunjungi-h" className="section on-navy">
        <Reveal>
          <Container className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
            <div className="lg:col-span-5">
              <h2 id="kunjungi-h" className="h-sign t-head">
                {v.heading}
              </h2>
              <address className="t-body mt-5 not-italic">
                {shop.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <h3 className="h-sign t-lead mt-8">{v.hoursHeading}</h3>
              <p className="t-body prices mt-2">
                <span className="block">{v.hoursLine}</span>
                <span className="block text-lightbox/75">{v.hoursNote}</span>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ActionButton action={directions} variant="navyPrimary" />
                <ActionButton action={whatsapp} variant="navySecondary" />
                <ActionButton action={call} variant="navySecondary" />
              </div>
              <p className="t-small mt-4 text-lightbox/75" {...mock(v.booking.mockup)}>
                {v.booking.text}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 lg:self-center">
              <div className="map-wrap">
                <p className="map-fallback t-body">
                  <a href={links.mapsListing} target="_blank" rel="noopener noreferrer" className="btn btn-navy-secondary">
                    {v.mapFallback}
                    <span className="sr-only"> (tab baru)</span>
                  </a>
                </p>
                <iframe
                  src={links.mapEmbed}
                  title={v.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-frame"
                />
              </div>
            </div>
          </Container>
        </Reveal>
      </section>

      <footer className="on-navy">
        <Container className="pb-10">
          <div className="footer-rule flex flex-col gap-3 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <FooterMark />
              <p className="t-small mt-2">{footer.line}</p>
            </div>
            <p className="t-small text-lightbox/75">{footer.source}</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
