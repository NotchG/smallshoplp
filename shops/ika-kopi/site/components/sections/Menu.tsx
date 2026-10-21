import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import RiceBowl from "@/components/illustrations/RiceBowl";
import IcedDrink from "@/components/illustrations/IcedDrink";
import Croissant from "@/components/illustrations/Croissant";
import { menu, type Illustration } from "@/content";
import { mock } from "@/lib/mockup";

const art: Record<Illustration, (p: { className?: string }) => React.ReactNode> = {
  bowl: RiceBowl,
  drink: IcedDrink,
  croissant: Croissant,
};

// Food and non-coffee as real items on a honey-oak shelf. Desktop: one continuous shelf
// across the container with the names under it. Phone: one row per item, a shelf under each.
export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-h" className="section">
      <Container>
        <Reveal>
          <div className="grid-12 lg:items-end">
            <h2 id="menu-h" className="t-head font-display text-accent lg:col-span-6">{menu.heading}</h2>
            <p className="t-lead font-display measure lg:col-span-6 lg:col-start-7" {...mock(menu.lead.mockup)}>
              {menu.lead.text}
            </p>
          </div>

          <ul className="shelf mt-10 lg:mt-16">
            {menu.items.map((m) => {
              const Art = art[m.illustration];
              return (
                <li key={m.name} className="shelf-item" {...mock(m.mockup)}>
                  <div className="shelf-art">
                    <Art className="shelf-svg" />
                  </div>
                  <div className="shelf-line" aria-hidden="true" />
                  <div className="shelf-text">
                    <p>
                      <span className="font-semibold">{m.name}</span>
                      <span className="tail text-muted">
                        <span className="tail-dot">{"\u00a0· "}</span>
                        <span className="whitespace-nowrap">{m.price}</span>
                      </span>
                    </p>
                    <p className="text-muted">{m.line}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="grid-12 mt-10 lg:mt-14">
            {menu.extras.map((x, i) => (
              <li
                key={x.name}
                className={`extra flex items-start gap-3 lg:col-span-6 ${i === 1 ? "lg:col-start-7" : ""}`}
                {...mock(x.mockup)}
              >
                <Icon name={i === 1 ? "clock" : "sparkle"} className="mt-0.5 shrink-0 text-accent" />
                <p>
                  <span className="font-semibold">{x.name}</span>
                  <span className="text-muted">{"\u00a0· "}<span className="whitespace-nowrap">{x.price}</span></span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
