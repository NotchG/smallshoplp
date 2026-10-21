import Container from "@/components/Container";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";
import { praise, praiseIntro } from "@/content";
import { mock } from "@/lib/mockup";

// Themes paraphrased from real reviews: no quotation marks, no names.
export default function Praise() {
  return (
    <section className="ground-dinding section" aria-labelledby="kata-judul">
      <Reveal>
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Plate as="h2" id="kata-judul" head className="t-head sign-caps">
              {praiseIntro.heading}
            </Plate>
            <p className="t-lead nums mt-6">{praiseIntro.rating}</p>
            <p className="t-small mt-2 text-konter">{praiseIntro.source}</p>
          </div>
          <ul className="lg:col-span-7 lg:pt-2">
            {praise.map((p) => (
              <li
                key={p.text}
                className="t-lead font-semibold py-5 md:py-6 border-t-2 border-aspal first:border-t-0 first:pt-0 last:pb-0 balance"
                {...mock(p.mockup)}
              >
                {p.text}
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>
    </section>
  );
}
