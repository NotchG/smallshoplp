import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CircledNumber from "@/components/CircledNumber";
import { mock } from "@/lib/mockup";
import {
  alsoOnMenu,
  favourites,
  menuLabels,
  menuPhotos,
  posterMenu,
  sectionCopy,
  type Photo,
  type PosterItem,
} from "@/content";

function MenuPhoto({ photo, className = "" }: { photo: Photo; className?: string }) {
  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      {photo.caption && (
        <figcaption className="t-small mt-3 text-pretty" {...mock(photo.mockup)}>
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

function PosterList({
  title,
  items,
  className = "",
}: {
  title: string;
  items: PosterItem[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="label">{title}</h3>
      <ol role="list" className="mt-4">
        {items.map((item) => (
          <li key={item.n} className="rule-t flex gap-4 py-4">
            <CircledNumber n={item.n} className="mt-0.5" />
            <div>
              <p className="dish">
                <span className="font-semibold">{item.name}</span>
                <span className="price">{item.price}</span>
              </p>
              <p className="mt-0.5 text-pretty">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Menu andalan (ochre): Kana's New Menu poster, extended. The ①–④ in the list are the same
// numbers printed on the owner's photos.
export default function MenuSection() {
  const mains = posterMenu.filter((i) => i.group === "Hidangan utama");
  const drinks = posterMenu.filter((i) => i.group === "Mocktail");
  const { heading, lead } = sectionCopy.menu;

  return (
    <section id="menu" className="section ground-ochre" aria-labelledby="menu-title">
      <Container>
        <Reveal className="menu-grid">
          <div className="menu-head lg:flex lg:items-end lg:gap-8">
            <h2
              id="menu-title"
              className="section-head text-rust lg:w-5/12 lg:flex-none"
              {...mock(heading.mockup)}
            >
              {heading.text}
            </h2>
            <p className="t-lead measure mt-4 text-pretty lg:mt-0" {...mock(lead.mockup)}>
              {lead.text}
            </p>
          </div>

          <MenuPhoto photo={menuPhotos.nasgor} className="menu-a" />
          <PosterList title="Hidangan utama" items={mains} className="menu-mains" />
          <MenuPhoto photo={menuPhotos.soto} className="menu-b" />
          <PosterList title="Mocktail" items={drinks} className="menu-drinks" />

          <MenuPhoto photo={menuPhotos.range} className="menu-c" />
          <div className="menu-fav">
            <h3 className="label">{menuLabels.favourites}</h3>
            <p className="t-small mt-1">{menuLabels.favouritesNote}</p>
            <ul role="list" className="mt-4">
              {favourites.map((f) => (
                <li key={f.name} className="rule-t py-3" {...mock(f.mockup)}>
                  <p className="dish">
                    <span className="font-semibold">{f.name}</span>
                    {f.price && <span className="price">{f.price}</span>}
                  </p>
                  {f.note && <p className="mt-0.5 text-pretty">{f.note}</p>}
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-also rule-t pt-8">
            <h3 className="label">{menuLabels.alsoOnMenu}</h3>
            <div className="mt-5 grid gap-6 md:grid-cols-3 md:gap-8">
              {alsoOnMenu.map((g) => (
                <div key={g.group} {...mock(g.mockup)}>
                  <p className="font-semibold">{g.group}</p>
                  <ul role="list" className="dot-list mt-1">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
