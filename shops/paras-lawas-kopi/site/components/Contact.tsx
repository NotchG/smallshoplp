import Container from "./Container";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { contact, hours, shop } from "@/content";
import { mock } from "@/lib/mockup";

export function Contact() {
  return (
    <section id="kontak" className="section contact" aria-labelledby="contact-title">
      <Container>
        <Reveal className="contact-grid">
          <div className="contact-head">
            <h2 id="contact-title" className="t-head font-display">
              {contact.title}
            </h2>
            <p className="section-intro" {...mock(contact.intro.mockup)}>
              {contact.intro.text}
            </p>
          </div>
          <div className="contact-body">
            <ul className="contact-rows">
              {contact.rows.map((row) => (
                <li key={row.label}>
                  <a href={row.href} className="contact-row" {...mock(row.mockup)}>
                    <span>
                      <span className="contact-label kicker">{row.label}</span>
                      <span className="contact-value">{row.value}</span>
                    </span>
                    <ArrowRight />
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-extras">
              {contact.extras.map((e, i) => (
                <span key={e.text} {...mock(e.mockup)}>
                  {i > 0 && " "}
                  {e.text}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <p className="footer-name t-lead">{shop.sign}</p>
          <p>{shop.address}</p>
          <p className="tabular">{hours.summary}</p>
        </div>
      </Container>
    </footer>
  );
}
