import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import PlaceVignette from "@/components/art/PlaceVignette";
import { suasana } from "@/content";
import { mock } from "@/lib/mockup";

const factIcons: IconName[] = ["leaf", "smoke", "laptop"];

// Where to sit, said plainly: inside is the white room, outside is the smoking terrace.
export default function Suasana() {
  const panels = [
    { key: "inside" as const, cls: "panel-in", ...suasana.inside },
    { key: "outside" as const, cls: "panel-out", ...suasana.outside },
  ];

  return (
    <section id="suasana" className="section" aria-labelledby="suasana-title">
      <Container>
        <Reveal>
          <div className="section-head">
            <h2 id="suasana-title" className="t-head">
              {suasana.heading}
            </h2>
            <p className="t-lead" {...mock(suasana.lead.mockup)}>
              {suasana.lead.text}
            </p>
          </div>

          <div className="panels">
            {panels.map((p) => (
              <article key={p.key} className={`panel ${p.cls}`} aria-labelledby={`panel-${p.key}`}>
                <figure data-mockup="">
                  <PlaceVignette variant={p.key} label={p.label} />
                  <figcaption {...mock(suasana.caption.mockup)}>{suasana.caption.text}</figcaption>
                </figure>
                <div className="panel-body">
                  <h3 id={`panel-${p.key}`} className="t-lead">
                    {p.title}
                  </h3>
                  <p className="t-body" {...mock(p.text.mockup)}>
                    {p.text.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <ul className="facts" aria-label="Info singkat">
            {suasana.facts.map((f, i) => (
              <li key={f.text} className="t-body" {...mock(f.mockup)}>
                <Icon name={factIcons[i]} />
                {f.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
