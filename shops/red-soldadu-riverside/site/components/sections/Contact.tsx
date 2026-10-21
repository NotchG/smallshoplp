import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionLink from "@/components/ActionLink";
import { contact, labels, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hubungi kami: the close, with the three actions again.
export default function Contact() {
  return (
    <section className="ground-baja section contact" aria-labelledby="contact-title">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="contact-title" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-body mt-4" {...mock(contact.line.mockup)}>
              {contact.line.text}
            </p>
          </div>
          <div className="contact-actions mt-8 lg:col-span-7 lg:mt-0">
            <ActionLink href={shop.whatsapp.text} variant="primary" icon="chat" external mockup={shop.whatsapp.mockup}>
              {labels.whatsapp}
            </ActionLink>
            <ActionLink href={shop.tel} variant="secondary-dark" icon="phone">
              {labels.call} <span className="nums">{shop.phone}</span>
            </ActionLink>
            <ActionLink href={shop.mapsUrl} variant="secondary-dark" icon="pin" external>
              {labels.directions}
            </ActionLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
