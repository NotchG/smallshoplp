import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// 4. Ink field like the shop's dark window glass; themes split by thin chalk mullions.
// Paraphrased themes only: no quote marks, stars, names or dates.
export default function Praise() {
  return (
    <section className="field-dark section bg-tinta text-kapur" aria-labelledby="kata-mereka">
      <Container>
        <Reveal className="grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="kata-mereka" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-lead mt-4">{praise.rating}</p>
            <p className="t-small mt-2">{praise.note}</p>
          </div>
          <ul className="praise-grid col-span-12 lg:col-span-8">
            {praise.themes.map((t) => (
              <li key={t.theme} className="praise-cell">
                <h3 className="t-lead">{t.theme}</h3>
                <p className="t-body mt-2">{t.line}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
