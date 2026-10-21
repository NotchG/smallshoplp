import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PavilionDrawing from "@/components/PavilionDrawing";
import { labels, setting } from "@/content";
import { mock } from "@/lib/mockup";

// Di tepi Ciliwung: prove the place without photos.
export default function Setting() {
  return (
    <section className="ground-batu section" aria-labelledby="setting-title">
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="setting-title" className="t-head text-merbau">
              {setting.heading}
            </h2>
            <p className="t-lead mt-6">{setting.lead}</p>
            <p className="t-body measure mt-5">{setting.body}</p>
            <ul className="fact-list mt-8">
              {setting.facts.map((f) => (
                <li key={f.text} {...mock(f.mockup)}>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
          <figure className="lg:col-span-7">
            <PavilionDrawing label={setting.drawingLabel} />
            <figcaption className="t-small mt-3 text-baja-soft">{labels.illustration}</figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
