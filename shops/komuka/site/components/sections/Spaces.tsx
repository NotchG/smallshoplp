import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ArchPhoto from "@/components/ArchPhoto";
import Button from "@/components/Button";
import { shop, spaces } from "@/content";
import { mock } from "@/lib/mockup";

// "Ruang di KOMUKA": evening has started. Jendela field, space names in lampu.
export default function Spaces() {
  return (
    <section id="ruang" aria-labelledby="ruang-title" className="field-dark bg-jendela text-kapur">
      <Container className="section">
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          <ArchPhoto
            className="lg:col-span-7"
            variant="segment"
            src={spaces.photo.src}
            alt={spaces.photo.alt}
            width={spaces.photo.width}
            height={spaces.photo.height}
          />
          <div className="lg:col-span-5">
            <h2 id="ruang-title" className="t-head">
              {spaces.heading}
            </h2>
            <p className="t-lead mt-3">{spaces.lead}</p>
            <ul className="mt-8 space-y-6">
              {spaces.items.map((s) => (
                <li key={s.name}>
                  <h3 data-check className="t-lead font-display font-bold text-lampu">
                    {s.name}
                  </h3>
                  <p className="t-body mt-1">{s.text}</p>
                </li>
              ))}
            </ul>
            <Button href={shop.whatsappVip.url} className="mt-9" {...mock(spaces.cta.mockup)}>
              {spaces.cta.text}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
