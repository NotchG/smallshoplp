import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { stay } from "@/content";

// The tall windows onto the garden: four panes in white mullions, labels in the transom.
// 768: two by two; from 1024: one row of four.
const TRANSOM = [
  "md:col-start-1 md:row-start-1 lg:row-start-1",
  "md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1",
  "md:col-start-1 md:row-start-3 lg:col-start-3 lg:row-start-1",
  "md:col-start-2 md:row-start-3 lg:col-start-4 lg:row-start-1",
];
const PANE = [
  "md:col-start-1 md:row-start-2 lg:row-start-2",
  "md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-2",
  "md:col-start-1 md:row-start-4 lg:col-start-3 lg:row-start-2",
  "md:col-start-2 md:row-start-4 lg:col-start-4 lg:row-start-2",
];

export default function Stay() {
  return (
    <section id="keluarga" className="section on-dark bg-taman text-bata" aria-labelledby="stay-title">
      <Container>
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-3">
            <h2 id="stay-title" className="t-head col-span-12 md:col-span-6">
              {stay.heading}
            </h2>
            <p className="t-body col-span-12 text-bata/85 md:col-span-6 md:pb-1">{stay.intro}</p>
          </div>

          <ul className="window mt-10 grid grid-cols-1 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {stay.panes.map((pane, i) => (
              <li key={pane.label} className="contents">
                <p className={`window-transom t-body font-semibold ${TRANSOM[i]}`}>{pane.label}</p>
                <div className={`window-pane ${PANE[i]}`}>
                  <h3 className="t-lead font-semibold">{pane.title}</h3>
                  <p className="t-body mt-2 text-bata/85" {...mock(pane.detail.mockup)}>
                    {pane.detail.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
