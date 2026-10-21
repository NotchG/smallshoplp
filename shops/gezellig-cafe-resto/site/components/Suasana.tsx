import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import { zones } from "@/content";
import { mock } from "@/lib/mockup";

// Suasana (Hijau ground): the rooms and the practical facts, beside a painting frame
// that waits for the owner's photo of the chandelier room.
export default function Suasana() {
  return (
    <section aria-labelledby="suasana-title" className="section on-dark bg-hijau text-kapur">
      <Container>
        <Reveal>
          <div className="grid-12 items-end gap-y-4">
            <h2 id="suasana-title" className="t-head lg:col-span-5">
              {zones.heading}
            </h2>
            <p className="t-lead measure text-balance font-display lg:col-span-7 lg:col-start-6" {...mock(zones.lead.mockup)}>
              {zones.lead.text}
            </p>
          </div>

          <div className="grid-12 mt-10 lg:mt-14">
            <PhotoFrame label={zones.frameLabel.text} className="aspect-[4/3] md:aspect-[2/1] lg:col-span-5 lg:aspect-[5/4]" />
            <ul className="zone-grid lg:col-span-7 lg:col-start-6">
              {zones.items.map((z) => (
                <li key={z.label} className="zone-cell">
                  <h3 className="t-label text-lampu">{z.label}</h3>
                  <p className="t-lead mt-2 font-display" {...mock(z.title.mockup)}>
                    {z.title.text}
                  </p>
                  <p className="t-body mt-1 opacity-85" {...mock(z.body.mockup)}>
                    {z.body.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
