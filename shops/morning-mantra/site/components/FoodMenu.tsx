import { mock } from "@/lib/mockup";
import type { FoodItem } from "@/content";
import Arrow from "@/components/Arrow";

// Four small groups on the black marble; gold labels, prices inline after the name.
export default function FoodMenu({ groups }: { groups: { label: string; items: FoodItem[] }[] }) {
  return (
    <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="label text-gold">{group.label}</h3>
          <ul className="mt-3">
            {group.items.map((item) =>
              item.href ? (
                <li key={item.name}>
                  <a href={item.href} className="menu-link">
                    {item.name}
                    <Arrow />
                  </a>
                </li>
              ) : (
                <li key={item.name} className="py-1.5">
                  <span {...mock(item.mockup)}>{item.name}</span>
                  {item.price ? (
                    <span className="price text-gold" {...mock(item.priceMockup)}>
                      {item.price}
                    </span>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
