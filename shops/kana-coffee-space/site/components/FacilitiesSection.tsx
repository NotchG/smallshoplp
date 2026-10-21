import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { WhatsAppButton } from "@/components/Buttons";
import { mock } from "@/lib/mockup";
import { facilities, forEvents, sectionCopy } from "@/content";

// Fasilitas (steel): the considerate details, named plainly. "Untuk acara" closes the list
// as its sixth entry, with its button directly under its line.
export default function FacilitiesSection() {
  const { heading, lead } = sectionCopy.facilities;
  return (
    <section id="fasilitas" className="section ground-steel" aria-labelledby="fasilitas-title">
      <Container>
        <Reveal className="grid-12 gap-y-10">
          <div className="lg:sticky lg:top-12 lg:col-span-4 lg:self-start">
            <h2 id="fasilitas-title" className="section-head text-ochre" {...mock(heading.mockup)}>
              {heading.text}
            </h2>
            <p className="t-lead mt-5 max-w-[22ch] text-pretty" {...mock(lead.mockup)}>
              {lead.text}
            </p>
          </div>

          <dl className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {facilities.map((f) => (
              <div key={f.name} className="rule-t pt-5 pb-7">
                <dt className="t-lead font-medium text-ochre">{f.name}</dt>
                <dd className="mt-2 max-w-[34ch] text-pretty">{f.text}</dd>
              </div>
            ))}
            <div className="events pt-5 pb-7">
              <dt className="label text-ochre">{forEvents.label}</dt>
              <dd className="mt-2">
                <p className="max-w-[34ch] text-pretty" {...mock(forEvents.text.mockup)}>
                  {forEvents.text.text}
                </p>
                <WhatsAppButton
                  variant="primary"
                  label={forEvents.button}
                  message="Halo Kana, saya ingin tanya meja untuk rombongan."
                  className="mt-4"
                />
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
