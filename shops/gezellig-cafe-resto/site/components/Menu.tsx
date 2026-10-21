import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import DishArt from "@/components/DishArt";
import { TulipMark } from "@/components/Icons";
import { menu, type Dish } from "@/content";
import { mock } from "@/lib/mockup";

// Menu andalan: four pictured dishes and text rows, set in a steel mullion + transom like the
// window. Prices sit directly under (cards) or 12px after (rows) the dish name.

function GroupLabel({ id, children }: { id: string; children: string }) {
  return (
    <h3 id={id} className="t-label flex items-center gap-2 text-besi">
      <TulipMark />
      {children}
    </h3>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <li className="flex flex-col">
      {dish.art && <DishArt art={dish.art} className="mb-4 w-full max-w-[150px] md:max-w-[180px] lg:mb-5 lg:max-w-[220px]" />}
      <h4 className="t-lead font-display leading-tight" {...mock(dish.name.mockup)}>
        {dish.name.text}
      </h4>
      {dish.price && (
        <p className="mt-1 font-semibold nums" {...mock(dish.price.mockup)}>
          {dish.price.text}
        </p>
      )}
      {dish.desc && (
        <p className="t-desc mt-2 text-besi-soft" {...mock(dish.desc.mockup)}>
          {dish.desc.text}
        </p>
      )}
    </li>
  );
}

function MenuLine({ dish }: { dish: Dish }) {
  return (
    <li>
      <p>
        <span className="font-display text-[1.125em]" {...mock(dish.name.mockup)}>
          {dish.name.text}
        </span>
        {dish.price && (
          <span className="ml-3 font-semibold nums" {...mock(dish.price.mockup)}>
            {dish.price.text}
          </span>
        )}
      </p>
      {dish.desc && (
        <p className="t-small mt-0.5 text-besi-soft" {...mock(dish.desc.mockup)}>
          {dish.desc.text}
        </p>
      )}
    </li>
  );
}

function Group({ id, group }: { id: string; group: { label: string; featured: Dish[]; list: Dish[] } }) {
  return (
    <div className="menu-cell" role="group" aria-labelledby={id}>
      <GroupLabel id={id}>{group.label}</GroupLabel>
      <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 md:gap-x-8">
        {group.featured.map((d) => (
          <DishCard key={d.name.text} dish={d} />
        ))}
      </ul>
      <ul className="mt-8 space-y-4">
        {group.list.map((d) => (
          <MenuLine key={d.name.text} dish={d} />
        ))}
      </ul>
    </div>
  );
}

function Caption({ className = "" }: { className?: string }) {
  return (
    <p className={`t-small text-besi-soft ${className}`} {...mock(menu.caption.mockup)}>
      {menu.caption.text}
    </p>
  );
}

function ListCell({
  id,
  label,
  items,
  children,
}: {
  id: string;
  label: string;
  items: Dish[];
  children?: React.ReactNode;
}) {
  return (
    <div className="menu-cell flex flex-col" role="group" aria-labelledby={id}>
      <GroupLabel id={id}>{label}</GroupLabel>
      <ul className="mt-5 space-y-4">
        {items.map((d) => (
          <MenuLine key={d.name.text} dish={d} />
        ))}
      </ul>
      {children}
    </div>
  );
}

export default function Menu() {
  return (
    <section aria-labelledby="menu-title" className="section pt-0">
      <Container>
        <Reveal>
          <div className="grid-12 items-end gap-y-4">
            <h2 id="menu-title" className="t-head lg:col-span-5">
              {menu.heading}
            </h2>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-body">
                {menu.intro.text}{" "}
                <span {...mock(menu.indische.mockup)}>{menu.indische.text}</span>
              </p>
              <p className="t-small mt-2 text-besi-soft">{menu.priceLevel}</p>
            </div>
          </div>

          <div className="menu-grid mt-6 lg:mt-10">
            <Group id="menu-belanda" group={menu.belanda} />
            <Group id="menu-nusantara" group={menu.nusantara} />
            <ListCell id="menu-more" label={menu.more.label} items={menu.more.items}>
              {/* Desktop: the caption fills this short cell, next to the dishes it explains. */}
              <Caption className="mt-auto hidden max-w-[30em] pt-8 lg:block" />
            </ListCell>
            <ListCell id="menu-drinks" label={menu.drinks.label} items={menu.drinks.items} />
          </div>

          <Caption className="mt-2 lg:hidden" />
        </Reveal>
      </Container>
    </section>
  );
}
