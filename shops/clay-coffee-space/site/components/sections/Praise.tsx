import { praise, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

// Paraphrased review themes only: no quotes, no names.
export default function Praise() {
  return (
    <section aria-labelledby="praise-title" className="section section-follow">
      <Container>
        <Reveal className="praise-grid">
          <div className="praise-head">
            <h2 id="praise-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-lead mt-5 tabular">{praise.ratingLine}</p>
            <a
              href={shop.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-lampu mt-3"
            >
              {praise.reviewsLink}
              <ArrowRight />
            </a>
          </div>
          <ul className="themes">
            {praise.themes.map((t) => (
              <li key={t.text} className="t-lead theme" {...mock(t.mockup)}>
                <span className="status-dot" aria-hidden="true" />
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
