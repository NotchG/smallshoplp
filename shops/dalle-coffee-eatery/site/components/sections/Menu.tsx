import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Niche from "@/components/Niche";
import KitchenList from "@/components/KitchenList";
import IcedTea from "@/components/illustrations/IcedTea";
import IcedCoffee from "@/components/illustrations/IcedCoffee";
import IcedLatteCrumble from "@/components/illustrations/IcedLatteCrumble";
import FlatbreadPlate from "@/components/illustrations/FlatbreadPlate";
import { mock } from "@/lib/mockup";
import { menu } from "@/content";

const DRAWINGS = {
  "iced-tea": (l: string) => <IcedTea label={l} />,
  "iced-coffee": (l: string) => <IcedCoffee label={l} />,
  latte: (l: string) => <IcedLatteCrumble label={l} />,
};

const LABELS = {
  "iced-tea": "Gambar Dalle Iced Tea: gelas bening berisi teh, nata de coco, biji chia, es, dan sendok panjang.",
  "iced-coffee": "Gambar Dalle Iced Coffee: gelas bening berisi kopi dengan lapisan susu, es, dan tutup datar.",
  latte: "Gambar es latte dengan busa bertabur cookie crumble, dan piring kecil berisi tiga kukis.",
};

export default function Menu() {
  return (
    <section id="menu" className="section bg-plaster on-plaster" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <div className="grid-12 gap-y-12 lg:gap-y-20">
            <header className="lg:col-span-4">
              <h2 id="menu-title" className="t-head">
                {menu.heading}
              </h2>
              <p className="t-body mt-4 max-w-[30rem]" {...mock(menu.intro.mockup)}>
                {menu.intro.text}
              </p>
              <p className="t-small muted-plaster mt-3">{menu.priceNote.text}</p>
            </header>

            <ul className="grid gap-8 md:grid-cols-3 md:gap-6 lg:col-start-5 lg:col-span-8">
              {menu.drinks.map((d) => (
                <li key={d.id} className="drink">
                  <Niche>{DRAWINGS[d.id](LABELS[d.id])}</Niche>
                  <div>
                    <h3 className="t-lead font-display" {...mock(d.name.mockup)} data-check>
                      {d.name.text}
                    </h3>
                    {d.price && (
                      <p className="t-price mt-1.5" {...mock(d.price.mockup)} data-check>
                        {d.price.text}
                      </p>
                    )}
                    <p className="t-small muted-plaster mt-2" {...mock(d.desc.mockup)}>
                      {d.desc.text}
                    </p>
                    {d.note && (
                      <p className="t-small mt-1.5 font-medium text-pandan" {...mock(d.note.mockup)}>
                        {d.note.text}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="md:col-span-7 lg:col-span-6">
              <Niche wide>
                <FlatbreadPlate label="Gambar roti pipih bundar dengan meses coklat dan parutan keju, di atas piring hijau sage bergaris." />
              </Niche>
              <h3 className="t-lead font-display mt-5" {...mock(menu.plate.name.mockup)}>
                {menu.plate.name.text}
              </h3>
              <p className="t-small muted-plaster mt-2" {...mock(menu.plate.desc.mockup)}>
                {menu.plate.desc.text}
              </p>
            </div>

            <div className="md:col-start-9 md:col-span-4 md:self-center lg:col-start-8 lg:col-span-4">
              <KitchenList heading={menu.kitchen.heading} items={menu.kitchen.items} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
