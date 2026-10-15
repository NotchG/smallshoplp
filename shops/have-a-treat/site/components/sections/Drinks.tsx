import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TreatArt from "@/components/art/treats";
import { drinks } from "@/content";
import { mock } from "@/lib/mockup";

export default function Drinks() {
  return (
    <section id="minuman" aria-labelledby="minuman-h" className="section bg-teak text-plaster on-dark">
      <Container>
        <Reveal className="drinks-grid">
          <div className="drinks-head">
            <h2 id="minuman-h" className="t-head">
              {drinks.heading}
            </h2>
            <p className="t-body mt-3" {...mock(drinks.intro.mockup)}>
              {drinks.intro.text}
            </p>
            <p className="t-small price-line" {...mock(drinks.price.mockup)}>
              {drinks.price.text}
            </p>
          </div>

          <ul className="drinks-shelf">
            {drinks.items.map((d) => (
              <li key={d.id} className="drink" {...mock(d.mockup)}>
                <div className="drink-art">
                  <TreatArt art={d.art} label={d.artLabel} className="shelf-art" />
                </div>
                <div className="shelf-line" aria-hidden="true" />
                <div className="treat-text drink-text">
                  <h3 className="t-lead treat-name">{d.name}</h3>
                  <p className="t-body treat-note">{d.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
