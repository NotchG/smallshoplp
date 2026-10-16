import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Dripper from "@/components/art/Dripper";
import { menu, type MenuPanel } from "@/content";
import { mock } from "@/lib/mockup";

// "Dari bar kami": intro 4 cols, then a 2×2 board split by ply battens.
// Marbled Cold Brew is the featured panel on a honey field. Prices sit inline after the name.
function Panel({ panel }: { panel: MenuPanel }) {
  const isManual = panel.id === "manual";
  return (
    <article className={`menu-panel ${panel.featured ? "menu-panel-featured" : ""} ${isManual ? "menu-panel-art" : ""}`}>
      {isManual && <Dripper label={menu.dripperLabel} className="menu-dripper" />}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="t-lead" {...mock(panel.name.mockup)}>
            {panel.name.text}
          </h3>
          {panel.price && (
            <p className="t-body nums font-medium" {...mock(panel.price.mockup)}>
              {panel.price.text}
            </p>
          )}
        </div>
        {panel.desc && (
          <p className="t-body t-measure mt-2" {...mock(panel.desc.mockup)}>
            {panel.desc.text}
          </p>
        )}
        {panel.items && (
          <ul className="t-body mt-2">
            {panel.items.map((item) => (
              <li key={item.text} {...mock(item.mockup)}>
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function MenuBoard() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="section bg-wall">
      <Container>
        <Reveal className="grid-12 row-gap-section">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="menu-title" className="t-head head-gap">
              {menu.heading}
            </h2>
            <p className="t-body t-measure lg:max-w-[30ch]" {...mock(menu.intro.mockup)}>
              {menu.intro.text}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 battens battens-ply menu-board">
            {menu.panels.map((panel) => (
              <Panel key={panel.id} panel={panel} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
