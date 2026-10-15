import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { BeanBag, RoasterDrawing } from "@/components/illustrations";
import { mock } from "@/lib/mockup";
import { roaster } from "@/content";

// The roaster's deep red owns the whole section.
export default function Roaster() {
  return (
    <section id="roaster" className="section on-dark bg-roaster text-bata" aria-labelledby="roaster-title">
      <Container>
        <Reveal className="grid grid-cols-12 items-center gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:row-start-1 md:self-end">
            <h2 id="roaster-title" className="t-head">
              {roaster.heading}
            </h2>
            <p className="t-body mt-5 max-w-[34ch]">{roaster.fact}</p>
            <p className="t-body mt-2 max-w-[38ch] text-bata/85" {...mock(roaster.claim.mockup)}>
              {roaster.claim.text}
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:row-span-2 md:row-start-1">
            <RoasterDrawing label={roaster.roasterAlt} className="roaster-drawing block h-auto w-full" />
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 md:row-start-2 md:self-start">
            <div className="flex items-end gap-3" {...mock(roaster.beans.mockup)}>
              <BeanBag label={roaster.bagAlt} className="bean-bag block flex-none" />
              <div className="pb-3">
                <p className="t-lead font-semibold">{roaster.beans.name}</p>
                <p className="t-body tabular mt-1">
                  {roaster.beans.size} · {roaster.beans.price}
                </p>
              </div>
            </div>
            <p className="t-body mt-6 max-w-[40ch] text-bata/85" {...mock(roaster.brew.mockup)}>
              {roaster.brew.text}
            </p>
            <p className="t-small mt-6 text-bata/70" {...mock(roaster.illustrationsMockup)}>
              {roaster.illustrationLabel}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
