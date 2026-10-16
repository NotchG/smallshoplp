import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// "Kata mereka": the listing's rating, then four paraphrased themes. No names, no quotes.
export default function Praise() {
  return (
    <section aria-labelledby="praise-title" className="section bg-concrete">
      <Container>
        <Reveal className="grid-12 row-gap-section">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="praise-title" className="t-head head-gap">
              {praise.heading}
            </h2>
            <p className="t-lead nums">{praise.rating}</p>
            <p className="t-small mt-2 lg:max-w-[28ch]">{praise.note}</p>
          </div>
          <ul className="col-span-12 lg:col-span-8 battens battens-wall praise-board">
            {praise.themes.map((theme) => (
              <li key={theme.label} className="praise-theme">
                <h3 className="t-small">{theme.label}</h3>
                <p className="t-body t-measure mt-2">{theme.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
