import { shop, visit } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "../Container";
import Icon from "../Icon";
import PlateButton from "../PlateButton";
import Reveal from "../Reveal";

export default function Visit() {
  return (
    <section id="lokasi" aria-labelledby="lokasi-h" className="wall-tembok section">
      <Container>
        <Reveal>
          <h2 id="lokasi-h" className="font-display t-head">{visit.heading}</h2>
          <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-8">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="map-frame">
                <iframe src={shop.embedUrl} title={visit.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
              <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="link mt-2 inline-flex min-h-11 items-center gap-2 [&_svg]:size-4">
                {visit.mapFallback}
                <Icon name="upRight" />
              </a>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5 md:grid md:grid-cols-2 md:gap-x-8 lg:block">
              <div>
              <address className="not-italic t-lead font-semibold">
                {shop.addressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
              <div className="mt-5">
                <PlateButton href={shop.directionsUrl} variant="green" icon="upRight" external>Petunjuk Arah</PlateButton>
              </div>

              <h3 className="t-small font-semibold uppercase tracking-widest mt-9">Jam buka</h3>
              <p className="t-lead font-semibold mt-1 tabular">{visit.hoursLine.days} <span className="nowrap">{visit.hoursLine.time}</span></p>
              <p>{shop.hoursNote}</p>
              <p className="t-small mt-1" {...mock(visit.ramadan.mockup)}>{visit.ramadan.text}</p>
              </div>
              <div>

              <h3 className="t-small font-semibold uppercase tracking-widest mt-9 md:mt-1 lg:mt-9">{visit.stepsTitle}</h3>
              <ol className="mt-3 space-y-3">
                {visit.steps.map((s, i) => (
                  <li key={s.text} className="flex gap-3" {...mock(s.mockup)}>
                    <span className="step-num" aria-hidden="true">{i + 1}</span>
                    <span className="pt-0.5">{s.text}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 font-semibold">{visit.parking}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
