import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";
import { mock } from "@/lib/mockup";

// Kata mereka: paraphrased themes from the reviews. No quotes, names, stars or avatars.
export default function Praise() {
  return (
    <section className="ground-merbau section" aria-labelledby="praise-title">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <h2 id="praise-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-small nums mt-4">{praise.source}</p>
          </div>
          <ul className="praise-list mt-10 grid gap-x-10 lg:col-span-8 lg:mt-0 lg:grid-cols-2">
            {praise.items.map((p) => (
              <li key={p.text} className="t-lead" {...mock(p.mockup)}>
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
