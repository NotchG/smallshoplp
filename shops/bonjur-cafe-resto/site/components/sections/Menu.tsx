import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import AwningValance from "@/components/AwningValance";
import BeefTeriyaki from "@/components/art/BeefTeriyaki";
import FriesBasket from "@/components/art/FriesBasket";
import Kopi from "@/components/art/Kopi";
import { mock } from "@/lib/mockup";
import { art, menu, type MenuCategory } from "@/content";

function CategoryText({ cat, id }: { cat: MenuCategory; id: string }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 id={id} className="t-lead font-bold">
          {cat.name}
        </h3>
        <p className="font-semibold text-amber" {...mock(cat.from.mockup)}>
          {cat.from.text}
        </p>
      </div>
      {cat.desc && (
        <p className="mt-2 text-blue-soft measure" {...mock(cat.desc.mockup)}>
          {cat.desc.text}
        </p>
      )}
      <ul className="dot-list mt-3" aria-labelledby={id}>
        {cat.items.map((it) => (
          <li key={it.text} className={it.strong ? "font-semibold" : undefined}>
            <span {...mock(it.mockup)}>{it.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideArt({ kind }: { kind: MenuCategory["art"] }) {
  if (kind === "fries") return <FriesBasket label={art.fries} className="w-full" />;
  if (kind === "kopi") return <Kopi label={art.kopi} className="w-full" />;
  return null;
}

// Full-bleed blue: Beef Teriyaki first, then the three categories with "mulai" prices
// next to their names. The blue scallops at the bottom are the valance's second appearance.
export default function Menu() {
  const [main, ...rest] = menu.categories;
  return (
    <section id="menu" aria-labelledby="menu-title" className="scroll-mt-4">
      <div className="ground-blue section">
        <Container>
          <Reveal>
            <div className="grid gap-x-8 lg:grid-cols-12">
              <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:self-end">
                <h2 id="menu-title" className="t-head">
                  {menu.title}
                </h2>
                <p className="t-lead mt-3 measure" {...mock(menu.lead.mockup)}>
                  {menu.lead.text}
                </p>
              </div>
              <figure className="mt-8 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
                <BeefTeriyaki label={art.teriyaki} className="mx-auto w-full max-w-[440px]" />
                <figcaption className="t-small mt-2 text-center text-blue-soft">
                  {menu.featuredCaption}
                </figcaption>
              </figure>
              <div className="mt-8 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:mt-10 lg:self-start">
                <CategoryText cat={main} id="menu-cat-0" />
              </div>
            </div>

            <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-8">
              {rest.map((cat, i) => (
                <div key={cat.name} className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="w-40 shrink-0 lg:w-44">
                    <SideArt kind={cat.art} />
                  </div>
                  <CategoryText cat={cat} id={`menu-cat-${i + 1}`} />
                </div>
              ))}
            </div>

            <p className="t-small mt-12 text-blue-soft" {...mock(menu.note.mockup)}>
              {menu.note.text}
            </p>
          </Reveal>
        </Container>
      </div>
      <AwningValance variant="edge" />
    </section>
  );
}
