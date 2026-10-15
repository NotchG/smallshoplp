import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PlatePhoto from "@/components/PlatePhoto";
import TreatArt from "@/components/art/treats";
import { breakfast } from "@/content";
import { mock } from "@/lib/mockup";

export default function Breakfast() {
  const { plate, wings } = breakfast;
  return (
    <section id="sarapan" aria-labelledby="sarapan-h" className="section bg-sand">
      <Container>
        <Reveal className="breakfast-grid">
          <div className="breakfast-head">
            <h2 id="sarapan-h" className="t-head">
              {breakfast.heading}
            </h2>
            <p className="t-small price-line" {...mock(breakfast.price.mockup)}>
              {breakfast.price.text}
            </p>
          </div>

          <PlatePhoto
            className="breakfast-photo"
            src={plate.photo.src}
            alt={plate.photo.alt}
            labels={plate.labels}
            sizes="(min-width: 1280px) 588px, (min-width: 768px) 576px, 100vw"
          />

          <div className="breakfast-body">
            <h3 className="t-lead treat-name">{plate.name}</h3>
            <p className="t-body treat-note measure">{plate.components}</p>
            <p className="t-body mt-3 measure" {...mock(breakfast.allDay.mockup)}>
              {breakfast.allDay.text}
            </p>

            <div className="wings-row" {...mock(wings.mockup)}>
              <TreatArt art={wings.art} label={wings.artLabel} className="wings-art" />
              <div>
                <h3 className="t-lead treat-name">{wings.name}</h3>
                <p className="t-body treat-note">{wings.note}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
