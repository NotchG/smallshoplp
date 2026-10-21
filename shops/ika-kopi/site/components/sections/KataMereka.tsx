import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { reviews } from "@/content";

// Paraphrased review themes: no quote marks, no names, no stars.
export default function KataMereka() {
  return (
    <section aria-labelledby="kata-h" className="section">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-4">
            <h2 id="kata-h" className="t-head font-display text-accent">{reviews.heading}</h2>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="t-lead font-display text-accent">{reviews.rating}</span>
              <span>{reviews.ratingLabel}</span>
            </p>
            <p className="t-small mt-2 text-muted">{reviews.note}</p>
          </div>
          <ul className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:mt-0">
            {reviews.praise.map((p) => (
              <li key={p} className="praise-item t-lead font-display">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
