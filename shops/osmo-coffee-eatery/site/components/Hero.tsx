import Container from "@/components/Container";
import DayBand from "@/components/DayBand";
import { mock } from "@/lib/mockup";
import { hero, shop } from "@/content";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="hero-top">
        <Container className="grid-12 hero-grid">
          <div className="hero-text">
            <h1 id="hero-title">
              <span className="wordmark t-display track-mark" data-check>{hero.wordmark}</span>{" "}
              <span className="hero-sub t-lead">{hero.sub}</span>
            </h1>
            <p className="hero-pitch" {...mock(hero.pitch.mockup)}>
              {hero.pitch.text}
            </p>
            <p className="hero-address">{shop.addressShort}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
                {hero.directions}
              </a>
              <a
                className="btn btn-secondary"
                href={shop.waUrl.text}
                target="_blank"
                rel="noopener noreferrer"
                {...mock(shop.waUrl.mockup)}
              >
                {hero.whatsapp}
              </a>
            </div>
          </div>
        </Container>
        <div className="hero-photo">
          <img
            src={hero.img.src}
            srcSet={hero.img.srcSet}
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={hero.img.width}
            height={hero.img.height}
            alt={hero.img.alt}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <DayBand />
    </section>
  );
}
