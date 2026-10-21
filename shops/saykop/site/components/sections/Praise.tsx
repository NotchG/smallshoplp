import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise, rating } from "@/content";

// "Kata mereka": themes paraphrased from Google reviews. No names, no stars, no quotes.
export default function Praise() {
  return (
    <section aria-labelledby="kata-h" className="section ground-navy bg-navy text-plaster">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="kata-h" className="f-display t-head">
              {praise.heading}
            </h2>
            <p className="t-lead mt-6">
              <span className="f-display text-wall">{rating.value}</span> {praise.ratingLine}
            </p>
            <p className="t-small mt-2 text-plaster/75">{praise.caption}</p>
          </div>
          <ul className="mt-12 lg:col-span-6 lg:col-start-7 lg:mt-2">
            {praise.themes.map((t) => (
              <li key={t.text} className="praise-item t-lead">
                {t.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
