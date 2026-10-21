import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ArrowIcon, ChatIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { actions, contact, shop } from "@/content";
import { mock, mockItem } from "@/lib/mockup";

// Rattan ground: three 64px rows; the whole row is the link. Value sits right after its label.
export default function Hubungi() {
  const rows = [
    { href: shop.whatsapp.url, icon: <ChatIcon />, label: actions.whatsapp, value: shop.phone, mockup: shop.whatsapp.mockup },
    { href: shop.tel, icon: <PhoneIcon />, label: actions.call, value: shop.phone },
    { href: shop.directionsUrl, icon: <PinIcon />, label: actions.directionsRow, value: shop.addressShort },
  ];
  return (
    <section id="hubungi" aria-labelledby="hubungi-h" className="section section-join-top ground-rattan bg-rattan text-walnut">
      <Container>
        <Reveal className="grid-12 join-rule gap-y-8">
          <div className="lg:col-span-5">
            <h2 id="hubungi-h" className="font-display t-head">
              {contact.heading}
            </h2>
            <p {...mockItem(contact.line, "t-lead mt-4 max-w-[30ch]")}>{contact.line.text}</p>
          </div>
          <ul className="contact-list lg:col-span-6 lg:col-start-7 lg:self-end">
            {rows.map((r) => (
              <li key={r.label}>
                <a className="contact-row" href={r.href}>
                  {r.icon}
                  <span className="flex flex-col py-2 sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="font-medium" {...mock(r.mockup)}>
                      {r.label}
                    </span>
                    <span className="nums text-walnut-soft">{r.value}</span>
                  </span>
                  <ArrowIcon className="row-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
