import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ChilliIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { menu, type MenuItem as Item } from "@/content";

function SpicyChip() {
  return (
    <span className="spicy-chip t-small ml-2 inline-flex items-center gap-1 align-[2px] font-semibold">
      <ChilliIcon className="h-[14px] w-[14px]" />
      {menu.spicyLabel}
    </span>
  );
}

// Price sits 12px after the name on the same line, never in a far right column.
function MenuItem({ item }: { item: Item }) {
  return (
    <li {...mock(item.mockup)}>
      <p className="t-body">
        <span className="font-semibold">{item.name}</span>
        {item.price && (
          <span className="tabular ml-3 whitespace-nowrap text-bilah-muted" {...mock(item.price.mockup)}>
            {item.price.text}
          </span>
        )}
        {item.spicy && <SpicyChip />}
      </p>
      {item.desc && <p className="t-small mt-0.5 text-bilah-muted">{item.desc}</p>}
    </li>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="section bg-beton" aria-labelledby="menu-title">
      <Container>
        <Reveal className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <h2 id="menu-title" className="t-head">
              {menu.heading}
            </h2>
            <p className="t-small mt-3 text-bilah-muted" {...mock(menu.note.mockup)}>
              {menu.note.text}
            </p>
          </div>
          {menu.categories.map((cat) => (
            <div key={cat.name} className="col-span-12 md:col-span-4 lg:col-span-3">
              <h3 className="t-lead font-semibold">{cat.name}</h3>
              <ul className="mt-4 space-y-4 border-t-2 border-bilah pt-4">
                {cat.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
