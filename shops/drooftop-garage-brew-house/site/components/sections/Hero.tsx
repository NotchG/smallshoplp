import { hero, shop } from "@/content";
import GarageWindow from "../GarageWindow";
import MuralBand from "../MuralBand";
import PlateButton from "../PlateButton";
import SiteNav from "../SiteNav";
import TodayChip from "../TodayChip";

// The terakota garage wall: name, today's hours, directions, and the garage opening.
export default function Hero() {
  return (
    <div className="wall-terakota">
      <header>
        <SiteNav />
      </header>
      <section id="konten" tabIndex={-1} aria-labelledby="hero-name" className="container-page pt-6 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-6">
            <p className="t-small font-semibold uppercase tracking-widest">{hero.kicker}</p>
            <h1 id="hero-name" className="font-display t-display nowrap mt-3">
              {hero.nameLines[0]}
              <br />
              {hero.nameLines[1]}
            </h1>
            <p className="t-lead mt-5 measure">{hero.line}</p>
            <div className="mt-6">
              <TodayChip text={hero.today} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <PlateButton href={shop.directionsUrl} variant="green" bordered icon="upRight" external>
                {hero.ctaDirections}
              </PlateButton>
              <PlateButton href={shop.whatsapp.url} variant="white" external mockup={shop.whatsapp.mockup}>
                {hero.ctaWhatsapp}
              </PlateButton>
            </div>
          </div>
          <div className="lg:col-span-6 pb-3">
            <GarageWindow src="/photos/owner-1.jpg" alt={hero.photoAlt} sign={hero.rooftopSign} />
          </div>
        </div>
      </section>
      <MuralBand />
    </div>
  );
}

