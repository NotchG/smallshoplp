import { hero } from "@/content";
import Container from "@/components/Container";
import HeroStage from "@/components/HeroStage";
import SignWordmark from "@/components/SignWordmark";
import ActionButtons from "@/components/ActionButtons";
import TodayBoard from "@/components/TodayBoard";

export default function Hero() {
  return (
    <HeroStage>
      <img
        className="hero-photo"
        src={hero.photo.src}
        width={hero.photo.width}
        height={hero.photo.height}
        alt={hero.photo.alt}
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="room-warm" aria-hidden="true" />
      <Container className="hero-inner">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="lg:col-span-8">
            <SignWordmark className="-ml-[0.06em]" />
            <p className="hero-tagline t-lead max-w-[20ch] font-semibold text-cream">{hero.tagline}</p>
            <ActionButtons className="mt-7 md:mt-9" />
          </div>
          <div className="mt-10 sm:max-w-sm lg:col-span-4 lg:mt-0 lg:max-w-none">
            <TodayBoard />
          </div>
        </div>
      </Container>
    </HeroStage>
  );
}
