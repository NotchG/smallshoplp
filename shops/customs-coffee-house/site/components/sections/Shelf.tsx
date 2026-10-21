import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BeanJar from "@/components/BeanJar";
import { origins, shelf, shelfCard } from "@/content";
import { mock } from "@/lib/mockup";

// Rak biji kami: the seven origins on the bar, as tape-labelled jars on pine shelves,
// each taste note hanging as a shelf tag under its own jar. Eighth cell: the brew card.
export default function Shelf() {
  return (
    <section id="rak-biji" className="section ground-batu" aria-labelledby="rak-biji-h">
      <Container>
        <div className="section-head">
          <h2 id="rak-biji-h" className="h-section text-cat">
            {shelf.heading}
          </h2>
          <p className="t-lead section-intro">{shelf.intro}</p>
        </div>
        <Reveal>
          <ul className="shelf" aria-label="Biji kopi di rak">
            {origins.map((o, i) => (
              <li key={o.name} className="shelf-cell">
                <div className="shelf-stand">
                  <div className="jar">
                    <BeanJar fill={o.fill} id={String(i)} />
                    <span className="jar-tape t-label">
                      <span className="jar-tape-name">{o.name}</span>
                    </span>
                  </div>
                </div>
                <p className="shelf-tag t-small" {...mock(o.note.mockup)}>
                  {o.note.text}
                </p>
              </li>
            ))}
            <li className="shelf-cell">
              <div className="shelf-stand">
                <div className="shelf-card">
                  <p className="shelf-card-title font-display font-extrabold leading-[1.1]" {...mock(shelfCard.title.mockup)}>
                    {shelfCard.title.text}
                  </p>
                  <p className="t-body leading-[1.35]" {...mock(shelfCard.line.mockup)}>
                    {shelfCard.line.text}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
