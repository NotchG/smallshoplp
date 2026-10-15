import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Dish } from "@/components/illustrations";
import { mock } from "@/lib/mockup";
import { favorites, type Favorite } from "@/content";

// The lit pastry case: items stand on a shelf line with a warm strip beneath,
// each with a black tag right under it, like the case at the counter.
function ShelfItem({ item, short }: { item: Favorite; short: boolean }) {
  return (
    <li className="shelf-item flex flex-col" {...mock(item.mockup)}>
      <div className="flex justify-center px-2">
        <Dish
          name={item.illustration}
          label={`Ilustrasi ${item.name}`}
          viewBox={short ? "0 80 200 120" : undefined}
          className={`shelf-ill block ${short ? "shelf-ill--short" : ""}`}
        />
      </div>
      <div className="shelf-line" aria-hidden />
      <div className="flex flex-col items-center px-1.5 pt-3 text-center md:px-5">
        <p className="shelf-tag t-body font-semibold">{item.name}</p>
        <p className="t-small mt-2 max-w-[26ch] text-bilah-muted">{item.note}</p>
      </div>
    </li>
  );
}

export default function Favorites() {
  return (
    <section id="favorit" className="section bg-bata" aria-labelledby="favorit-title">
      <Container>
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-3">
            <h2 id="favorit-title" className="t-head col-span-12 md:col-span-6">
              {favorites.heading}
            </h2>
            <p className="t-body col-span-12 text-bilah-muted md:col-span-6 md:pb-1">
              {favorites.intro}
            </p>
          </div>

          {favorites.shelves.map((shelf, s) => (
            <div key={shelf.label} className={s === 0 ? "mt-10 md:mt-14" : "mt-12 md:mt-16"}>
              <h3 className="t-small font-semibold text-bilah-muted">{shelf.label}</h3>
              <ul className="shelf mt-3 grid grid-cols-2 gap-y-10 md:grid-cols-4">
                {shelf.items.map((item) => (
                  <ShelfItem key={item.name} item={item} short={s === 1} />
                ))}
              </ul>
            </div>
          ))}

          <p className="t-small mt-10 text-bilah-muted" {...mock(favorites.illustrationsMockup)}>
            {favorites.illustrationLabel}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
