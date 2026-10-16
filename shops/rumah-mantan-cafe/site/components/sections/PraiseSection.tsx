import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";
import { mock } from "@/lib/mockup";
import { nb } from "@/lib/text";

// 5. Kata mereka: paraphrased themes from the Google reviews. No quote marks, no names. 4/8.
const TILTS = ["note-tilt-l", "note-tilt-r", "note-tilt-r", "note-tilt-l"];

export default function PraiseSection() {
  return (
    <section aria-labelledby="ulasan-h" className="wall section">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 id="ulasan-h" className="h2">
              {praise.heading}
            </h2>
            <p className="t-lead mt-6 font-semibold">{praise.ratingLine}</p>
            <p className="label mt-2">{praise.label}</p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 lg:col-span-8">
            {praise.notes.map((n, i) => (
              <li key={n.text} className={`note ${TILTS[i]}`} {...mock(n.mockup)}>
                {nb(n.text)}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
