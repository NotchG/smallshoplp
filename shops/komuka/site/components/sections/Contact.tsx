import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import StringLights from "@/components/StringLights";
import { contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

// "Hubungi kami": the page has turned into evening. Lights on, open until 22.00.
export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="field-dark bg-jendela text-kapur">
      <StringLights dark />
      <Container className="section contact-section">
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-6">
            <h2 id="kontak-title" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-lead measure mt-3" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
            <p className="t-lead mt-4 font-display font-bold text-lampu">{contact.closing}</p>
          </div>
          <div className="lg:col-span-6">
            <a
              href={`tel:${shop.phoneTel}`}
              data-check
              className="contact-number t-lead font-display font-bold"
            >
              {shop.phoneDisplay}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={`tel:${shop.phoneTel}`}>{contact.call}</Button>
              <Button href={shop.whatsapp.url} variant="secondary" {...mock(shop.whatsapp.mockup)}>
                {contact.whatsapp}
              </Button>
              <Button href={shop.mapsUrl} variant="secondary">
                {contact.directions}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
