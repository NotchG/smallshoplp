import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { KueBeruang } from "@/components/Illustrations";
import { praise, shop } from "@/content";

// 7. Kata mereka: the rating, then four paraphrased themes. No quotes, no names.
export default function PraiseSection() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-judul" className="section bg-paper">
      <Container>
        <Reveal className="grid-12 praise-grid">
          <div className="praise-rating">
            <h2 id="ulasan-judul" className="t-head">
              {praise.title}
            </h2>
            <p className="t-lead mt-4 font-semibold tabular">{praise.ratingLine}</p>
            <p className="t-small mt-4">{praise.footnote}</p>
            <a
              href={shop.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="praise-link t-body mt-2 font-semibold underline"
            >
              {praise.link}
            </a>
          </div>
          <ul className="praise-themes">
            {praise.themes.map((t) => (
              <li key={t.title} className="praise-theme">
                <KueBeruang variant="mentega" decorative className="praise-bullet" />
                <div>
                  <h3 className="t-point">{t.title}</h3>
                  <p className="t-body mt-1">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
