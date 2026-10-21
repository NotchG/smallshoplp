import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { copy, praise } from "@/content";

// 5. Kata mereka: the rating as plain text and paraphrased themes. No quotes, stars or names.
export default function Praise() {
  return (
    <section aria-labelledby="praise-title" className="section ground-malam">
      <Container>
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <h2 id="praise-title" className="f-head t-head">
              {copy.praise.heading}
            </h2>
            <p className="t-lead on-dark tabular mt-6 [text-wrap:balance]">{copy.praise.rating}</p>
            <p className="t-small mt-2 text-baja">{copy.praise.note}</p>
          </div>
          <ul className="hairline-list t-lead on-dark lg:col-span-7 lg:col-start-6 lg:pt-3">
            {praise.map((p) => (
              <li key={p.text} className="py-4">
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
