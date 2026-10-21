import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Carbonara, CappuccinoSet, MieAceh } from "@/components/DishArt";
import { menu, type MenuGroup } from "@/content";
import { mock } from "@/lib/mockup";

function Visual({ kind }: { kind: MenuGroup["visual"] }) {
  if (kind === "mie") return <MieAceh className="dish" />;
  if (kind === "carbonara") return <Carbonara className="dish" />;
  if (kind === "cappuccino") return <CappuccinoSet className="dish" />;
  return (
    <img
      src={menu.omeletPhoto.src}
      width={menu.omeletPhoto.width}
      height={menu.omeletPhoto.height}
      alt={menu.omeletPhoto.alt}
      loading="eager"
      fetchPriority="low"
      decoding="async"
      className="dish dish-photo"
    />
  );
}

// Placemats on the wood table: the dish visual beside (or above) its list.
function Placemat({ group }: { group: MenuGroup }) {
  return (
    <article
      aria-labelledby={`menu-${group.id}`}
      className="placemat flex flex-col gap-6 md:flex-row md:items-start md:gap-8 lg:flex-col xl:flex-row"
    >
      <Visual kind={group.visual} />
      <div className="min-w-0 flex-1">
        <h3 id={`menu-${group.id}`} className="t-lead font-display font-bold text-teal-tua">
          {group.category}
        </h3>
        <p {...mock(group.from.mockup)} className="mt-0.5 font-semibold text-teal-tua tabular-nums">
          {group.from.text}
        </p>
        <ul className="mt-5 space-y-4">
          {group.items.map((d) => (
            <li key={d.name} {...mock(d.mockup)}>
              <p className="font-semibold leading-snug">{d.name}</p>
              {d.price && (
                <p {...mock(d.price.mockup)} className="mt-0.5 font-semibold text-teal-tua tabular-nums">
                  {d.price.text}
                </p>
              )}
              {d.note && (
                <p {...mock(d.note.mockup)} className="mt-0.5 text-tinta/80">
                  {d.note.text}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="section bg-kayu">
      <Container>
        <h2 id="menu-title" className="t-head text-tinta">{menu.heading}</h2>
        <p {...mock(menu.intro.mockup)} className="t-body mt-4 max-w-[56ch]">
          {menu.intro.text}
        </p>
        <Reveal className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-8">
          {menu.groups.map((g) => (
            <Placemat key={g.id} group={g} />
          ))}
        </Reveal>
        <p {...mock(menu.note.mockup)} className="t-small mt-5 font-semibold">
          {menu.note.text}
        </p>
      </Container>
    </section>
  );
}
