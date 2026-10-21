import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Rich from "@/components/Rich";
import { intro } from "@/content";
import { mock } from "@/lib/mockup";

// Apa itu gezellig?: quiet and type-only. The name, then the old-house feel.
export default function Intro() {
  return (
    <section aria-labelledby="intro-title" className="section pt-0">
      <Container>
        <Reveal className="grid-12">
          <h2 id="intro-title" className="t-head lg:col-span-4">
            {intro.heading}
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="t-lead measure font-display" {...mock(intro.meaning.mockup)}>
              <Rich text={intro.meaning.text} />
            </p>
            <p className="t-body mt-5 max-w-[38em] text-besi-soft">{intro.house.text}</p>
            <p className="t-lead mt-6 font-display italic" {...mock(intro.closing.mockup)}>
              <Rich text={intro.closing.text} />
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
