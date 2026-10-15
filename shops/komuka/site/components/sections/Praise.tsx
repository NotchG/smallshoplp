import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// "Kata mereka": paraphrased from Google reviews. No quote marks, stars or names.
export default function Praise() {
  return (
    <section aria-labelledby="kata-title" className="bg-kanopi">
      <Container className="section">
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <h2 id="kata-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-small mt-3 font-medium">{praise.note}</p>
          </div>
          <ul className="praise-list lg:col-span-8">
            {praise.items.map((p) => (
              <li key={p.text} className="t-lead">
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
