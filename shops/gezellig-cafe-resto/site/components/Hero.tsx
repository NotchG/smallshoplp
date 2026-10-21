import Container from "@/components/Container";
import LitWindow from "@/components/LitWindow";
import Button from "@/components/Button";
import { ChatIcon, PinIcon, TulipMark } from "@/components/Icons";
import { actions, hero, praise, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The front wall: the name lettered on the plaster, the lit steel window beside the facts.
// Text never sits on the glass. No reveal here: the window carries the one signature moment.
export default function Hero() {
  return (
    <header className="hero-pad">
      <Container>
        <h1 className="t-display text-besi">
          <span data-check>{hero.name}</span>
          <span className="t-lead block font-display normal-case italic tracking-normal">{hero.sub}</span>
        </h1>

        <div className="grid-12 mt-5 gap-y-6 md:mt-7 md:gap-y-8">
          <div className="lg:col-span-7">
            <LitWindow label={hero.windowLabel} />
          </div>

          <div className="flex flex-col lg:col-span-4 lg:col-start-9">
            <p className="t-lead measure font-display text-besi" {...mock(hero.tagline.mockup)}>
              {hero.tagline.text}
            </p>

            <p className="mt-5 flex items-center gap-3 font-semibold nums lg:mt-8">
              <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-hijau" />
              {shop.todayLine}
            </p>
            <p className="mt-1 text-besi-soft">{shop.addressShort}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={shop.directionsUrl} icon={<PinIcon />}>
                {actions.directions}
              </Button>
              <Button href={shop.whatsapp.url} variant="secondary" icon={<ChatIcon />} mockup={shop.whatsapp.mockup}>
                {actions.whatsapp}
              </Button>
            </div>

            <p className="t-small mt-6 flex items-center gap-2 text-besi-soft nums lg:mt-auto">
              <TulipMark />
              <span>
                {praise.ratingLine} · {shop.priceLevel}
              </span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
