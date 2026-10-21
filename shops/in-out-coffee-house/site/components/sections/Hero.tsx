import Container from "@/components/Container";
import Wordmark from "@/components/Wordmark";
import TodayHours from "@/components/TodayHours";
import ActionButton from "@/components/ActionButton";
import OvalRoom from "@/components/art/OvalRoom";
import { cta, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Recognition in five seconds: the cup-logo wordmark, today's hours and directions in the
// first screen, and the oval opening into the yellow room on the wall beside it.
export default function Hero() {
  return (
    <header className="hero">
      <Container className="grid items-center gap-x-8 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-7 lg:col-span-6">
          <Wordmark />
          <p className="t-lead mt-5 font-bold" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <TodayHours className="mt-3" />
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={shop.mapsUrl} arrow external>
              {cta.directions}
            </ActionButton>
            <ActionButton href={shop.waUrl} variant="outline" external mockup={shop.waMockup}>
              {cta.whatsapp}
            </ActionButton>
          </div>
          <p className="t-small mt-5">{shop.addressShort}</p>
        </div>
        <div className="hero-oval md:col-span-5 lg:col-span-6">
          <OvalRoom className="block h-auto w-full" />
        </div>
      </Container>
    </header>
  );
}
