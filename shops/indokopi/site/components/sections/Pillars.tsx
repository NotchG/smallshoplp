import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Diamond } from "@/components/Picto";
import { pillars, pillarsIntro } from "@/content";
import { mock } from "@/lib/mockup";

// Coffee · Work · Thrift: the fascia's own three-word promise, as three warning diamonds.
export default function Pillars() {
  return (
    <section className="ground-aspal section" aria-labelledby="cwt-judul">
      <Reveal>
        <Container>
          <h2 id="cwt-judul" className="t-head font-slab font-extrabold text-dinding balance">
            {pillarsIntro.heading}
          </h2>
          <p className="t-lead mt-4 text-batu measure balance" {...mock(pillarsIntro.line.mockup)}>
            {pillarsIntro.line.text}
          </p>

          <ul className="mt-10 lg:mt-14 grid gap-9 lg:grid-cols-3 lg:gap-10">
            {pillars.map((p) => (
              <li
                key={p.word}
                className="grid grid-cols-[96px_1fr] gap-x-5 items-start lg:block"
                {...mock(p.mockup)}
              >
                <Diamond name={p.picto} className="w-24 h-24 lg:w-[140px] lg:h-[140px] lg:-ml-2" />
                <div className="pt-2 lg:pt-0 lg:mt-5">
                  <h3 className="t-lead font-slab font-extrabold text-dinding">{p.word}</h3>
                  <p className="mt-2 text-batu measure pretty">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>
    </section>
  );
}
