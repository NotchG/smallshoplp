import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DishArt, { PlatedArt, DonutLeaf } from "@/components/art/DishArt";
import { kopi as k } from "@/content";
import type { MenuItem } from "@/content";
import { mock } from "@/lib/mockup";

function MenuList({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="group">
      <h3 className="t-lead">{title}</h3>
      <ul className="t-body">
        {items.map((it) => (
          <li key={it.name} {...mock(it.mockup)}>
            <span className="font-bold">{it.name}</span>
            {it.price && (
              <>
                <span aria-hidden> · </span>
                <span className="price" {...mock(it.price.mockup)}>{it.price.text}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function KopiCamilan() {
  return (
    <section id="kopi" className="section kopi on-dark" aria-labelledby="kopi-title">
      <Container>
        <Reveal className="split kopi-grid">
          <div className="kopi-head">
            <h2 id="kopi-title" className="t-head">{k.title}</h2>
            <p className="sec-intro t-body">{k.intro}</p>
          </div>

          <div className="kopi-shelf shelf" aria-label={k.shelfLabel} role="group">
            <div>
              <div className="donut-leaf">
                <DonutLeaf />
                <ul className="shelf-row">
                  {k.donuts.map((d) => (
                    <li key={d.name} className="shelf-item">
                      <div className="art"><DishArt name={d.art!} label={`donat ${d.name.toLowerCase()}`} /></div>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="shelf-row shelf-labels" aria-hidden>
                {k.donuts.map((d) => (
                  <li key={d.name} className="shelf-label">{d.name}</li>
                ))}
              </ul>
              <p className="donut-price t-body">
                <span className="font-bold font-display">{k.donutTitle}</span>
                <span aria-hidden> · </span>
                <span {...mock(k.donutPrice.mockup)}>{k.donutPrice.text}</span>
              </p>
            </div>
            <div className="shelf-glass" aria-hidden />
            <ul className="shelf-row">
              {k.snacks.map((s) => (
                <li key={s.name} className="shelf-item">
                  <div className="art">
                    {s.art === "latte" ? <DishArt name="latte" label={s.name} /> : <PlatedArt name={s.art!} label={s.name} />}
                  </div>
                  <span className="shelf-label">{s.name}</span>
                  {s.price && <span className="shelf-price t-small" {...mock(s.price.mockup)}>{s.price.text}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="kopi-card menu-card">
            <MenuList title={k.coffeeTitle} items={k.coffee} />
            <MenuList title={k.nonCoffeeTitle} items={k.nonCoffee} />
            <p className="note type t-small card-note" {...mock(k.cardNote.mockup)}>{k.cardNote.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
