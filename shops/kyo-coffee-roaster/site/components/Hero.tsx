import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import MarbledCup from "@/components/MarbledCup";
import TodayHours from "@/components/TodayHours";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Kyō's bar seen head-on: honey plywood wall with oak battens, the cup on a concrete counter.
export default function Hero() {
  return (
    <section aria-labelledby="hero-name" className="hero bg-ply">
      <Container className="hero-grid">
        <div className="hero-text">
          <div>
            <h1 id="hero-name" className="t-display">
              {hero.nameLines[0]}{" "}
              <br />
              {hero.nameLines[1]}
            </h1>
            <p className="t-lead hero-line" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
          </div>
          <div className="hero-actions">
            <TodayHours className="t-body font-medium" />
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={shop.directionsUrl}>{hero.directions}</ButtonLink>
              <ButtonLink href={shop.whatsapp.href} variant="outline" mockup={shop.whatsapp.mockup}>
                {hero.whatsapp}
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="hero-joint" aria-hidden="true" />
        <div className="hero-cup">
          <MarbledCup className="cup" />
        </div>
      </Container>

      <div className="counter bg-concrete">
        <Container className="counter-row">
          <p className="t-small counter-address">{shop.addressShort}</p>
          <p className="t-small counter-caption">{hero.cupCaption}</p>
        </Container>
      </div>
    </section>
  );
}
