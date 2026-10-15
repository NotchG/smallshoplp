import Container from "@/components/Container";
import Letterboard from "@/components/Letterboard";
import ArchPhoto from "@/components/ArchPhoto";
import WaveRule from "@/components/WaveRule";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

export default function Hero() {
  return (
    <header className="hero">
      <Container className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="t-display">
              {hero.nameLines[0]}
              <br />
              {hero.nameLines[1]}
            </h1>
            <p className="hero-line t-lead" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <p className="hero-motto t-script" lang="en">
              {hero.motto}
            </p>
            <Letterboard
              className="hero-board"
              lines={hero.board.lines}
              label={hero.board.label}
              animate
            />
            <div className="hero-actions">
              <a className="btn btn-primary" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
                {hero.ctaDirections}
              </a>
              <a className="btn btn-ghost" href={shop.instagram} target="_blank" rel="noopener noreferrer">
                {hero.ctaInstagram}
              </a>
            </div>
            <p className="hero-address t-small">{shop.addressShort}</p>
          </div>
          <div className="hero-photo">
            <ArchPhoto
              src={hero.photo.src}
              alt={hero.photo.alt}
              sizes="(min-width: 1280px) 486px, (min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </Container>
      <Container>
        <WaveRule className="text-felt" />
      </Container>
    </header>
  );
}
