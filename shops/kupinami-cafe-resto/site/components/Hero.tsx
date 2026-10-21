import Container from "@/components/Container";
import TopBar from "@/components/TopBar";
import QuietMeter from "@/components/QuietMeter";
import Flora from "@/components/Flora";
import { hero, shop, wa, waLink } from "@/content";
import { mock } from "@/lib/mockup";

// The hero is static from first paint; only the quiet meter moves.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-dinding">
      <TopBar />
      <Container className="pt-8 pb-4 md:pt-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pt-14 lg:pb-6">
        <div className="lg:col-span-7">
          <div className="inline-block">
            <h1 id="hero-title" className="text-teal-tua">
              <span className="t-display block">{shop.name}</span>
              <span className="hero-sub t-lead block font-display font-bold">{shop.descriptor}</span>
            </h1>
            <QuietMeter />
          </div>
          <p {...mock(hero.quiet.mockup)} className="t-lead mt-4 max-w-[20ch] font-display font-bold text-tinta lg:max-w-none">
            {hero.quiet.text}
          </p>
          <p {...mock(hero.personality.mockup)} className="t-body mt-3 max-w-[40ch]">
            {hero.personality.text}
          </p>
          <p className="t-body mt-4 flex items-center gap-2.5 font-semibold">
            <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-teal-tua" />
            {hero.hoursLine}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(wa.reserve.text)}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
              {...mock(wa.reserve.mockup)}
            >
              {hero.ctaReserve}
            </a>
            <a href={shop.directionsUrl} target="_blank" rel="noopener" className="btn btn-secondary">
              {hero.ctaDirections}
            </a>
          </div>
        </div>

        <figure className="hero-figure relative mt-12 lg:col-span-5 lg:mt-0">
          <Flora className="hero-flora" />
          <div className="hero-frame wall-frame relative z-[1]">
            <img
              src={hero.photo.src}
              width={hero.photo.width}
              height={hero.photo.height}
              alt={hero.photo.alt}
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full rounded-[2px]"
            />
          </div>
          <figcaption className="hero-caption t-small relative z-[1] mt-3 max-w-[44ch]">{hero.caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
