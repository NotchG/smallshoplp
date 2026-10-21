import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import TodayHours from "@/components/TodayHours";
import { ChatIcon, PinIcon } from "@/components/Icons";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The shop's own lobby: owner-1 interior full-bleed, a walnut arch cut like their niches,
// and the "de 92°" wordmark where the round mirrors hang.
export default function Hero() {
  return (
    <header className="hero">
      <img
        className="hero-photo"
        src={hero.photo.src}
        width={hero.photo.width}
        height={hero.photo.height}
        alt={hero.photoAlt}
        fetchPriority="high"
        decoding="async"
      />
      <Container className="hero-inner">
        <div className="arch-panel on-dark">
          <div className="hero-content">
            <h1 className="wordmark" aria-label={shop.name} {...mock(shop.nameMockup)}>
              <span className="wordmark-visual" aria-hidden="true">
                <span className="wordmark-de">de</span>
                <span className="wordmark-92">92</span>
                <span className="wordmark-ring" />
              </span>
            </h1>
            <p className="hero-tagline t-lead" {...mock(hero.sub.mockup)}>
              {hero.sub.text}
            </p>
            <TodayHours
              className="hero-hours t-body"
              hours={shop.hours}
              prefix={hero.todayPrefix}
              fallback={hero.todayFallback}
            />
            <div className="hero-actions">
              <ActionButton href={shop.mapsUrl} external icon={<PinIcon />}>
                {actions.directions}
              </ActionButton>
              <ActionButton
                href={shop.whatsapp.url}
                external
                variant="outline-light"
                icon={<ChatIcon />}
                mockup={shop.whatsapp.mockup}
              >
                {actions.whatsapp}
              </ActionButton>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
