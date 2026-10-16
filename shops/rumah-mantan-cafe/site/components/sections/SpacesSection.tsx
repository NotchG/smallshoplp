import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { GlassRoom, SmokingSign, Teras } from "@/components/art/Spaces";
import { spaces, type Space } from "@/content";
import { mock } from "@/lib/mockup";
import { nb } from "@/lib/text";

// 4. Pojok favorit: where to sit, for groups and smokers. 4/8 header, then 3-up drawings.
function SpaceArt({ art }: { art: Space["art"] }) {
  if (art === "teras") return <Teras className="block h-full w-full" />;
  if (art === "kaca") return <GlassRoom className="block h-full w-full" />;
  return (
    <div
      role="img"
      aria-label="Ilustrasi papan bertuliskan Smoking Area yang digantung di dinding."
      className="h-full w-full"
    >
      <SmokingSign text={spaces.smokingSign} />
    </div>
  );
}

export default function SpacesSection() {
  return (
    <section aria-labelledby="pojok-h" className="section bg-langit">
      <Container>
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-baseline lg:gap-8">
            <h2 id="pojok-h" className="h2 lg:col-span-4">
              {spaces.heading}
            </h2>
            <p className="t-lead lg:col-span-8" {...mock(spaces.intro.mockup)}>
              {nb(spaces.intro.text)}
            </p>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
            {spaces.items.map((s) => (
              <li key={s.art}>
                <div className="tile aspect-[4/3] w-full">
                  <SpaceArt art={s.art} />
                </div>
                <h3 className="h3 mt-4">{s.title}</h3>
                <p className="mt-2">{s.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
