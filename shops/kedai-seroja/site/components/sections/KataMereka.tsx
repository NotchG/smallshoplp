import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { kata as k } from "@/content";

// Paraphrased review themes in a floor-grid (1 px lines, not boxes). No names, no quotes.
export default function KataMereka() {
  return (
    <section id="kata" className="section bg-putih" aria-labelledby="kata-title">
      <Container>
        <Reveal className="split">
          <div className="split-4">
            <h2 id="kata-title" className="t-head">{k.title}</h2>
            <p className="rating">{k.rating}</p>
            <p className="note type t-small kata-note">{k.note}</p>
          </div>
          <ul className="split-8 themes">
            {k.themes.map((t) => (
              <li key={t.title} className="theme">
                <h3 className="t-lead">{t.title}</h3>
                <p className="t-body">{t.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
