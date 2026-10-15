import Container from "@/components/Container";
import Button from "@/components/Button";
import Awning from "@/components/hero/Awning";
import DoorSign from "@/components/hero/DoorSign";
import Plant from "@/components/hero/Plant";
import HoursList from "@/components/HoursList";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// "Pintu depan": KOMUKA's own entrance. Awning dome, valance with the name, the doorway
// with today's sign, plants at its base. (String lights live in Hubungi kami: they come on at the end.)
export default function Hero() {
  return (
    <section className="hero relative overflow-hidden bg-kapur" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="awning-col">
            <Awning />
            <h1 id="hero-title" className="valance">
              <span className="t-display valance-name">{hero.name}</span>
              <span className="sr-only">{hero.nameHidden}</span>
            </h1>
            <div className="relative">
              <div className="doorway">
                <DoorSign />
              </div>
              <Plant className="plant plant-left" />
              <Plant flip className="plant plant-right" />
            </div>
          </div>

          <div className="hero-left">
            <p className="t-lead font-display font-bold">
              <span className="block">{hero.sub.type}</span>
              <span className="block">{hero.sub.area}</span>
            </p>
            <p className="t-body measure mt-3" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <div className="hero-actions mt-6">
              <Button href={shop.mapsUrl}>{hero.directions}</Button>
              <Button href={shop.whatsapp.url} variant="secondary" {...mock(shop.whatsapp.mockup)}>
                {hero.whatsapp}
              </Button>
            </div>
          </div>

          <div className="hero-right">
            <address className="t-body not-italic">
              {shop.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <HoursList className="mt-5" label={hero.hoursLabel} />
          </div>
        </div>
      </Container>
      <div className="hero-floor" aria-hidden="true" />
    </section>
  );
}
