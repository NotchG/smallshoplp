import Container from "@/components/Container";
import { reviews } from "@/content";

// Paraphrased from Google reviews: no quotation marks, no names, no star icons.
// No Reveal here: cut in the remove-one-thing pass (implementation plan step 10).
export default function Reviews() {
  const [main, second] = reviews.items;
  return (
    <section id="ulasan" aria-labelledby="ulasan-title" className="section bg-lilac">
      <Container className="grid gap-x-6 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="ulasan-title" className="t-head head-gap">
            {reviews.heading}
          </h2>
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="t-lead font-bold">{reviews.rating}</span>
            <span className="t-body">{reviews.ratingLine}</span>
          </p>
          <p className="t-small mt-1 text-grape-soft">{reviews.source}</p>
          <a className="link link-on-band mt-2" href={reviews.link.href} target="_blank" rel="noopener">
            {reviews.link.label}
          </a>
        </div>

        <div className="grid content-start gap-6 lg:col-span-8 lg:grid-cols-8">
          <div className="card bg-fondant p-6 sm:p-8 lg:col-span-8">
            <p className="t-lead">{main}</p>
          </div>
          <div className="card bg-fondant p-6 sm:p-8 lg:col-span-5">
            <p className="t-body">{second}</p>
          </div>
          <p className="t-body self-center px-1 lg:col-span-3">{reviews.short}</p>
        </div>
      </Container>
    </section>
  );
}
