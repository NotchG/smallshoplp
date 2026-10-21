import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { menu, type BoardItem } from "@/content";
import { mock } from "@/lib/mockup";
import SectionHead from "./SectionHead";

function Item({ item }: { item: BoardItem }) {
  return (
    <li>
      <span>{item.name}</span>
      {item.serve && <span className="board-meta">{item.serve.join(" · ")}</span>}
      {item.price && (
        <span className="board-meta board-price" {...mock(item.price.mockup)}>
          {item.price.text}
        </span>
      )}
    </li>
  );
}

// The drinks list as the bar's pine-framed black boards, spelled as the shop spells it.
export default function MenuAndalan() {
  return (
    <section aria-labelledby="menu-andalan" className="section ground-kapur menu-section">
      <Container>
        <Reveal>
          <SectionHead id="menu-andalan" title={menu.heading} className="head-gap">
            <p className="t-lead mt-3">{menu.sub}</p>
          </SectionHead>
          <div className="boards">
            {menu.boards.map((b) => (
              <div key={b.title} className="board">
                {b.groups.map((g, gi) => (
                  <div key={gi} className={gi > 0 ? "board-group" : undefined}>
                    <h3 className="t-lead font-display font-bold">{gi === 0 ? b.title : g.title}</h3>
                    {g.items.length > 0 && (
                      <ul role="list" className="board-list tabular">
                        {g.items.map((it) => (
                          <Item key={it.name} item={it} />
                        ))}
                      </ul>
                    )}
                    {g.note && <p className="board-note">{g.note}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
