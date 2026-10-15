import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { labels, links, music } from "@/content";
import { mock } from "@/lib/mockup";

// The "layar": the projection screen at the end of the hall, with the bossa nova slide
// seen in photo-1, two flat stage-light wedges from the top corners.
function StageScreen() {
  const { screen } = music;
  return (
    <figure className="stage-screen">
      <div className="screen-box on-plafon">
        <svg className="screen-light" viewBox="0 0 160 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <polygon points="14,0 22,0 66,90 30,90" fill="var(--color-garis)" fillOpacity="0.09" />
          <polygon points="146,0 138,0 94,90 130,90" fill="var(--color-garis)" fillOpacity="0.09" />
        </svg>
        <p className="screen-kicker t-small t-label text-rotan" {...mock(screen.kicker.mockup)}>
          {screen.kicker.text}
        </p>
        <p className="screen-title" data-check="">
          {screen.title}
        </p>
      </div>
      <figcaption className="sr-only">{screen.label}</figcaption>
    </figure>
  );
}

export default function MusicSection() {
  return (
    <section id="musik" className="on-bilik" aria-labelledby="musik-title">
      <Container className="section">
        <Reveal className="music-grid">
          <div className="music-head">
            <h2 id="musik-title" className="t-head" data-check="">
              {music.heading}
            </h2>
            <p className="t-body measure mt-5" {...mock(music.body.mockup)}>
              {music.body.text}
            </p>
          </div>

          <div className="music-screen">
            <StageScreen />
          </div>

          <div className="music-list">
            <ul className="music-facts t-body">
              {music.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
              {music.mockupItems.map((m) => (
                <li key={m.text} {...mock(m.mockup)}>
                  {m.text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton href={links.whatsapp.url} icon="chat" external mockup={links.whatsapp.mockup}>
                {labels.booking}
              </ActionButton>
              <ActionButton href={links.tel} variant="outline" icon="phone">
                {labels.call}
              </ActionButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
