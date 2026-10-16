import Container from "@/components/Container";
import { contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The close: a narrow, centred walnut band. WhatsApp and Instagram are placeholders
// (no number or handle in the listing) and point back here until the owner fills them in.
export default function Contact() {
  return (
    <footer id="hubungi" className="section bg-walnut text-wall on-dark" aria-labelledby="contact-title">
      <Container>
        <div className="contact-inner">
          <h2 id="contact-title" className="t-head">
            {contact.heading}
          </h2>
          <p className="t-lead mt-4" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
          <div className="contact-actions">
            <a className="btn btn-outline-light" href="#hubungi" {...mock(contact.whatsapp.mockup)}>
              {contact.whatsapp.text}
            </a>
            <a className="btn btn-outline-light" href="#hubungi" {...mock(contact.instagram.mockup)}>
              {contact.instagram.text}
            </a>
            <a className="btn btn-light" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              {contact.directions}
            </a>
          </div>
          <p className="contact-foot t-small">
            {shop.name} · {shop.address} · {contact.draftNote}
          </p>
        </div>
      </Container>
    </footer>
  );
}
