import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { place } from "@/content";
import { mock } from "@/lib/mockup";

// The space, read like a floor directory for a two-storey shophouse.
export default function Tempatnya() {
  return (
    <section aria-labelledby="place-title" className="section band-sky">
      <Container>
        <Reveal className="grid-12 gap-y-8 lg:gap-y-10">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
            <h2 id="place-title" className="t-head">
              {place.heading}
            </h2>
            <p className="t-lead mt-4 max-w-[28ch] font-medium">{place.lead}</p>
          </div>

          <img
            className="rounded-card aspect-[4/3] w-full bg-paper object-cover lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center"
            src={place.photo.src}
            srcSet={`${place.photo.srcSmall} 800w, ${place.photo.src} 900w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={place.photo.width}
            height={place.photo.height}
            alt={place.photo.alt}
            loading="lazy"
            decoding="async"
          />

          <dl className="lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-start">
            {place.floors.map((f) => (
              <div key={f.label} className="floor-row">
                <dt className="t-label text-cobalt">{f.label}</dt>
                <dd className="t-body">
                  <span {...mock(f.text.mockup)}>{f.text.text}</span>
                  {f.extra && (
                    <>
                      {" "}
                      <span className="font-semibold" {...mock(f.extra.mockup)}>
                        {f.extra.text}
                      </span>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
