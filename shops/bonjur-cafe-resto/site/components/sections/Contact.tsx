import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { mock } from "@/lib/mockup";
import { actions, contact, shop } from "@/content";

// One-tap contact. The ink ground continues from "Kunjungi kami".
export default function Contact() {
  return (
      <section className="ground-ink" aria-labelledby="contact-title">
        <Container>
          <div className="border-t border-blue-soft/25 pt-14 pb-16 lg:pt-20 lg:pb-24">
            <Reveal>
              <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
                <div className="lg:col-span-6">
                  <h2 id="contact-title" className="t-head">
                    {contact.title}
                  </h2>
                  <p className="t-lead balance mt-3" {...mock(contact.lead.mockup)}>
                    {contact.lead.text}
                  </p>
                </div>
                <div className="mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
                  <p className="t-small text-blue-soft">{contact.phoneLabel}</p>
                  <p className="t-lead mt-1 font-bold tabular-nums">
                    <a href={`tel:${shop.tel}`} className="inline-flex min-h-11 items-center hover:underline">
                      {shop.phone}
                    </a>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button href={`tel:${shop.tel}`} icon="call">
                      {actions.call}
                    </Button>
                    <Button href={shop.whatsapp.url} variant="secondary" icon="chat" external mockup={shop.whatsapp.mockup}>
                      {actions.whatsapp}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
  );
}
