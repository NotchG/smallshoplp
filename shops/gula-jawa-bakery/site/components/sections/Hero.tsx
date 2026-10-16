import Container from "@/components/Container";
import NeonSign from "@/components/NeonSign";
import ActionButton from "@/components/ActionButton";
import { actions, hero, hoursRange, shop } from "@/content";

// The dine-in corner: the "Gula Jawa" neon on the maroon wall, the slate bench below it
// holding today's hours and the two actions. No photos, no nav.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="ground-dinding">
        <Container className="hero-wall grid items-center gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-6 lg:text-center">
            <h1 id="hero-title" className="flex flex-col items-start lg:items-center">
              <NeonSign lines={shop.scriptLines} className="t-display" />{" "}
              <span className="word-bakery t-lead mt-4 ml-1 lg:mt-6 lg:ml-0">{shop.wordRest}</span>
            </h1>
            <p className="t-body mt-1 ml-1 text-neon/80 lg:ml-0">{shop.area}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="t-lead heading">
              <span className="block">{hero.line}</span>
              <span className="block text-gula">{hero.lineEarly}</span>
            </p>
            <p className="t-body measure mt-4 text-neon/80">{hero.support}</p>
          </div>
        </Container>
      </div>

      <div className="ground-bangku">
        <Container className="grid gap-y-5 py-6 md:grid-cols-2 md:items-center md:gap-x-8 md:py-8 lg:grid-cols-12 lg:gap-x-6">
          <p className="lg:col-span-3">
            <span className="t-small block text-neon/80">{shop.hours.today}</span>
            <span className="t-lead tnum block font-bold">{hoursRange}</span>
          </p>
          <p className="t-body hidden md:block lg:col-span-4">{shop.addressShort}</p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-2 lg:col-span-5 lg:justify-end">
            <ActionButton href={shop.directionsUrl} variant="neon" icon="directions">
              {actions.directions}
            </ActionButton>
            <ActionButton href={shop.whatsapp.url} variant="outline-neon" icon="whatsapp" mockup={shop.whatsapp.mockup}>
              {actions.whatsapp}
            </ActionButton>
          </div>
        </Container>
      </div>
    </section>
  );
}
