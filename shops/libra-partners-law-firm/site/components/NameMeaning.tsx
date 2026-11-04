import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { meaning } from "@/content";
import { mock } from "@/lib/mockup";

// 2. Arti nama LIBRA: heading cols 1–4, text cols 6–11.
export default function NameMeaning() {
  return (
    <section aria-labelledby="arti" className="section section-flow">
      <Container>
        <Reveal className="g12 gap-y-5">
          <h2 id="arti" className="t-head lg:col-start-1 lg:col-end-5">
            {meaning.heading}
          </h2>
          <div className="lg:col-start-6 lg:col-end-12">
            <p className="t-lead font-display measure" {...mock(meaning.lead.mockup)}>
              {meaning.lead.text}
            </p>
            {meaning.body.map((p) => (
              <p key={p.text} className="mt-4 t-body measure text-lis" {...mock(p.mockup)}>
                {p.text}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
