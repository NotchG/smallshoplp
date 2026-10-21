import { reviews, shop } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

// Paraphrased Google reviews: a list, third person, no quote marks, no names, no stars.
export default function Reviews() {
  return (
    <section className="g-kaca section" aria-labelledby="kata-mereka">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="md:col-span-2 lg:col-span-4">
            <h2 id="kata-mereka" className="t-head">
              {reviews.heading}
            </h2>
            <p className="t-body mt-5">{reviews.ratingLine}</p>
            <a href={shop.mapsUrl} className="text-link t-body" target="_blank" rel="noopener">
              {reviews.link}
            </a>
            <p className="t-small text-muted mt-2">{reviews.note}</p>
          </div>
          <ul className="md:col-span-2 lg:col-start-5 lg:col-span-8 grid gap-x-6 gap-y-8 sm:grid-cols-2">
            {reviews.items.map((r) => (
              <li key={r.source} className="review t-lead" data-check>
                {r.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
