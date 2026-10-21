import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { reviewPoints, sectionCopy } from "@/content";

// Kata mereka (cream): four points paraphrased from Google reviews.
// No quotes, no quote marks, no names, no stars, no rating number.
export default function ReviewsSection() {
  const { heading, label } = sectionCopy.reviews;
  return (
    <section id="ulasan" className="section ground-cream" aria-labelledby="ulasan-title">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <h2 id="ulasan-title" className="section-head text-rust" {...mock(heading.mockup)}>
              {heading.text}
            </h2>
            <p className="t-small">{label}</p>
          </div>
          <ul role="list" className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {reviewPoints.map((p) => (
              <li key={p.title} className="rule-t pt-5 pb-8">
                <h3 className="t-lead font-medium text-balance">{p.title}</h3>
                <p className="mt-3 max-w-[36ch] text-pretty">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
