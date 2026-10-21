import Container from "./Container";
import ScrollOrnament from "./ScrollOrnament";
import TodaySticker from "./TodaySticker";
import ButtonLink from "./ButtonLink";
import BaggedBun from "./BaggedBun";
import { mock } from "@/lib/mockup";
import { hero, labels, shop } from "@/content";

// The hero is the Tegal bread bag: heat-seal crimp, orange scrolls around a big brown
// "Tegal" on bun gold, the address and phone as the bag's small print, and two bagged buns
// resting on the tray lip.
export default function Hero() {
  const [left, right] = hero.buns;
  const second = shop.whatsapp
    ? { href: shop.whatsapp, label: labels.whatsapp, icon: "whatsapp" as const, external: true }
    : { href: shop.phoneHref, label: labels.call, icon: "phone" as const, external: false };

  return (
    <section aria-labelledby="judul" className="relative overflow-hidden bg-kulit">
      <div className="crimp" aria-hidden="true" />
      <Container>
        {/* the bag print */}
        <div className="flex flex-col items-center pt-7 text-center md:pt-10">
          <ScrollOrnament variant="crest" className="w-full max-w-[720px]" />
          <h1 id="judul" className="t-display mt-2">
            <span className="hero-toko block serif t-lead italic">Toko Roti</span>
            Tegal
          </h1>
          <ScrollOrnament variant="base" className="hero-base w-full max-w-[720px]" />
          <p className="t-small mt-1 flex flex-wrap items-center justify-center gap-x-2">
            <a className="link inline-flex min-h-11 items-center" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
              {shop.addressShort}
            </a>
            <span aria-hidden="true">·</span>
            <a className="link inline-flex min-h-11 items-center tabular" href={shop.phoneHref}>
              {shop.phone}
            </a>
          </p>
        </div>

        {/* the working face: line, today's hours, actions; buns beside it on wide screens */}
        <div className="hero-face">
          <div className="hero-bun-left">
            <BaggedBun variant={left.variant} sticker={left.sticker} label={left.label} tilt={-4} />
          </div>
          <div className="flex flex-col items-center pb-8 pt-4 text-center lg:pb-14">
            <p className="t-lead serif measure balance" {...mock(hero.tagline.mockup)}>
              {hero.tagline.text}
            </p>
            <div className="mt-5">
              <TodaySticker />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href={shop.mapsUrl} icon="map" external>
                {labels.directions}
              </ButtonLink>
              <ButtonLink href={second.href} icon={second.icon} variant="secondary" external={second.external}>
                {second.label}
              </ButtonLink>
            </div>
          </div>
          <div className="hero-bun-right">
            <BaggedBun variant={right.variant} sticker={right.sticker} label={right.label} tilt={-2} />
          </div>
        </div>
      </Container>
      <div className="tray-lip relative" aria-hidden="true" />
    </section>
  );
}
