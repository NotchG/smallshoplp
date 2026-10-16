import type { ArtId, MenuGroupData } from "@/content";
import { mock } from "@/lib/mockup";
import ArtById from "./ArtById";
import Rack from "./Rack";

// Width of each illustration on its rack, so every product reads at a sensible size.
const artSize: Record<ArtId, string> = {
  "abon-gulung": "w-64",
  pastry: "w-48",
  "cheese-bread": "w-32 md:w-44",
  "chocolate-sourdough": "w-32 md:w-44",
  "donut-pink": "w-22",
  "donut-blue": "w-22",
  "tiramisu-donut": "w-22",
  "cheesecake-slice": "w-40 lg:w-44",
};

// One group of "Dari oven kami": its rack (products with a caption 8px under each slot),
// the h3 with the "mulai" price inline, then the list.
export default function MenuGroup({ data, className = "" }: { data: MenuGroupData; className?: string }) {
  const long = data.items.length > 5;
  return (
    <div className={className}>
      <Rack id={data.id} className="rack-menu flex items-center justify-center px-4 py-5">
        <ul className="flex flex-wrap items-end justify-center gap-x-5 gap-y-4 md:gap-x-8" aria-label={`Contoh ${data.group}`}>
          {data.rack.map((slot) => (
            <li key={slot.caption} className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-3">
                {slot.ids.map((id) => (
                  <ArtById key={id} id={id} className={`${artSize[id]} h-auto`} />
                ))}
              </span>
              <span className="rack-caption t-small font-semibold" {...mock(slot.mockup)}>
                {slot.caption}
              </span>
            </li>
          ))}
        </ul>
      </Rack>

      <h3 className="t-lead heading mt-6 flex flex-wrap items-baseline gap-x-3">
        <span>{data.group}</span>
        {data.from ? (
          <span className="t-body tnum font-normal text-bangku" {...mock(data.from.mockup)}>
            {data.from.label}
          </span>
        ) : null}
      </h3>

      <ul className={`t-body mt-3 ${long ? "menu-cols-2" : ""}`}>
        {data.items.map((item) => (
          <li key={item.name} className="border-t border-dinding/15 py-2" {...mock(item.mockup)}>
            <span>{item.name}</span>
            {item.price ? (
              <span className="tnum ml-3 text-bangku" {...mock(item.price.mockup)}>
                {item.price.label}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
