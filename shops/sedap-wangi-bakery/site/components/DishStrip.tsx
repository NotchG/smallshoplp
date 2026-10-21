import { copy, dishes } from "@/content";

// The owner's own dish photos, cropped from their menu. Phone: a scroll strip.
// Tablet: 4 × 2. Desktop: 2 × 4 beside the menu board. Never wider than 180 CSS px.
export default function DishStrip() {
  return (
    <ul className="dish-list dish-strip" aria-label={copy.dapur.tilesLabel} data-lenis-prevent="">
      {dishes.map((d) => (
        <li key={d.src} className="dish">
          <img src={d.src} alt={d.alt} width={226} height={192} loading="lazy" decoding="async" />
          <p className="dish-name t-body">{d.name}</p>
          <p className="dish-price t-body">Rp {d.price}</p>
        </li>
      ))}
    </ul>
  );
}
