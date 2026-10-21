import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Paraphrased themes from real reviews. No quotes, no names, no star widget.
export default function Praise() {
  return (
    <section id="ulasan" className="section bg-plaster" aria-labelledby="ulasan-judul">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <p className="kicker text-clay">{praise.kicker}</p>
            <h2 id="ulasan-judul" className="h-wide t-head mt-3">
              {praise.heading}
            </h2>
            <p className="t-body text-clay mt-4">{praise.note}</p>
          </div>
          <ul role="list" className="mt-10 lg:mt-0 lg:col-start-6 lg:col-span-7 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {praise.themes.map((t) => (
              <li key={t.title}>
                <div className="theme-head">
                  <span className="ring-bullet" aria-hidden="true" />
                  <h3 className="t-lead font-bold">{t.title}</h3>
                </div>
                <p className="t-body mt-2 text-clay">{t.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
