import { reviews, shop } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

// Paraphrases of the Google reviews: no names, no quote marks, no stars.
export default function KataMereka() {
  return (
    <section className="section ground-kain" aria-labelledby="kata-judul">
      <Container>
        <Reveal className="grid-12">
          <div className="reviews-head">
            <h2 id="kata-judul" className="t-head font-display font-extrabold">
              {reviews.heading}
            </h2>
            <p className="rating-line t-lead">
              <strong>{shop.rating.value}</strong> {reviews.ratingSuffix}
            </p>
            <p className="review-note t-small">{reviews.note}</p>
          </div>
          <ul className="review-list">
            {reviews.items.map((r) => (
              <li key={r.text}>
                <p className="t-lead">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
