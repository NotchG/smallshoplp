import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import { ToeanNjonjaBottle } from "./illustrations";
import { toeanNjonja } from "@/content";
import { mock } from "@/lib/mockup";

// One cream enamel sign on the navy of the doorway, deliberately narrow (1000px max).
export default function ToeanNjonja() {
  return (
    <section id="toean-njonja" className="section tn" aria-labelledby="tn-title">
      <Container>
        <Reveal>
          <div className="sign on-cream">
            <span className="rivet rivet--tl" aria-hidden="true" />
            <span className="rivet rivet--tr" aria-hidden="true" />
            <span className="rivet rivet--bl" aria-hidden="true" />
            <span className="rivet rivet--br" aria-hidden="true" />
            <ToeanNjonjaBottle className="sign-art" label={toeanNjonja.artLabel} />
            <div className="sign-copy">
              <p className="kicker sign-kicker">{toeanNjonja.kicker}</p>
              <h2 id="tn-title" className="sign-title t-head">
                {toeanNjonja.title}
              </h2>
              <p className="sign-body t-lead">{toeanNjonja.body}</p>
              <ul className="sign-lines">
                {toeanNjonja.lines.map((l) => (
                  <li key={l.text} {...mock(l.mockup)}>
                    {l.text}
                  </li>
                ))}
              </ul>
              <Button href={toeanNjonja.ctaHref} mockup={toeanNjonja.cta.mockup} className="sign-cta">
                {toeanNjonja.cta.text}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
