import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton, { Arrow } from "@/components/ActionButton";
import { contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hubungi kami (bata): back out the door. Three arang plates, label and detail on one line.
export default function Contact() {
  const plates = [
    { label: contact.whatsappLabel, detail: shop.phoneDisplay, href: shop.whatsapp.url, mockup: shop.whatsapp.mockup },
    { label: contact.phoneLabel, detail: shop.phoneDisplay, href: shop.tel },
    { label: contact.directionsLabel, detail: contact.directionsDetail, href: shop.mapsUrl },
  ];

  return (
    <section aria-labelledby="contact-title" className="ground-bata section">
      <Container>
        <Reveal className="grid-12 gap-y-8 max-lg:flex max-lg:flex-col max-lg:gap-8 lg:items-center">
          <div className="lg:col-span-6">
            <h2 id="contact-title" className="t-head t-cond">
              {contact.heading}
            </h2>
            <p className="t-lead mt-5 max-w-[28ch]" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
          </div>

          <ul className="lg:col-start-7 lg:col-span-6 space-y-3">
            {plates.map((p) => (
              <li key={p.label}>
                <ActionButton href={p.href} variant="plate" mockup={p.mockup}>
                  <span className="t-lead font-semibold">{p.label}</span>
                  <span className="flex items-center gap-3 tnum">
                    {p.detail}
                    <Arrow />
                  </span>
                </ActionButton>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
