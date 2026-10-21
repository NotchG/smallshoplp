import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { reviews } from "@/content";

// Paraphrased from Google reviews: no quote marks, no names, no stars.
export default function ReviewNotes() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-h" className="section ground-light bg-glass">
      <Reveal>
        <Container className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="ulasan-h" className="t-head font-display">
              {reviews.heading}
            </h2>
            <p className="t-lead mt-4 font-medium" data-check>
              {reviews.ratingLine}
            </p>
            <p className="t-small mt-2 text-muted">{reviews.note}</p>
          </div>
          <ul className="col-span-12 grid gap-x-grid gap-y-8 md:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {reviews.items.map((r) => (
              <li key={r.text} className="tent">
                <p className="t-lead font-display">{r.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>
    </section>
  );
}
