import Container from "@/components/Container";
import HeroMotion from "@/components/HeroMotion";
import PendantBars from "@/components/PendantBars";
import ArchWindow from "@/components/ArchWindow";
import Lockup from "@/components/Lockup";
import OpenStatus from "@/components/OpenStatus";
import ActionButton from "@/components/ActionButton";
import { hero, shop } from "@/content";

export default function Hero() {
  return (
    <HeroMotion className="hero slat on-walnut" aria-labelledby="hero-title">
      <PendantBars />
      <Container>
        <div className="grid-12">
          <div className="md:col-span-6 md:self-center md:pb-6 lg:col-span-5">
            <Lockup main={hero.lockup.main} sub={hero.lockup.sub} />
            <p className="t-body mt-5 max-w-[26rem]" data-hero="group">
              {hero.tagline.text}
            </p>
            <div className="t-body mt-5 space-y-1" data-hero="group">
              <OpenStatus
                prefix={hero.status.prefix}
                label={shop.hours.label}
                open={shop.hours.open}
                close={shop.hours.close}
                timeZone={shop.hours.timeZone}
                texts={{ open: hero.status.open, before: hero.status.before, closed: hero.status.closed }}
              />
              <p className="t-small muted-walnut pl-[19px]">{shop.addressShort}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3" data-hero="group">
              <ActionButton href={shop.directionsUrl} variant="light" external>
                {hero.buttons.directions}
              </ActionButton>
              <ActionButton href={shop.tel} variant="outline">
                {hero.buttons.call}
              </ActionButton>
            </div>
          </div>
          <div className="mt-10 md:col-start-7 md:col-span-6 md:mt-0 md:self-end lg:col-start-7 lg:col-span-5">
            <ArchWindow {...hero.image} />
          </div>
        </div>
      </Container>
    </HeroMotion>
  );
}
