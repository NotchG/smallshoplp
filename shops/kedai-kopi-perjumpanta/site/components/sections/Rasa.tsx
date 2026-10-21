import { rasa } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

function PhotoSlot({ label, caption, mockup }: { label: string; caption: string; mockup?: boolean }) {
  return (
    <figure {...mock(mockup)}>
      <div className="slot-box t-body" role="img" aria-label={`${label}. ${caption}`}>
        <span aria-hidden="true">{label}</span>
      </div>
      <figcaption className="slot-caption t-small" aria-hidden="true">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function Rasa() {
  return (
    <section className="section ground-tinta" aria-labelledby="rasa-judul">
      <Container>
        <Reveal>
          <div className="grid-12">
            <div className="rasa-text">
              <h2 id="rasa-judul" className="rasa-h2 t-head font-display font-extrabold">
                {rasa.heading}
              </h2>
              <p className="rasa-lead t-lead" {...mock(rasa.lead.mockup)}>
                {rasa.lead.text}
              </p>
              <div className="rasa-body">
                {rasa.body.map((b) => (
                  <p key={b.text} {...mock(b.mockup)}>
                    {b.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="slots">
              {rasa.slots.map((s) => (
                <PhotoSlot key={s.label} {...s} />
              ))}
            </div>
          </div>
          <ul className="rasa-list">
            {rasa.items.map((it) => (
              <li key={it.title} {...mock(it.mockup)}>
                <h3 className="t-lead">{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
