import Container from "@/components/Container";
import HeroMotion from "@/components/HeroMotion";
import RiverBand from "@/components/RiverBand";
import HoursDisc from "@/components/HoursDisc";
import ActionLink from "@/components/ActionLink";
import { hero, labels, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hero: timber beam plane (name), the river band, the deck plane (actions).
export default function Hero() {
  return (
    <HeroMotion className="ground-merbau hero" labelledBy="hero-title">
      <div className="hero-beam">
        <Container className="hero-beam-inner lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <h1 id="hero-title" className="t-display sm:whitespace-nowrap lg:col-span-8">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </h1>
          <p className="t-lead hero-sub hidden lg:block lg:col-span-4 lg:col-start-9" {...mock(hero.sub.mockup)}>
            {hero.sub.text}
          </p>
        </Container>
        <div className="hero-steel" aria-hidden="true" />
      </div>

      <RiverBand />

      <div className="hero-deck">
        <div className="hero-rail" aria-hidden="true" />
        <Container className="hero-deck-inner lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6">
          <p className="t-lead hero-sub lg:hidden" {...mock(hero.sub.mockup)}>
            {hero.sub.text}
          </p>

          <div className="hero-hours lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:justify-self-end">
            <HoursDisc />
            <p className="nums">
              <span className="hero-hours-label">{shop.todayLine.label}</span>
              <span className="hero-hours-sep" aria-hidden="true"> · </span>
              <span className="hero-hours-time">{shop.todayLine.time}</span>
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <div className="hero-actions">
              <ActionLink href={shop.mapsUrl} variant="primary" icon="pin" external>
                {labels.directions}
              </ActionLink>
              <ActionLink
                href={shop.whatsapp.text}
                variant="secondary-dark"
                icon="chat"
                external
                mockup={shop.whatsapp.mockup}
              >
                {labels.whatsapp}
              </ActionLink>
            </div>
            <p className="t-small hero-address">{shop.addressShort}</p>
          </div>
        </Container>
      </div>
    </HeroMotion>
  );
}
