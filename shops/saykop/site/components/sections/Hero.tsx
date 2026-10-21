import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import TodayHours from "@/components/TodayHours";
import Arch from "@/components/Arch";
import { HeroMural } from "@/components/MuralLine";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// "Dinding oranye": the wall, the single-line faces, the arch onto the bar.
export default function Hero() {
  return (
    <section aria-labelledby="hero-h" className="hero">
      <Container className="hero-grid pt-7 pb-14 md:pt-8 md:pb-20">
        <div className="hero-name">
          <h1 id="hero-h" className="f-display t-display">
            {shop.name}
            <span className="f-name t-lead hero-sub">{shop.subline}</span>
          </h1>
        </div>

        <div className="hero-text">
          <p className="t-lead hero-line font-medium" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <TodayHours className="mt-5 t-body" />
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <ActionButton href={shop.directionsUrl} variant="solid" icon="pin">
              {actions.directions}
            </ActionButton>
            <ActionButton href={shop.waUrl} variant="line" icon="chat" mockup={shop.waMockup}>
              {actions.whatsapp}
            </ActionButton>
          </div>
        </div>

        <div className="hero-panel">
          <div className="arch-panel">
            <HeroMural />
            <Arch />
          </div>
          <div className="arch-caption-wrap">
            <p className="arch-caption">
              <span className="f-name t-lead">{hero.caption.name}</span>{" "}
              <span className="price t-body font-bold" {...mock(hero.caption.price.mockup)}>
                {hero.caption.price.text}
              </span>
              <span className="block t-body mt-1">{hero.caption.tone.text}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
