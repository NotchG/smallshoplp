import Container from "@/components/Container";
import { praise } from "@/content";

// Paraphrased praise from the Google reviews: no names, no quote marks, no star rows.
// No reveal here (cut in the remove-one-thing pass): the proof is simply there.
export default function PraiseSection() {
  return (
    <section id="ulasan" className="section bg-leaf text-chalk on-dark" aria-labelledby="praise-title">
      <Container>
        <div className="praise-grid grid-12">
          <div className="praise-side">
            <h2 id="praise-title" className="h2">
              {praise.heading}
            </h2>
            <p className="t-lead mt-6 font-bold">{praise.rating}</p>
            <p className="t-small mt-2">{praise.note}</p>
          </div>
          <ul className="praise-list">
            {praise.lines.map((l) => (
              <li key={l.text} className="t-lead">
                {l.text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
