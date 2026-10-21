import Container from "@/components/Container";
import GableFrame from "@/components/GableFrame";
import TodayHours from "@/components/TodayHours";
import TopBar from "@/components/TopBar";
import { IconChat, IconDirections } from "@/components/Icons";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Recognition, today's hours, directions. Ground beton. Nothing here reveals:
// only the LED light moves (LedEdges, inside the frame).
export default function Hero() {
  return (
    <section id="top" className="bg-beton" aria-labelledby="hero-title">
      <TopBar />
      <Container className="grid gap-6 pt-5 pb-12 md:grid-cols-12 md:items-center md:gap-x-6 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="md:col-span-6 lg:col-span-5">
          <h1 id="hero-title" className="t-display" {...mock(shop.nameMockup)}>
            {shop.name}
          </h1>
          <p className="t-lead mt-4 measure-hero">{hero.line}</p>
          <TodayHours className="mt-5" />
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
            <a className="btn btn-ink" href={shop.directionsHref}>
              <IconDirections />
              {hero.ctaDirections}
            </a>
            <a className="btn btn-ink-outline" href={shop.whatsapp.href} {...mock(shop.whatsapp.mockup)}>
              <IconChat />
              {hero.ctaWhatsapp}
            </a>
          </div>
        </div>
        <div className="order-first md:order-none md:col-span-6 lg:col-span-7">
          <GableFrame
            img={hero.image}
            aspectClass="aspect-7/6"
            sizes="(min-width: 1024px) 690px, (min-width: 768px) 50vw, 100vw"
            lit
            priority
          />
        </div>
      </Container>
    </section>
  );
}
