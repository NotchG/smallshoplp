import Image from "next/image";
import Reveal from "@/components/Reveal";
import { TegelBand, Tabletop } from "@/components/Tegel";
import SotoBetawi from "@/components/dishes/SotoBetawi";
import PlatterWalties from "@/components/dishes/PlatterWalties";
import CookiesCream from "@/components/dishes/CookiesCream";
import EsKopiSusu from "@/components/dishes/EsKopiSusu";
import { mock } from "@/lib/mockup";
import { menu, type Visual } from "@/content";

const art: Record<Exclude<Visual, "photo">, () => React.JSX.Element> = {
  soto: SotoBetawi,
  platter: PlatterWalties,
  kopi: EsKopiSusu,
  cookies: CookiesCream,
};

function Price({ value, mockup }: { value: string; mockup?: boolean }) {
  return (
    <p className="num t-body mt-1 font-semibold text-bata" {...mock(mockup)}>
      {value}
    </p>
  );
}

export default function Menu() {
  const b = menu.bolvano;
  return (
    <section id="menu" aria-labelledby="menu-title" className="ground-light bg-krem text-malam">
      <TegelBand />
      <Reveal className="container-page section">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <h2 id="menu-title" className="t-head lg:col-span-5">
            {menu.title}
          </h2>
          <p className="t-lead mt-4 max-w-xl lg:col-span-7 lg:mt-0 lg:pb-1" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>
        </div>

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-x-8">
          <article className="md:grid md:grid-cols-2 md:items-end md:gap-x-6 lg:col-span-5 lg:block">
            <div className="crop crop-bolvano">
              <Image src={b.image.src} width={b.image.width} height={b.image.height} alt={b.image.alt} sizes="(min-width:1024px) 480px, 100vw" />
            </div>
            <div>
              <h3 className="t-lead mt-4 font-semibold">{b.name}</h3>
              <Price value={b.price} mockup={b.priceMockup} />
              <p className="t-small mt-2 max-w-sm text-malam/80">{b.desc}</p>
            </div>
          </article>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:col-span-7 lg:mt-0 lg:gap-x-8 lg:gap-y-10">
            {menu.featured.map((d) => {
              const Art = art[d.visual as Exclude<Visual, "photo">];
              return (
                <li key={d.name}>
                  <Tabletop>
                    <Art />
                  </Tabletop>
                  <h3 className="t-lead mt-3 font-semibold" {...mock(d.nameMockup)}>
                    {d.name}
                  </h3>
                  <Price value={d.price} mockup={d.priceMockup} />
                  <p className="t-small mt-2 text-malam/80" {...mock(d.descMockup)}>
                    {d.desc}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-20 lg:grid-cols-5 lg:gap-x-8">
          {menu.categories.map((cat) => (
            <div key={cat.label} className="border-t-2 border-kayu pt-4">
              <h3 className="t-spaced menu-cat text-kayu">{cat.label}</h3>
              <ul className="mt-4 space-y-3">
                {cat.items.map((it) => (
                  <li key={it.name} className="t-body leading-snug" {...mock(it.mockup)}>
                    {it.name}
                    {it.price && <span className="num block font-semibold text-bata">{it.price}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="t-small mt-10 text-malam/80" {...mock(menu.note.mockup)}>
          {menu.note.text}
        </p>
      </Reveal>
    </section>
  );
}
