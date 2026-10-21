import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Square from "@/components/Square";
import { morning } from "@/content";
import { mock } from "@/lib/mockup";

// "Mulai jam 7 pagi": the reasons to stop early. Heading cols 1–4, two moments in 5–8 and 9–12.
export default function MorningSection() {
  return (
    <section id="pagi" aria-labelledby="pagi-title" className="section bg-chalk">
      <Container>
        <Reveal className="grid-page morning-grid gap-y-10">
          <div className="morning-intro lg:col-span-4">
            <h2 id="pagi-title" className="t-head">
              {morning.title}
            </h2>
            <p className="t-lead measure mt-4" {...mock(morning.lead.mockup)}>
              {morning.lead.text}
            </p>
          </div>
          {morning.moments.map((m, i) => (
            <div key={m.title} className={`lg:col-span-4 lg:pt-3 ${i === 0 ? "lg:col-start-5" : "lg:col-start-9"}`}>
              <h3 className="t-lead flex items-center gap-3 font-medium">
                <Square />
                <span>
                  {m.time && <span className="tabular-nums">{m.time} · </span>}
                  {m.title}
                </span>
              </h3>
              <p className="t-body measure mt-3 pl-6">{m.text}</p>
              <p className="t-body measure mt-2 pl-6 text-muted" {...mock(m.extra.mockup)}>
                {m.extra.text}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
