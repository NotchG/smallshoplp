import Container from "./Container";
import ClinkMark from "./ClinkMark";
import { HeroHours } from "./TodayHours";
import { IconChat, IconNavigation, Star } from "./Icons";
import { mock } from "@/lib/mockup";
import { hero, praiseCopy, shop } from "@/content";

// The garden photo's lawn runs into the Rumput band that holds the name. No text over the photo.
export default function Hero() {
  return (
    <header id="beranda" className="field-rumput">
      <div className="hero-photo">
        <img
          src={hero.photo.src}
          srcSet={hero.photo.srcSet}
          sizes="100vw"
          width={hero.photo.width}
          height={hero.photo.height}
          alt={hero.photoAlt}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="photo-fill"
        />
      </div>

      <Container className="hero-band">
        <div className="grid-12 items-end gap-y-7">
          <div className="lg:col-span-8">
            <div className="brand-row">
              <ClinkMark className="brand-mark" mockup={hero.logoMark.mockup} />
              <div>
                <h1 className="t-display brand-name">{shop.name}</h1>
                <p className="t-lead brand-tagline lowercase">{shop.tagline}</p>
              </div>
            </div>
            <p className="t-lead mt-6 max-w-[30ch]" {...mock(hero.sub.mockup)}>
              {hero.sub.text}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <HeroHours />
            <p className="flex items-center gap-2.5 font-semibold">
              <Star className="h-[1.1em] w-[1.1em]" stroke="var(--color-rotan)" />
              {praiseCopy.ratingLine}
            </p>
            <div className="hero-actions mt-2 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
                <IconNavigation />
                {hero.directions}
              </a>
              <a
                className="btn btn-ghost"
                href={shop.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                {...mock(shop.whatsapp.mockup)}
              >
                <IconChat />
                {hero.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
