import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import GardenStrip from "@/components/art/GardenStrip";
import { contact, footer, shop } from "@/content";

// "Hubungi kami" + footer: the page ends after dark, in the lit garden.
export default function Contact() {
  return (
    <footer className="on-ink bg-ink text-wall">
      <section aria-labelledby="kontak-title" className="contact">
        <Container>
          <Reveal className="grid-12 row-gap-contact">
            <h2 id="kontak-title" className="t-head col-span-12 lg:col-span-5">
              {contact.heading}
            </h2>
            <div className="col-span-12 lg:col-span-7">
              <p className="t-lead nums">{shop.phone}</p>
              <div className="contact-actions mt-6">
                <ButtonLink
                  href={shop.whatsapp.href}
                  ground="dark"
                  mockup={contact.whatsapp.mockup}
                >
                  {contact.whatsapp.label}
                </ButtonLink>
                <ButtonLink href={shop.tel} variant="outline" ground="dark">
                  {contact.call}
                </ButtonLink>
                <ButtonLink href={shop.directionsUrl} variant="outline" ground="dark">
                  {contact.directions}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <GardenStrip label={contact.gardenLabel} />

      <Container>
        <p className="t-small footer-line">
          {footer.line.map((part, i) => (
            <span key={part} className="footer-part">
              {i > 0 && <span aria-hidden="true" className="footer-dot">·</span>}
              {part}
            </span>
          ))}
        </p>
      </Container>
    </footer>
  );
}
