import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { praise } from "@/content";

// Paraphrased praise in a 2x2 grid. No quote marks, stars or names.
// (The scallop markers from the brief were cut in the remove-one-thing pass: the awning
// edge stays special by appearing only under the two awnings.)
export default function PraiseSection() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-title" className="section ground-light bg-sign text-kayu">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <h2 id="ulasan-title" className="t-head text-awning">
              {praise.title}
            </h2>
            <p className="t-body mt-4 font-bold">{praise.rating}</p>
            <p className="t-small mt-2">{praise.note}</p>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:col-span-8 lg:mt-3">
            {praise.items.map((item) => (
              <li key={item.text} {...mock(item.mockup)}>
                <p className="t-lead max-w-[24ch] font-medium text-awning">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
