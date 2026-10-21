import { minuman } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MenuList from "@/components/MenuList";
import TaggedPhoto from "@/components/TaggedPhoto";
import PhotoWithCaption from "@/components/PhotoWithCaption";
import { mock } from "@/lib/mockup";

// 4 Minuman (cobalt): coffee credibility, then colour. Prices in mustard.
export default function Minuman() {
  return (
    <section className="ground-cobalt section" aria-labelledby="minuman-h">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 xl:col-span-5 xl:col-start-8">
            <h2 id="minuman-h" className="f-display t-head">
              {minuman.heading}
            </h2>
            <p className="t-lead measure mt-4">{minuman.lead}</p>
          </div>
          <TaggedPhoto
            photo={minuman.photo}
            ratio="2 / 3"
            dot="mustard"
            className="minuman-photo cap-tablet mt-10 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center xl:col-span-6 xl:self-start"
            boxClassName="bleed-phone"
            sizes="(min-width: 1280px) 610px, (min-width: 1024px) 460px, (min-width: 640px) 520px, 100vw"
          />
          <div className="mt-10 lg:col-span-6 lg:col-start-7 lg:row-start-2 xl:col-span-5 xl:col-start-8">
            <h3 className="f-name t-lead">{minuman.kopiHeading}</h3>
            <MenuList dishes={minuman.kopi} size="body" className="mt-3" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 xl:gap-8">
              <div>
                <h3 className="f-name t-lead">{minuman.mocktailHeading}</h3>
                <p className="mt-3">
                  {minuman.mocktail}{" "}
                  <span className="price" {...mock(minuman.mocktailPrice.mockup)}>
                    {minuman.mocktailPrice.text}
                  </span>
                </p>
                <p className="mt-3">{minuman.mocktailExtra}</p>
              </div>
              <PhotoWithCaption photo={minuman.pink} ratio="4 / 5" captionClassName="t-small" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
