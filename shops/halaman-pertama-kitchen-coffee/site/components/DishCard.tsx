import type { Dish } from "@/content";
import { mock } from "@/lib/mockup";

// A dish photo cropped from the owner's own photo, name with its price inline.
export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <figure>
      <img
        src={dish.img}
        alt={dish.alt}
        width={800}
        height={600}
        fetchPriority="low"
        decoding="async"
        className="dish-img"
      />
      <figcaption className="mt-3">
        <p className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-semibold" {...mock(dish.nameMockup)}>
            {dish.name}
          </span>
          {dish.price && (
            <span className="price nums" {...mock(dish.mockup)}>
              {dish.price}
            </span>
          )}
        </p>
        <p className="text-abu mt-0.5">{dish.line}</p>
      </figcaption>
    </figure>
  );
}
