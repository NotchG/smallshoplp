import Container from "./Container";
import Reveal from "./Reveal";
import { sudut } from "@/content";
import { mock } from "@/lib/mockup";

// The vibe people come for, as side A of a cassette: the corners of the shop in order.
export default function Sudut() {
  return (
    <section id="sudut-lawas" className="section" aria-labelledby="sudut-title">
      <Container>
        <Reveal className="sudut-grid">
          <div className="sudut-head">
            <h2 id="sudut-title" className="t-head font-display">
              {sudut.title}
            </h2>
            <p className="section-intro t-lead" {...mock(sudut.intro.mockup)}>
              {sudut.intro.text}
            </p>
          </div>
          <figure className="sudut-photo photo-frame">
            <img src="/photos/interior-1200.jpg" width={1200} height={770} alt={sudut.photoAlt} decoding="async" />
          </figure>
          <div className="sudut-tracks">
            <p className="side-label kicker" {...mock(sudut.side.mockup)}>
              {sudut.side.text}
            </p>
            <ol className="tracks">
              {sudut.tracks.map((t) => (
                <li key={t.no} className="track">
                  <span className="track-no" aria-hidden="true">
                    {t.no}
                  </span>
                  <div>
                    <h3 className="track-title t-lead">{t.title}</h3>
                    <p className="track-text">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
