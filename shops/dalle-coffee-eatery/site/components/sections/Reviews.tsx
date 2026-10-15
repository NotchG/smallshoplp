import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ReviewNotes from "@/components/ReviewNotes";
import { reviews } from "@/content";

export default function Reviews() {
  return (
    <section id="ulasan" className="section bg-plaster on-plaster" aria-labelledby="ulasan-title">
      <Container>
        <Reveal>
          <div className="grid-12 gap-y-8">
            <div className="lg:col-span-4">
              <h2 id="ulasan-title" className="t-head">
                {reviews.heading}
              </h2>
              <p className="t-body mt-4 font-semibold">{reviews.ratingLine}</p>
              <p className="t-small muted-plaster mt-2">{reviews.note}</p>
            </div>
            <div className="lg:col-start-5 lg:col-span-8">
              <ReviewNotes items={reviews.items} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
