import { contact, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "../Container";
import PlateButton from "../PlateButton";
import Reveal from "../Reveal";
import { LeavesLeft, LeavesRight, Sprig } from "../LineLeaves";

export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-h" className="wall-terakota relative overflow-hidden pt-(--section-y) xl:pb-(--section-y)">
      <LeavesLeft className="leaves leaves-left hidden xl:block" />
      <LeavesRight className="leaves leaves-right hidden xl:block" />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-160 text-center">
            <h2 id="kontak-h" className="font-display t-head">{contact.heading}</h2>
            <p className="mt-5 measure mx-auto" {...mock(contact.lead.mockup)}>{contact.lead.text}</p>
            <p className="mt-6 font-display t-lead tabular">
              <a href={shop.tel} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">{shop.phone}</a>
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <PlateButton href={shop.whatsapp.url} variant="green" bordered external mockup={shop.whatsapp.mockup}>
                Chat {hero.ctaWhatsapp}
              </PlateButton>
              <PlateButton href={shop.tel} variant="white">{contact.call}</PlateButton>
              <PlateButton href={shop.directionsUrl} variant="white" icon="upRight" external>{hero.ctaDirections}</PlateButton>
            </div>
          </div>
        </Reveal>
      </Container>
      <div className="flex justify-center mt-10 xl:hidden" aria-hidden="true">
        <Sprig className="text-tembok block" />
      </div>
    </section>
  );
}
