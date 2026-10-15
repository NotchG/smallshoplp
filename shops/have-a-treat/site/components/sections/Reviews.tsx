import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { WaveBullet } from "@/components/WaveRule";
import { reviews } from "@/content";

// Paraphrases only: no quotation marks, no names, plain paragraphs (not blockquote).
export default function Reviews() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-h" className="section bg-sand">
      <Container>
        <Reveal className="reviews-grid">
          <div className="reviews-head">
            <h2 id="ulasan-h" className="t-head">
              {reviews.heading}
            </h2>
            <p className="t-body mt-3">{reviews.rating}</p>
            <p className="t-small mt-1 reviews-note">{reviews.note}</p>
          </div>
          <ul className="reviews-list">
            {reviews.items.map((r) => (
              <li key={r.source} className="review">
                <WaveBullet className="review-bullet" />
                <p className="t-lead">{r.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
