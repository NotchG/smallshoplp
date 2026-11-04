import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { practice } from "@/content";
import { mock } from "@/lib/mockup";
import { keepWhole } from "@/lib/keepWhole";

// 3. Kami bisa membantu (kabut ground). Heading, intro and fee note cols 1–4;
// the two groups cols 6–12 in a 2-column inner grid. Debt first.
export default function PracticeAreas() {
  return (
    <section aria-labelledby="bantu" className="section bg-kabut">
      <Container>
        <Reveal className="g12 g12-split-rows">
          <div className="lg:col-start-1 lg:col-end-5 lg:row-start-1">
            <h2 id="bantu" className="t-head">
              {practice.heading}
            </h2>
            <p className="mt-4 t-body measure" {...mock(practice.intro.mockup)}>
              {practice.intro.text}
            </p>
          </div>

          <div className="mt-10 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:mt-1">
            {practice.groups.map((group, g) => (
              <div key={group.title} className={g > 0 ? "mt-10 md:mt-12" : ""}>
                <h3 className="t-lead">{group.title}</h3>
                <ul className="mt-4 grid gap-x-10 gap-y-6 md:grid-cols-2 md:mt-5">
                  {group.items.map((item) => (
                    <li key={item.title} {...mock(item.mockup)}>
                      <span className="block font-bold">{keepWhole(item.title)}</span>
                      <span className="mt-1 block text-lis">{keepWhole(item.line)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            className="fee-note mt-10 t-small lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:self-start lg:mt-8"
            {...mock(practice.feeNote.mockup)}
          >
            {practice.feeNote.text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
