import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconChat } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { events, whatsappHref, whatsappSub } from "@/content";

// 5. Ruang acara: rooms for workshops and yoga, with a butter tent card to ask about them.
export default function EventsSection() {
  return (
    <section id="acara" aria-labelledby="acara-judul" className="section bg-paper">
      <Container>
        <Reveal className="grid-12 events-grid">
          <div className="events-text">
            <h2 id="acara-judul" className="t-head">
              {events.title}
            </h2>
            <p className="t-lead mt-5 max-w-[30ch]">{events.body}</p>
            <p className="t-body mt-4 max-w-[46ch]" {...mock(events.gatherings.mockup)}>
              {events.gatherings.text}
            </p>
            <p className="t-body mt-6 max-w-[46ch] text-roster-deep font-semibold">{events.seasonal}</p>
          </div>
          <div className="events-card-col">
            <div className="tent tent-butter events-card">
              <p className="t-h3">
                {events.card.question.map((q, i) => (
                  <span key={i} {...mock(q.mockup)}>
                    {q.text}
                  </span>
                ))}
              </p>
              <Button
                href={whatsappHref}
                variant="ink"
                icon={<IconChat />}
                label={events.card.cta}
                sub={whatsappSub}
                className="mt-6"
              />
              <span className="tent-foot" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
