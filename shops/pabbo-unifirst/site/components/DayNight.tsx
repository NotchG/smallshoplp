import Reveal from "@/components/Reveal";
import CeilingFrames from "@/components/CeilingFrames";
import { dayNight } from "@/content";
import { mock } from "@/lib/mockup";

// One place, two moods: "Siang ngopi," on rattan, "malam nongkrong." under the ceiling.
// The visible halves are aria-hidden; the full heading is read once from the sr-only h2.
export default function DayNight() {
  const { siang, malam } = dayNight;
  return (
    <section className="daynight relative" aria-labelledby="daynight-title">
      <h2 id="daynight-title" className="sr-only">
        {dayNight.heading}
      </h2>

      <div className="dn-bg dn-siang-bg on-rotan weave" aria-hidden="true" />
      <Reveal className="dn-text dn-siang-text text-plafon">
        <p className="t-head" aria-hidden="true" data-check="">
          {siang.lead}
        </p>
        <p className="t-body measure mt-5" {...mock(siang.body.mockup)}>
          {siang.body.text}
        </p>
        <ul className="dn-facts t-small t-label mt-8" aria-label="Suasana siang">
          {siang.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Reveal>

      <div className="dn-bg dn-malam-bg on-plafon" aria-hidden="true">
        <CeilingFrames fragment count={3} steps={2} />
      </div>
      <Reveal className="dn-text dn-malam-text text-garis">
        <p className="t-head" aria-hidden="true" data-check="">
          {malam.lead}
        </p>
        <p className="t-body measure mt-5" {...mock(malam.body.mockup)}>
          {malam.body.text}
        </p>
        <ul className="dn-facts t-small t-label mt-8 text-rotan" aria-label="Suasana malam">
          {malam.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
