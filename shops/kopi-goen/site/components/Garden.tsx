import { garden } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";

// The garden by day and by night: the same span "12.00–23.00" covers.
function Panel({ tone }: { tone: "day" | "night" }) {
  const p = tone === "day" ? garden.day : garden.night;
  const day = tone === "day";
  return (
    <div
      className={
        day
          ? "on-beton garden-panel garden-panel--day bg-beton text-arang"
          : "garden-panel garden-panel--night bg-malam text-beton"
      }
    >
      <div className="garden-grid">
        <div className="g-title">
          <h3 className={`t-lead ${day ? "text-arang" : "text-lampu"}`}>{p.title}</h3>
          <p className={`t-small mt-1 ${day ? "text-aren" : "text-pakis"}`}>{p.when}</p>
        </div>
        <PhotoFrame label={p.frame} drawing={day ? "day" : "night"} tone={tone} className="g-frame w-full" />
        <p className={`g-line t-body measure ${day ? "text-arang" : "text-beton/80"}`}>{p.line}</p>
      </div>
    </div>
  );
}

export default function Garden() {
  return (
    <section id="suasana" aria-labelledby="garden-h" className="section-join bg-malam">
      <Reveal>
        <Container className="grid gap-4 lg:grid-cols-12 lg:items-baseline">
          <h2 id="garden-h" className="t-head lg:col-span-5">
            {garden.heading}
          </h2>
          <div className="t-body measure space-y-1 text-beton/80 lg:col-span-6 lg:col-start-7">
            <p>{garden.intro}</p>
            <p {...mock(garden.calm.mockup)}>{garden.calm.text}</p>
          </div>
        </Container>
        <div className="mt-12 grid lg:mt-16 lg:grid-cols-2">
          <Panel tone="day" />
          <Panel tone="night" />
        </div>
      </Reveal>
    </section>
  );
}
