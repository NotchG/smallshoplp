import Container from "./Container";
import Reveal from "./Reveal";
import DrinkArt from "./DrinkArt";
import { Star } from "./Icons";
import { mock } from "@/lib/mockup";
import { coffee, food, menu, nonCoffee, starred, type MenuGroup } from "@/content";

function StarMark() {
  return (
    <Star className="inline-block h-[0.8em] w-[0.8em] translate-y-[-0.06em]" label={menu.starLabel} />
  );
}

// Four starred drinks standing on one Kopi shelf line (desktop), rows on a phone.
function Shelf() {
  return (
    <ul className="shelf mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-6">
      {starred.map((d) => (
        <li
          key={d.name}
          className="flex items-start gap-5 lg:gap-0 border-t border-[rgb(120_65_47/0.18)] py-6 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0 lg:flex-col lg:items-center lg:border-0 lg:py-0 lg:text-center"
        >
          <DrinkArt kind={d.art!} label={d.artLabel!} />
          <div className="min-w-0 pt-2 lg:pt-3">
            <h3 className="t-lead text-kopi">
              {d.name} <StarMark />
            </h3>
            <p className="mt-1.5 font-semibold text-kopi tnum">{d.price}</p>
            <p className="mt-1.5 text-pretty">{d.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Group({ group }: { group: MenuGroup }) {
  return (
    <div {...mock(group.mockup)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="t-lead text-kopi">{group.title}</h3>
        {group.mockup ? <span className="tag">{menu.mockupTag}</span> : null}
      </div>
      <ul className="mt-3 space-y-3">
        {group.rows.map((r) => (
          <li key={r.range}>
            <span>{r.items.join(", ")}</span>
            <span className="mt-0.5 block font-semibold text-kopi tnum">{r.range}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Lists() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-x-6">
      <figure className="lg:col-span-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
          <img
            src={menu.photo.src}
            width={menu.photo.width}
            height={menu.photo.height}
            alt={menu.photo.alt}
            loading="lazy"
            decoding="async"
            className="photo-fill object-[50%_30%]"
          />
        </div>
        <figcaption className="t-small mt-3 font-normal">{menu.photo.caption}</figcaption>
      </figure>

      <div className="lg:col-span-4">
        <h3 className="t-lead text-kopi">{menu.coffeeTitle}</h3>
        <ul className="mt-3 divide-y divide-[rgb(120_65_47/0.16)]">
          {coffee.map((d) => (
            <li key={d.name} className="py-2.5 first:pt-0">
              <p>
                <span className="font-semibold">{d.name}</span>
                <span className="ml-2.5 font-semibold text-kopi tnum">{d.price}</span>
              </p>
              {d.desc ? <p className="text-[0.95em] opacity-85">{d.desc}</p> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-10 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-4 lg:flex lg:gap-10">
        <Group group={nonCoffee} />
        <Group group={food} />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="field-kapur section" aria-labelledby="menu-title">
      <Container>
        <h2 id="menu-title" className="t-head text-kopi">
          {menu.title}
        </h2>
        <p className="t-lead mt-2">{menu.lead}</p>
        <Reveal>
          <Shelf />
        </Reveal>
        <Reveal>
          <Lists />
        </Reveal>
      </Container>
    </section>
  );
}
