import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Niche from "@/components/Niche";
import { sweets } from "@/content";
import { mock } from "@/lib/mockup";

export default function Sweets() {
  const [feature, ...rest] = sweets.items;
  return (
    <section id="manis" aria-labelledby="manis-h" className="section">
      <Container>
        <Reveal className="sweets-grid">
          <div className="sweets-head">
            <h2 id="manis-h" className="t-head">
              {sweets.heading}
            </h2>
            <p className="t-body mt-3 measure" {...mock(sweets.intro.mockup)}>
              {sweets.intro.text}
            </p>
            <p className="t-small price-line" {...mock(sweets.price.mockup)}>
              {sweets.price.text}
            </p>
          </div>

          <article className="sweets-feature" {...mock(feature.mockup)}>
            <Niche art={feature.art} label={feature.artLabel} className="niche-large" />
            <div className="treat-text">
              <h3 className="t-lead treat-name">{feature.name}</h3>
              <p className="t-body treat-note">{feature.note}</p>
            </div>
          </article>

          <ul className="sweets-list">
            {rest.map((t) => (
              <li key={t.id} className="sweets-item" {...mock(t.mockup)}>
                <Niche
                  art={t.art}
                  label={t.artLabel}
                  tone={t.art === "cakeOfDay" ? "lilac" : "sand"}
                  className="niche-small"
                />
                <div className="treat-text">
                  <h3 className="t-lead treat-name">{t.name}</h3>
                  <p className="t-body treat-note">{t.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
