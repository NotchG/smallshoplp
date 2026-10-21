import Container from "@/components/Container";
import PriceCard from "@/components/PriceCard";
import ProductPhoto from "@/components/ProductPhoto";
import Reveal from "@/components/Reveal";
import { etalase } from "@/content";
import { mock } from "@/lib/mockup";

// The everyday shelf: three products, each with its paper price label on its own photo.
export default function Etalase() {
  return (
    <section className="section section-follow etalase bg-butter" aria-labelledby="etalase-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-end">
            <h2 id="etalase-title" className="t-head lg:col-span-6">
              {etalase.heading}
            </h2>
            <p className="t-lead mt-4 lg:mt-0 lg:col-span-5 lg:col-start-8" {...mock(etalase.lead.mockup)}>
              {etalase.lead.text}
            </p>
          </div>

          <ul className="mt-10 grid gap-y-12 gap-x-6 md:mt-14 md:grid-cols-3">
            {etalase.products.map((p) => (
              <li key={p.id}>
                <ProductPhoto photo={p.photo} ratio="4 / 3">
                  <figcaption>
                    <PriceCard as="h3" name={p.name} price={p.price} />
                  </figcaption>
                </ProductPhoto>
                <p className="mt-9 max-w-[36ch]" {...mock(p.desc.mockup)}>
                  {p.desc.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="shelf mt-10 md:mt-12" aria-hidden="true" />
          <p className="mt-6 max-w-[70ch]">
            {etalase.also.map((seg, i) =>
              seg.mockup ? (
                <span key={i} className="nowrap font-bold" {...mock(true)}>
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
