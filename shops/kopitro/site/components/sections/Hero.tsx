import Container from "@/components/Container";
import Button from "@/components/Button";
import Rail from "@/components/Rail";
import BarScene from "@/components/BarScene";
import OpenStatus from "@/components/OpenStatus";
import { copy, hero, placeholders, shop } from "@/content";
import { mock } from "@/lib/mockup";

// 1. Hero: the KOPITRO banner on malam, the bar scene standing on the counter's steel edge,
// then tonight's status and the two actions on the pine counter. Text is never animated.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="ground-malam">
        <Container className="hero-grid pt-8 md:pt-14 xl:pt-16">
          <div className="hero-name">
            <h1 id="hero-title" className="hero-title f-name t-display" data-check="name">
              <span className="hero-mark" aria-hidden="true" {...mock(placeholders.logoMark)} />
              <span className="relative">{shop.name}</span>
            </h1>
            <p className="hero-tagline t-lead" data-check="tagline">
              {shop.tagline}
            </p>
          </div>
          <p className="hero-line t-lead on-dark text-baja" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <div className="hero-scene">
            <BarScene />
          </div>
        </Container>
      </div>
      <Rail />
      <Container className="hero-counter grid gap-y-6 pt-7 pb-4 md:grid-cols-12 md:gap-x-6 md:pt-9">
        <div className="md:col-span-7 xl:col-span-6">
          <OpenStatus />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={shop.directionsUrl} variant="solid-malam" external>
              {copy.buttons.directions}
            </Button>
            <Button href={shop.whatsapp.href} variant="outline" external {...mock(shop.whatsapp.mockup)}>
              {copy.buttons.whatsapp}
            </Button>
          </div>
        </div>
        <p className="t-body md:col-span-5 md:col-start-8 md:self-end md:pb-3 xl:col-start-8">
          {shop.addressShort}
        </p>
      </Container>
    </section>
  );
}
