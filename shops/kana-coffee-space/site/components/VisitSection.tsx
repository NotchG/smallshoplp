import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CircledNumber from "@/components/CircledNumber";
import { DirectionsButton } from "@/components/Buttons";
import { mock } from "@/lib/mockup";
import { sectionCopy, shop, visitSteps } from "@/content";

// Kunjungi kami (ochre): address, how to find it off the main road, hours, map.
export default function VisitSection() {
  const c = sectionCopy.visit;
  return (
    <section id="kunjungi" className="section ground-ochre" aria-labelledby="kunjungi-title">
      <Container>
        <Reveal className="grid-12 gap-y-10">
          <div className="lg:col-span-5">
            <h2 id="kunjungi-title" className="section-head text-rust" {...mock(c.heading.mockup)}>
              {c.heading.text}
            </h2>
            <p className="t-lead mt-5 max-w-[24ch] text-pretty" {...mock(c.lead.mockup)}>
              {c.lead.text}
            </p>

            <address className="mt-8 not-italic">
              <span className="block font-semibold">{shop.street}</span>
              <span className="block">{shop.district}</span>
            </address>

            <h3 className="label mt-8">{c.stepsTitle}</h3>
            <ol role="list" className="mt-3">
              {visitSteps.map((s, i) => (
                <li key={s.text} className="rule-t flex gap-4 py-3" {...mock(s.mockup)}>
                  <CircledNumber n={i + 1} className="mt-0.5" />
                  <span>{s.text}</span>
                </li>
              ))}
            </ol>

            <h3 className="label mt-8">{c.hoursTitle}</h3>
            <p className="mt-3">
              <span className="block font-semibold">{shop.hours.label}</span>
              <span className="block">{shop.hours.everyDay}</span>
            </p>

            <DirectionsButton className="mt-8" />
          </div>

          <div className="lg:col-span-7">
            <div className="map-frame">
              <iframe
                src={shop.mapEmbed}
                title={c.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
