import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import LongTable from "@/components/LongTable";
import { mock } from "@/lib/mockup";
import { group, waLink, whatsapp } from "@/content";

// The second room (slate): group gatherings at the long tables, booked by WhatsApp.
// Desktop: invitation cols 1–6, package + button cols 8–12, then the long table full width.
export default function Group() {
  return (
    <section className="on-dark section bg-slate" aria-labelledby="group-title">
      <Container>
        <div className="grid-12 lg:items-end">
          <div className="lg:col-span-6 lg:col-start-1">
            <h2 id="group-title" className="t-head text-linen" {...mock(group.heading.mockup)}>
              {group.heading.text}
            </h2>
            <p className="t-lead mt-4 text-linen" {...mock(group.lead.mockup)}>
              {group.lead.text}
            </p>
            <p className="t-body measure mt-4 text-plaster" {...mock(group.body.mockup)}>
              {group.body.text}
            </p>
          </div>
          <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="t-lead text-linen" {...mock(group.package.mockup)}>
              {group.package.text}
            </p>
            <p className="t-body mt-2 text-plaster" {...mock(group.orderAhead.mockup)}>
              {group.orderAhead.text}
            </p>
            <ButtonLink
              href={waLink(whatsapp.group.text)}
              variant="onDark"
              external
              srText={group.buttonSr}
              className="mt-6 w-full sm:w-auto"
              {...mock(whatsapp.mockup)}
            >
              {group.button}
            </ButtonLink>
          </div>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <LongTable alt={group.tableAlt} trayLabel={group.labels.tray} jugLabel={group.labels.jug} />
        </Reveal>
      </Container>
    </section>
  );
}
