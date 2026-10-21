import { podcast, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ui/ActionButton";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { Chat } from "@/components/ui/Icons";
import { PodcastScene } from "@/components/art/Scenes";

// Into the white-framed pavilion: the section sits inside a drawn frame under a gable roof.
function Gable() {
  return (
    <svg className="gable" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 20L50 0L100 20" className="gable-line" />
      <path d="M25 10V20M50 0V20M75 10V20" className="gable-line gable-mullion" />
    </svg>
  );
}

export default function Podcast() {
  return (
    <section aria-labelledby="podcast-title" className="section">
      <Container>
        <Reveal className="pavilion">
          <Gable />
          <div className="pavilion-box">
            <div className="pavilion-main">
              <div className="pavilion-copy">
                <h2 id="podcast-title" className="t-head">
                  {podcast.heading}
                </h2>
                <p className="t-lead measure mt-5" {...mock(podcast.lead.mockup)}>
                  {podcast.lead.text}
                </p>
                <p className="measure-body mt-4 text-kanvas" {...mock(podcast.rental.mockup)}>
                  {podcast.rental.text}
                </p>
              </div>
              <div className="pavilion-offer">
                <p className="t-lead text-lampu tabular" {...mock(podcast.price.mockup)}>
                  {podcast.price.text}
                </p>
                <ActionButton
                  href={shop.whatsapp.url}
                  external
                  icon={<Chat />}
                  mockup={podcast.cta.mockup}
                  className="mt-5"
                >
                  {podcast.cta.text}
                </ActionButton>
              </div>
            </div>
            <div className="pavilion-side">
              <PhotoSlot
                tag={podcast.photoTag}
                label="Gambar Podcast Box: mikrofon dan headphone di meja, di dalam paviliun kaca"
                className="pavilion-slot"
              >
                <PodcastScene />
              </PhotoSlot>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
