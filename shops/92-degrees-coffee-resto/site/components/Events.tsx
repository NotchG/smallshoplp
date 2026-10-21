import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { ChatIcon } from "@/components/Icons";
import { events, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Floor 3 and the VIP room, on walnut: turn organisers into a WhatsApp message or a call.
export default function Events() {
  return (
    <section id="acara" className="events section on-dark" aria-labelledby="acara-judul">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <p className="kicker text-mustard">{events.kicker}</p>
            <h2 id="acara-judul" className="h-wide t-head mt-3">
              {events.heading}
            </h2>
            <p className="t-lead mt-5 measure">{events.lead}</p>
            <div className="mt-8 flex flex-col items-start gap-2">
              <ActionButton
                href={shop.whatsapp.url}
                external
                icon={<ChatIcon />}
                mockup={events.cta.mockup}
                className="max-w-full whitespace-normal text-left"
              >
                {events.cta.text}
              </ActionButton>
              <p className="t-body">
                {events.callPrefix}{" "}
                <a href={shop.phoneHref} className="inline-flex min-h-11 items-center font-bold underline">
                  {shop.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-start-7 lg:col-span-6">
            {events.blocks.map((b) => (
              <div key={b.title} className="event-block">
                <h3 className="t-body font-bold">{b.title}</h3>
                <p className="t-lead font-bold text-mustard mt-1">{b.figure}</p>
                <p className="t-body mt-2">{b.text}</p>
                {b.extra && (
                  <p className="t-body font-semibold mt-3" {...mock(b.extra.mockup)}>
                    {b.extra.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
