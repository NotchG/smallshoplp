import Container from "@/components/Container";
import ActionButtons from "@/components/ActionButtons";
import { hero, nav, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The dining-room wall: white wall above, the photo standing in it like the glass
// shopfront, dropping into the green wainscot band with the cove-light line.
// Static: the hero holds the LCP and never animates.
export default function Hero() {
  return (
    <section aria-labelledby="hero-h">
      <Container>
        {/* Desktop-only row: address left, anchors right. Not sticky. */}
        <div className="hidden items-center justify-between gap-6 pt-3 pb-6 lg:flex">
          <p className="t-small text-muted">{shop.addressShort}</p>
          <nav aria-label="Bagian halaman">
            <ul className="flex items-center gap-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="t-small link inline-flex min-h-11 items-center px-3 font-semibold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid-12 items-end">
          <div className="pt-8 pb-1 lg:col-span-7 lg:pt-0 lg:pb-14">
            <h1 id="hero-h" className="hero-name t-display font-display text-accent">{shop.name}</h1>
            <p className="tagline mt-4 text-accent lg:mt-6">{shop.tagline}</p>
            <p className="t-lead font-display mt-6 lg:mt-10" {...mock(hero.locationLine.mockup)}>
              {hero.locationLine.text}
            </p>
            <p className="t-lead font-display mt-1 text-muted" {...mock(hero.workLine.mockup)}>
              {hero.workLine.text}
            </p>
          </div>

          <div className="hero-photo lg:col-span-5 lg:col-start-8">
            <picture>
              <img
                src="/img/ika-kopi-ruang-1200.jpg"
                srcSet="/img/ika-kopi-ruang-800.jpg 800w, /img/ika-kopi-ruang-1200.jpg 1200w"
                sizes="(min-width: 1024px) 486px, 100vw"
                width={1200}
                height={1600}
                alt={hero.photoAlt}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </Container>

      {/* Wainscot band: hours directly above the buttons. */}
      <div className="wainscot on-green hero-band">
        <span className="cove-line" aria-hidden="true" />
        <Container className="pt-6 pb-8 lg:pt-10 lg:pb-12">
          <div className="grid-12">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 font-semibold">
                <span className="open-dot" aria-hidden="true" />
                {shop.todayLine}
              </p>
              <ActionButtons actions={["directions", "whatsapp"]} className="mt-4" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
