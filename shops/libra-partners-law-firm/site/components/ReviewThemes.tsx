import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { labels, praise, shop } from "@/content";
import { mock } from "@/lib/mockup";

// 5. Dari ulasan Google: the rating directly under the heading, then four paraphrased
// themes in a row. No quotation marks, no names, no stars, no big number.
export default function ReviewThemes() {
  return (
    <section aria-labelledby="ulasan" className="section">
      <Container>
        <Reveal>
          <h2 id="ulasan" className="t-head">
            {praise.heading}
          </h2>
          <p className="mt-3 flex flex-wrap items-center gap-x-4">
            <span className="t-lead font-display">{praise.ratingLine}</span>
            <a href={shop.mapsUrl} className="link t-body" target="_blank" rel="noopener noreferrer">
              {labels.readReviews}
            </a>
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-12">
            {praise.themes.map((theme) => (
              <li key={theme.text} className="theme t-body" {...mock(theme.mockup)}>
                {theme.text}
              </li>
            ))}
          </ul>
          <p className="mt-8 t-small text-lis lg:mt-10">{praise.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
