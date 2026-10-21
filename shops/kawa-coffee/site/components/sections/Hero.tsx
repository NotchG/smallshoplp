import Container from "@/components/Container";
import SignDisc from "@/components/SignDisc";
import TodayHours from "@/components/TodayHours";
import ActionButton from "@/components/ActionButton";
import { mock } from "@/lib/mockup";
import { actions, hero, nav, shop } from "@/content";

// Top row + hero: the sign on the concrete wall (left) and the steel-framed window (right).
export function TopRow() {
  return (
    <header className="ground-beton">
      <Container className="flex items-center justify-between gap-4 pt-2">
        <p className="label text-batu">{shop.area}</p>
        <nav aria-label="Bagian halaman">
          <ul className="flex items-center gap-6 lg:gap-10">
            {nav.map((n) => (
              <li key={n.href} className={n.href === "#lokasi" ? "" : "hidden md:block"}>
                <a href={n.href} className="text-link t-body font-medium">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default function Hero() {
  const { photo } = hero;
  return (
    <section aria-labelledby="hero-h" className="hero ground-beton">
      <Container className="pb-(--section-y) pt-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:pt-10">
        <div className="lg:col-span-6">
          <h1 id="hero-h" className="sign">
            <span className="sign-kawa">Kawa</span>{" "}
            <span className="sign-coffee">Coffee</span>
            <SignDisc animate />
          </h1>

          <p className="t-lead w-head max-w-[22ch] font-medium" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <p className="t-body mt-3 max-w-[36ch]" {...mock(hero.tone.mockup)}>
            {hero.tone.text}
          </p>
          <TodayHours className="t-body mt-5 font-semibold" />

          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={shop.directionsUrl} variant="primary-light" external>
              {actions.directions}
            </ActionButton>
            <ActionButton href={shop.whatsapp.url} variant="outline-light" {...mock(shop.whatsapp.mockup)}>
              {actions.whatsapp}
            </ActionButton>
          </div>
        </div>

        <figure className="hero-window mt-12 lg:col-span-6 lg:mt-0">
          <div className="hero-window-frame">
            <img
              src={photo.src}
              srcSet={`${photo.srcSmall} 800w, ${photo.src} 1600w`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figcaption className="t-small mt-3 text-batu">{photo.caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
