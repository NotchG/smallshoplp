import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { collector, labels, shop } from "@/content";
import { mock } from "@/lib/mockup";
import { keepWhole } from "@/lib/keepWhole";

// 4. Kalau Anda ditagih debt collector: the one full-bleed field, in the firm's shutter green.
// Calm, numbered first steps; no alarm colours.
export default function CollectorSteps() {
  return (
    <section aria-labelledby="ditagih" className="section on-green bg-rolling text-papan">
      <Container>
        <Reveal className="g12 g12-split-rows">
          <div className="lg:col-start-1 lg:col-end-7 lg:row-start-1">
            <h2 id="ditagih" className="t-head">
              {collector.heading}
            </h2>
            <p className="mt-4 t-body soft" {...mock(collector.intro.mockup)}>
              {collector.intro.text}
            </p>
          </div>

          <ol
            role="list"
            className="steps mt-8 grid gap-y-6 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:mt-2"
          >
            {collector.steps.map((step) => (
              <li key={step.lead} className="t-body" {...mock(step.mockup)}>
                <span>
                  <strong className="font-bold">{step.lead}</strong>
                  {keepWhole(step.rest)}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:self-start lg:mt-10">
            <ActionButton href={shop.tel} ground="green">
              {labels.call}
            </ActionButton>
            <p className="mt-5 t-small soft measure" {...mock(collector.note.mockup)}>
              {collector.note.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
