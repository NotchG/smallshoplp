import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { reviews } from "@/content";

// Paraphrased themes from the listing's reviews. No names, no stars, no quote marks.
export default function Reviews() {
  return (
    <section className="section on-plafon" aria-labelledby="ulasan-title">
      <Container>
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <h2 id="ulasan-title" className="t-head" data-check="">
              {reviews.heading}
            </h2>
            <p className="t-small t-label mt-3 text-garis/80">{reviews.ratingLine}</p>
          </div>
          <ul className="review-grid lg:col-span-8">
            {reviews.items.map((r) => (
              <li key={r.theme} className="review-cell">
                <p className="t-small t-label text-rotan">{r.theme}</p>
                <p className="t-lead mt-3 font-medium">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
