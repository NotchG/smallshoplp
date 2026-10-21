import { camilan } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoWithCaption from "@/components/PhotoWithCaption";

// 3 Camilan & manis (mustard): two portrait photos, side by side from 640px, the second dropped for rhythm.
export default function Camilan() {
  const [bites, churros] = camilan.items;
  return (
    <section className="ground-mustard section" aria-labelledby="camilan-h">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-4">
            <h2 id="camilan-h" className="f-display t-head">
              {camilan.heading}
            </h2>
            <p className="t-lead measure mt-4">{camilan.lead}</p>
            <p className="mt-4">{camilan.extra}</p>
          </div>
          <div className="camilan-photos mt-10 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <PhotoWithCaption photo={bites.photo} price={bites.price} ratio="2 / 3" />
            <PhotoWithCaption
              photo={churros.photo}
              price={churros.price}
              ratio="var(--churros-ratio)"
              objectPosition="50% 72%"
              className="churros"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
