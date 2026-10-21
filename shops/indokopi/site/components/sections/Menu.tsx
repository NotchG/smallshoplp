import Container from "@/components/Container";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";
import { DrinkGlass, NoodlePlate } from "@/components/Art";
import { featured, menu, menuIntro, type Featured } from "@/content";
import { mock } from "@/lib/mockup";

function ArtFor({ item }: { item: Featured }) {
  const label = `Ilustrasi ${item.name}`;
  if (item.art === "indomie") return <NoodlePlate label={label} className="h-[62%] w-auto" />;
  return <DrinkGlass kind={item.art} label={label} className="h-full w-auto" />;
}

export default function Menu() {
  return (
    <section className="ground-dinding" aria-labelledby="menu-judul">
      <Reveal>
        <Container className="section-t">
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-8 lg:items-end">
            <div className="lg:col-span-6">
              <Plate as="h2" id="menu-judul" head className="t-head sign-caps">
                Menu andalan
              </Plate>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-lead font-semibold" {...mock(menuIntro.line.mockup)}>
                {menuIntro.line.text}
              </p>
              <p className="mt-2 text-konter measure">{menuIntro.howToOrder.text}</p>
            </div>
          </div>

          {/* Products stand on one continuous counter ledge per row (column-gap 0). */}
          <ul className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-10">
            {featured.map((item) => (
              <li key={item.name} {...mock(item.mockup)}>
                <div className="art-box flex items-end justify-center px-2">
                  <ArtFor item={item} />
                </div>
                <div className="ledge" aria-hidden="true" />
                <div className="pt-4 pr-3 lg:pr-6">
                  <h3 className="t-lead font-bold balance">{item.name}</h3>
                  {item.price && <p className="nums mt-2">{item.price}</p>}
                  {item.note && <p className="mt-2 t-small lg:t-body text-konter pretty">{item.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Container>

        <div className="konter-band mt-12 lg:mt-16">
          <Container className="py-12 md:py-16 lg:py-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {menu.map((group) => (
              <div key={group.title}>
                <h3 className="t-lead sign-caps text-rambu">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((it) => (
                    <li key={it.name} {...mock(it.mockup)}>
                      {it.name}
                      {it.price && <span className="nums whitespace-nowrap text-rambu ml-3">{it.price}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        </div>
      </Reveal>
    </section>
  );
}
