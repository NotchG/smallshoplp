import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DayLine from "@/components/DayLine";
import { workday } from "@/content";
import { mock } from "@/lib/mockup";

// Kerja atau santai ([MOCKUP] section): a day at the river from opening to closing.
export default function Workday() {
  return (
    <section className="ground-batu section" aria-labelledby="work-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
            <h2 id="work-title" className="t-head text-merbau lg:col-span-6" {...mock(workday.heading.mockup)}>
              {workday.heading.text}
            </h2>
            <div className="mt-5 lg:col-span-6 lg:mt-0">
              <p className="t-lead" {...mock(workday.lead.mockup)}>
                {workday.lead.text}
              </p>
              <p className="t-body measure mt-3">{workday.body}</p>
            </div>
          </div>
          <div className="mt-12 md:mt-20">
            <DayLine stops={workday.stops} />
            <p className="t-small mt-8 text-baja-soft" {...mock(workday.workNote.mockup)}>
              {workday.workNote.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
