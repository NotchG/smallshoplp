import Container from "@/components/Container";
import Button from "@/components/Button";
import Stamp from "@/components/Stamp";
import { TodayLine } from "@/components/TodayHours";
import { IconChat, IconPin } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { actions, hero, shop, whatsappHref, whatsappSub } from "@/content";

// 1. Hero: P8's order counter. Plaster wall above, sage counter-top slab, breeze-block band below.
// The coffee photo stands on the slab; the stamp presses onto its lower-left corner.
// Nothing here animates except the stamp (LCP stays the photo and the name).
export default function Hero() {
  return (
    <section aria-labelledby="judul" className="hero">
      <div className="hero-wall">
        <Container className="hero-grid">
          <div className="hero-text">
            <h1 id="judul" className="t-display">
              {shop.name}
            </h1>
            <p className="t-lead hero-line" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayLine className="hero-today" />
          </div>
          <div className="hero-photo-col">
            <figure className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.photo.src}
                width={hero.photo.width}
                height={hero.photo.height}
                alt={hero.photo.alt}
                fetchPriority="high"
                decoding="async"
              />
              <Stamp />
            </figure>
          </div>
        </Container>
      </div>
      <div className="slab" aria-hidden="true" />
      <div className="tiles hero-band">
        <Container className="hero-actions">
          <Button href={shop.mapsUrl} external variant="ink" icon={<IconPin />} label={{ text: actions.directions }} />
          <Button
            href={whatsappHref}
            variant="paper"
            icon={<IconChat />}
            label={{ text: actions.whatsapp }}
            sub={whatsappSub}
          />
        </Container>
      </div>
    </section>
  );
}
