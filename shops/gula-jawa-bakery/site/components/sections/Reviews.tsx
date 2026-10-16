import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ReviewList from "@/components/ReviewList";
import { reviews } from "@/content";

// Paraphrased proof, including the honest one about empty trays.
export default function Reviews() {
  return (
    <section aria-labelledby="kata-title" className="ground-dinding section">
      <Reveal>
        <Container className="grid gap-y-10 md:grid-cols-12 md:gap-x-8 lg:gap-x-6">
          <div className="md:col-span-4">
            <h2 id="kata-title" className="t-head heading">
              {reviews.heading}
            </h2>
            <p className="t-body tnum mt-4">{reviews.summary}</p>
            <p className="t-small mt-2 text-neon/80">{reviews.note}</p>
          </div>
          <ReviewList className="md:col-span-8 md:col-start-5" />
        </Container>
      </Reveal>
    </section>
  );
}
