import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { amenities } from "@/content";
import { mock } from "@/lib/mockup";

// Practical reassurance. Ground semen, a 2px steel rule above. 4 + 8 (2×2) on desktop.
export default function Amenities() {
  return (
    <section className="bg-semen pb-(--section-y)" aria-labelledby="nyaman-title">
      <Container>
        <div className="rule pt-12 md:pt-16 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <h2 id="nyaman-title" className="t-head head-gap lg:col-span-4 lg:mb-0">
            {amenities.heading}
          </h2>
          <Reveal as="ul" className="grid md:grid-cols-2 md:gap-x-8 lg:col-span-8 lg:gap-x-6">
            {amenities.items.map((a) => (
              <li key={a.name} className="comfort-item rule pt-4 pb-8">
                <h3 className="t-body font-extrabold">{a.name}</h3>
                <p className="t-body measure mt-1">{a.text}</p>
                {a.extra && (
                  <p className="t-body mt-1" {...mock(a.extra.mockup)}>
                    {a.extra.text}{" "}
                    {a.extra.mockup && (
                      <span className="t-small ml-1 inline-block rounded-sm border border-baja px-1.5 align-middle">
                        {amenities.mockupTag}
                      </span>
                    )}
                  </p>
                )}
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
