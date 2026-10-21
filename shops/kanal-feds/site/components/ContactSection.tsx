import Container from "@/components/Container";
import { ArrowIcon } from "@/components/Icons";
import { contact } from "@/content";
import { mock } from "@/lib/mockup";

// "Hubungi kami" on palm: the page closes on the actions. No reveal here.
export default function ContactSection() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="on-palm section bg-palm text-chalk">
      <Container className="grid-page gap-y-8">
        <div className="lg:col-span-5">
          <h2 id="kontak-title" className="t-head">
            {contact.title}
          </h2>
          <p className="t-lead measure mt-4" {...mock(contact.lead.mockup)}>
            {contact.lead.text}
          </p>
        </div>
        <ul className="contact-list lg:col-span-6 lg:col-start-7">
          {contact.rows.map((r) => (
            <li key={r.label}>
              <a
                href={r.href}
                className="contact-row t-lead"
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...mock(r.mockup)}
              >
                <span>
                  <span className="font-medium">{r.label}</span>
                  <span className="text-muted-palm"> · {r.detail}</span>
                </span>
                <ArrowIcon />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
