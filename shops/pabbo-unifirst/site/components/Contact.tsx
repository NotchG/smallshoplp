import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import CeilingFrames from "@/components/CeilingFrames";
import PBadge from "@/components/PBadge";
import { contact, labels, links, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The page ends as it began: under two static ceiling frames.
export function Contact() {
  return (
    <section className="contact on-plafon" aria-labelledby="kontak-title">
      <CeilingFrames className="contact-frames" count={2} steps={1} />
      <Container className="contact-inner">
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div className="lg:col-span-6">
            <h2 id="kontak-title" className="t-head" data-check="">
              {contact.heading}
            </h2>
            <p className="t-lead mt-4">
              <a href={links.tel} className="phone-link">
                {links.phoneDisplay}
              </a>
            </p>
            <p className="t-body measure mt-3 text-garis/80" {...mock(contact.body.mockup)}>
              {contact.body.text}
            </p>
          </div>
          <div className="contact-actions lg:col-start-7 lg:col-span-6">
            <ActionButton href={links.tel} icon="phone">
              {labels.call}
            </ActionButton>
            <ActionButton
              href={links.whatsapp.url}
              variant="outline"
              icon="chat"
              external
              mockup={links.whatsapp.mockup}
            >
              {labels.whatsapp}
            </ActionButton>
            <ActionButton href={links.directions} variant="outline" icon="pin" external>
              {labels.directions}
            </ActionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-plafon">
      <Container className="footer-row t-small">
        <div className="flex items-center gap-3">
          <PBadge size={32} />
          <p>
            <span className="font-semibold">{shop.name}</span>
            <span className="text-garis/75"> · {shop.descriptor}</span>
          </p>
        </div>
        <p className="text-garis/75">
          {contact.footerSource} · {contact.footerDraft}
        </p>
      </Container>
    </footer>
  );
}
