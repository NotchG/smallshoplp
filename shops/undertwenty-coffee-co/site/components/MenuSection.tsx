import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { EspressoSusu, GreenTeaLatte, PourOver } from "@/components/DrinkArt";
import { featured, menu, menuGroups, type Featured } from "@/content";
import { mock } from "@/lib/mockup";

function Art({ item }: { item: Featured }) {
  const label = item.alt ?? item.name;
  if (item.art === "greenTea") return <GreenTeaLatte label={label} />;
  if (item.art === "pourOver") return <PourOver label={label} />;
  return <EspressoSusu label={label} />;
}

function NamePrice({ item, stacked = false }: { item: Featured; stacked?: boolean }) {
  const price = item.price && (
    <span className={`t-body tnum font-semibold whitespace-nowrap ${stacked ? "block mt-1" : "ml-3"}`}>
      {item.price}
    </span>
  );
  return (
    <>
      <h3 className="t-lead font-semibold text-balance">
        {item.name}
        {!stacked && price}
      </h3>
      {stacked && price}
      <p className="t-body text-muted-semen mt-1">{item.detail}</p>
    </>
  );
}

// Menu andalan (semen): the owner's own iced coffee, three drinks drawn on the kayu counter,
// then the full list as text.
export default function MenuSection() {
  const [photo, ...drawn] = featured;

  return (
    <section id="menu" aria-labelledby="menu-title" className="ground-semen section">
      <Container>
        <Reveal>
          <header className="grid-12 gap-y-4 max-lg:flex max-lg:flex-col max-lg:gap-4 lg:items-end">
            <h2 id="menu-title" className="t-head t-cond lg:col-span-6">
              {menu.heading}
            </h2>
            <p className="t-lead max-w-[34ch] lg:col-span-6" {...mock(menu.lead.mockup)}>
              {menu.lead.text}
            </p>
          </header>

          <div className="mt-8 md:mt-12 grid gap-y-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-6">
            {/* The real drink: owner-2.jpg */}
            <figure className="lg:col-span-5 lg:row-span-2" {...mock(photo.mockup)}>
              <div className="frame">
                <img
                  src="/photos/es-kopi-susu.jpg"
                  width={900}
                  height={1200}
                  alt={menu.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="block w-full aspect-[3/4] object-cover"
                />
              </div>
              <figcaption className="mt-3">
                <NamePrice item={photo} />
              </figcaption>
            </figure>

            {/* Three drawn drinks standing on one kayu counter band */}
            <ul className="grid gap-y-6 content-start lg:col-span-7 lg:grid-cols-3 lg:gap-y-0" aria-label="Minuman lain di menu andalan">
                {drawn.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[7.5rem_1fr] items-end gap-x-5 lg:block"
                    {...mock(item.mockup)}
                  >
                    <div>
                      <div className="px-1 lg:px-4">
                        <Art item={item} />
                      </div>
                      <div className="h-3.5 bg-kayu" aria-hidden="true" />
                    </div>
                    <div className="self-center lg:mt-3 lg:pr-5">
                      <NamePrice item={item} stacked />
                    </div>
                  </li>
                ))}
            </ul>

            {/* Full list, all placeholders */}
            <div className="md:col-span-2 lg:col-span-7">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {menuGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="t-label pb-2 border-b border-arang/25">{group.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((line) => (
                        <li key={line.name} className="t-body" {...mock(line.mockup)}>
                          {line.name}
                          {line.price && (
                            <span className="tnum font-semibold whitespace-nowrap ml-3">{line.price}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="t-small text-muted-semen mt-8" {...mock(menu.note.mockup)}>
                {menu.note.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
