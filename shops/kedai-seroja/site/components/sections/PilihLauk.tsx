import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { TrayArt } from "@/components/art/DishArt";
import { ramesan as r } from "@/content";
import { mock } from "@/lib/mockup";

// The etalase: eight trays on leaf liners on a teak counter base.
export default function PilihLauk() {
  return (
    <section id="lauk" className="section bg-putih" aria-labelledby="lauk-title">
      <Container>
        <Reveal className="split">
          <div className="split-4">
            <h2 id="lauk-title" className="t-head">{r.title}</h2>
            <p className="sec-intro t-body">{r.text}</p>
            <p className="price-from type" {...mock(r.priceFrom.mockup)}>{r.priceFrom.text}</p>
            <p className="lauk-line t-body" {...mock(r.line.mockup)}>{r.line.text}</p>
          </div>
          <div className="split-8 counter">
            <ul className="counter-trays" aria-label={r.counterLabel}>
              {r.trays.map((t) => (
                <li key={t.name} className="tray-wrap" {...mock(t.mockup)}>
                  <div className="tray">
                    <TrayArt name={t.art} label={t.name} />
                  </div>
                  <span className="tray-label">{t.name}</span>
                </li>
              ))}
            </ul>
            <div className="counter-base" aria-hidden />
            <p className="note type t-small tray-note" {...mock(r.trayNote.mockup)}>{r.trayNote.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
