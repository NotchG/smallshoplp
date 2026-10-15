import type { Item } from "@/content";
import { mock } from "@/lib/mockup";

// A list whose bullets are the shelf's LED strip in miniature: 16x2px white ticks.
export default function LedList({
  items,
  className = "",
  itemClassName = "",
  label,
}: {
  items: Item[];
  className?: string;
  itemClassName?: string;
  label?: string;
}) {
  return (
    <ul className={`led-list ${className}`} aria-label={label}>
      {items.map((item) => (
        <li key={item.text} className={itemClassName} {...mock(item.mockup)}>
          <span aria-hidden="true" className="led-tick" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
