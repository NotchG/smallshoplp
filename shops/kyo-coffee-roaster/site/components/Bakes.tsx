import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import AppleTart from "@/components/art/AppleTart";
import BunTray from "@/components/art/BunTray";
import PecanTart from "@/components/art/PecanTart";
import { bakes, type Bake } from "@/content";
import { mock } from "@/lib/mockup";

// "Teman ngopi": like the plywood wall, one tall panel (pecan tart) beside two short ones.
const ART = { pecan: PecanTart, apel: AppleTart, bun: BunTray } as const;

function Product({ bake }: { bake: Bake }) {
  const Art = ART[bake.id];
  return (
    <article className={`bake bake-${bake.id}`}>
      <Art label={bake.label} className="bake-art" />
      <div className="bake-text">
        <h3 className="t-lead" {...mock(bake.name.mockup)}>
          {bake.name.text}
        </h3>
        <p className="t-body t-measure mt-2" {...mock(bake.desc.mockup)}>
          {bake.desc.text}
        </p>
      </div>
    </article>
  );
}

export default function Bakes() {
  const [pecan, apel, bun] = bakes.products;
  return (
    <section aria-labelledby="bakes-title" className="section bg-ply">
      <Container>
        <Reveal className="battens battens-oak bakes-grid">
          <div className="bakes-intro">
            <h2 id="bakes-title" className="t-head head-gap">
              {bakes.heading}
            </h2>
            <div className="t-body t-measure space-y-2">
              {bakes.intro.map((line) => (
                <p key={line.text} {...mock(line.mockup)}>
                  {line.text}
                </p>
              ))}
            </div>
          </div>
          <Product bake={pecan} />
          <Product bake={apel} />
          <Product bake={bun} />
        </Reveal>
      </Container>
    </section>
  );
}
