import Container from "./Container";
import Reveal from "./Reveal";
import { mock } from "@/lib/mockup";
import { praise, praiseSection } from "@/content";

// Short proof: the listing's rating and three paraphrased themes. No names, no quote marks.
export default function PraiseSection() {
  return (
    <section id="kata-mereka" aria-labelledby="kata-h" className="bg-kotak pt-section">
      <Container>
        <Reveal className="grid gap-x-8 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="kata-h" className="t-head">
              {praiseSection.heading}
            </h2>
            <p className="mt-5 inline-flex flex-wrap items-baseline gap-x-2 rounded-full bg-kulit px-4 py-1.5">
              <span className="t-lead serif font-bold">{praiseSection.ratingValue}</span>
              <span className="t-small">{praiseSection.ratingText}</span>
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {praise.map((p, i) => (
                <li
                  key={i}
                  className={`py-4 ${i > 0 ? "border-t border-tinta/15" : "pt-0 lg:pt-1"}`}
                  {...mock(p.mockup)}
                >
                  <p className="t-lead measure">{p.text}</p>
                </li>
              ))}
            </ul>
            <p className="t-small mt-2">{praiseSection.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
