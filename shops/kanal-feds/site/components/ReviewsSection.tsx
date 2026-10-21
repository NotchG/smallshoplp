import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Square from "@/components/Square";
import { reviews } from "@/content";
import { mock } from "@/lib/mockup";

// "Kata mereka": paraphrased themes from Google reviews. No quotes, no names, no stars.
export default function ReviewsSection() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-title" className="section bg-chalk">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="lg:col-span-4">
            <h2 id="ulasan-title" className="t-head">
              {reviews.title}
            </h2>
            <p className="t-lead mt-4">{reviews.rating}</p>
            <p className="t-small mt-2 text-muted">{reviews.note}</p>
          </div>
          <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:gap-y-12 lg:pt-3">
            {reviews.themes.map((t) => (
              <li key={t.title}>
                <h3 className="t-lead flex items-center gap-3 font-medium">
                  <Square />
                  {t.title}
                </h3>
                <p className="t-body measure mt-2 pl-6" {...mock(t.mockup)}>
                  {t.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
