import type { Drink } from "@/content";
import { drinkGeometry, type DrinkArtId } from "@/lib/art";
import { mock } from "@/lib/mockup";
import DrinkArt from "@/components/art/DrinkArt";

// A lampu card on the tile: the glass cut open with the barista's notes beside its layers,
// then name + inline price, then the note. On phones the card is a row and the keys
// become one small line under the note.
export default function DrinkCard({ drink }: { drink: Drink }) {
  const id = drink.art as DrinkArtId;
  const geo = drinkGeometry[id];

  return (
    <article className="ground-lampu drink-card">
      <div className="drink-card-art">
        <div className="relative">
          <DrinkArt id={id} uid={`kopi-${id}`} />
          {drink.keys.map((key, i) => {
            const layer = geo.layers[i];
            if (!layer) return null;
            return (
              <p
                key={key.text}
                className="layer-key t-small text-ubin"
                style={{ top: `${(layer.y / geo.h) * 100}%`, left: `calc(${(layer.x / geo.w) * 100}% + 2px)` }}
                {...mock(key.mockup)}
              >
                {key.text}
              </p>
            );
          })}
        </div>
      </div>

      <div className="drink-card-text">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <h3 className="t-name" {...mock(drink.name.mockup)}>
            {drink.name.text}
          </h3>
          <p className="price text-kayu" {...mock(drink.price.mockup)}>
            {drink.price.text}
          </p>
        </div>
        <p className="t-body mt-2" {...mock(drink.note.mockup)}>
          {drink.note.text}
        </p>
        <p className="drink-card-keys t-small text-ubin mt-3">
          {drink.keys.map((key, i) => (
            <span key={key.text}>
              {i > 0 && " · "}
              <span {...mock(key.mockup)}>{key.text}</span>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
