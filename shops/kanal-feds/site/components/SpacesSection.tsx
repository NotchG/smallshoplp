import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Square from "@/components/Square";
import PhotoPlaceholder, { PavingDefs } from "@/components/PhotoPlaceholder";
import { spaces } from "@/content";
import { mock } from "@/lib/mockup";

// "Ruang kami" on palm: the terrace's shade. Text cols 1–5, placeholders cols 6–12.
export default function SpacesSection() {
  const [terrace, inside, sofa] = spaces.placeholders;
  return (
    <section id="ruang" aria-labelledby="ruang-title" className="on-palm section relative bg-palm text-chalk">
      <PavingDefs />
      <Container>
        <Reveal className="spaces-grid">
          {/* Phone order: intro, terrace, list, pair. Desktop: text left (1–5), photos right (6–12). */}
          <div className="spaces-left">
            <div className="spaces-intro">
              <h2 id="ruang-title" className="t-head">
                {spaces.title}
              </h2>
              <p className="t-lead measure mt-4" {...mock(spaces.lead.mockup)}>
                {spaces.lead.text}
              </p>
              <p className="t-body measure mt-4 text-muted-palm">{spaces.intro}</p>
            </div>

            <ul className="spaces-list space-y-4">
              {spaces.list.map((s) => (
                <li key={s.name} className="flex gap-3">
                  <Square className="square-inline" />
                  <span>
                    <span className="t-body block font-medium">{s.name}</span>
                    <span className="t-body block text-muted-palm">{s.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="spaces-right">
            <PhotoPlaceholder
              className="spaces-main ratio-16-10"
              label={terrace.label}
              alt={terrace.alt}
              prefix={spaces.placeholderPrefix}
              mockup={terrace.mockup}
            />
            <div className="spaces-pair grid grid-cols-2 gap-3 lg:gap-6">
              <PhotoPlaceholder
                className="ratio-4-3"
                label={inside.label}
                alt={inside.alt}
                prefix={spaces.placeholderPrefix}
                mockup={inside.mockup}
              />
              <PhotoPlaceholder
                className="ratio-4-3"
                label={sofa.label}
                alt={sofa.alt}
                prefix={spaces.placeholderPrefix}
                mockup={sofa.mockup}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
