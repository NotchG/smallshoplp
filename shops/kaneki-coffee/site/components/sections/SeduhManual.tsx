import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Dripper from "@/components/art/Dripper";
import { manualBrew } from "@/content";
import { mock } from "@/lib/mockup";

// The manual-brew bar, on the awning green. Beans set as precise rows, like a recipe card.
export default function SeduhManual() {
  return (
    <section id="seduh-manual" className="section on-kanopi" aria-labelledby="brew-title">
      <Container>
        <Reveal className="brew-grid">
          <div className="brew-main">
            <h2 id="brew-title" className="t-head">
              {manualBrew.heading}
            </h2>
            <p className="t-lead" {...mock(manualBrew.lead.mockup)}>
              {manualBrew.lead.text}
            </p>
            <div className="brew-body">
              {manualBrew.body.map((line) => (
                <p key={line.text} className="t-body" {...mock(line.mockup)}>
                  {line.text}
                </p>
              ))}
            </div>
            <div className="brew-art">
              <Dripper />
            </div>
          </div>

          <div className="brew-beans">
            <h3 className="t-lead">{manualBrew.beansHeading}</h3>
            <ul>
              {manualBrew.beans.map((b) => (
                <li key={b.origin.text} className="bean">
                  <p className="t-lead" {...mock(b.origin.mockup)}>
                    {b.origin.text}
                  </p>
                  <p className="bean-method t-body" {...mock(b.method.mockup)}>
                    {b.method.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="brew-milk">
              <h3 className="t-lead">{manualBrew.plantMilk.title}</h3>
              <p className="t-body" {...mock(manualBrew.plantMilk.text.mockup)}>
                {manualBrew.plantMilk.text.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
