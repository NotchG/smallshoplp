import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CappuccinoArt, IcedCoffeeArt } from "@/components/CoffeeArt";
import { MenuGroup } from "@/components/MenuSection";
import { coffee } from "@/content";
import { mock } from "@/lib/mockup";

// Drinks after lunch: the red cup and the tall iced glass, then the example lists.
export default function CoffeeSection() {
  return (
    <section id="ngopi" className="section" aria-labelledby="coffee-title">
      <Container>
        <Reveal className="coffee-grid">
          <div className="coffee-head">
            <h2 id="coffee-title" className="h2">
              {coffee.heading}
            </h2>
            <p className="t-lead mt-4 measure" {...mock(coffee.intro.mockup)}>
              {coffee.intro.text}
            </p>
            <p className="t-small mt-2" {...mock(coffee.note.mockup)}>
              {coffee.note.text}
            </p>
          </div>

          <div className="coffee-art">
            <figure>
              <CappuccinoArt label={coffee.cup.label} className="cup-art" />
              <figcaption>{coffee.cup.caption}</figcaption>
            </figure>
            <figure>
              <IcedCoffeeArt label={coffee.glass.label} className="glass-art" />
              <figcaption>{coffee.glass.caption}</figcaption>
            </figure>
          </div>

          <div className="coffee-lists">
            <div className="menu-group">
              <h3 className="h3">{coffee.kopiTitle}</h3>
              <ul className="menu-list drink-list">
                {coffee.kopi.map((it) => (
                  <li key={it.name} {...mock(it.mockup)}>
                    <span className="name">{it.name}</span>
                    <span className="price">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MenuGroup group={coffee.nonKopi} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
