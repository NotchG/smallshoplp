import { mock } from "@/lib/mockup";
import type { Dish } from "@/content";

// Name, then " · Rp 45rb" inline (never right-aligned across a row), description under it.
export default function DishList({ items, cols = false }: { items: Dish[]; cols?: boolean }) {
  return (
    <ul className={`dish-list${cols ? " dish-list--cols" : ""}`}>
      {items.map((d) => (
        <li key={d.name.text}>
          <p>
            <span className="dish-name" {...mock(d.name.mockup)}>
              {d.name.text}
            </span>
            {d.price && (
              <span className="dish-price" {...mock(d.price.mockup)}>
                {" · "}
                {d.price.text}
              </span>
            )}
          </p>
          {d.desc && (
            <p className="dish-desc" {...mock(d.desc.mockup)}>
              {d.desc.text}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
