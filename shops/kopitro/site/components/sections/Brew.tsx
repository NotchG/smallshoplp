import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { beans, copy, methods } from "@/content";
import { mock } from "@/lib/mockup";

// 3. Cara kami menyeduh: the manual-brew point as a bar board. Statement column + two lists.
export default function Brew() {
  return (
    <section aria-labelledby="brew-title" className="section ground-malam">
      <Container>
        <Reveal className="grid gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-5">
            <h2 id="brew-title" className="f-head t-head">
              {copy.brew.heading}
            </h2>
            <p className="t-lead on-dark statement mt-6" {...mock(copy.brew.lead.mockup)}>
              {copy.brew.lead.text}
            </p>
            <p className="t-body on-dark mt-4 text-baja">{copy.brew.origins.text}</p>
            <p className="f-caps t-lead mt-6 text-kayu">{copy.brew.forTwo.text}</p>
          </div>
          <div className="lg:col-span-3 lg:col-start-7 lg:pt-3">
            <h3 className="t-label text-baja">{copy.brew.methodsLabel}</h3>
            <ul className="hairline-list mt-3">
              {methods.map((m) => (
                <li key={m.text} className="f-caps t-lead py-3" {...mock(m.mockup)}>
                  {m.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:pt-3">
            <h3 className="t-label text-baja">{copy.brew.beansLabel}</h3>
            <ul className="hairline-list mt-3">
              {beans.map((b) => (
                <li key={b.text} className="f-caps t-lead py-3" {...mock(b.mockup)}>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
