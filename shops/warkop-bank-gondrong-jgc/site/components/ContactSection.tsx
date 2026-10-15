import Container from "@/components/Container";
import Rail from "@/components/Rail";
import Reveal from "@/components/Reveal";
import { IconChat, IconPhone, IconPin } from "@/components/Icons";
import { actions, contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The close: cart red again with the rail on top, a bookend to the hero.
export default function ContactSection() {
  return (
    <section id={contact.id} className="ground-merah" aria-labelledby="contact-heading">
      <Rail />
      <div className="section">
        <Container>
          <Reveal className="grid-page gap-y-10 md:items-center">
            <div className="col-span-12 md:col-span-6">
              <h2 id="contact-heading" className="t-head" {...mock(contact.heading.mockup)}>
                {contact.heading.text}
              </h2>
              <p className="t-lead mt-5 max-w-md" {...mock(contact.body.mockup)}>
                {contact.body.text}
              </p>
            </div>
            <div className="contact-actions col-span-12 md:col-span-5 md:col-start-8">
              <a className="btn btn-primary tnum" href={shop.phoneHref}>
                <IconPhone />
                {actions.callWithNumber}
              </a>
              <a className="btn btn-line-light" href={shop.directionsHref} target="_blank" rel="noopener noreferrer">
                <IconPin />
                {actions.directions}
              </a>
              <a
                className="btn btn-line-light"
                href={shop.whatsappHref.href}
                target="_blank"
                rel="noopener noreferrer"
                {...mock(shop.whatsappHref.mockup)}
              >
                <IconChat />
                {actions.whatsapp}
              </a>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
