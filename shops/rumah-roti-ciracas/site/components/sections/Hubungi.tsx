import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import { actions, contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The close, on cocoa. The sticker again, static (no press).
// Phone order: heading + lead, sticker, buttons. Desktop: text left, sticker right.
export default function Hubungi() {
  return (
    <section className="section on-dark bg-cocoa text-paper" aria-labelledby="hubungi-title">
      <Container>
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8">
          <div className="lg:col-span-7 lg:row-start-1 lg:self-end">
            <h2 id="hubungi-title" className="t-head text-butter">
              {contact.heading}
            </h2>
            <p className="t-lead mt-4 max-w-[30ch]" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center">
            <Sticker variant="close" />
          </div>

          <div className="flex flex-wrap gap-3 lg:col-span-7 lg:row-start-2 lg:self-start">
            <Button href={shop.wa} icon="wa" external>
              {contact.waButton}
            </Button>
            <Button href={shop.tel} variant="outline">
              {actions.call}
            </Button>
            <Button href={shop.directionsUrl} variant="outline" external>
              {actions.directions}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
