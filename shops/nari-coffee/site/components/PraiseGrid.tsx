import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Keep reduplicated words ("sama-sama") whole instead of breaking at the hyphen.
function keepHyphenated(text: string) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i > 0 && " "}
      {word.includes("-") ? <span className="whitespace-nowrap">{word}</span> : word}
    </span>
  ));
}

// Honest proof on the honey-teak of the chairs: four themes paraphrased from Google reviews.
// No names, no quote marks, no stars.
export default function PraiseGrid() {
  return (
    <section aria-labelledby="praise-title" className="section band-teak">
      <Container>
        <Reveal className="grid-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 id="praise-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-body mt-4 font-semibold">{praise.rating}</p>
            <p className="t-small mt-1">{praise.note}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-8 md:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {praise.items.map((p) => (
              <li key={p.text} className="border-t border-paper/40 pt-5">
                <p className="t-serif t-lead">{keepHyphenated(p.text)}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
