import Container from "@/components/Container";
import Button from "@/components/Button";
import PriceCard from "@/components/PriceCard";
import ProductPhoto from "@/components/ProductPhoto";
import Reveal from "@/components/Reveal";
import { rotiBuaya, waLink } from "@/content";
import { mock } from "@/lib/mockup";

// The big order, in the pink of the seserahan ribbon. Photo first on desktop.
// Phone order: heading + body, photo, pre-order + button.
export default function RotiBuaya() {
  return (
    <section className="section bg-frosting" aria-labelledby="buaya-title">
      <Container>
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-6">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end lg:pl-10">
            <h2 id="buaya-title" className="t-head">
              {rotiBuaya.heading}
            </h2>
            <p className="mt-4 max-w-[44ch]" {...mock(rotiBuaya.body.mockup)}>
              {rotiBuaya.body.text}
            </p>
          </div>

          <div className="my-5 lg:my-0 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
            <ProductPhoto photo={rotiBuaya.photo} ratio="16 / 10" className="max-w-[910px]">
              <figcaption>
                <PriceCard name={rotiBuaya.labelPair} edge="top" />
                <PriceCard name={rotiBuaya.labelSmall} />
              </figcaption>
            </ProductPhoto>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:pl-10">
            <p className="font-bold max-w-[40ch]" {...mock(rotiBuaya.preorder.mockup)}>
              {rotiBuaya.preorder.text}
            </p>
            <Button
              href={waLink(rotiBuaya.waMessage)}
              icon="wa"
              external
              mockup={rotiBuaya.button.mockup}
              className="mt-5"
            >
              {rotiBuaya.button.text}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
