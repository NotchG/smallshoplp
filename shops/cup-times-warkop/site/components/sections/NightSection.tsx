import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { night } from "@/content";

// The dark passage of the page: the yard at night, the late hours in lamp-amber, facilities.
export default function NightSection() {
  return (
    <section id="tempat" className="on-dark section bg-night text-frost" aria-labelledby="night-title">
      <Container>
        <Reveal className="grid gap-8 md:grid-cols-12 md:grid-rows-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">
          <div className="md:col-span-7 md:col-start-6 md:row-start-1 md:self-end lg:col-span-6 lg:col-start-7">
            <h2 id="night-title" className="t-head font-display text-label">
              {night.heading}
            </h2>
            <p className="t-lead mt-4 max-w-[30ch] text-frost">{night.line}</p>
          </div>
          <figure className="md:col-span-5 md:col-start-1 md:row-span-3 md:row-start-1 md:self-center">
            <img
              src={night.photo.src}
              width={night.photo.width}
              height={night.photo.height}
              alt={night.photo.alt}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/5] h-auto w-full rounded-xl object-cover"
            />
            <figcaption className="t-small mt-2 text-frost/85">{night.photo.caption}</figcaption>
          </figure>
          <div className="md:col-span-7 md:col-start-6 md:row-start-2 md:pt-6 lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="t-body max-w-[34ch] font-bold text-bulb">{night.hoursLine}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:row-start-3 md:self-start md:pt-8 lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="t-body font-bold text-label">{night.facilitiesLabel}</p>
            <ul className="mt-3 max-w-[26rem] border-t border-frost/20">
              {night.facilities.map((f) => (
                <li key={f.text} className="t-body border-b border-frost/20 py-2.5" {...mock(f.mockup)}>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
