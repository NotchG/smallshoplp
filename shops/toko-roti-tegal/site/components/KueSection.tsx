import Container from "./Container";
import Reveal from "./Reveal";
import KueTray from "./KueIllustration";
import { mock } from "@/lib/mockup";
import { kue, kueSection } from "@/content";

// The glass case on the long wooden counter: kue on brown trays, each with a printed tag card.
export default function KueSection() {
  return (
    <section id="kue" aria-labelledby="kue-h" className="bg-kotak">
      <Container className="pt-section-tight">
        <Reveal className="grid gap-x-8 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="kue-h" className="t-head">
              {kueSection.heading}
            </h2>
            <p className="t-lead serif font-medium mt-6">{kueSection.lead.text}</p>
            <p className="mt-5">
              <span className="tag-card inline-block px-3 py-1.5 t-body tabular" {...mock(kueSection.note.mockup)}>
                {kueSection.note.text}
              </span>
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul
              aria-label={kueSection.caseLabel}
              className="glass-case grid grid-cols-2 gap-x-4 gap-y-7 px-3 pb-4 pt-4 sm:px-5 md:grid-cols-3 md:gap-x-6 md:gap-y-9 md:px-6 md:pt-6"
            >
              {kue.map((k) => (
                <li key={k.variant} className="case-cell" {...mock(k.mockup)}>
                  <KueTray variant={k.variant} label={k.label} />
                  <p className="tag-card mt-2.5 inline-block px-2.5 py-1 t-body tabular" data-check>
                    {k.name}
                    {k.price && (
                      <>
                        <span aria-hidden="true"> · </span>
                        <span {...mock(k.priceMockup)}>{k.price}</span>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
      <div className="counter-band" aria-hidden="true" />
    </section>
  );
}
