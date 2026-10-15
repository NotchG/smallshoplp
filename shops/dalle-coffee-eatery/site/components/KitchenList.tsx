import { mock } from "@/lib/mockup";
import type { Item } from "@/content";

// "Dari dapur": name, then its price on the next line. No leaders, nothing pinned right.
export default function KitchenList({
  heading,
  items,
}: {
  heading: string;
  items: { name: Item; price: Item }[];
}) {
  return (
    <div className="kitchen">
      <h3 className="t-lead font-display">{heading}</h3>
      <ul className="mt-5 space-y-5">
        {items.map((it) => (
          <li key={it.name.text} className="border-t border-steel/20 pt-4">
            <p className="t-body" {...mock(it.name.mockup)}>
              {it.name.text}
            </p>
            <p className="t-price mt-1" {...mock(it.price.mockup)}>
              {it.price.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
