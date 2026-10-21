import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { praise } from "@/content";

// Paraphrased from Google reviews: never quoted, never attributed, no stars.
export default function Praise() {
  return (
    <section aria-labelledby="praise-h" className="section ground-botol">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <h2 id="praise-h" className="h-section">
              {praise.heading}
            </h2>
            <p className="t-body mt-3">{praise.note}</p>
          </div>
          <ul className="mt-10 -mb-8 grid gap-x-12 md:-mb-10 md:grid-cols-2 lg:col-span-8 lg:mt-0">
            {praise.items.map((p) => (
              <li
                key={p.text}
                className="t-lead flex gap-4 border-t border-kapur pt-5 pb-8 md:pb-10"
                {...mock(p.mockup)}
              >
                <span className="praise-dot" aria-hidden="true" />
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
