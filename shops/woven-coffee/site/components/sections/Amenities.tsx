import { amenities } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

// Six practical reasons as a typographic list: no icons, no cards.
export default function Amenities() {
  return (
    <section className="g-dinding section" aria-labelledby="kenapa-mampir">
      <Container>
        <Reveal className="grid-page gap-y-10">
          <div className="md:col-span-2 lg:col-span-4">
            <h2 id="kenapa-mampir" className="t-head">
              {amenities.heading}
            </h2>
            <p className="t-body mt-5 measure" {...mock(amenities.intro.mockup)}>
              {amenities.intro.text}
            </p>
          </div>
          <dl className="md:col-span-2 lg:col-start-5 lg:col-span-8 grid gap-x-6 sm:grid-cols-2">
            {amenities.items.map((a) => (
              <div key={a.term} className="amenity">
                <dt className="t-term">{a.term}</dt>
                <dd className="t-body text-muted mt-2">{a.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
