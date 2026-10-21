import { floors } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "../Container";
import Plate from "../Plate";
import Reveal from "../Reveal";
import { GarageScene, RooftopScene } from "../art/Scenes";

type Floor = typeof floors.garage;

function FloorCard({ floor, variant }: { floor: Floor; variant: "garage" | "rooftop" }) {
  const wall = variant === "garage" ? "wall-terakota" : "wall-malam";
  return (
    <article className={`floor-card ${wall} flex flex-col`}>
      <div className="px-6 pt-6 pb-1 lg:px-8 lg:pt-8">
        <Plate variant={variant} arrow={variant === "rooftop"}>{floor.plate}</Plate>
        <h3 className="t-lead font-semibold mt-5">{floor.title}</h3>
        <p className="mt-3 measure">{floor.body}</p>
        <p className="mt-4 font-semibold measure" {...mock(floor.suits.mockup)}>{floor.suits.text}</p>
      </div>
      <div className="mt-auto">{variant === "garage" ? <GarageScene /> : <RooftopScene />}</div>
    </article>
  );
}

export default function Floors() {
  return (
    <section id="dua-lantai" aria-labelledby="dua-lantai-h" className="wall-tembok section">
      <Container>
        <Reveal>
          <h2 id="dua-lantai-h" className="font-display t-head">{floors.heading}</h2>
          <p className="mt-4 measure t-lead" {...mock(floors.lead.mockup)}>{floors.lead.text}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            <FloorCard floor={floors.garage} variant="garage" />
            <FloorCard floor={floors.rooftop} variant="rooftop" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
