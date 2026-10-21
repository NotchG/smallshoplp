import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignDisc from "@/components/SignDisc";
import ActionButton from "@/components/ActionButton";
import { mock } from "@/lib/mockup";
import { actions, contact, footer, shop, visit } from "@/content";

// Dusk: the page goes dark like the street when the lamp is on.
export function VisitSection() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-h" className="ground-arang pt-(--section-y) pb-14 lg:pb-20">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <h2 id="lokasi-h" className="h-section">
              {visit.heading}
            </h2>
            <address className="t-body mt-6 not-italic">
              {shop.address.map((l) => (
                <span key={l.text} className="block" {...mock(l.mockup)}>
                  {l.text}
                </span>
              ))}
            </address>

            <p className="t-body mt-8 font-semibold text-lampu">{shop.openEveryDay}</p>
            <dl className="t-body nums mt-2">
              {shop.hours.map((h) => (
                <div key={h.days} className="hours-row">
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="t-body mt-6 text-kapur" {...mock(shop.payment.mockup)}>
              {shop.payment.text}
            </p>
          </div>

          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <div className="map-frame">
              <iframe
                src={shop.mapEmbed}
                title={visit.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={shop.mapsUrl}
              target="_blank"
              rel="noopener"
              className="text-link t-small mt-1 text-kapur"
            >
              {visit.mapLink}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ContactSection() {
  return (
    <section aria-labelledby="hubungi-h" className="ground-arang">
      <Container>
        <div className="border-t border-kapur/50 pt-14 pb-(--section-y) lg:grid lg:pt-20 lg:grid-cols-12 lg:items-start lg:gap-x-12">
          <div className="lg:col-span-5">
            <h2 id="hubungi-h" className="h-section">
              {contact.heading}
            </h2>
            <div className="mt-6 flex items-center gap-8 pl-[22px]">
              <SignDisc size={48} />
              <p className="t-lead font-medium" {...mock(contact.closing.mockup)}>
                {contact.closing.text}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-start lg:col-span-7 lg:mt-2">
            <ActionButton href={shop.directionsUrl} variant="primary-dark" external>
              {actions.directions}
            </ActionButton>
            <ActionButton href={shop.whatsapp.url} variant="outline-dark" {...mock(shop.whatsapp.mockup)}>
              {actions.whatsapp}
            </ActionButton>
            <div className="flex flex-col">
              <ActionButton href={`tel:${shop.tel}`} variant="outline-dark">
                {actions.call}
              </ActionButton>
              <p className="t-small nums mt-3 text-kapur">{shop.phone}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-arang">
      <Container>
        <div className="t-small flex flex-col gap-1 border-t border-kapur/50 py-8 text-kapur md:flex-row md:justify-between">
          <p>{footer.draft}</p>
          <p>{footer.line}</p>
        </div>
      </Container>
    </footer>
  );
}
