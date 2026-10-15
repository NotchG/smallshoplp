import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { reviews } from "@/content";

// Paraphrased from Google reviews: no quotes, no names, no star graphics.
export default function Reviews() {
  return (
    <section id="ulasan" className="section bg-beton" aria-labelledby="reviews-title">
      <Container>
        <Reveal className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="reviews-title" className="t-head">
              {reviews.heading}
            </h2>
            <p className="t-lead tabular mt-4 font-semibold">{reviews.ratingLine}</p>
            <p className="t-small mt-2 text-bilah-muted">{reviews.label}</p>
          </div>
          <ul className="col-span-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {reviews.items.map((r) => (
              <li key={r.topic} className="border-t border-bilah/25 pt-4">
                <p className="t-small font-semibold text-bilah-muted">{r.topic}</p>
                <p className="t-lead mt-2">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
