import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { kerja } from "@/content";
import { mock } from "@/lib/mockup";

// The wainscot itself: a full green band opening with the cove line, the workspace facts
// set in its moulded panels (3 × 2 on desktop, 2 columns on tablet, one framed panel on phone).
export default function Kerja() {
  return (
    <section id="ruang-kerja" aria-labelledby="kerja-h" className="wainscot on-green section">
      <span className="cove-line" aria-hidden="true" />
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-4">
            <h2 id="kerja-h" className="t-head font-display">{kerja.heading}</h2>
            <p className="t-lead font-display mt-5 text-daun" {...mock(kerja.lead.mockup)}>
              {kerja.lead.text}
            </p>
            <p className="mt-6 text-daun" {...mock(kerja.groupTable.mockup)}>
              {kerja.groupTable.text}
            </p>
          </div>

          <ul className="panels mt-6 lg:col-span-8 lg:col-start-5 lg:mt-0">
            {kerja.work.map((w) => (
              <li key={w.title} className="panel">
                <Icon name={w.icon} className="panel-icon text-lampu" />
                <div>
                  <p className="font-semibold">{w.title}</p>
                  <p className="mt-1 text-daun">{w.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
