import Container from "@/components/Container";
import Button from "@/components/Button";
import OpenStatus from "@/components/OpenStatus";
import Glass from "@/components/art/Glass";
import { Croissant } from "@/components/art/Food";
import TrackRail from "@/components/art/TrackRail";
import { hero, shop, ui } from "@/content";
import { mock } from "@/lib/mockup";

// The glass on the oak counter is the page's thesis. The h1 is the white print on it.
export default function Hero() {
  return (
    <header className="hero">
      <Container>
        <TrackRail />
      </Container>
      <Container className="hero-grid">
        <p className="hero-desc t-body">
          {shop.descriptor} · {shop.area}
        </p>

        <div className="hero-glass">
          <Glass id="hero" variant="kopiSusu" print={false} animate label={hero.glassLabel} />
          <h1 className="hero-mark t-display">{shop.name}</h1>
        </div>

        <div className="hero-crois">
          <Croissant label={hero.croissantLabel} />
        </div>

        <div className="hero-counter" aria-hidden="true" />

        <p className="hero-line t-lead" {...mock(hero.line.mockup)}>
          {hero.line.text}
        </p>

        <div className="hero-actions">
          <p className="hero-hours t-lead nums">
            {hero.todayLabel} <strong>{shop.hours.range}</strong>
          </p>
          <OpenStatus
            open={shop.hours.open}
            close={shop.hours.close}
            openLabel={shop.hours.openLabel}
            text={hero.status}
          />
          <div className="btn-row">
            <Button href={shop.directionsUrl} icon="pin" external>
              {ui.directions}
            </Button>
            <Button
              href={shop.whatsapp.href}
              variant="secondary"
              icon="chat"
              external
              {...mock(shop.whatsapp.mockup)}
            >
              {ui.whatsapp}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
