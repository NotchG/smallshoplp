import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Paraphrased review themes: no quote marks, no names. Ground kayu (the plywood ceiling).
export default function Praise() {
  return (
    <section className="section bg-kayu" aria-labelledby="kata-title">
      <Container className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="head-gap lg:col-span-4 lg:mb-0">
          <h2 id="kata-title" className="t-head">
            {praise.heading}
          </h2>
          <p className="t-body mt-3 font-semibold tnum">{praise.ratingLine}</p>
        </div>
        <Reveal as="ul" className="grid md:grid-cols-2 md:gap-x-8 lg:col-span-8 lg:gap-x-6">
          {praise.themes.map((t) => (
            <li key={t} className="rule pt-4 pb-8">
              <p className="t-lead">{t}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
