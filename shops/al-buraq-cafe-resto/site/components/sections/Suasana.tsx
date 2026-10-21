import Container from "@/components/Container";
import ArchFrame from "@/components/ArchFrame";
import NicheScene from "@/components/NicheScene";
import { mock } from "@/lib/mockup";
import { suasana } from "@/content";

// The room people come back for. No reveal: on phone its heading already shows in the first
// screen, and a reveal would hide it until the visitor scrolls (remove-one-thing pass).
// Phone: heading, lead, niche, facts.
// Desktop: niche cols 1–5, heading + lead and facts in cols 7–12, centred against the arch.
export default function Suasana() {
  return (
    <section className="section section-follow-half bg-plaster" aria-labelledby="suasana-title">
      <Container>
        <div className="grid-12 lg:grid-rows-[1fr_auto_auto_1fr]">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
            <h2 id="suasana-title" className="t-head text-velvet">
              {suasana.heading}
            </h2>
            <p className="t-lead measure-lead mt-4 text-ink" {...mock(suasana.lead.mockup)}>
              {suasana.lead.text}
            </p>
          </div>

          <div className="mt-10 lg:col-span-5 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:mt-0">
            <ArchFrame className="mx-auto aspect-[7/9] w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none">
              <NicheScene />
            </ArchFrame>
          </div>

          <ul className="mt-10 lg:col-span-6 lg:col-start-7 lg:row-start-3 lg:mt-10">
            {suasana.facts.map((f) => (
              <li key={f.text} className="t-body border-t border-niche py-4 text-ink last:border-b" {...mock(f.mockup)}>
                {f.text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
