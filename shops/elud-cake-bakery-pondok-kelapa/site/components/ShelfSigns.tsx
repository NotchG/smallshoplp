import { roti } from "@/content";
import { mock } from "@/lib/mockup";

// The other section signs hanging in the shop, as small plaques.
export default function ShelfSigns() {
  return (
    <div className="flex flex-col gap-3">
      <p className="t-small font-semibold" id="rak-lain">
        {roti.shelvesLabel}
      </p>
      <ul aria-labelledby="rak-lain" className="flex flex-wrap gap-3">
        {roti.shelves.map((s) => (
          <li key={s.name} className="shelf-sign">
            {s.name}
            {s.price && (
              <span className="shelf-sign-price" {...mock(s.price.mockup)}>
                {s.price.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
