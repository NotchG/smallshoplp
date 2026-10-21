import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DishArt from "@/components/art/DishArt";
import { menuAndalan as m } from "@/content";
import { mock } from "@/lib/mockup";

// One teak window: jati frame, jati muntins (the grid gap), putih panes.
export default function MenuAndalan() {
  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="sec-head">
            <h2 id="menu-title" className="t-head">{m.title}</h2>
            <p className="sec-intro t-body">{m.intro}</p>
            <p className="note type t-small" {...mock(m.priceNote.mockup)}>{m.priceNote.text}</p>
          </div>
          <ul className="window">
            {m.dishes.map((d) => (
              <li key={d.name} className={`pane${d.featured ? " pane-featured" : ""}`} {...mock(d.mockup)}>
                <div className="pane-art">
                  <DishArt name={d.art} label={d.name} />
                </div>
                <div className="pane-head">
                  <h3 className="pane-name t-lead">{d.name}</h3>
                  <p className="pane-price">
                    {d.price ? (
                      <span className="type t-body" {...mock(d.price.mockup)}>{d.price.text}</span>
                    ) : (
                      <span className="type t-body" data-mockup="">{m.noPrice}</span>
                    )}
                    {d.fromReviews && <span className="type t-small">{m.reviewTag}</span>}
                  </p>
                </div>
                <p className="pane-note t-body" {...mock(d.note.mockup)}>{d.note.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
