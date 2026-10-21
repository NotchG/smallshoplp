import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { contact, shop, ui } from "@/content";
import { mock } from "@/lib/mockup";

// The close, on the awning green with its scalloped edge. Doubles as the page footer.
export default function Hubungi() {
  return (
    <footer id="hubungi" className="contact section on-kanopi" aria-labelledby="contact-title">
      <Container>
        <Reveal className="contact-grid">
          <div className="contact-main">
            <h2 id="contact-title" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-body" {...mock(contact.line.mockup)}>
              {contact.line.text}
            </p>
            <a href={shop.phone.href} className="contact-phone t-lead nums">
              {shop.phone.display}
            </a>
            <div className="btn-row">
              <Button href={shop.whatsapp.href} icon="chat" external {...mock(shop.whatsapp.mockup)}>
                {ui.whatsapp}
              </Button>
              <Button href={shop.phone.href} variant="secondary" icon="phone">
                {ui.call}
              </Button>
              <Button href={shop.directionsUrl} variant="secondary" icon="pin" external>
                {ui.directions}
              </Button>
            </div>
          </div>
          <div className="contact-foot">
            <p className="contact-mark">
              {shop.name}
            </p>
            <address className="t-body">{shop.address}</address>
            <p className="t-body nums">{contact.footerHours}</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
