import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ShelfGrid from "@/components/ShelfGrid";
import { work } from "@/content";
import { withNums } from "@/lib/nums";

export default function Work() {
  return (
    <section id="kerja" className="section section-follow bg-plaster on-plaster" aria-labelledby="kerja-title">
      <Container>
        <Reveal>
          <div className="grid-12 gap-y-10">
            <div className="lg:col-span-5 lg:self-center">
              <h2 id="kerja-title" className="t-head">
                {work.heading}
              </h2>
              <p className="t-lead font-display mt-5 max-w-[26rem]">{withNums(work.lead.text)}</p>
            </div>
            <div className="lg:col-start-6 lg:col-span-7">
              <ShelfGrid cells={work.cells} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
