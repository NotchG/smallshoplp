import type { Cake } from "@/content";
import { mock } from "@/lib/mockup";

// The shop's white price card: name as the card writes it, size, price or "Tanya harga".
// Text, not SVG, so it reads and translates.
export default function TentCard({ cake, hero = false }: { cake: Cake; hero?: boolean }) {
  return (
    <div className={`tent ${hero ? "tent-hero" : ""}`}>
      <p className={`tent-name ${hero ? "t-lead" : "t-body"}`}>{cake.name}</p>
      {cake.size && <p className="tent-size t-small">{cake.size}</p>}
      {cake.price ? (
        <p className="tent-price t-body" {...mock(cake.price.mockup)}>
          {cake.price.text}
        </p>
      ) : (
        <p className="tent-ask t-body">Tanya harga</p>
      )}
    </div>
  );
}
