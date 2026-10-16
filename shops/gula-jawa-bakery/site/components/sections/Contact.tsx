import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import NeonSign from "@/components/NeonSign";
import { actions, contact, footer, hoursRange, shop } from "@/content";
import { mock } from "@/lib/mockup";

// A real close, and the way around "habis": ask on WhatsApp first.
export function Contact() {
  return (
    <section aria-labelledby="hubungi-title" className="ground-dinding section">
      <Reveal>
        <Container className="grid gap-y-10 md:grid-cols-12 md:gap-x-8 lg:gap-x-6">
          <div className="md:col-span-6">
            <h2 id="hubungi-title" className="t-head heading">
              {contact.heading}
            </h2>
            <p className="t-lead heading mt-5 max-w-[28ch]" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
            <p className="t-lead tnum mt-7 font-bold">
              <a href={shop.callUrl} className="link inline-flex min-h-11 items-center">
                {shop.phoneDisplay}
              </a>
            </p>
            <p className="t-small text-neon/80" {...mock(contact.channels.mockup)}>
              {contact.channels.text}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-6 md:self-start lg:col-span-5 lg:col-start-8">
            <ActionButton
              href={shop.whatsapp.url}
              variant="neon"
              icon="whatsapp"
              mockup={shop.whatsapp.mockup}
              className="sm:col-span-2"
            >
              {actions.whatsappLong}
            </ActionButton>
            <ActionButton href={shop.callUrl} variant="outline-neon" icon="phone">
              {actions.call}
            </ActionButton>
            <ActionButton href={shop.directionsUrl} variant="outline-neon" icon="directions">
              {actions.directions}
            </ActionButton>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-dinding pb-10">
      <Container>
        <div className="flex flex-col gap-4 border-t border-tembaga pt-8 lg:flex-row lg:items-center lg:gap-x-8">
          <p aria-hidden="true" className="flex items-baseline gap-2">
            <NeonSign lines={["Gula Jawa"]} static className="t-lead" />
            <span className="word-bakery t-small">{shop.wordRest}</span>
          </p>
          <div className="t-small text-neon/80">
            <p>
              <span className="sr-only">{shop.name}. </span>
              {shop.address} · <span className="tnum">{shop.hours.label} {hoursRange}</span>
            </p>
            <p className="mt-1">
              {footer.sourceNote} {footer.draftNote}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
