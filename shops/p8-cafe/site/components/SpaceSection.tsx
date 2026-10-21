import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { PendantLamp } from "@/components/Illustrations";
import { space } from "@/content";

// 4. Kerja & ngumpul: the quiet passage. Three points, each under one of P8's black pendant lamps.
export default function SpaceSection() {
  return (
    <section id="ruang" aria-labelledby="ruang-judul" className="section bg-sage">
      <Container>
        <Reveal>
          <div className="grid-12 space-top">
            <h2 id="ruang-judul" className="t-head space-head">
              {space.title}
            </h2>
            <p className="t-lead space-lead max-w-[30ch]">{space.lead}</p>
          </div>
          <ul className="space-points">
            {space.points.map((p) => (
              <li key={p.title} className="space-point">
                <PendantLamp className="lamp" />
                <div>
                  <h3 className="t-point">{p.title}</h3>
                  <p className="t-body mt-2 max-w-[32ch]">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
