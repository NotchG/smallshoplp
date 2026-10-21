import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { DirectionsButton, WhatsAppButton } from "@/components/Buttons";
import { mock } from "@/lib/mockup";
import { sectionCopy, whatsapp } from "@/content";

// Hubungi kami (rust): the one deliberately narrow, centred block. Every WhatsApp button
// points here while the number is still missing.
export default function ClosingSection() {
  const { heading, line } = sectionCopy.closing;
  return (
    <section id="hubungi" className="section ground-rust" aria-labelledby="hubungi-title">
      <Container>
        <Reveal className="mx-auto max-w-[40rem] text-center">
          <h2 id="hubungi-title" className="section-head text-cream" {...mock(heading.mockup)}>
            {heading.text}
          </h2>
          <p className="t-lead mx-auto mt-5 max-w-[26ch] text-balance" {...mock(line.mockup)}>
            {line.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton variant="primary" />
            <DirectionsButton variant="secondary" />
          </div>
          {!whatsapp.number && (
            <p className="t-small mt-4" {...mock(whatsapp.mockup)}>
              {whatsapp.note}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
