import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import OrderSlip from "@/components/OrderSlip";
import { mock } from "@/lib/mockup";
import { barista } from "@/content";

export default function BaristaSection() {
  return (
    <section id="barista" aria-labelledby="barista-title" className="section ground-dark bg-bata text-piring">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6">
          <div className="lg:col-span-6">
            <h2 id="barista-title" className="t-head">
              {barista.title}
            </h2>
            <p className="t-lead mt-5 max-w-[30ch] text-balance font-bold" {...mock(barista.lead.mockup)}>
              {barista.lead.text}
            </p>
            <p className="t-body mt-4 max-w-[52ch]" {...mock(barista.body.mockup)}>
              {barista.body.text}
            </p>
          </div>
          <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <OrderSlip label={barista.slipLabel} items={barista.slip} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
