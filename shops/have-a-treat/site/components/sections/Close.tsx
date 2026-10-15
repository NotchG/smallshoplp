import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Letterboard from "@/components/Letterboard";
import WaveRule from "@/components/WaveRule";
import { contact, footer, visit, shop } from "@/content";
import { mock } from "@/lib/mockup";

function Arrow() {
  return (
    <svg className="contact-arrow" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path
        d="M3 10h13M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// The arrow rides with the last word, so it stays 8px after the text even when the label wraps.
function ArrowLabel({ text }: { text: string }) {
  const i = text.lastIndexOf(" ");
  return (
    <span>
      {text.slice(0, i + 1)}
      <span className="whitespace-nowrap">
        {text.slice(i + 1)}
        <Arrow />
      </span>
    </span>
  );
}

export function Visit() {
  return (
    <section id="kunjungi" aria-labelledby="kunjungi-h" className="bg-felt text-plaster on-dark close-top">
      <Container>
        <WaveRule className="text-plaster" />
      </Container>
      <Container className="section">
        <Reveal className="visit-grid">
          <div className="visit-info">
            <h2 id="kunjungi-h" className="t-head">
              {visit.heading}
            </h2>
            <p className="t-body mt-4 measure">{visit.address}</p>
            <p className="t-body mt-5">{visit.days}</p>
            <p className="t-lead visit-hours">{visit.hours}</p>
            <a className="btn btn-amber mt-6" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              {visit.cta}
            </a>
          </div>
          <div className="visit-map">
            <div className="visit-map-placeholder" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" focusable="false">
                <path
                  d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.4" fill="currentColor" />
              </svg>
              <span className="t-small">{visit.mapPlaceholder}</span>
              <span className="t-small">{shop.addressShort}</span>
            </div>
            <iframe
              src={shop.mapEmbedUrl}
              title={visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="hubungi" aria-labelledby="hubungi-h" className="bg-felt text-plaster on-dark">
      <Container className="section contact-section">
        <Reveal className="contact-grid">
          <div className="contact-info">
            <h2 id="hubungi-h" className="t-head">
              {contact.heading}
            </h2>
            <ul className="contact-list">
              {contact.rows.map((r) => (
                <li key={r.id} {...mock(r.mockup)}>
                  <a
                    className="contact-row"
                    href={r.href}
                    {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <ArrowLabel text={r.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-board">
            <Letterboard className="board-lg" lines={contact.board.lines} label={contact.board.label} />
            <div className="board-shelf" aria-hidden="true" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-felt site-footer">
      <Container>
        <p className="t-small footer-text">{footer.text}</p>
      </Container>
    </footer>
  );
}
