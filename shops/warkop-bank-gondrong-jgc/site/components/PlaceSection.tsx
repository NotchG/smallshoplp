import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { place } from "@/content";

export default function PlaceSection() {
  return (
    <section id={place.id} className="section ground-hijau" aria-labelledby="place-heading">
      <Container>
        <Reveal className="grid-page gap-y-10 md:gap-y-8">
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:row-start-1 md:self-end lg:col-span-5 lg:col-start-7">
            <h2 id="place-heading" className="t-head">
              {place.heading}
            </h2>
            <p className="t-body mt-5 measure">{place.lead}</p>
          </div>
          <figure className="col-span-12 md:col-span-5 md:col-start-1 md:row-start-1 md:row-span-2 lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="place-photo"
              src={place.photo.src}
              width={place.photo.width}
              height={place.photo.height}
              alt={place.photo.alt}
              fetchPriority="low"
            />
            <figcaption className="t-small mt-2">{place.photo.caption}</figcaption>
          </figure>
          <ul className="spots col-span-12 md:col-span-6 md:col-start-7 md:row-start-2 md:self-start lg:col-span-5 lg:col-start-7">
            {place.spots.map((spot) => (
              <li key={spot.title} className="spot">
                <span className="t-lead block">{spot.title}</span>
                <span className="t-body block mt-1">{spot.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
