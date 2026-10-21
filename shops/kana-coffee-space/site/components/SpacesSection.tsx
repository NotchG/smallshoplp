import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { sectionCopy, spaces, spacesPhotoPlaceholder as ph } from "@/content";

// Satu tempat, banyak ruang (oak): six spaces and surprises, 2 × 3 with hairlines on desktop.
export default function SpacesSection() {
  const { heading, lead } = sectionCopy.spaces;
  return (
    <section id="ruang" className="section ground-oak" aria-labelledby="ruang-title">
      <Container>
        <Reveal className="spaces-grid">
          <div className="spaces-head">
            <h2 id="ruang-title" className="section-head text-rust" {...mock(heading.mockup)}>
              {heading.text}
            </h2>
            <p className="t-lead mt-5 max-w-[22ch] text-pretty" {...mock(lead.mockup)}>
              {lead.text}
            </p>
          </div>
          <ul role="list" className="spaces-list grid gap-x-8 sm:grid-cols-2">
            {spaces.map((s) => (
              <li key={s.name} className="rule-t pt-5 pb-7">
                <h3 className="t-lead font-medium">{s.name}</h3>
                <p className="mt-2 max-w-[34ch] text-pretty">{s.text}</p>
                {s.note && (
                  <p className="t-small mt-2" {...mock(s.note.mockup)}>
                    {s.note.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className="spaces-ph photo-placeholder" {...mock(ph.mockup)}>
            <p className="label">{ph.label}</p>
            <p className="t-small max-w-[36ch] text-pretty">{ph.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
