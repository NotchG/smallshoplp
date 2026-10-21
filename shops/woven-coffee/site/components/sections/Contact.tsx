import { contact, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BoxButton from "@/components/BoxButton";

// The close: three full-width label buttons, each carrying its number or address.
export default function Contact() {
  return (
    <section className="g-pinus section" aria-labelledby="hubungi">
      <Container>
        <Reveal className="grid-page gap-y-8 lg:items-center">
          <div className="md:col-span-2 lg:col-span-6">
            <h2 id="hubungi" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-lead mt-5 measure" {...mock(contact.line.mockup)}>
              {contact.line.text}
            </p>
          </div>
          <div className="md:col-span-2 lg:col-start-7 lg:col-span-6 flex flex-col gap-3">
            <BoxButton
              href={shop.whatsapp.href}
              variant="solid-kaca"
              wide
              external
              mockup={shop.whatsapp.mockup}
              meta={shop.phone}
            >
              {hero.whatsapp}
            </BoxButton>
            <BoxButton href={`tel:${shop.tel}`} variant="outline-dark" wide meta={shop.phone}>
              {contact.call}
            </BoxButton>
            <BoxButton href={shop.directionsUrl} variant="outline-dark" wide external meta={shop.addressShort}>
              {hero.directions}
            </BoxButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
