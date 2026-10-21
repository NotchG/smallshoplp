import Container from "@/components/Container";
import Button from "@/components/Button";
import PriceCard from "@/components/PriceCard";
import ProductPhoto from "@/components/ProductPhoto";
import Sticker from "@/components/Sticker";
import TodayHours from "@/components/TodayHours";
import { actions, hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Laid out like the shopfront: the name hung as the sign, the turtle buns in the window,
// the door (hours, WhatsApp, directions) beside it. Only the sticker moves.
export default function Hero() {
  return (
    <section className="hero bg-butter" aria-labelledby="hero-title">
      <Container>
        <h1 id="hero-title" className="t-display hero-sign">
          {/* One text node + one span: wraps only between "Roti" and "Ciracas" */}
          Rumah{"\u00a0"}Roti <span className="nowrap text-crust">Ciracas</span>
        </h1>

        <div className="hero-body grid lg:grid-cols-12 lg:gap-x-6 lg:items-end">
          <div className="hero-door lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <p className="t-lead max-w-[24ch]" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayHours className="mt-5" />
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={shop.wa} icon="wa" external>
                {actions.wa}
              </Button>
              <Button href={shop.directionsUrl} variant="outline" external>
                {actions.directions}
              </Button>
            </div>
            <p className="t-small mt-4">{shop.addressShort}</p>
          </div>

          <div className="hero-window relative lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <Sticker variant="hero" press className="hero-sticker" />
            <ProductPhoto photo={hero.photo} ratio="4 / 3" priority>
              <figcaption>
                <PriceCard name={hero.photoLabel} />
              </figcaption>
            </ProductPhoto>
          </div>
        </div>
      </Container>
    </section>
  );
}
