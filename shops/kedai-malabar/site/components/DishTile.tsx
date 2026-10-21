import type { Dish } from "@/content";
import { dishArt } from "@/components/Dishes";
import { mock } from "@/lib/mockup";

const T = "#b4703f";
const K = "#f7f6f2";

// A quarter rosette, like the black/terracotta/white encaustic table tops.
// Four tiles meeting at a corner complete the flower.
function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return (
    <svg className={`tile-corner tile-corner--${pos}`} viewBox="0 0 50 50" aria-hidden="true" focusable="false">
      <path d="M44 0A44 44 0 0 1 0 44" fill="none" stroke={T} strokeWidth="2.5" />
      <path d="M0 0H19A19 19 0 0 1 0 19Z" fill={T} />
      <ellipse cx="31" cy="0" rx="9" ry="4.5" fill={K} />
      <ellipse cx="0" cy="31" rx="4.5" ry="9" fill={K} />
      <ellipse cx="21.9" cy="21.9" rx="9" ry="4.5" transform="rotate(45 21.9 21.9)" fill={K} />
      <path d="M0 0H7A7 7 0 0 1 0 7Z" fill={K} />
    </svg>
  );
}

export default function DishTile({ dish, wide = false }: { dish: Dish; wide?: boolean }) {
  const Art = dishArt[dish.id];
  return (
    <figure className={`dish ${wide ? "dish--wide" : ""}`}>
      <div className="tile">
        <Corner pos="tl" />
        <Corner pos="tr" />
        <Corner pos="bl" />
        <Corner pos="br" />
        <Art className="tile-dish" label={`Ilustrasi ${dish.name.text}`} />
      </div>
      <figcaption>
        <span className="block font-medium" {...mock(dish.name.mockup)}>
          {dish.name.text}
        </span>
        <span className="t-small text-soft block">
          <span {...mock(dish.detail.mockup)}>{dish.detail.text}</span>
          {dish.price && (
            <span className="whitespace-nowrap">
              {" · "}
              <span className="price" {...mock(dish.price.mockup)}>
                {dish.price.text}
              </span>
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
