import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { praise, shop, ui } from "@/content";
import { mock } from "@/lib/mockup";

// Themes paraphrased from the Google reviews. No names, no quote marks, no stars.
export default function KataMereka() {
  return (
    <section id="kata-mereka" className="section" aria-labelledby="praise-title">
      <Container>
        <Reveal className="praise-grid">
          <div className="praise-side">
            <h2 id="praise-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-lead nums">{praise.rating}</p>
            <p className="t-body" {...mock(praise.intro.mockup)}>
              {praise.intro.text}
            </p>
            <Button href={shop.mapsUrl} variant="secondary" icon="external" external>
              {ui.readReviews}
            </Button>
          </div>
          <ul className="themes">
            {praise.themes.map((t) => (
              <li key={t.title}>
                <h3 className="t-lead">{t.title}</h3>
                <p className="t-body">{t.line}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
