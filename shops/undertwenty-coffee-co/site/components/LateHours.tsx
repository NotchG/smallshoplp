import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HoursChart from "@/components/HoursChart";
import { late, latePoints } from "@/content";
import { mock } from "@/lib/mockup";

// Ngopi sampai larut (arang): the late hours as an object, then why people stay.
export default function LateHours() {
  return (
    <section aria-labelledby="late-title" className="ground-arang section">
      <Container>
        <Reveal className="grid-12 gap-y-10 max-lg:flex max-lg:flex-col max-lg:gap-10">
          <div className="lg:col-span-5">
            <h2 id="late-title" className="t-head t-cond" {...mock(late.heading.mockup)}>
              {late.heading.text}
            </h2>
            <p className="t-lead mt-5 max-w-[26ch]">{late.lead}</p>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <HoursChart />
            <ul className="mt-8 md:mt-10 grid md:grid-cols-3 md:gap-x-8 border-t border-putih/20">
              {latePoints.map((p) => (
                <li
                  key={p.text}
                  className="t-lead text-pretty pt-5 max-md:pb-5 max-md:border-b max-md:border-putih/20"
                  {...mock(p.mockup)}
                >
                  {p.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
