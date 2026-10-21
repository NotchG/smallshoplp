import Container from "@/components/Container";
import FacadePhoto from "@/components/FacadePhoto";
import OpenPlate from "@/components/OpenPlate";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hero (bata): the street front rebuilt. Wordmark like the door decal, script like the plate,
// the facade in its steel frame, and tonight's hours on a black plate.
// Phone: name, tagline, photo, plate. Desktop: name across; photo left; tagline top-right and
// the plate bottom-right, so the right column has no dead block of brick under the plate.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="ground-bata">
      <Container className="pt-6 pb-14 md:pt-12 md:pb-20">
        <h1 id="hero-title" className="inline-flex flex-col items-end xl:flex-row xl:items-baseline xl:gap-6">
          <span className="t-display t-cond block">{shop.wordmark}</span>
          <span className="t-script t-head block hero-script">{shop.script}</span>
        </h1>

        <div className="grid-12 mt-3 md:mt-6 lg:mt-10 lg:grid-rows-[auto_1fr] gap-y-6 max-lg:flex max-lg:flex-col max-lg:gap-4">
          <p
            className="t-lead text-balance max-w-[30ch] max-lg:mb-2 lg:col-start-8 lg:col-span-5 lg:row-start-1"
            {...mock(hero.tagline.mockup)}
          >
            {hero.tagline.text}
          </p>
          <FacadePhoto alt={hero.facadeAlt} className="lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-2" />
          <OpenPlate className="lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:self-end" />
        </div>
      </Container>
    </section>
  );
}
