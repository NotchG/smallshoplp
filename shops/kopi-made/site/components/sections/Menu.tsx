import { menu } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MenuBoard from "@/components/MenuBoard";

// The menu wall: Minum and Makan boards, plus a small board for Es kopimade to go.
// Phone order: Minum, to go, Makan. Desktop: Minum left across both rows, Makan and to go stacked right.
export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-h" className="section bg-wall">
      <Container>
        <h2 id="menu-h" className="t-head">
          {menu.heading}
        </h2>
        <p className="t-small mt-3 text-mist">
          {menu.note.text} <span {...mock(menu.priceNote.mockup)}>{menu.priceNote.text}</span>
        </p>
        <Reveal className="menu-wall mt-10 grid gap-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-6 lg:row-span-2 lg:row-start-1">
            <MenuBoard board={menu.minum} id="minum" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
            <article className="pine-frame h-full" aria-labelledby="togo-h">
              <div className="board-pad">
                <h3 id="togo-h" className="t-lead font-semibold text-cream">
                  {menu.toGo.title}
                </h3>
                <div className="dot-wrap mt-3">
                  <ul className="dot-list t-body text-cream">
                    {menu.toGo.items.map((it) => (
                      <li key={it.text}>{it.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <MenuBoard board={menu.makan} id="makan" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
