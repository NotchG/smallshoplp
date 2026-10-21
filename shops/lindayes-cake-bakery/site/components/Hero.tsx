import Image from "next/image";
import Container from "@/components/Container";
import Awning from "@/components/Awning";
import Button from "@/components/Button";
import OpenStatus from "@/components/OpenStatus";
import { IconChat, IconPin } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { hero, hours, shop } from "@/content";

// The charcoal fascia in its brown frame. "LINDAYES" is two stacked layers: the unlit brown
// copy (a ::before with empty alt text, so it is never read) paints first, and the real,
// lit orange text fades on over it (CSS sign-on).
function SignHero() {
  return (
    <div className="sign-frame">
      <div className="sign-panel ground-dark text-center">
        <Container>
          <h1 className="t-display font-display">
            <span className="sign-word" data-text={shop.name}>
              <span className="sign-lit">{shop.name}</span>
            </span>
            <span className="sign-sub">
              <span className="t-lead text-glass">{shop.nameSuffix}</span>{" "}
              <span aria-hidden="true" className="sign-dot t-lead">
                ·
              </span>{" "}
              <span className="t-body tagline text-blush">{shop.tagline}</span>
            </span>
          </h1>
        </Container>
      </div>
    </div>
  );
}

// Under the awning: the storefront row on glass, holding the photo and the "doors" (buttons).
function StorefrontRow() {
  return (
    <div className="storefront ground-light">
      <Container className="grid-12 items-center gap-y-10">
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <p className="t-lead font-display measure" {...mock(shop.heroLine.mockup)}>
            {shop.heroLine.text}
          </p>
          <OpenStatus label={hours.heroLabel} className="mt-5" />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={shop.directionsHref} variant="primary-light" external icon={<IconPin />}>
              {hero.directions}
            </Button>
            <Button
              href={shop.whatsapp.href}
              variant="secondary"
              external
              mockup={shop.whatsapp.mockup}
              icon={<IconChat />}
            >
              {shop.whatsapp.label}
            </Button>
          </div>
        </div>
        <figure className="col-span-12 lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <Image
            src={hero.photo.src}
            width={hero.photo.width}
            height={hero.photo.height}
            alt={hero.photo.alt}
            sizes="(min-width: 1024px) 40vw, 100vw"
            loading="eager"
            className="photo block h-auto w-full"
          />
          <figcaption className="t-small mt-2 text-muted">{hero.caption}</figcaption>
        </figure>
      </Container>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="bg-glass">
      <SignHero />
      <Awning id="awning-hero" />
      <StorefrontRow />
    </header>
  );
}
