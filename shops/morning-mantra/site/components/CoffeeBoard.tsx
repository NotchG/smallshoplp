import { mock } from "@/lib/mockup";
import type { BoardItem } from "@/content";

// The navy board behind the bar, with the names exactly as the shop writes them.
// Prices sit 12px after their name, never in a right-hand column.
export default function CoffeeBoard({ header, items }: { header: string; items: BoardItem[] }) {
  return (
    <div className="board bg-navy on-dark">
      <p className="label text-gold">{header}</p>
      <ul className="board-list">
        {items.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <span className="board-price nums" {...mock(item.mockup)}>
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
