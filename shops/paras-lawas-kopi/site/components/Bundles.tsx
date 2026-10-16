import Container from "./Container";
import Reveal from "./Reveal";
import { BundleArt } from "./illustrations";
import { bundles } from "@/content";
import { mock } from "@/lib/mockup";

// Three enamel plates: the food, its name, and the price tag 12px under the name.
export default function Bundles() {
  return (
    <section id="bundling" className="section bundles on-cream" aria-labelledby="bundling-title">
      <Container>
        <Reveal>
          <h2 id="bundling-title" className="t-head font-display">
            {bundles.title}
          </h2>
          <p className="section-intro t-lead">{bundles.lead}</p>
          <ul className="plates">
            {bundles.items.map((b) => (
              <li key={b.name} className="plate">
                <BundleArt kind={b.art} label={b.artLabel} />
                <h3 className="plate-name t-lead">{b.name}</h3>
                <p className="plate-tags">
                  {b.prices.map((p) => (
                    <span key={p.price} className={p.label ? "tag tag--labelled" : "tag"} {...mock(p.mockup)}>
                      {p.label && (
                        <>
                          <span className="tag-label">{p.label}</span>
                          <span className="sr-only"> </span>
                        </>
                      )}
                      {p.price}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
