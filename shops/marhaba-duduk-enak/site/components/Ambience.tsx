import Container from "@/components/Container";
import GardenScene from "@/components/GardenScene";
import { mock } from "@/lib/mockup";
import { ambience } from "@/content";

// Suasana: the garden by day and the quiet, no-music concept.
// Phone: heading, garden (4:5, centred on the fountain), caption, statement.
// Wide: the full garden first, then heading beside the statement.
export default function Ambience() {
  return (
    <section id="suasana" className="section bg-lis" aria-labelledby="suasana-title">
      <Container className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <h2
          id="suasana-title"
          className="t-head font-bold lg:row-start-2 lg:col-span-5 lg:mt-10"
        >
          {ambience.heading}
        </h2>
        <div className="mt-8 lg:mt-0 lg:row-start-1 lg:col-span-12">
          <figure>
            <div className="garden-frame">
              <GardenScene label={ambience.sceneLabel} />
            </div>
            <figcaption className="t-small mt-3 text-besi-soft" {...mock(ambience.caption.mockup)}>
              {ambience.caption.text}
            </figcaption>
          </figure>
        </div>
        <p
          className="t-lead mt-6 measure lg:row-start-2 lg:col-start-6 lg:col-span-6 lg:mt-10"
          {...mock(ambience.statement.mockup)}
        >
          {ambience.statement.text}
        </p>
      </Container>
    </section>
  );
}
