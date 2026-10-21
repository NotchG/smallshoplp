import Container from "@/components/Container";
import InteriorScene from "@/components/InteriorScene";
import Button, { IconChat, IconPin } from "@/components/Button";
import { TodayLine } from "@/components/TodayHours";
import { mock } from "@/lib/mockup";
import { cta, hero, hours, shop } from "@/content";

// The page opens on Marhaba!'s own front window: black steel frame on the olive wall,
// white lettering on the glass, paper lanterns inside, the weekly hours on the door.
export default function HeroWindow() {
  return (
    <section className="hero on-dark" aria-labelledby="hero-title">
      <Container>
        <div className="window">
          <InteriorScene className="window__scene" label={hero.sceneLabel} />
          <div className="window__glare" aria-hidden="true" />
          <div className="window__panes">
            <div className="window__pane">
              <div className="lettering">
                <div className="lettering__word">
                  <h1 id="hero-title" className="lettering__h1">
                    {hero.lettering}
                    <span className="sr-only text-[1px]"> {shop.descriptor}</span>
                  </h1>
                  <span className="lettering__rule" aria-hidden="true" />
                </div>
                <p className="lettering__tagline">{hero.tagline}</p>
              </div>
            </div>
            <div className="window__mullion" aria-hidden="true" />
            <div className="window__door">
              <span className="door__handle" aria-hidden="true" />
              <div className="door__decal t-body nums">
                <p className="door__decal-title">
                  {hero.doorDecal.map((w) => (
                    <span key={w} className="block">
                      {w}
                    </span>
                  ))}
                </p>
                <dl className="mt-4 grid gap-2">
                  {hours.rows.map((r) => (
                    <div key={r.days}>
                      <dt>{r.days}</dt>
                      <dd className="font-semibold">
                        {r.open}–{r.close}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="sill lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-end">
          <div className="lg:col-span-6">
            <p className="t-body font-semibold">
              {hero.descriptor.split(" · ").map((part, i) => (
                <span key={part} className="whitespace-nowrap">
                  {i > 0 && " · "}
                  {part}
                </span>
              ))}
            </p>
            <p className="t-body mt-1 text-besi-soft measure" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:col-span-6 lg:justify-self-end">
            <TodayLine className="t-lead font-semibold" />
            <div className="mt-3 flex flex-wrap gap-3">
              <Button href={shop.mapsUrl} external variant="solid" icon={<IconPin />}>
                {cta.directions}
              </Button>
              <Button
                href={shop.whatsapp.href}
                external
                variant="outline"
                icon={<IconChat />}
                {...mock(shop.whatsapp.mockup)}
              >
                {cta.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
