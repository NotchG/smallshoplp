import { brew, seduh } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { BrewIcon } from "@/components/Icons";
import { BeanBag, BeanJar } from "@/components/Illos";

// The pine counter: pick the bean (jars by origin), pick the brew (cubby grid like the shelf).
export default function Seduh() {
  return (
    <section id="seduh" aria-labelledby="seduh-h" className="section pine-band on-pine">
      <Container>
        <Reveal>
          <h2 id="seduh-h" className="t-head">
            {seduh.heading}
          </h2>
          <p className="t-body measure mt-4" {...mock(seduh.intro.mockup)}>
            {seduh.intro.text}
          </p>

          <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="lg:col-span-4">
              <h3 className="t-lead font-semibold">{seduh.beansHeading}</h3>
              <div className="md:grid md:grid-cols-2 md:items-end md:gap-x-10 lg:block">
                <ul className="mt-6 flex gap-6" aria-label="Toples biji kopi">
                  {seduh.origins.map((o) => (
                    <li key={o} className="flex flex-col items-center">
                      <BeanJar />
                      <span className="t-label mt-2 border border-board/60 px-2.5 py-0.5">{o}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid gap-3 md:mt-0 lg:mt-7">
                  <p className="t-body">{seduh.jarsLine.text}</p>
                  <p className="t-body">{seduh.roasting.text}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-board/25 pt-6">
                <BeanBag />
                <p className="t-body font-semibold" {...mock(seduh.takeHome.mockup)}>
                  {seduh.takeHome.text}
                </p>
              </div>
            </div>

            <div className="mt-14 lg:col-span-8 lg:mt-0">
              <h3 className="t-lead font-semibold">{seduh.methodsHeading}</h3>
              <ul className="cubbies mt-6">
                {brew.map((b) => (
                  <li key={b.name}>
                    <BrewIcon kind={b.icon} />
                    <p className="t-body mt-3 font-bold leading-snug">{b.name}</p>
                    <p className="t-small mt-1" {...mock(b.line.mockup)}>
                      {b.line.text}
                    </p>
                    {b.price && (
                      <p className="t-small mt-2 font-bold" {...mock(b.price.mockup)}>
                        {b.price.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
