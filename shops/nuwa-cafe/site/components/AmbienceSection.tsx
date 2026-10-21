import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Bulbs, CameraMark, CubeShelf, RedChair, RosterBlock, Vines } from "@/components/RosterDrawings";
import { ambience, type AmbienceCell } from "@/content";
import { mock } from "@/lib/mockup";

const DRAWINGS: Record<string, () => React.ReactElement> = {
  vines: Vines,
  chair: RedChair,
  bulbs: Bulbs,
  shelf: CubeShelf,
  roster1: RosterBlock,
  roster2: RosterBlock,
};

function Cell({ cell }: { cell: AmbienceCell }) {
  const common = {
    className: "roster-cell",
    "data-cell": cell.id,
    style: { gridArea: cell.id },
    ...(cell.phoneHidden ? { "data-phone-hidden": "" } : {}),
  };

  if (cell.kind === "photo") {
    return (
      <div {...common}>
        <div className="roster-photo" role="img" aria-label={ambience.photoLabel}>
          <CameraMark />
          <span className="font-bold">{ambience.photoTitle}</span>
          <span className="t-small">{ambience.photoNote}</span>
        </div>
      </div>
    );
  }
  if (cell.kind === "text") {
    return (
      <div {...common} {...mock(cell.mockup)}>
        <p className="roster-text t-lead absolute inset-0">{cell.label}</p>
      </div>
    );
  }
  const Drawing = DRAWINGS[cell.id];
  return <div {...common}>{Drawing ? <Drawing /> : null}</div>;
}

// The room without customer photos, built as the breeze-block screen beside the door:
// square cells touching on a 2px grout line. No radius, no shadow, no hover lift.
export default function AmbienceSection() {
  return (
    <section id="suasana" className="section section-follow" aria-labelledby="ambience-title">
      <Container>
        <div className="ambience-head grid-12">
          <h2 id="ambience-title" className="h2">
            {ambience.heading}
          </h2>
          <p className="t-lead measure" {...mock(ambience.intro.mockup)}>
            {ambience.intro.text}
          </p>
        </div>
        <Reveal className="roster-wall">
          {ambience.cells.map((c) => (
            <Cell key={c.id} cell={c} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
