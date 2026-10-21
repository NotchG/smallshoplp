import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HouseSection from "@/components/HouseSection";
import { IconCourt, IconLaptop, IconStairs } from "@/components/icons";
import { atmosphere } from "@/content";
import { mock } from "@/lib/mockup";

const ICONS = [IconCourt, IconStairs, IconLaptop];

// Suasana (daun). Phone: text, drawing, facts. Desktop: text + facts left, drawing right.
export default function Atmosphere() {
  return (
    <section id="suasana" className="on-daun section" aria-labelledby="suasana-title">
      <Container>
        <Reveal className="grid-12 gap-y-10 lg:grid-rows-[auto_1fr]">
          <div className="col-span-12 lg:col-span-5 lg:row-start-1">
            <h2 id="suasana-title" className="t-head">
              {atmosphere.title}
            </h2>
            <p className="t-lead measure mt-5" {...mock(atmosphere.lead.mockup)}>
              {atmosphere.lead.text}
            </p>
            <p className="measure mt-4" {...mock(atmosphere.line.mockup)}>
              {atmosphere.line.text}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center">
            <HouseSection alt={atmosphere.houseAlt} labels={atmosphere.labels} />
          </div>
          <ul className="col-span-12 flex flex-col gap-4 lg:col-span-5 lg:row-start-2">
            {atmosphere.facts.map((f, i) => {
              const Icon = ICONS[i];
              return (
                <li key={f.text} className="flex items-center gap-3 font-semibold" {...mock(f.mockup)}>
                  <Icon size={26} className="shrink-0" />
                  {f.text}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
