import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { mock } from "@/lib/mockup";
import { events, shop, waLink, waMessages } from "@/content";

// 5. Red field the colour of the chairs. Kapur text only (5.1:1).
export default function Events() {
  return (
    <section className="field-red section bg-merah text-kapur" aria-labelledby="acara">
      <Container>
        <Reveal className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-7 lg:row-start-1">
            <h2 id="acara" className="t-head">
              {events.heading}
            </h2>
            <p className="t-lead measure mt-4">{events.lead}</p>
          </div>

          <div className="col-span-12 lg:row-start-2 lg:mt-4">
            <ul className="occasions t-lead">
              {events.occasions.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <p className="t-body measure mt-4" {...mock(events.packages.mockup)}>
              {events.packages.text}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:self-end">
            <p className="t-body font-semibold">{events.tip}</p>
            <ActionButton
              href={waLink(waMessages.events)}
              variant="chalk"
              icon="chat"
              mockup={shop.whatsapp.mockup}
              className="mt-5"
            >
              {events.button}
            </ActionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
