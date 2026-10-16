import Container from "./Container";
import Reveal from "./Reveal";
import { ArrowDown } from "./Icons";
import { menu, type MenuItem } from "@/content";
import { mock } from "@/lib/mockup";

// The chalkboard behind the counter, in its own three columns: Kopi · Cemilan · Makanan.
// Prices sit 12px after their item, in the same element, never at the column edge.
export default function MenuBoard() {
  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <h2 id="menu-title" className="t-head font-display">
            {menu.title}
          </h2>
          <p className="section-intro" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>

          <div className="board">
            {menu.columns.map((col) => (
              <div key={col.id} className={`board-col board-col--${col.id}`}>
                <h3 className="board-head t-lead">
                  <span className="board-title">{col.title}</span>
                  {col.priceRange && <span className="board-range">{col.priceRange}</span>}
                </h3>
                <ul className="menu-list">
                  {col.items.map((item) => (
                    <MenuLine key={item.name} item={item} />
                  ))}
                </ul>
                {col.id === "makanan" && (
                  <a href="#bundling" className="text-link board-link">
                    {menu.bundleLink}
                    <ArrowDown />
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="menu-note t-small">{menu.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}

function MenuLine({ item }: { item: MenuItem }) {
  return (
    <li {...mock(item.mockup)}>
      <span>{item.name}</span>
      {item.qty && <span className="menu-qty">{item.qty}</span>}
      {item.price && <span className="menu-price">{item.price}</span>}
      {item.variants && <span className="menu-variants">{item.variants}</span>}
    </li>
  );
}
