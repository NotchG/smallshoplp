import { tempat } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Tempat() {
  return (
    <section id="tempat" aria-labelledby="tempat-h" className="section bg-board">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="tempat-h" className="t-head">
              {tempat.heading}
            </h2>
            <p className="t-lead mt-5 text-cream">{tempat.statement}</p>
            <ul className="mt-8 border-b border-cream/15">
              {tempat.facts.map((f) => (
                <li key={f.text} className="t-body border-t border-cream/15 py-3 text-cream" {...mock(f.mockup)}>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14 lg:col-span-7 lg:mt-0 lg:pl-10">
            <h3 className="t-lead font-semibold">{tempat.praiseHeading}</h3>
            <p className="t-small mt-1 text-mist">{tempat.ratingLine}</p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {tempat.praise.map((p) => (
                <li key={p.text} className="praise-frame">
                  <div>
                    <p className="t-body text-cream">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
