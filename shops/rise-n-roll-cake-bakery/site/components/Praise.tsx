import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Paraphrases of real reviews: no quote marks, no names, no star widget.
export default function Praise() {
  return (
    <section className="section bg-sage text-walnut" aria-labelledby="praise-title">
      <Container>
        <Reveal>
          <h2 id="praise-title" className="t-head">
            {praise.heading}
          </h2>
          <p className="praise-meta">
            <span className="t-body font-semibold">{praise.rating}</span>
            <span className="t-small">{praise.note}</span>
          </p>
          <div className="praise-grid">
            {praise.items.map((p) => (
              <p key={p.text} className="praise-item t-lead font-display">
                {p.text}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
