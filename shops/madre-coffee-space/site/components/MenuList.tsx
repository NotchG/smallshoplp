import type { Dish } from "@/content";
import { mock } from "@/lib/mockup";

// Name and price on one line (price 12px after the name, no dot leaders), description below.
export default function MenuList({
  dishes,
  size = "lead",
  className = "",
}: {
  dishes: Dish[];
  size?: "lead" | "body";
  className?: string;
}) {
  return (
    <ul className={`menu-list ${className}`}>
      {dishes.map((d) => (
        <li key={d.name} {...mock(d.mockup)}>
          <div className="dish-line">
            {size === "lead" ? (
              <h3 className="f-name t-lead">{d.name}</h3>
            ) : (
              <span className="t-body font-extrabold">{d.name}</span>
            )}
            {d.price && (
              <span className="price t-body" {...mock(d.price.mockup)}>
                {d.price.text}
              </span>
            )}
          </div>
          {d.desc && <p className="dish-desc measure-body">{d.desc}</p>}
          {d.note && <p className="dish-note">{d.note}</p>}
        </li>
      ))}
    </ul>
  );
}
