import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Hanger from "@/components/Hanger";
import { wall } from "@/content";
import { mock } from "@/lib/mockup";
import { nb } from "@/lib/text";

// 2. Dindingnya penuh kode: the joke behind the name, shown with the real signs. 5/7.
export default function WallSection() {
  const { signs, photo } = wall;
  return (
    <section aria-labelledby="dinding-h" className="wall section section-after-hero">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-5 lg:pr-6">
            <h2 id="dinding-h" className="h2">
              {wall.heading}
            </h2>
            <p className="t-lead measure mt-6" {...mock(wall.description.mockup)}>
              {wall.description.text}
            </p>
            <p className="measure mt-4" {...mock(wall.body.mockup)}>
              {nb(wall.body.text)}
            </p>
          </div>

          <div className="lg:col-span-7">
            <figure>
              {/* KOPI sign: hangs in the flow and dips 24px into the photo's top-left corner */}
              <div className="relative z-10 -mb-6 ml-4 w-[min(62%,232px)] -rotate-2 lg:-ml-6">
                <Hanger height={34} spread={12} />
                <p className="kopi-sign">
                  <span className="kopi-title">{signs.kopi.title}</span>
                  <span className="label block">{signs.kopi.sub}</span>
                </p>
              </div>
              <div className="photo-frame">
                <img
                  className="photo-bright block h-auto w-full"
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="t-small mt-3">{photo.caption}</figcaption>
            </figure>

            <div className="mt-8 flex items-end gap-6" aria-hidden="true">
              <div className="w-[min(58%,240px)] rotate-[1.5deg]">
                <Hanger height={28} spread={14} />
                <p className="plank">{signs.stress}</p>
              </div>
              <div className="-rotate-1">
                <Hanger height={22} spread={20} />
                <p className="number-plate">{signs.number}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
