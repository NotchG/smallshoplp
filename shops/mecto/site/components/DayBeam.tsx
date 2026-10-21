import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { dayParts } from "@/content";

// One day at Mecto as a steel beam: kayu 07–18, baja 18–23, outline-only 23–00 (Jum–Min).
// Ticks are clock marks, not meal times; only 07.00, 23.00 and 00.00 are facts.
// Horizontal from 1024px; below that, a vertical bar built from each row's segment.
const SPAN = 17; // 07.00 → 00.00
const pos = (h: number) => ((h - 7) / SPAN) * 100;
const TICK_POS = [pos(7), pos(12), pos(18), pos(23), pos(24)];

export default function DayBeam() {
  const [pagi, , malam] = dayParts.parts;
  return (
    <section id="jam" className="section bg-beton" aria-labelledby="jam-title">
      <Container>
        <div className="head-gap lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <h2 id="jam-title" className="t-head lg:col-span-6">
            {dayParts.heading}
          </h2>
          <p className="t-body measure mt-3 text-abu lg:col-span-6 lg:col-start-7 lg:mt-0">{dayParts.sub}</p>
        </div>

        <Reveal>
          {/* Horizontal beam, 1024+ */}
          <div className="hbeam hidden lg:block" aria-hidden="true">
            <div className="relative h-10">
              <div
                className="absolute bottom-0 left-0 flex flex-col items-start"
                style={{ width: `${pos(12)}%` }}
              >
                <span className="t-small">
                  {pagi.name} {dayParts.quietLabel}
                </span>
                <span className="mt-1 block h-2 w-full border-2 border-b-0 border-baja" />
              </div>
              <span className="t-small absolute right-0 bottom-3 whitespace-nowrap">{dayParts.weekendLabel}</span>
            </div>
            <div className="mt-1 flex h-9 border-2 border-baja">
              <span className="beam-seg-kayu block h-full" style={{ width: `${pos(18)}%` }} />
              <span className="beam-seg-baja block h-full" style={{ width: `${pos(23) - pos(18)}%` }} />
              <span className="beam-seg-open block h-full flex-1" />
            </div>
            <div className="relative h-12">
              {dayParts.ticks.map((t, i) => (
                <span key={t} className="hbeam-tick t-small tnum" style={{ left: `${TICK_POS[i]}%` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Day parts: beside the vertical beam on phones, three 4-col blocks under the beam on desktop */}
          <ol className="lg:mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {dayParts.parts.map((p) => (
              <li key={p.name} className="vbeam-row lg:block">
                <span className="vbeam-time t-small tnum lg:hidden" aria-hidden="true">
                  {p.from}
                </span>
                <span
                  className={`vbeam-bar lg:hidden ${p === malam ? "beam-seg-baja" : "beam-seg-kayu"}`}
                  aria-hidden="true"
                />
                <div className="pb-8 lg:pb-0">
                  <h3 className="t-lead">{p.name}</h3>
                  <p className="t-body measure mt-2 text-abu">{p.text}</p>
                </div>
              </li>
            ))}
            <li className="vbeam-row lg:hidden" aria-hidden="true">
              <span className="vbeam-time vbeam-time-end t-small tnum flex h-16 flex-col items-end justify-between">
                <span>23.00</span>
                <span>00.00</span>
              </span>
              <span className="vbeam-bar beam-seg-open" />
              <span className="t-small self-center">{dayParts.weekendLong}</span>
            </li>
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
