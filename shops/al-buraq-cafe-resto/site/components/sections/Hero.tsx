import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import Lantern from "@/components/Lantern";
import { mock } from "@/lib/mockup";
import { hero, shop, waLink, whatsapp } from "@/content";

// Recognition and directions in one screen. The lantern hangs from the top edge on its chain.
// Phone/tablet: lantern top-right, the name starts beside its lower body and clears the finial.
// From 1024px: 12-col grid, text cols 1–7, lantern cols 9–11, light over cols 8–12.
export default function Hero() {
  return (
    <section className="hero relative overflow-hidden bg-plaster" aria-labelledby="hero-title">
      <Container className="hero-inner relative grid-12">
        <div className="hero-lantern-wrap lg:col-span-3 lg:col-start-9 lg:row-start-1">
          <Lantern className="hero-lantern" />
        </div>

        <div className="hero-text relative z-10 lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <h1 id="hero-title" className="t-display text-velvet">
            {shop.nameLines[0]}
            <br />
            {shop.nameLines[1]}
          </h1>
          <p className="t-lead measure-lead mt-5 text-ink" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
          <p className="t-body mt-6 text-ink">
            <strong className="block font-semibold">{shop.hoursToday}</strong>
            <span className="block">{shop.addressShort}</span>
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={shop.mapsUrl} external srText={hero.directionsSr}>
              {hero.directions}
            </ButtonLink>
            <ButtonLink
              href={waLink(whatsapp.ask.text)}
              variant="secondary"
              external
              srText={hero.whatsappSr}
              {...mock(whatsapp.mockup)}
            >
              {hero.whatsappLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
