import { actions, hero, shop, strip } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import { PhoneIcon, PinIcon } from "@/components/Icons";
import HeroTray from "./HeroTray";

// The storefront, top to bottom: black strip, brick fascia with the name, lemon signboard.
export default function FasciaHero() {
  return (
    <header>
      <div className="ground-ink">
        <Container className="py-2.5 t-small font-bold uppercase tracking-[0.08em] text-lemon">
          <p>{strip.text}</p>
        </Container>
      </div>

      <div className="ground-brick">
        <Container className="fascia pt-5 pb-6 lg:pt-7 lg:pb-8">
          <h1 className="fascia-name">
            <span data-check className="fascia-elud font-display uppercase text-lemon">{shop.short}</span>
            <span className="fascia-rest font-display t-lead text-lemon">{` ${shop.rest}`}</span>
          </h1>
          <p className="fascia-loc t-body font-semibold mt-1 xl:mt-0">{shop.location}</p>
        </Container>
      </div>

      <div className="ground-lemon">
        <Container className="grid gap-y-10 gap-x-10 pt-8 pb-12 lg:grid-cols-12 lg:pt-12 lg:pb-14">
          <div className="lg:col-span-5 lg:self-center">
            <p className="t-lead font-medium measure" {...mock(hero.lead.mockup)}>
              {hero.lead.text}
            </p>
            <p className="t-body font-bold mt-4" {...mock(hero.hours.mockup)}>
              {hero.hours.text}
            </p>
            <p className="t-body mt-1 measure" {...mock(hero.sub.mockup)}>
              {hero.sub.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={shop.directionsUrl} external icon={<PinIcon />}>
                {actions.directions}
              </ButtonLink>
              <ButtonLink href={shop.phoneHref} variant="secondary" icon={<PhoneIcon />}>
                {actions.call}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7">
            <HeroTray />
          </div>
        </Container>
      </div>
    </header>
  );
}
