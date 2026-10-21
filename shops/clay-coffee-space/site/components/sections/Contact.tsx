import { contact } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import { ArrowRight } from "@/components/ui/Icons";

// The page ends on the light: lampu field, malam text.
export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className="section field-lampu contact">
      <Container className="contact-grid">
        <div className="contact-head">
          <h2 id="contact-title" className="t-head">
            {contact.heading}
          </h2>
          <p className="t-lead measure mt-5" {...mock(contact.lead.mockup)}>
            {contact.lead.text}
          </p>
        </div>
        <ul className="contact-rows">
          {contact.rows.map((row) => (
            <li key={row.label}>
              <a
                href={row.href}
                className="contact-row"
                {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...mock(row.mockup)}
              >
                <span className="t-label">{row.label}</span>
                <span className="detail t-lead">
                  {row.detail}
                  <ArrowRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="field-lampu site-footer">
      <Container className="footer-inner">
        <p>{contact.footer}</p>
      </Container>
    </footer>
  );
}
