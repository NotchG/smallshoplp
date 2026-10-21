import Container from "@/components/Container";
import BrickWall from "@/components/BrickWall";
import PaintedName from "@/components/PaintedName";
import WindowFrame from "@/components/WindowFrame";
import ActionButton from "@/components/ActionButton";
import { TodayLine } from "@/components/TodayHours";
import { mock } from "@/lib/mockup";
import { actions, hero, shop, waLink, waMessages } from "@/content";

// 1. The name painted on the wall, the upstairs seen through a window, the two actions.
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="nama">
      <BrickWall />
      <Container className="relative">
        <div className="hero-inner grid-12 gap-y-6 pt-5 pb-14 md:pt-8 lg:py-12">
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <WindowFrame
              caption={hero.windowCaption}
              frameClassName="hero-window"
            >
              <img
                src="/img/upstairs.jpg"
                width={1260}
                height={1130}
                alt={hero.windowAlt}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </WindowFrame>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <PaintedName id="nama" lines={["Teman", "Kita"]} subline={shop.subline} />
            <p className="t-lead mt-5 max-w-[24ch] lg:mt-8" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayLine className="mt-4" />
            <div className="mt-5 flex flex-wrap gap-2.5 lg:mt-7 lg:gap-3">
              <ActionButton
                href={waLink(waMessages.hero)}
                variant="red"
                icon="chat"
                mockup={shop.whatsapp.mockup}
              >
                {actions.whatsapp}
              </ActionButton>
              <ActionButton href={shop.mapsDirections} variant="ink" icon="pin">
                {actions.directions}
              </ActionButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
