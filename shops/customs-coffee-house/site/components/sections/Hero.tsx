import Container from "@/components/Container";
import Wordmark from "@/components/Wordmark";
import HoursCard from "@/components/HoursCard";
import ActionButton from "@/components/ActionButton";
import Awning from "@/components/Awning";
import { ChatIcon, PinIcon } from "@/components/Icons";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The fascia: mustard field, the wordmark, today's hours and the two first actions,
// then the awning and the shop front at dusk (owner-1.jpg).
export default function Hero() {
  return (
    <section className="hero ground-fascia" aria-label="Customs Coffee House">
      <Container className="hero-top">
        <div className="hero-grid">
          <div className="hero-mark">
            <Wordmark roll />
          </div>
          <div className="hero-left">
            <p className="wordmark-sub" aria-hidden="true">
              coffee house
            </p>
            <p className="hero-line t-lead" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
          </div>
          <div className="hero-right">
            <HoursCard variant="today" />
            <div className="hero-actions">
              <ActionButton href={shop.mapsUrl} icon={<PinIcon />}>
                {actions.directions}
              </ActionButton>
              <ActionButton
                href={shop.whatsapp.url}
                variant="secondary"
                icon={<ChatIcon />}
                mockup={shop.whatsapp.mockup}
                ariaLabel={actions.whatsappLabel}
              >
                {actions.whatsapp}
              </ActionButton>
            </div>
          </div>
        </div>
      </Container>
      <Awning />
      <Container>
        <picture>
          <source media="(min-width: 768px)" srcSet="/photos/hero-wide.jpg" width={1600} height={600} />
          <img
            src="/photos/hero-phone.jpg"
            width={800}
            height={600}
            alt={hero.photoAlt}
            fetchPriority="high"
            decoding="async"
            className="hero-photo"
          />
        </picture>
      </Container>
    </section>
  );
}
