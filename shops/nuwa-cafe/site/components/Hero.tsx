import Container from "@/components/Container";
import FestoonWire from "@/components/FestoonWire";
import RamenBowl from "@/components/RamenBowl";
import RimBand from "@/components/RimBand";
import { ActionButton, WhatsAppButton } from "@/components/ActionButton";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Name, offer, today's hours and directions in the first phone screen. The festoon wire
// crosses in front of the wordmark; the rim band closes the hero and crops the bowl's base.
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <FestoonWire />
      <Container className="hero-grid">
        <h1 id="hero-title" className="hero-title t-wordmark">
          {shop.wordmark}{" "}
          <span className="t-tracked">{shop.wordmarkSub}</span>
        </h1>
        <div className="hero-copy">
          <p className="hero-tagline t-lead" {...mock(hero.tagline.mockup)}>
            {hero.tagline.text}
          </p>
          <p className="hero-hours">
            <span className="dot" aria-hidden="true" />
            {shop.todayLine}
          </p>
          <div className="hero-actions">
            <ActionButton href={shop.mapsUrl} variant="primary">
              {actions.directions}
            </ActionButton>
            <WhatsAppButton />
          </div>
        </div>
        <figure className="hero-bowl">
          <figcaption className="t-small">{hero.bowlCaption}</figcaption>
          <RamenBowl label={hero.bowlLabel} />
        </figure>
      </Container>
      <RimBand id="rim-hero" className="hero-band" />
    </section>
  );
}
