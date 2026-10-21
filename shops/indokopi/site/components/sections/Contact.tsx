import Container from "@/components/Container";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { contact, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

export default function Contact() {
  return (
    <section className="ground-aspal section" aria-labelledby="hubungi-judul">
      <Reveal>
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-8 lg:items-end">
          <div className="lg:col-span-7">
            <Plate as="h2" id="hubungi-judul" head className="t-head sign-caps">
              {contact.heading}
            </Plate>
            <p className="t-lead nums mt-7">
              <a href={`tel:${shop.phoneIntl}`} className="inline-flex items-center min-h-11 no-underline hover:underline">
                {shop.phone}
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={shop.whatsapp.url} external icon="chat" mockup={shop.whatsapp.mockup}>
                {hero.ctaWhatsapp}
              </ButtonLink>
              <ButtonLink href={`tel:${shop.phoneIntl}`} icon="phone" variant="ghost-light">
                {contact.phoneLabel}
              </ButtonLink>
              <ButtonLink href={shop.mapsUrl} external icon="route" variant="ghost-light">
                {hero.ctaDirections}
              </ButtonLink>
            </div>
            <p className="mt-5 text-batu" {...mock(contact.instagram.mockup)}>
              {contact.instagram.text}
            </p>
          </div>

          {/* End-of-zone sign: the page's goodbye. One accessible name, visuals hidden. */}
          <div className="lg:col-span-5 lg:justify-self-end w-full max-w-[26rem]">
            <div role="img" aria-label={`${contact.endLabel} ${contact.endSign}`}>
              <Plate variant="struck" className="px-7 py-7 md:px-9 md:py-8 text-center">
                <span className="block t-lead sign-caps" aria-hidden="true">
                  {contact.endSign}
                </span>
              </Plate>
              <Plate variant="white" className="mt-2.5 px-6 py-2.5 text-center">
                <span className="block t-lead sign-caps tracking-wider" aria-hidden="true">
                  {contact.endLabel}
                </span>
              </Plate>
            </div>
            <p className="t-lead font-semibold mt-5 text-center lg:text-left" {...mock(contact.closing.mockup)}>
              {contact.closing.text}
            </p>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
