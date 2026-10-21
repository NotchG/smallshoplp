import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BeanCardScene from "@/components/BeanCardScene";
import { kopi } from "@/content";
import { mock } from "@/lib/mockup";

// Proof of seriousness: the tray and the bean card on one side, the brew notes and the
// coffee list on the other. DOM order is the phone order (heading, scene, details).
export default function Kopi() {
  return (
    <section id="kopi" aria-labelledby="kopi-h" className="section">
      <Container>
        <div className="grid-12 kopi-grid">
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2 id="kopi-h" className="t-head font-display text-accent">{kopi.heading}</h2>
            <p className="t-lead font-display mt-5 measure" {...mock(kopi.lead.mockup)}>
              {kopi.lead.text}
            </p>
          </Reveal>

          <div className="mt-4 lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
            <BeanCardScene />
          </div>

          <Reveal className="mt-6 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:mt-2">
            <dl className="grid gap-5">
              {kopi.brewNotes.map((b) => (
                <div key={b.method} {...mock(b.mockup)}>
                  <dt className="font-semibold">{b.method}</dt>
                  <dd className="text-muted">{b.text}</dd>
                </div>
              ))}
            </dl>

            <ul className="price-list mt-8" aria-label="Daftar kopi dan harga contoh">
              {kopi.coffee.map((c) => (
                <li key={c.name} {...mock(c.mockup)}>
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-muted">{"\u00a0· "}<span className="whitespace-nowrap">{c.price}</span></span>
                  {c.note && <span className="block t-small text-muted">{c.note}</span>}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-muted">{kopi.espressoLine}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
