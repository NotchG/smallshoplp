import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { IceChocoMint, KopiCup, MarshmallowBrownie, SmokedBeefSandwich } from "@/components/art/ProductArt";
import { mock } from "@/lib/mockup";
import { menu, type ArtId } from "@/content";

function Art({ id, label }: { id: ArtId; label: string }) {
  if (id === "iceChocoMint") return <IceChocoMint label={label} />;
  if (id === "kopi") return <KopiCup label={label} />;
  if (id === "brownie") return <MarshmallowBrownie label={label} />;
  return <SmokedBeefSandwich label={label} uid="menu" />;
}

export default function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="section ground-light bg-pagar text-kayu">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
            <h2 id="menu-title" className="t-head text-awning lg:col-span-6">
              {menu.title}
            </h2>
            <p className="t-body mt-4 max-w-[52ch] lg:col-span-6 lg:col-start-7 lg:mt-0" {...mock(menu.intro.mockup)}>
              {menu.intro.text}
            </p>
          </div>

          {/* The shelf: four items standing on one line, labels stacked under each */}
          <ul className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4 lg:mt-14">
            {menu.featured.map((item) => (
              <li key={item.id} className="min-w-0">
                <div className="shelf-box">
                  <Art id={item.id} label={item.artLabel} />
                </div>
                <div className="pr-4 pt-3 lg:pr-8">
                  <h3 className="t-lead font-bold" {...mock(item.name.mockup)}>
                    {item.name.text}
                  </h3>
                  <p className="t-body mt-1 font-bold text-awning" {...mock(item.price.mockup)}>
                    {item.price.text}
                  </p>
                  <p className="t-body mt-2" {...mock(item.desc.mockup)}>
                    {item.desc.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* The full list, three columns, no dot leaders */}
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-x-6">
            {menu.groups.map((group) => (
              <div key={group.title} className="max-w-[320px] border-t-2 border-kayu/20 pt-4 lg:col-span-4">
                <h3 className="t-lead font-bold">{group.title}</h3>
                {group.note && (
                  <p className="t-body mt-1 font-bold text-awning" {...mock(group.note.mockup)}>
                    {group.note.text}
                  </p>
                )}
                <ul className="mt-3">
                  {group.items.map((it) => (
                    <li key={it.text} className={`t-body py-1 ${it.mockup ? "" : "font-bold"}`} {...mock(it.mockup)}>
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="t-small mt-10 text-kayu/80" {...mock(menu.disclaimer.mockup)}>
            {menu.disclaimer.text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
