import Container from "@/components/Container";
import { praise } from "@/content";

// Kata mereka: four themes paraphrased from Google reviews. No quotes, names or stars.
export default function Praise() {
  return (
    <section id="kata-mereka" className="section-compact ground-batu" aria-labelledby="kata-mereka-h">
      <Container className="praise-grid">
        <h2 id="kata-mereka-h" className="h-section text-cat praise-head">
          {praise.heading}
        </h2>
        <ul className="praise-list">
          {praise.themes.map((t) => (
            <li key={t}>
              <span className="praise-rule" aria-hidden="true" />
              <p className="t-lead praise-text">{t}</p>
            </li>
          ))}
        </ul>
        <p className="t-small praise-source">{praise.source}</p>
      </Container>
    </section>
  );
}
