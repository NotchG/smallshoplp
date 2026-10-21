import { hubungi } from "@/content";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import { mock } from "@/lib/mockup";

// 9 Hubungi kami (cobalt close): three tall link rows, label and value side by side.
export default function Hubungi() {
  return (
    <section className="ground-cobalt section" aria-labelledby="hubungi-h">
      <Container className="grid-12">
        <div className="lg:col-span-5">
          <h2 id="hubungi-h" className="f-display t-head">
            {hubungi.heading}
          </h2>
          <p className="t-lead measure mt-4" {...mock(hubungi.lead.mockup)}>
            {hubungi.lead.text}
          </p>
        </div>
        <ul className="contact-list mt-10 lg:col-span-6 lg:col-start-7 lg:mt-2">
          {hubungi.rows.map((r) => (
            <li key={r.label}>
              <a href={r.href} className="contact-row" {...mock(r.mockup)}>
                <span className="contact-label f-name t-lead">{r.label}</span>
                <span className="contact-value t-body">{r.value}</span>
                <Icon name="arrow" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
