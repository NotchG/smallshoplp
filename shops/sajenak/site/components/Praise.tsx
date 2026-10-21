import Container from "./Container";
import Reveal from "./Reveal";
import { Star } from "./Icons";
import { mock } from "@/lib/mockup";
import { praise, praiseCopy } from "@/content";

// Paraphrased themes from the Google reviews. No quote marks, no names.
export default function Praise() {
  return (
    <section id="ulasan" className="field-kapur section" aria-labelledby="ulasan-title">
      <Container>
        <Reveal className="grid-12 gap-y-10">
          <div className="lg:col-span-4">
            <h2 id="ulasan-title" className="t-head text-kopi">
              {praiseCopy.title}
            </h2>
            <p className="t-lead mt-4 flex items-center gap-2.5">
              <Star className="h-[0.95em] w-[0.95em] flex-none" />
              {praiseCopy.ratingLine}
            </p>
            <p className="t-small mt-2 font-normal">{praiseCopy.note}</p>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {praise.map((p) => (
              <li key={p.text} {...mock(p.mockup)}>
                <span className="theme-rule" aria-hidden />
                <p className="t-lead text-pretty">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
