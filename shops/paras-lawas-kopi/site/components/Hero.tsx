import Container from "./Container";
import ArchPhoto from "./ArchPhoto";
import WallClock from "./WallClock";
import Button from "./Button";
import { ArrowDown } from "./Icons";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

export default function Hero() {
  return (
    <header className="hero">
      <Container className="hero-grid">
        <ArchPhoto />
        <div className="hero-copy">
          {/* Reads "Paras Lawas Kopi · Pondok Kelapa, Jakarta Timur"; the kicker is shown above the name. */}
          <h1 className="hero-title t-display" data-check>
            <span className="hero-name">{shop.sign}</span>
            <span className="sr-only"> </span>
            <span className="hero-kicker kicker">{hero.kicker}</span>
          </h1>
          <p className="hero-tagline t-lead" {...mock(hero.tagline.mockup)}>
            {hero.tagline.text}
          </p>
          <WallClock />
          <div className="hero-actions">
            <Button href={shop.mapsUrl}>{hero.directions}</Button>
            <Button href={shop.whatsapp.href} variant="secondary" mockup={hero.whatsapp.mockup}>
              {hero.whatsapp.text}
            </Button>
          </div>
          <a href="#menu" className="text-link hero-menu-link">
            {hero.menuLink}
            <ArrowDown />
          </a>
        </div>
      </Container>
    </header>
  );
}
