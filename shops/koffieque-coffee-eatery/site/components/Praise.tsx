import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Paraphrased from Google reviews. No names, no stars, no quote marks.
export default function Praise() {
  return (
    <section aria-labelledby="praise-title" className="section praise">
      <Container className="praise-grid">
        <div className="praise-head">
          <h2 id="praise-title" className="h-section">
            {praise.heading}
          </h2>
          <p className="mt-3 text-abu">{praise.source}</p>
        </div>
        <Reveal className="praise-body">
          <ul className="praise-list">
            {praise.items.map((p) => (
              <li key={p.text} className="praise-item t-lead font-medium">
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
