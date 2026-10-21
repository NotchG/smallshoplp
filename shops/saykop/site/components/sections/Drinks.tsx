import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DrinkGlass from "@/components/DrinkGlass";
import { alsoOnMenu, drinks, drinksSection, type Drink } from "@/content";
import { mock } from "@/lib/mockup";

// The named drinks as a line-up, standing on the mural's line (desktop), rows on phones.
function Shelf() {
  return (
    <svg className="drink-shelf" viewBox="0 0 1200 22" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        d="M0 11 C120 6, 220 15, 330 11 S 560 6, 660 11 S 900 16, 1000 10 S 1150 7, 1200 11"
        fill="none"
        stroke="#152E78"
        strokeWidth="5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function DrinkItem({ d }: { d: Drink }) {
  return (
    <li className="drink">
      <div className="drink-glass-box">
        <DrinkGlass id={d.id} spec={d.glass} className="drink-glass" />
      </div>
      <div className="drink-text">
        <h3 className="f-name t-lead drink-name">{d.name}</h3>
        {d.price && " "}
        {d.price && (
          <span className="price drink-price t-body font-bold text-rust" {...mock(d.price.mockup)}>
            {d.price.text}
          </span>
        )}
        <p className="t-body mt-1.5" {...mock(d.line.mockup)}>
          {d.line.text}
        </p>
      </div>
    </li>
  );
}

export default function Drinks() {
  const rows = [drinks.slice(0, 4), drinks.slice(4, 8)];
  return (
    <section id="minuman" aria-labelledby="minuman-h" className="section bg-plaster">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
            <h2 id="minuman-h" className="f-display t-head lg:col-span-6">
              {drinksSection.heading}
            </h2>
            <p className="t-lead mt-3 max-w-[30ch] lg:col-span-6 lg:col-start-7 lg:mt-0" {...mock(drinksSection.intro.mockup)}>
              {drinksSection.intro.text}
            </p>
          </div>

          <div className="mt-10 md:mt-14">
            {rows.map((row, i) => (
              <div key={i} className="drink-row">
                <Shelf />
                <ul className="drink-list">
                  {row.map((d) => (
                    <DrinkItem key={d.id} d={d} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t-2 border-navy pt-6 md:mt-20 md:flex md:gap-8">
            <h3 className="font-bold shrink-0">{alsoOnMenu.label}</h3>
            <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 md:mt-0">
              {alsoOnMenu.items.map((it, i) => (
                <li key={it.name.text} className="whitespace-nowrap">
                  <span {...mock(it.name.mockup)}>{it.name.text}</span>
                  {it.price && (
                    <span className="ml-3 font-bold text-rust" {...mock(it.price.mockup)}>
                      {it.price.text}
                    </span>
                  )}
                  {i < alsoOnMenu.items.length - 1 && <span aria-hidden="true" className="ml-2">·</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
