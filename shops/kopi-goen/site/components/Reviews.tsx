import { rating, reviews } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

// Rating from the listing and short paraphrases of real reviews. No quotes, no names.
export default function Reviews() {
  return (
    <section aria-labelledby="reviews-h" className="on-beton bg-beton pb-[var(--section-y)] text-arang">
      <Container>
        {/* hairline closing off the beton day panel above (desktop split) */}
        <Reveal className="grid gap-8 border-t border-arang/15 pt-[var(--section-y)] lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="reviews-h" className="t-head">
              {reviews.heading}
            </h2>
            <p className="t-lead nums mt-4">
              {rating.value} dari {rating.count} ulasan {rating.source}
            </p>
            <p className="t-small mt-2 text-arang/80">{reviews.note}</p>
          </div>
          <ul className="divide-y divide-arang/20 border-y border-arang/20 lg:col-span-8">
            {reviews.items.map((r) => (
              <li key={r.text} className="t-lead py-5 lg:py-6">
                {r.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
