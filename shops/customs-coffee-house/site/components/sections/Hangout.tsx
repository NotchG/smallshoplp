import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { features, hangout, shop } from "@/content";
import { mock } from "@/lib/mockup";

const TILTS = [-1.5, 1, -0.5, 1.5, -1, 0.5];

// Tempat nongkrong: the red feature wall. The back room photo, and the six things people
// come for as die-cut stickers with one line each.
export default function Hangout() {
  return (
    <section id="nongkrong" className="section ground-tembok" aria-labelledby="nongkrong-h">
      <Container>
        <Reveal className="hangout-grid">
          <div className="hangout-photo">
            <img
              src="/photos/ruang-belakang.jpg"
              width={900}
              height={900}
              alt={hangout.photoAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="hangout-body">
            <h2 id="nongkrong-h" className="h-section">
              {hangout.heading}
            </h2>
            <p className="t-lead hangout-lead">{hangout.lead}</p>
            <ul className="features">
              {features.map((f, i) => (
                <li key={f.title} className="feature" {...mock(f.mockup)}>
                  <h3
                    className={`sticker t-label t-body ${f.mockup ? "sticker-mustard" : ""}`}
                    style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
                  >
                    {f.title}
                  </h3>
                  <p className="feature-line">{f.line}</p>
                  {f.whatsapp && (
                    <a
                      href={shop.whatsapp.url}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-secondary-dark feature-cta"
                      aria-label="Chat WhatsApp untuk kopdar"
                      {...mock(shop.whatsapp.mockup)}
                    >
                      <span>Chat WhatsApp</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
