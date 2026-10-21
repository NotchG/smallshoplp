import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProductArt, { PaketArt } from "@/components/art/ProductArt";
import { menu, type Featured } from "@/content";
import { mock } from "@/lib/mockup";

const FIELD: Record<Featured["field"], string> = {
  kuning: "bg-kuning",
  bata: "bg-bata",
  ink: "bg-ink",
  hijau: "bg-hijau",
  paper: "bg-paper field-paper",
};

function Print({ item, large = false }: { item: Featured; large?: boolean }) {
  return (
    <li className={large ? "print-large col-span-2 md:row-span-2" : "flex flex-col"}>
      <figure className="flex h-full flex-col" {...mock(item.mockup)}>
        <div className="frame">
          <div className={`field ${FIELD[item.field]}`}>
            <ProductArt id={item.id} label={item.artLabel} />
          </div>
        </div>
        <figcaption className="plaque">
          <span className="plaque-name">{item.name}</span>
          <span className="plaque-price tabular">{item.price}</span>
        </figcaption>
      </figure>
    </li>
  );
}

// Five products hung like the album covers on the 2nd-floor wall, then the full example list.
export default function Menu() {
  const [first, ...rest] = menu.featured;
  return (
    <section id="menu" className="section section-follow" aria-labelledby="menu-title">
      <Container>
        <div className="lg:w-7/12">
          <h2 id="menu-title" className="t-head">
            {menu.title}
          </h2>
          <p className="mt-3" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>
          <p className="t-small mt-2 font-bold text-kayu">{menu.note}</p>
        </div>

        <Reveal className="mt-10 lg:mt-12">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:gap-8">
            <Print item={first} large />
            {rest.map((item) => (
              <Print key={item.id} item={item} />
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 lg:mt-20">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" {...mock(menu.groupsMockup)}>
            {menu.groups.map((g) => (
              <div key={g.title}>
                <h3 className="t-lead">
                  {g.title}
                  {g.range && <>{" "}<span className="price-range tabular">{g.range}</span></>}
                </h3>
                <ul className="mt-3 space-y-1.5 border-t-[3px] border-ink pt-3">
                  {g.items.map((i) => (
                    <li key={i.name}>
                      {i.name}
                      {i.price && <>{" "}<span className="price tabular">{i.price}</span></>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="paket mt-12 grid grid-cols-[6.5rem_1fr] items-center gap-x-4 bg-kuning lg:grid-cols-4 lg:gap-x-8" {...mock(menu.paket.mockup)}>
            <div className="paket-art">
              <PaketArt label={menu.paket.artLabel} />
            </div>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4 pr-4 lg:col-span-3 lg:py-6">
              <h3 className="t-lead">{menu.paket.title}</h3>
              <p>{menu.paket.contents}</p>
              <p className="font-extrabold tabular">{menu.paket.price}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
