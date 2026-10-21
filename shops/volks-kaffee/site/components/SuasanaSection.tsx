import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TerraceFrieze from "@/components/art/TerraceFrieze";
import { mock } from "@/lib/mockup";
import { suasana } from "@/content";

export default function SuasanaSection() {
  return (
    <section id="suasana" aria-labelledby="suasana-title" className="ground-dark bg-kayu pt-[var(--section-y)] text-piring">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <h2 id="suasana-title" className="t-head text-sign">
              {suasana.title}
            </h2>
            <p className="t-lead mt-5 max-w-[26ch] font-medium" {...mock(suasana.intro.mockup)}>
              {suasana.intro.text}
            </p>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6 lg:col-span-8 lg:mt-2">
            {suasana.items.map((item) => (
              <li key={item.title.text} {...mock(item.title.mockup)}>
                <h3 className="t-lead font-bold text-sign">{item.title.text}</h3>
                <p className="t-body mt-2" {...mock(item.body.mockup)}>
                  {item.body.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
      <div className="frieze mt-12 lg:mt-16">
        <TerraceFrieze label={suasana.friezeLabel} />
      </div>
    </section>
  );
}
