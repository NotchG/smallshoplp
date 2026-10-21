import Container from "@/components/Container";
import RouteLine from "@/components/RouteLine";
import { IconArrow } from "@/components/icons";
import { shop, station } from "@/content";
import { mock } from "@/lib/mockup";

// Dekat Stasiun KCIC Halim (tegel band).
export default function Station() {
  return (
    <section id="stasiun" className="on-tegel section" aria-labelledby="stasiun-title">
      <Container>
        <div className="grid-12 items-center gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="stasiun-title" className="t-head">
              {station.title}
            </h2>
            <p className="measure mt-5" {...mock(station.line.mockup)}>
              {station.line.text}
            </p>
            <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-u mt-3">
              <span>{station.link}</span>
              <IconArrow size={18} />
            </a>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <RouteLine from={station.from} to={station.to} time={station.time} />
          </div>
        </div>
      </Container>
    </section>
  );
}
