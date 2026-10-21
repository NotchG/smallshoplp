import { music, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { StageScene } from "@/components/art/Scenes";

// Under the trees by the stage: rimbun field.
export default function Music() {
  return (
    <section aria-labelledby="music-title" className="section field-rimbun">
      <Container>
        <Reveal className="music-grid">
          <div className="music-copy">
            <h2 id="music-title" className="t-head">
              {music.heading}
            </h2>
            <p className="t-lead measure mt-5" {...mock(music.lead.mockup)}>
              {music.lead.text}
            </p>
            <dl className="details">
              {music.details.map((d) => (
                <div key={d.label} className="detail-row">
                  <dt className="t-label">{d.label}</dt>
                  <dd {...mock(d.value.mockup)}>{d.value.text}</dd>
                </div>
              ))}
            </dl>
            <a
              href={shop.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-lampu mt-6"
              {...mock(music.askLink.mockup)}
            >
              {music.askLink.text}
              <ArrowRight />
            </a>
          </div>
          <div className="music-art">
            <StageScene />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
