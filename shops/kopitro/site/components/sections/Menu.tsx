import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MenuArt from "@/components/art/MenuArt";
import { copy, menu } from "@/content";
import { mock } from "@/lib/mockup";

// 2. Menu andalan: the counter continues; five products stand on one 2px malam shelf line.
// 6-column grid from 1024px (V60 spans 2), 2 columns below. No column gap, so the shelf is one line.
export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        <Reveal>
          <div className="grid gap-x-6 lg:grid-cols-12">
            <h2 id="menu-title" className="f-head t-head lg:col-span-7">
              {copy.menu.heading}
            </h2>
            <p className="t-body mt-3 measure lg:col-span-7" {...mock(copy.menu.intro.mockup)}>
              {copy.menu.intro.text}
            </p>
          </div>
          <ul className="menu-grid mt-10 md:mt-14">
            {menu.map((item) => (
              <li key={item.id} className={item.wide ? "menu-item menu-item-wide" : "menu-item"}>
                <div className="menu-shelf">
                  <MenuArt art={item.art} />
                </div>
                <div className="menu-text">
                  <h3 className="f-caps t-lead" {...mock(item.nameMockup)}>
                    {item.name}
                  </h3>
                  <p className="tabular mt-1 t-body font-bold" {...mock(item.priceMockup)}>
                    {item.price}
                  </p>
                  <p className="mt-2 t-body" {...mock(item.noteMockup)}>
                    {item.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="t-small mt-8 font-medium" {...mock(copy.menu.footnote.mockup)}>
            {copy.menu.footnote.text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
