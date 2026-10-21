import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import AwningEdge from "@/components/AwningEdge";
import { mock } from "@/lib/mockup";
import { buttons, contact, shop } from "@/content";

export function ContactSection() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="section ground-dark relative z-10 bg-awning text-piring">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6">
          <div className="lg:col-span-6">
            <h2 id="kontak-title" className="t-head text-sign">
              {contact.title}
            </h2>
            <p className="t-lead mt-5 max-w-[24ch] font-medium" {...mock(contact.line.mockup)}>
              {contact.line.text}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex-col lg:flex-nowrap">
            <Button href={shop.wa.href} variant="primary-dark" icon="chat" external {...mock(shop.wa.mockup)}>
              {buttons.whatsapp}
            </Button>
            <Button href={shop.telHref} variant="secondary-dark" icon="phone">
              {`${buttons.call} ${shop.phone}`}
            </Button>
            <Button href={shop.mapsUrl} variant="secondary-dark" icon="pin" external>
              {buttons.directions}
            </Button>
          </div>
        </Reveal>
      </Container>
      <AwningEdge id="edge-footer" className="absolute left-0 top-full" />
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="ground-dark bg-kayu pb-8 pt-10 text-piring">
      <Container>
        <p className="t-small">{contact.footer}</p>
      </Container>
    </footer>
  );
}
