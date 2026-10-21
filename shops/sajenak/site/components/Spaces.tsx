import Container from "./Container";
import Reveal from "./Reveal";
import { mock } from "@/lib/mockup";
import { shop, spaces, spacesCopy, type Space } from "@/content";

function Caption({ space }: { space: Space }) {
  return (
    <figcaption className="mt-3 max-w-[52ch]">
      <h3 className="t-lead" {...mock(space.mockupLabel)}>
        {space.label}
      </h3>
      <p className="mt-1.5">{space.desc}</p>
    </figcaption>
  );
}

// Front to inside to top: pojok rotan, ruang baca, rooftop (garden is the hero).
export default function Spaces() {
  const [rotan, baca, rooftop] = spaces;
  return (
    <section id="tempat" className="field-rotan section" aria-labelledby="tempat-title">
      <Container>
        <Reveal className="grid-12 gap-y-8">
          <div className="lg:col-span-4 lg:pr-4">
            <h2 id="tempat-title" className="t-head">
              {spacesCopy.title}
            </h2>
            <p className="t-lead mt-2">{shop.menuTagline}</p>
            <p className="mt-6 max-w-[42ch]">{spacesCopy.intro}</p>
          </div>
          <figure className="lg:col-span-8">
            <img
              src={rotan.img[0].src}
              width={rotan.img[0].width}
              height={rotan.img[0].height}
              alt={rotan.img[0].alt}
              loading="lazy"
              decoding="async"
              className="photo aspect-[3/2] object-cover"
            />
            <Caption space={rotan} />
          </figure>
        </Reveal>

        <Reveal className="grid-12 mt-14 gap-y-14 lg:mt-20">
          <figure className="lg:col-span-6">
            <img
              src={baca.img[0].src}
              width={baca.img[0].width}
              height={baca.img[0].height}
              alt={baca.img[0].alt}
              loading="lazy"
              decoding="async"
              className="photo aspect-[3/2] object-cover"
            />
            <Caption space={baca} />
          </figure>
          <figure className="lg:col-span-6">
            {/* Same 3:2 box as the reading room, so the rooftop pair matches its height. */}
            <div className="grid aspect-[3/2] grid-cols-2 gap-3">
              {rooftop.img.map((im) => (
                <div key={im.src} className="relative overflow-hidden rounded-[12px]">
                  <img
                    src={im.src}
                    width={im.width}
                    height={im.height}
                    alt={im.alt}
                    loading="lazy"
                    decoding="async"
                    className="photo-fill"
                  />
                </div>
              ))}
            </div>
            <Caption space={rooftop} />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
