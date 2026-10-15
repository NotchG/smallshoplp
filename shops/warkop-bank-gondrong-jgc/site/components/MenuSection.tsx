import Container from "@/components/Container";
import Rail from "@/components/Rail";
import Reveal from "@/components/Reveal";
import { ArtEsKopiSusu, ArtIndomieTelur, ArtKopiHitam } from "@/components/Art";
import { menu, type MenuItem, type Strip } from "@/content";
import { mock } from "@/lib/mockup";

function TileArt({ art }: { art: MenuItem["art"] }) {
  switch (art) {
    case "kopi-hitam":
      return <ArtKopiHitam className="tile-art" />;
    case "es-kopi-susu":
      return <ArtEsKopiSusu className="tile-art" />;
    case "indomie-telur":
      return <ArtIndomieTelur className="tile-art" />;
    case "photo-sachet":
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="tile-photo"
          src={menu.sachetPhoto.src}
          width={menu.sachetPhoto.width}
          height={menu.sachetPhoto.height}
          alt={menu.sachetPhoto.alt}
          loading="lazy"
        />
      );
    default:
      return null;
  }
}

// One renceng: a header tab hooked on the rail, then sachets joined by perforations.
function MenuStrip({ strip }: { strip: Strip }) {
  const labelId = `strip-${strip.id}`;
  return (
    <div className="strip">
      <span className="strip-hook" aria-hidden="true" />
      <span id={labelId} className="strip-tab t-small">
        {strip.label}
      </span>
      <ul className={`strip-body tone-${strip.tone}`} aria-labelledby={labelId}>
        {strip.items.map((item) => (
          <li key={item.name} className={item.art ? "tile" : "tile tile-small"} {...mock(item.mockup)}>
            <TileArt art={item.art} />
            <span className="tile-name">{item.name}</span>
            {item.price && (
              <span className="tile-price" {...mock(item.priceMockup)}>
                {item.price}
              </span>
            )}
            {item.note && <span className="tile-note">{item.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MenuSection() {
  const [first, second, third, fourth] = menu.strips;
  return (
    <section id={menu.id} className="section ground-krem" aria-labelledby="menu-heading">
      <Container>
        <Reveal>
          <div className="grid-page gap-y-5 lg:items-end">
            <h2 id="menu-heading" className="t-head col-span-12 lg:col-span-7" {...mock(menu.heading.mockup)}>
              {menu.heading.text}
            </h2>
            <p className="t-body col-span-12 lg:col-span-5 measure">{menu.lead}</p>
          </div>
          <p className="t-small mt-10 mb-4 md:mt-14" {...mock(menu.priceNote.mockup)}>
            {menu.priceNote.text}
          </p>
          <div className="strips">
            <Rail />
            <MenuStrip strip={first} />
            <MenuStrip strip={second} />
            <Rail className="rail-pair" />
            <MenuStrip strip={third} />
            <MenuStrip strip={fourth} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
