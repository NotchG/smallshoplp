import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { mock } from "@/lib/mockup";
import { contact, footer, shop } from "@/content";

// Closing band on walnut-deep. The number, its WhatsApp note and its buttons are one group.
export default function Contact() {
  return (
    <section id="kontak" className="section bg-walnut-deep on-walnut" aria-labelledby="kontak-title">
        <Container>
          <Reveal>
            <div className="grid-12 gap-y-6">
              <h2 id="kontak-title" className="t-head lg:col-span-4">
                {contact.heading}
              </h2>
              <div className="lg:col-start-5 lg:col-span-8">
                <a href={shop.tel} className="t-lead inline-block py-2.5 -my-2.5 font-semibold tracking-[0.02em] tabular-nums hover:underline" data-check>
                  {shop.phoneDisplay}
                </a>
                <p className="t-small muted-walnut mt-2" {...mock(contact.waNote.mockup)}>
                  {contact.waNote.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ActionButton href={shop.tel} variant="light">
                    {contact.buttons.call}
                  </ActionButton>
                  <ActionButton href={shop.whatsapp.href} variant="outline" external mockup={contact.buttons.whatsapp.mockup}>
                    {contact.buttons.whatsapp.text}
                  </ActionButton>
                  <ActionButton href={shop.directionsUrl} variant="outline" external>
                    {contact.buttons.directions}
                  </ActionButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-walnut-deep on-walnut">
      <Container>
        <div className="rule-light t-small muted-walnut flex flex-col gap-1 py-8 md:flex-row md:flex-wrap md:gap-x-6">
          <span className="text-light">{shop.name}</span>
          <span>{shop.addressShort}</span>
          <span>{footer.photoCredit}</span>
          <span>{footer.draft}</span>
        </div>
      </Container>
    </footer>
  );
}
