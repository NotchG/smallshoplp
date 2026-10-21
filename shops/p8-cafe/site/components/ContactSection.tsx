import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconChat, IconPhone, IconPin } from "@/components/Icons";
import { actions, contact, phoneHref, phoneSub, shop, whatsappHref, whatsappSub } from "@/content";

// 9. Hubungi kami: the ink band that closes the page, then the footer.
export default function ContactSection() {
  return (
    <section id="hubungi" aria-labelledby="hubungi-judul" className="on-ink bg-ink text-paper">
      <div className="section">
        <Container>
          <Reveal className="grid-12 contact-grid">
            <div className="contact-text">
              <h2 id="hubungi-judul" className="t-head">
                {contact.title}
              </h2>
              <p className="t-lead mt-4 max-w-[24ch]">{contact.lead}</p>
            </div>
            <div className="contact-actions">
              <Button href={whatsappHref} variant="paper" icon={<IconChat />} label={{ text: actions.whatsapp }} sub={whatsappSub} />
              <Button href={phoneHref} variant="outline-light" icon={<IconPhone />} label={{ text: actions.call }} sub={phoneSub} />
              <Button
                href={shop.mapsUrl}
                external
                variant="outline-light"
                icon={<IconPin />}
                label={{ text: actions.directions }}
              />
            </div>
          </Reveal>
        </Container>
      </div>
      <footer className="contact-footer">
        <Container>
          <p className="t-small">{contact.footer}</p>
        </Container>
      </footer>
    </section>
  );
}
