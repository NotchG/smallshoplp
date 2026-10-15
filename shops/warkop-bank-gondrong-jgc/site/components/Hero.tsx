import Container from "@/components/Container";
import HangingSign from "@/components/HangingSign";
import Rail from "@/components/Rail";
import { IconArrowDown, IconPhone, IconPin } from "@/components/Icons";
import { actions, hero, menu, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The cart itself: cart red, the name hand-lettered in cream, the sign hanging off the rail.
export default function Hero() {
  const [l1, l2, l3] = shop.nameLines;
  return (
    <header className="hero ground-merah">
      <div className="hero-lip" aria-hidden="true" />
      <Rail />
      <Container className="hero-grid">
        <div className="hero-copy">
          <div className="hero-nameblock">
            <p className="hero-kicker t-small">{shop.kicker}</p>
            <h1 className="hero-name t-display">
              <span className="line line-pad">{l1}</span>{" "}
              <span className="line line-pad">{l2}</span>{" "}
              <span className="line">
                {l3}
                <span className="hero-plate-gap"> </span>
                <span className="hero-plate">{shop.namePlate}</span>
              </span>
            </h1>
            <HangingSign />
          </div>
          <p className="hero-sub t-lead" {...mock(hero.sub.mockup)}>
            {hero.sub.text}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={shop.directionsHref} target="_blank" rel="noopener noreferrer">
              <IconPin />
              {actions.directions}
            </a>
            <a className="btn btn-line-light" href={shop.phoneHref} aria-label={actions.callWithNumber}>
              <IconPhone />
              {actions.call}
            </a>
            <a className="text-link" href={`#${menu.id}`}>
              {actions.menu}
              <IconArrowDown />
            </a>
          </div>
        </div>
        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.photo.src}
            width={hero.photo.width}
            height={hero.photo.height}
            alt={hero.photo.alt}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </Container>
    </header>
  );
}
