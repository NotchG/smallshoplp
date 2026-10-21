import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { suasana } from "@/content";
import { mockItem } from "@/lib/mockup";

// Vine ground. The terrace (owner photo crop: rattan chair, cement tiles) and the lounge (text only).
export default function Suasana() {
  return (
    <section id="suasana" aria-labelledby="suasana-h" className="section bg-vine text-rattan">
      <Container>
        <Reveal className="grid-12 gap-y-6 lg:gap-y-12">
          <h2 id="suasana-h" className="font-display t-head lg:col-span-5 lg:self-end">
            {suasana.heading}
          </h2>
          <p {...mockItem(suasana.lead, "t-lead max-w-[28ch] lg:col-span-6 lg:col-start-7 lg:self-end")}>
            {suasana.lead.text}
          </p>

          <figure className="mt-2 lg:col-span-5 lg:mt-0">
            <img
              src="/terrace-tiles.jpg"
              alt={suasana.photoAlt}
              width={530}
              height={534}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full max-w-[470px] rounded-[12px] object-cover"
            />
            <figcaption className="t-small mt-2 text-rattan-dim">{suasana.caption}</figcaption>
          </figure>

          <div className="mt-4 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:self-center">
            <h3 className="font-display t-lead">{suasana.terrace.title}</h3>
            <p className="measure mt-3">{suasana.terrace.body}</p>
            <hr className="my-8 border-0 border-t border-rattan/20 lg:my-10" />
            <h3 className="font-display t-lead">{suasana.lounge.title}</h3>
            <p className="measure mt-3">{suasana.lounge.body}</p>
            <p className="measure mt-4 text-rattan-dim">{suasana.shisha}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
