import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import { ChatIcon, PinIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { contact, shop, ui } from "@/content";

// Narrow centred column on cup green. The WhatsApp button is a visible placeholder, never a dead wa.me link.
export default function ContactSection() {
  return (
    <section id="hubungi" className="on-dark section bg-cup text-frost" aria-labelledby="contact-title">
      <Container>
        <div className="mx-auto max-w-[45rem] text-center">
          <h2 id="contact-title" className="t-head font-display text-label">
            {contact.heading}
          </h2>
          <p className="t-body mx-auto mt-4 max-w-[44ch]" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {shop.whatsapp.number ? (
              <ButtonLink href={`https://wa.me/${shop.whatsapp.number}`} variant="ghost-dark" icon={<ChatIcon />}>
                {ui.whatsapp}
              </ButtonLink>
            ) : (
              <span role="link" aria-disabled="true" className="btn btn-pending" {...mock(shop.whatsapp.mockup)}>
                <ChatIcon />
                {ui.whatsappPending}
              </span>
            )}
            <ButtonLink href={shop.mapsUrl} variant="bulb" icon={<PinIcon />}>
              {ui.directions}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
