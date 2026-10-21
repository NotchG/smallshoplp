import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CameraIcon } from "@/components/Icons";
import { suasana as s } from "@/content";
import { mock } from "@/lib/mockup";

// Two arched owner-photo slots on a wall, the "Home at last." canvas, the red dado band behind.
export default function Suasana() {
  return (
    <section id="suasana" className="section suasana" aria-labelledby="suasana-title">
      <Container>
        <Reveal className="split">
          <div className="split-5">
            <h2 id="suasana-title" className="t-head">{s.title}</h2>
            <p className="sec-intro t-lead suasana-lead" {...mock(s.lead.mockup)}>{s.lead.text}</p>
            <p className="t-body suasana-text measure">{s.text}</p>
            <ul className="facts t-body">
              {s.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className="split-7 suasana-art">
            <div className="arches">
              <div className="arches-band" aria-hidden />
              {s.photoSlots.map((p, i) => (
                <div key={p.label} className={`arch arch-slot arch-slot-${i + 1}`} role="img" aria-label={p.alt}>
                  <p className="slot-label type t-small" aria-hidden>
                    <CameraIcon className="slot-icon" />
                    {p.label}
                  </p>
                </div>
              ))}
              <figure className="canvas-wrap">
                <div className="canvas" lang="en">{s.canvas}</div>
                <figcaption className="canvas-note type t-small">{s.canvasNote}</figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
