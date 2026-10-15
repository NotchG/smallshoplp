import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { ChatIcon, DirectionsIcon, PhoneIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { actions, contact, hoursSummary, meta, shop } from "@/content";

// Black like the ULUSALU cup. Closes with the call.
export function Contact() {
  return (
    <section id="hubungi" className="section on-dark bg-bilah text-bata" aria-labelledby="contact-title">
      <Container>
        <Reveal className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="contact-title" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-body mt-4 max-w-[36ch] text-bata/80" {...mock(contact.line.mockup)}>
              {contact.line.text}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-2">
            <a href={`tel:${shop.tel}`} className="contact-number t-lead tabular inline-flex min-h-11 items-center font-semibold">
              {shop.phone}
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={`tel:${shop.tel}`} variant="inverted" icon={<PhoneIcon />}>
                {actions.call}
              </ButtonLink>
              <ButtonLink
                href={shop.whatsapp}
                variant="ghost-dark"
                icon={<ChatIcon />}
                {...mock(contact.whatsappLabel.mockup)}
              >
                {contact.whatsappLabel.text}
              </ButtonLink>
              <ButtonLink href={shop.directionsUrl} variant="ghost-dark" icon={<DirectionsIcon />}>
                {actions.directions}
              </ButtonLink>
            </div>
            <p className="t-small mt-2 text-bata/70" {...mock(contact.whatsappLabel.mockup)}>
              {contact.whatsappLabel.text}: {contact.whatsappNote}.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-dark bg-bilah text-bata/75">
      <Container className="t-small">
        <div className="border-t border-bata/15 py-8">
          <p>
            <span className="font-semibold text-bata">{shop.name}</span> · {shop.addressLines.join(", ")}
          </p>
          <p className="tabular mt-1">
            {hoursSummary.map((h) => `${h.days} ${h.time}`).join(" · ")}
          </p>
          <p className="mt-3">{meta.banner}</p>
        </div>
      </Container>
    </footer>
  );
}
