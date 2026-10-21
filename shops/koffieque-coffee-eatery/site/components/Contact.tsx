import Container from "@/components/Container";
import Button from "@/components/Button";
import { contact, labels, shop } from "@/content";

// Closing band on steel. WhatsApp is the placeholder until the owner sends a number.
export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className="section contact on-dark bg-baja text-dinding">
      <Container className="contact-grid">
        <div className="contact-copy">
          <h2 id="contact-title" className="h-section">
            {contact.heading}
          </h2>
          <p className="t-lead measure mt-4 text-abu-terang">{contact.line}</p>
        </div>
        <div className="contact-actions">
          <Button tone="dark" placeholder mockup={shop.whatsapp.mockup}>
            {labels.whatsapp}
          </Button>
          <Button tone="dark" variant="outline" href={shop.directionsUrl}>
            {labels.directions}
          </Button>
        </div>
      </Container>
    </section>
  );
}
