import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SleeveArt from "@/components/art/SleeveArt";
import { mock } from "@/lib/mockup";
import { menu, type Sleeve as SleeveT } from "@/content";

// The menu hangs like the record wall downstairs: Sisi A is six square sleeves on
// wooden ledges, Sisi B is the black sideboard band with the rest of the menu.

function Sleeve({ s }: { s: SleeveT }) {
  return (
    <li>
      <figure>
        <div className={`sleeve-art ground-fill-${s.ground}`}>
          <SleeveArt art={s.art} label={s.alt} />
        </div>
        <div className="sleeve-ledge" aria-hidden="true" />
        <figcaption className="mt-4 grid grid-cols-[auto_1fr] gap-x-2 md:gap-x-2.5">
          <span className="nums t-body font-semibold" aria-hidden="true">
            {s.no}
          </span>
          <div>
            <p className="t-body sleeve-name font-semibold" {...mock(s.name.mockup)}>
              {s.name.text}
            </p>
            <p className="t-small nums mt-0.5 font-semibold" {...mock(s.price.mockup)}>
              {s.price.text}
            </p>
            {s.note && (
              <p className="t-small mt-1" {...mock(s.note.mockup)}>
                {s.note.text}
              </p>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

function Sideboard() {
  const { sideboard } = menu;
  return (
    <div className="ground-arang">
      <Container className="py-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:py-16">
        <div className="lg:col-span-3">
          <p className="label text-kapur">{sideboard.side}</p>
          <h3 className="t-body w-head mt-0.5 font-semibold">{sideboard.heading}</h3>
        </div>
        <div className="mt-8 lg:col-span-9 lg:mt-0">
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-12">
            {sideboard.groups.map((g) => (
              <div key={g.title}>
                <h4 className="label text-kapur">{g.title}</h4>
                <ul className="t-body mt-3 space-y-1">
                  {g.items.map((it) => (
                    <li key={it.text} {...mock(it.mockup)}>
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="t-small mt-10 text-kapur" {...mock(sideboard.note.mockup)}>
            {sideboard.note.text}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-h" className="ground-kapur">
      <Container className="pt-(--section-y) pb-16 lg:pb-24">
        <Reveal className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <div className="lg:col-span-6">
            <p className="label">{menu.side}</p>
            <h2 id="menu-h" className="h-section mt-2">
              {menu.heading}
            </h2>
          </div>
          <p className="t-lead mt-4 max-w-[30ch] lg:col-span-6 lg:mt-0" {...mock(menu.intro.mockup)}>
            {menu.intro.text}
          </p>
        </Reveal>

        <Reveal
          as="ul"
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:mt-16 lg:gap-x-12 lg:gap-y-16"
        >
          {menu.sleeves.map((s) => (
            <Sleeve key={s.no} s={s} />
          ))}
        </Reveal>
      </Container>
      <Sideboard />
    </section>
  );
}
