import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import HouseElevation from "@/components/art/HouseElevation";
import { mock } from "@/lib/mockup";
import { place } from "@/content";

// The facilities told by the building itself: the drawing, then floor by floor.
export default function Place() {
  return (
    <section id="tempat" aria-labelledby="tempat-h" className="section ground-beton">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-12">
            <h2 id="tempat-h" className="h-section lg:col-span-6">
              {place.heading}
            </h2>
            <p className="t-lead mt-4 lg:col-span-6 lg:mt-0" {...mock(place.lead.mockup)}>
              {place.lead.text}
            </p>
          </div>

          <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12">
            <div className="lg:col-span-6">
              <HouseElevation label={place.drawingAlt} />
            </div>
            <dl className="mt-10 lg:col-span-6 lg:mt-0">
              {place.floors.map((f, i) => (
                <div
                  key={f.label}
                  className={`grid grid-cols-[6.5rem_1fr] gap-x-4 py-5 ${i ? "border-t border-kapur" : ""}`}
                >
                  <dt className="label pt-1 text-batu">{f.label}</dt>
                  <dd className="t-body" {...mock(f.text.mockup)}>
                    {f.text.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
