import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Rack from "@/components/Rack";
import TentCard from "@/components/TentCard";
import DayBar from "@/components/DayBar";
import AbonGulung from "@/components/art/AbonGulung";
import Pastry from "@/components/art/Pastry";
import { featured } from "@/content";

// The two stars on the display-case racks, the abon gulung on the biggest one,
// then the honest timing.
export default function Featured() {
  const [abon, pastry] = featured.items;
  return (
    <section aria-labelledby="dicari-title" className="ground-dinding section">
      <Reveal>
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="lg:col-span-6">
              <h2 id="dicari-title" className="t-head heading">
                {featured.heading}
              </h2>
              <p className="t-body mt-4 text-neon/80">{featured.intro}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-y-12 md:grid-cols-12 md:gap-x-6 lg:mt-12">
            <article className="md:col-span-7">
              <Rack id="abon" className="rack-feature flex items-center justify-center p-4">
                <AbonGulung className="h-[86%] w-auto max-w-full" />
              </Rack>
              <div className="mt-3">
                <TentCard name={abon.name} alias={abon.alias} price={abon.price} />
              </div>
              <p className="t-body mt-4 max-w-[44ch]">{abon.blurb}</p>
            </article>
            <article className="md:col-span-5">
              <Rack id="pastry" className="rack-feature flex items-center justify-center p-4">
                <Pastry className="h-auto w-[82%]" />
              </Rack>
              <div className="mt-3">
                <TentCard name={pastry.name} price={pastry.price} />
              </div>
              <p className="t-body mt-4 max-w-[44ch]">{pastry.blurb}</p>
            </article>
          </div>

          <DayBar className="mt-16 lg:mt-20" />
        </Container>
      </Reveal>
    </section>
  );
}
