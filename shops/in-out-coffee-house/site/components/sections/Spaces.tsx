import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ArrowHead from "@/components/ArrowHead";
import { BeanbagArt, IndoorArt, RooftopArt } from "@/components/art/SpaceArt";
import { spaces, type Space } from "@/content";
import { mock } from "@/lib/mockup";

// The exposed steel-deck ceiling, one strip over both rooms of the 2nd floor.
function Deck() {
  return (
    <svg className="deck md:col-span-2" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="deck-ribs" width="30" height="22" patternUnits="userSpaceOnUse">
          <rect width="30" height="22" className="fill-beton" />
          <rect x="4" width="11" height="22" className="fill-paper" opacity="0.45" />
        </pattern>
      </defs>
      <rect width="100%" height="22" fill="url(#deck-ribs)" />
      <line x1="0" y1="23.5" x2="100%" y2="23.5" className="stroke-ink" strokeWidth="3" />
    </svg>
  );
}

function Sign({ space }: { space: Space }) {
  return (
    <h3 id={`ruang-${space.id}`} className="sign">
      {space.id === "rooftop" && <ArrowHead dir="up" shaft className="text-kuning" />}
      {space.title}
    </h3>
  );
}

function Body({ space }: { space: Space }) {
  return (
    <div className="mt-4 space-y-2">
      {space.body.map((b) => (
        <p key={b.text} {...mock(b.mockup)}>
          {b.text}
        </p>
      ))}
    </div>
  );
}

// The three moods as one building cross-section: the open rooftop on top, then the 2nd floor
// with the indoor room and the beanbag room side by side. Slabs between; no ground floor.
export default function Spaces() {
  const [rooftop, indoor, beanbag] = spaces.items;
  return (
    <section id="pilih-tempat" className="section section-follow" aria-labelledby="pilih-title">
      <Container>
        <Reveal className="building">
          {/* Top floor: the open rooftop. The section heading stands in the open air beside it;
              the rooftop's own sign stands on the roof, next to the slab. */}
          <div className="grid gap-x-8 md:grid-cols-12">
            <div className="flex flex-col md:col-span-5">
              <h2 id="pilih-title" className="t-head">
                {spaces.title}
              </h2>
              <p className="mt-3" {...mock(spaces.intro.mockup)}>
                {spaces.intro.text}
              </p>
              <div className="pt-10 pb-6 md:mt-auto md:pb-8">
                <Sign space={rooftop} />
                <Body space={rooftop} />
              </div>
            </div>
            <div className="md:col-span-7 md:self-end" data-mockup="">
              <div className="art-box art-rooftop">
                <RooftopArt label={rooftop.artLabel} />
              </div>
            </div>
          </div>
          <div className="slab" />
          <div className="floor2 grid md:grid-cols-[7fr_5fr]">
            <Deck />
            <article aria-labelledby="ruang-indoor" className="flex flex-col bg-paper">
              <div className="px-5 pt-6 pb-6 lg:px-8 lg:pt-8">
                <Sign space={indoor} />
                <Body space={indoor} />
              </div>
              <div className="art-box art-indoor mt-auto" data-mockup="">
                <IndoorArt label={indoor.artLabel} />
              </div>
            </article>
            <article
              aria-labelledby="ruang-beanbag"
              className="wall-between flex flex-col bg-kuning"
            >
              <div className="px-5 pt-6 pb-6 lg:px-8 lg:pt-8">
                <Sign space={beanbag} />
                <Body space={beanbag} />
              </div>
              <div className="art-box art-beanbag mt-auto" data-mockup="">
                <BeanbagArt label={beanbag.artLabel} />
              </div>
            </article>
          </div>
          <div className="slab" />
        </Reveal>
      </Container>
    </section>
  );
}
