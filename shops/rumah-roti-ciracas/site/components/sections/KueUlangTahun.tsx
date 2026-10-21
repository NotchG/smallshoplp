import Container from "@/components/Container";
import Button from "@/components/Button";
import ProductPhoto from "@/components/ProductPhoto";
import Reveal from "@/components/Reveal";
import { kue, waLink } from "@/content";
import { mock } from "@/lib/mockup";

// Mirrors Roti buaya: text and the chocolate cake left, the strawberry cake right.
// Phone order: heading + body, strawberry cake, chocolate cake, pre-order + button.
export default function KueUlangTahun() {
  return (
    <section className="section section-follow bg-frosting" aria-labelledby="kue-title">
      <Container>
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:gap-x-6 lg:gap-y-6">
          <div className="lg:col-span-5 lg:row-start-1">
            <h2 id="kue-title" className="t-head">
              {kue.heading}
            </h2>
            <p className="mt-4 max-w-[40ch]" {...mock(kue.body.mockup)}>
              {kue.body.text}
            </p>
          </div>

          <ProductPhoto
            photo={kue.stroberi.photo}
            ratio="1 / 1"
            className="lg:col-span-7 lg:col-start-6 lg:row-span-3 lg:row-start-1"
          >
            <figcaption className="photo-caption">{kue.stroberi.caption}</figcaption>
          </ProductPhoto>

          <ProductPhoto
            photo={kue.cokelat.photo}
            ratio="2 / 1"
            className="lg:col-span-5 lg:col-start-1 lg:row-start-3 lg:self-start lg:mt-6"
          >
            <figcaption className="photo-caption">{kue.cokelat.caption}</figcaption>
          </ProductPhoto>

          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <p className="font-bold max-w-[40ch]" {...mock(kue.preorder.mockup)}>
              {kue.preorder.text}
            </p>
            <Button href={waLink(kue.waMessage)} icon="wa" external mockup={kue.button.mockup} className="mt-5">
              {kue.button.text}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
