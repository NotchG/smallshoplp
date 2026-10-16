import Container from "@/components/Container";
import HeroCake from "@/components/HeroCake";
import { TodayPill } from "@/components/TodayHours";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Sage ceiling. Text left (readable at first paint, never animated), the arch with the
// whole cheesecake on the right, standing on the hero's bottom edge.
export default function Hero() {
  return (
    <header className="hero bg-sage text-walnut" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-text">
          <p className="t-body hero-area">{hero.area}</p>
          <h1 id="hero-title" className="t-display">
            <span className="hero-name-main">{hero.nameMain}</span>
            <span className="hero-name-sub">{hero.nameSub}</span>
          </h1>
          <p className="t-lead hero-lead" {...mock(hero.lead.mockup)}>
            {hero.lead.text}
          </p>
          <TodayPill label={hero.todayLabel} />
          <div className="hero-actions">
            <a className="btn btn-primary" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              {hero.ctaLabel}
            </a>
            <a className="link" href="#cheesecake">
              {hero.secondaryLabel}
            </a>
          </div>
        </div>
        <div className="hero-arch-wrap">
          <div className="arch hero-arch">
            <HeroCake label={hero.cakeLabel} />
          </div>
        </div>
      </Container>
    </header>
  );
}
