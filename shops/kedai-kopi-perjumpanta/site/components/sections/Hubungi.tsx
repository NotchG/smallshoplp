import { contact, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Canopy from "@/components/Canopy";
import ActionButton from "@/components/ActionButton";

export default function Hubungi() {
  const wa = shop.whatsapp.number;
  const tel = shop.phone.number;
  return (
    <section id="hubungi" className="ground-limau" aria-labelledby="hubungi-judul">
      <Canopy />
      <Container className="contact-inner">
        <Reveal className="grid-12 section-bottom">
          <div className="contact-text">
            <h2 id="hubungi-judul" className="t-head font-display font-extrabold">
              {contact.heading}
            </h2>
            <p className="contact-lead t-lead" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
          </div>
          <div className="contact-actions">
            <ActionButton href={shop.directionsHref} variant="ink" external>
              {hero.directionsLabel}
            </ActionButton>
            {wa && (
              <ActionButton href={`https://wa.me/${wa}`} variant="line" external>
                {hero.whatsappLabel}
              </ActionButton>
            )}
            {tel && (
              <ActionButton href={`tel:+${tel}`} variant="line">
                Telepon
              </ActionButton>
            )}
            {!wa && !tel && (
              <p className="placeholder-plate" {...mock(shop.whatsapp.mockup)}>
                <strong>{contact.placeholderLabel}</strong>
                <span>{shop.whatsapp.display}</span>
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
