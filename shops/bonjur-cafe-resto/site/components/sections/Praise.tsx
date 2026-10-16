import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Paraphrased from real Google reviews: no quotation marks, names or stars.
export default function Praise() {
  return (
    <section className="section ground-paper" aria-labelledby="praise-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <h2 id="praise-title" className="t-head text-blue">
                {praise.title}
              </h2>
              <p className="t-lead mt-3 font-medium">{praise.ratingLine(praise.rating, praise.count)}</p>
            </div>
            <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:mt-2">
              {praise.items.map((it) => (
                <li key={it.text} className="rule-red t-lead">
                  {it.text}
                </li>
              ))}
            </ul>
          </div>
          <p className="t-small mt-12 text-muted lg:mt-16">{praise.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
