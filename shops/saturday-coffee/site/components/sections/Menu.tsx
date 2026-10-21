import { Fragment } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProductArt from "@/components/ProductArt";
import { menu, type Product } from "@/content";
import { mock } from "@/lib/mockup";

function ProductTile({ p }: { p: Product }) {
  return (
    <li className="product">
      <div className="terrazzo product-plate" {...mock(true)}>
        <ProductArt id={p.id} alt={p.alt} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold leading-snug" {...mock(p.name.mockup)}>
          {p.name.text}
        </p>
        <p className="t-small text-muted" {...mock(p.note.mockup)}>
          {p.note.text}
        </p>
        <p className="t-small t-num font-semibold text-accent" {...mock(p.price.mockup)}>
          {p.price.text}
        </p>
      </div>
    </li>
  );
}

function Group({ label, items }: { label: string; items: Product[] }) {
  return (
    <div className="grid-12 gap-y-5">
      <h3 className="t-lead font-display col-span-12 font-medium lg:col-span-2">{label}</h3>
      <ul className="col-span-12 grid gap-4 md:grid-cols-3 md:gap-6 lg:col-span-10">
        {items.map((p) => (
          <ProductTile key={p.id} p={p} />
        ))}
      </ul>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="on-plaster section" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <h2 id="menu-title" className="t-head">
            {menu.title}
          </h2>
          <p className="mt-3 text-muted">
            <span {...mock(menu.intro.mockup)}>{menu.intro.text}</span>{" "}
            <span {...mock(menu.priceNote.mockup)}>{menu.priceNote.text}</span>
          </p>
          <div className="mt-10 flex flex-col gap-12 md:mt-14 md:gap-14">
            <Group label={menu.drinksLabel} items={menu.drinks} />
            <Group label={menu.foodLabel} items={menu.food} />
            <div className="grid-12 gap-y-3 border-t border-muted/20 pt-8">
              <h3 className="t-lead font-display col-span-12 font-medium lg:col-span-2">{menu.moreLabel}</h3>
              <p className="menu-more col-span-12 lg:col-span-10 lg:pt-1">
                {menu.more.map((m, i) => (
                  <Fragment key={m.text}>
                    <span>
                      <span {...mock(m.mockup)}>{m.text}</span>
                      {i < menu.more.length - 1 && (
                        <span aria-hidden="true" className="pl-2 text-accent">
                          ·
                        </span>
                      )}
                    </span>{" "}
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
