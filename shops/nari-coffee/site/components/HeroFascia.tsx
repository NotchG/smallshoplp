import Container from "@/components/Container";
import Button from "@/components/Button";
import RollingBadge from "@/components/RollingBadge";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Nari's fascia rebuilt as working UI: cobalt sign band (name, badge, line, actions),
// the black awning holding today's hours, address and phone, then the real shopfront.
export default function HeroFascia() {
  return (
    <header>
      <div className="band-cobalt hero-band">
        <Container>
          <div className="hero-grid">
            <p className="hero-label t-label">{hero.label}</p>
            <h1 className="hero-name t-display">{hero.name}</h1>
            <RollingBadge className="hero-badge" />
            <p className="hero-tag t-lead" {...mock(hero.tagline.mockup)}>
              {hero.tagline.text}
            </p>
            <div className="hero-cta">
              <Button href={shop.directions} variant="paper" icon="pin" external>
                {actions.directions}
              </Button>
              <Button
                href={shop.whatsapp.href}
                variant="outline"
                icon="chat"
                external
                mockup={actions.whatsapp.mockup}
              >
                {actions.whatsapp.text}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="band-ink">
        <Container>
          <dl className="awning-list">
            {hero.awning.map((item, i) => (
              <div key={item.label} className={`awning-item ${i === 1 ? "awning-item--wide" : ""}`}>
                <dt className="t-label">{item.label}</dt>
                <dd className="t-body nums">
                  {item.href ? (
                    <a className="link awning-tel" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      <img
        className="hero-photo"
        src={hero.photo.src}
        srcSet={`${hero.photo.srcSmall} 800w, ${hero.photo.src} 1600w`}
        sizes="100vw"
        width={hero.photo.width}
        height={hero.photo.height}
        alt={hero.photo.alt}
        loading="eager"
        decoding="async"
      />
    </header>
  );
}
