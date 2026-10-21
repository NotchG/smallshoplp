import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BeanMark from "@/components/BeanMark";
import { reviews } from "@/content";
import SectionHead from "./SectionHead";

// Paraphrased praise from the Google reviews. No quote marks, no names, no stars.
export default function KataMereka() {
  return (
    <section aria-labelledby="kata-mereka" className="section ground-dinding">
      <Container>
        <Reveal className="split-4-8">
          <SectionHead id="kata-mereka" title={reviews.heading} className="split-side">
            <p className="mt-3 measure">{reviews.sub}</p>
          </SectionHead>
          <ul role="list" className="themes">
            {reviews.themes.map((t) => (
              <li key={t} className="theme">
                <BeanMark variant="glyph" className="theme-mark" />
                <p className="t-lead">{t}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
