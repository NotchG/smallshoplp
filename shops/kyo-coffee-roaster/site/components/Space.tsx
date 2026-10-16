import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DayRoom from "@/components/art/DayRoom";
import NightGarden from "@/components/art/NightGarden";
import { space } from "@/content";
import { mock } from "@/lib/mockup";

// "Ruang di Kyō": text, then the room by day and the garden by night (4 / 4 / 4).
export default function Space() {
  return (
    <section id="ruang" aria-labelledby="ruang-title" className="section bg-wall">
      <Container>
        <Reveal className="grid-12 row-gap-section">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="ruang-title" className="t-head head-gap">
              {space.heading}
            </h2>
            <p className="t-body t-measure" {...mock(space.body.mockup)}>
              {space.body.text}
            </p>
            <p className="t-small mt-4 space-note" {...mock(space.note.mockup)}>
              {space.note.text}
            </p>
          </div>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <DayRoom label={space.day.label} className="scene" />
            <figcaption className="t-small mt-3">{space.day.caption}</figcaption>
          </figure>
          <figure className="col-span-12 md:col-span-6 lg:col-span-4">
            <NightGarden label={space.night.label} className="scene" />
            <figcaption className="t-small mt-3">{space.night.caption}</figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
