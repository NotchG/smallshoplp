import { suasana } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { CourtyardScene } from "@/components/art/Scenes";

export default function Suasana() {
  return (
    <section aria-labelledby="suasana-title" className="section">
      <Container>
        <Reveal className="suasana-grid">
          <div className="suasana-head">
            <h2 id="suasana-title" className="t-head">
              {suasana.heading}
            </h2>
            <p className="t-lead measure mt-5" {...mock(suasana.lead.mockup)}>
              {suasana.lead.text}
            </p>
          </div>
          <PhotoSlot
            tag={suasana.photoTag}
            label="Gambar halaman Clay di malam hari: paviliun kaca, payung, meja bundar dan lampu gantung"
            className="suasana-slot"
          >
            <CourtyardScene />
          </PhotoSlot>
          <ul className="suasana-features">
            {suasana.features.map((f) => (
              <li key={f.title} className="feature">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-text">{f.text}</p>
              </li>
            ))}
          </ul>
          <p className="t-lead suasana-groups" {...mock(suasana.groups.mockup)}>
            <span className="status-dot" aria-hidden="true" />
            {suasana.groups.text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
