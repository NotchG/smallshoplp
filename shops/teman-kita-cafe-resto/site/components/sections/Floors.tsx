import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FloorIllustration from "@/components/FloorIllustration";
import { mock } from "@/lib/mockup";
import { floors, type Floor } from "@/content";

// 2. The two floors as a building cross-section: upstairs, the floor slab, downstairs.
function FloorText({ floor }: { floor: Floor }) {
  return (
    <div {...mock(floor.mockup)}>
      <p className="t-label">{floor.label}</p>
      <h3 className="t-lead mt-2">{floor.title}</h3>
      <p className="t-body measure mt-3">{floor.body}</p>
    </div>
  );
}

export default function Floors() {
  const [atas, bawah] = floors.items;
  return (
    <section className="section" aria-labelledby="lantai">
      <Container>
        <Reveal>
          <div className="grid-12 items-end gap-y-3">
            <h2 id="lantai" className="t-head col-span-12 lg:col-span-6">
              {floors.heading}
            </h2>
            <p className="t-lead col-span-12 text-balance lg:col-span-5 lg:col-start-8">{floors.intro}</p>
          </div>

          {/* Lantai 2: drawing on the left, standing on the slab */}
          <div className="grid-12 mt-10 items-center gap-y-6 lg:mt-14">
            <FloorIllustration
              kind="atas"
              label={atas.illustrationLabel}
              className="col-span-12 block h-auto w-full lg:col-span-7"
            />
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <FloorText floor={atas} />
            </div>
          </div>

          <div className="floor-slab mt-10 lg:mt-0" aria-hidden="true" />

          {/* Lantai 1: drawing on the right, hanging under the slab */}
          <div className="grid-12 mt-10 items-center gap-y-6 lg:mt-0">
            <FloorIllustration
              kind="bawah"
              label={bawah.illustrationLabel}
              className="col-span-12 block h-auto w-full lg:col-span-7 lg:col-start-6 lg:row-start-1"
            />
            <div className="col-span-12 lg:col-span-4 lg:col-start-1 lg:row-start-1">
              <FloorText floor={bawah} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
