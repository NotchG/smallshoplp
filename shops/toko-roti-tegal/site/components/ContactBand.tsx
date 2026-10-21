import Container from "./Container";
import Reveal from "./Reveal";
import ButtonLink from "./ButtonLink";
import ScrollOrnament from "./ScrollOrnament";
import { mock } from "@/lib/mockup";
import { contact, labels, shop } from "@/content";

// Close with the call, on the same bun gold as the hero.
export default function ContactBand() {
  return (
    <section id="hubungi" aria-labelledby="hubungi-h" className="bg-kulit pb-section pt-10 md:pt-14">
      <Container>
        <ScrollOrnament variant="crest" className="mx-auto w-full max-w-[480px]" />
        <Reveal className="mt-10 grid gap-x-12 gap-y-8 md:mt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 id="hubungi-h" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-lead serif font-medium measure mt-6" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-small font-semibold">{contact.phoneLabel}</p>
            <p className="t-lead serif font-bold mt-0.5">
              <a className="link inline-flex min-h-11 items-center" href={shop.phoneHref}>
                {shop.phone}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={shop.phoneHref} icon="phone">
                {labels.call}
              </ButtonLink>
              <ButtonLink href={shop.mapsUrl} icon="map" variant="secondary" external>
                {labels.directions}
              </ButtonLink>
            </div>
            <p className="t-small mt-4" {...mock(contact.whatsappNote.mockup)}>
              {contact.whatsappNote.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
