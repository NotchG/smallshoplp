import Container from "@/components/Container";
import { praise } from "@/content";

// Paraphrased themes from Google reviews: no quotes, no names, no stars.
export default function Praise() {
  return (
    <section className="section praise" aria-labelledby="praise-title">
      <Container className="grid-12 praise-grid">
        <div className="praise-head">
          <h2 id="praise-title" className="h2 t-head">
            {praise.title}
          </h2>
          <p className="praise-rating num">
            {praise.rating}
          </p>
          <p className="praise-lead">{praise.lead}</p>
          <p className="praise-note t-small">{praise.note}</p>
        </div>
        <ul className="themes">
          {praise.themes.map((t) => (
            <li key={t.title} className="theme">
              <h3 className="h3">{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
