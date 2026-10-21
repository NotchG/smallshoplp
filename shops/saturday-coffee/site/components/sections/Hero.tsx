import Container from "@/components/Container";
import StringLights from "@/components/StringLights";
import TileBand from "@/components/TileBand";
import CourtyardVignette from "@/components/CourtyardVignette";
import { TodayHours } from "@/components/TodayHours";
import { IconChat, IconDirections } from "@/components/icons";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hero (malam). Lights switch on over the name; text is visible from first paint and never animates.
export default function Hero() {
  return (
    <section className="on-malam relative overflow-hidden" aria-labelledby="nama">
      <StringLights />
      <Container className="relative">
        <h1 id="nama" className="t-display -mt-2 md:-mt-4">
          {shop.display}{" "}
          <span className="name-tag" {...mock(shop.tag.mockup)}>
            {shop.tag.text}
          </span>
        </h1>
        <div className="grid-12 mt-6 items-end md:mt-8">
          <div className="col-span-12 pb-10 md:col-span-7 md:self-start md:pb-16">
            <p className="t-lead measure" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <TodayHours className="mt-6" />
            <p className="mt-2 text-redup">{hero.addressLine}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-lampu" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
                <IconDirections />
                {hero.directions}
              </a>
              <a
                className="btn btn-ghost"
                href={shop.whatsapp.text}
                target="_blank"
                rel="noopener noreferrer"
                {...mock(hero.whatsapp.mockup)}
              >
                <IconChat />
                {hero.whatsapp.text}
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <CourtyardVignette
              alt={hero.vignetteAlt}
              className="ml-auto block h-auto w-[78%] max-w-[400px] md:w-full"
            />
          </div>
        </div>
      </Container>
      <TileBand id="floor-hero" />
    </section>
  );
}
