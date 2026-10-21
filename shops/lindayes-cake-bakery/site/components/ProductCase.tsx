import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { IlloBrownies, IlloKue, IlloRoti, IlloToples } from "@/components/Illos";
import { mock } from "@/lib/mockup";
import { etalase, type CaseId, type CaseItem } from "@/content";

const ILLO: Record<CaseId, (p: { label: string }) => React.ReactElement> = {
  kue: IlloKue,
  brownies: IlloBrownies,
  roti: IlloRoti,
  "kue-kering": IlloToples,
};

function CaseItemView({ item }: { item: CaseItem }) {
  const Illo = ILLO[item.id];
  return (
    <li className="flex flex-col">
      {/* the steel shelf runs under each row of the case */}
      <div className="shelf">
        <Illo label={item.illoLabel} />
      </div>
      {/* tent card, directly under its product */}
      <div className="tent mt-3">
        <h3 className="t-lead font-display" data-check>
          {item.name}
        </h3>
        <p className="t-body mt-1 text-muted" {...mock(item.line.mockup)}>
          {item.line.text}
        </p>
        <p className="t-small mt-2 font-semibold tabular-nums" {...mock(item.price.mockup)}>
          {item.price.text}
        </p>
      </div>
    </li>
  );
}

export default function ProductCase() {
  return (
    <section id="etalase" aria-labelledby="etalase-h" className="section section-follow ground-light bg-glass">
      <Reveal>
        <Container>
          <div className="divider" aria-hidden="true" />
          <div className="grid-12 items-end gap-y-3">
            <h2 id="etalase-h" className="t-head font-display col-span-12 lg:col-span-6">
              {etalase.heading}
            </h2>
            <p className="t-body lg:t-lead col-span-12 text-muted lg:col-span-6 lg:text-fascia">
              {etalase.intro}
            </p>
          </div>
          <div className="case mt-8 lg:mt-12">
            <ul className="case-grid grid grid-cols-2 gap-y-10 lg:grid-cols-4">
              {etalase.items.map((item) => (
                <CaseItemView key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
