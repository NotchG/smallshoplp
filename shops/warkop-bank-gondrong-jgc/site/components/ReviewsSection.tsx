import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { reviews } from "@/content";

// Paraphrased from real Google reviews. No quote marks, no names, no stars.
export default function ReviewsSection() {
  return (
    <section id={reviews.id} className="section ground-semen" aria-labelledby="reviews-heading">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="reviews-heading" className="t-head">
              {reviews.heading}
            </h2>
            <p className="t-lead tnum mt-5">{reviews.rating}</p>
            <p className="t-small mt-3 max-w-xs">{reviews.note}</p>
          </div>
          <ul className="col-span-12 lg:col-span-8 grid gap-y-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10">
            {reviews.items.map((item) => (
              <li key={item.text} className="review t-lead">
                {item.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
