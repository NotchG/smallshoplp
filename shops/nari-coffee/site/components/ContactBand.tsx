import Container from "@/components/Container";
import Button from "@/components/Button";
import { actions, contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Close on action, back on the fascia blue. No reveal here: it's the last thing on the page.
export function ContactBand() {
  return (
    <section
      aria-labelledby="contact-title"
      className="band-cobalt pt-[var(--section-y)] pb-12 md:pb-16"
    >
      <Container className="grid-12 gap-y-8 lg:items-end">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="t-head">
            {contact.heading}
          </h2>
          <p className="t-lead mt-4 max-w-[30ch] font-medium" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-5 lg:col-start-8">
          <Button
            href={shop.whatsapp.href}
            variant="paper"
            icon="chat"
            external
            mockup={actions.whatsapp.mockup}
            className="w-full"
          >
            {actions.whatsapp.text}
          </Button>
          <Button href={shop.tel} variant="outline" icon="phone" className="w-full">
            <span className="nums">{actions.callFull}</span>
          </Button>
          <Button href={shop.directions} variant="outline" icon="pin" external className="w-full">
            {actions.directions}
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="band-cobalt">
      <Container>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-sky/30 py-8">
          <span className="badge-disc h-10 w-10 flex-none">
            <img src="/img/badge.jpg" alt={contact.logoAlt} width={184} height={184} loading="lazy" />
          </span>
          <p className="t-serif t-lead">{shop.name}</p>
          <p className="t-small text-sky">
            {contact.footerArea}
            <span aria-hidden="true"> · </span>
            {contact.footerDraft}
          </p>
        </div>
      </Container>
    </footer>
  );
}
