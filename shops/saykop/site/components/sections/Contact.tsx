import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { ContactMural } from "@/components/MuralLine";
import { actions, contact, footer, shop } from "@/content";
import { mock } from "@/lib/mockup";

// "Hubungi kami": close with action, on the wall, with one sleeping-smile face. Then footer.
export function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-h" className="section bg-wall">
      <Container className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
        <Reveal className="lg:col-span-7">
          <h2 id="kontak-h" className="f-display t-head">
            {contact.heading}
          </h2>
          <p className="t-lead mt-4" {...mock(contact.closing.mockup)}>
            {contact.closing.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <ActionButton href={shop.waUrl} variant="solid" icon="chat" mockup={shop.waMockup}>
              {actions.whatsapp}
            </ActionButton>
            <ActionButton href={shop.telUrl} variant="line" icon="phone">
              {actions.call}
            </ActionButton>
            <ActionButton href={shop.directionsUrl} variant="line" icon="pin">
              {actions.directions}
            </ActionButton>
          </div>
          <p className="mt-6">
            <a href={shop.telUrl} className="inline-flex min-h-11 items-center font-bold tabular-nums underline">
              {shop.phone}
            </a>
            <span aria-hidden="true" className="mx-3">·</span>
            <span {...mock(shop.instagram.mockup)}>{shop.instagram.text}</span>
          </p>
        </Reveal>
        <div className="mt-12 flex justify-end lg:col-span-4 lg:col-start-9 lg:mt-0">
          <ContactMural className="w-44 md:w-56 lg:w-full lg:max-w-[300px]" />
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-navy bg-navy py-10 text-plaster">
      <Container className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
        <div>
          <p className="f-display t-lead">
            {shop.name} <span className="f-name">· {shop.subline}</span>
          </p>
          <p className="mt-1">{shop.address}</p>
        </div>
        <p className="t-small max-w-[44ch] text-plaster/75 md:text-right">{footer.note}</p>
      </Container>
    </footer>
  );
}
