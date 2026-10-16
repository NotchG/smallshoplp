import Container from "./Container";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { praise, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Paraphrased from the Google reviews. No quote marks, no names.
export default function Praise() {
  return (
    <section id="kata-mereka" className="section praise on-cream" aria-labelledby="praise-title">
      <Container>
        <Reveal className="praise-grid">
          <div className="praise-head">
            <h2 id="praise-title" className="t-head font-display">
              {praise.title}
            </h2>
            <p className="praise-rating t-lead">{praise.rating}</p>
            <p className="praise-note t-small">{praise.note}</p>
            <a href={shop.mapsUrl} className="text-link praise-link">
              {praise.link}
              <ArrowRight />
            </a>
          </div>
          <ul className="praise-list">
            {praise.items.map((p) => (
              <li key={p.text} className="praise-item t-lead" {...mock(p.mockup)}>
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
