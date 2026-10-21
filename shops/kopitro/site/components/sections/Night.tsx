import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { copy, nightFacts } from "@/content";
import { mock } from "@/lib/mockup";

// 4. Malam di Kopitro: the atmosphere. The road's centre line runs full-bleed at the foot (static).
export default function Night() {
  return (
    <section aria-labelledby="night-title" className="ground-malam hairline-top pt-[var(--section-y)]">
      <Container>
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-7">
            <h2 id="night-title" className="f-head t-head">
              {copy.night.heading}
            </h2>
            <p className="t-lead on-dark statement mt-6" {...mock(copy.night.statement.mockup)}>
              {copy.night.statement.text}
            </p>
          </div>
          <ul className="hairline-list t-body on-dark lg:col-span-5 lg:col-start-8 lg:pt-3">
            {nightFacts.map((f) => (
              <li key={f.text} className="py-3" {...mock(f.mockup)}>
                {f.text}
                {f.note && (
                  <>
                    <span aria-hidden="true">*</span>
                    <span className="t-small ml-2 text-baja">({f.note})</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
      <div className="road-dashes mt-16 md:mt-24" aria-hidden="true" />
    </section>
  );
}
