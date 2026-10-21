import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { everyDay, hero, shop, visit, week } from "@/content";

// Kunjungi kami (arang): find the door. Text comes first in the DOM (and in tab order);
// at desktop the map sits on the left, like the wireframe.
export default function Visit() {
  return (
    <section aria-labelledby="visit-title" className="ground-arang section">
      <Container>
        <Reveal className="grid-12 gap-y-10 lg:grid-rows-[auto_1fr] max-lg:flex max-lg:flex-col max-lg:gap-10">
          <div className="lg:col-start-8 lg:col-span-5 lg:row-start-1">
            <h2 id="visit-title" className="t-head t-cond">
              {visit.heading}
            </h2>
            <address className="t-lead not-italic mt-5 max-w-[24ch]">{shop.address}</address>
            <dl className="t-body mt-6 max-w-[22rem]">
              {week.map((w) => (
                <div key={w.days} className="flex justify-between gap-6 py-2 border-b border-putih/15">
                  <dt>{w.days}</dt>
                  <dd className="tnum text-lampu font-semibold">{w.time}</dd>
                </div>
              ))}
            </dl>
            <p className="t-body text-muted-dark mt-3">{everyDay}</p>
            <ActionButton href={shop.mapsUrl} variant="solid" className="mt-6">
              {hero.directions}
            </ActionButton>
          </div>

          <div className="frame frame-on-dark lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-2">
            <iframe
              src={shop.mapEmbed}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[30rem] border-0 bg-arang"
            />
          </div>

          <figure className="lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:self-end flex items-start gap-5">
            <div className="frame frame-on-dark w-28 md:w-32 flex-none">
              <img
                src="/photos/patokan.jpg"
                width={340}
                height={490}
                alt={visit.patokanAlt}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
            <figcaption>
              <h3 className="t-label text-lampu">{visit.patokanTitle}</h3>
              <p className="t-body mt-2">{visit.patokan}</p>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
