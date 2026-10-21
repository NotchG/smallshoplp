import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BrewIcon from "@/components/BrewIcon";
import { brew, methods } from "@/content";
import { mock } from "@/lib/mockup";

// Cara kami menyeduh (semen): the brew kit in line drawings, standing on a black steel shelf
// with two uprights, like the shelves behind their bar.
export default function BrewShelf() {
  return (
    <section aria-labelledby="brew-title" className="ground-semen section pt-0">
      <Container>
        <Reveal className="grid-12 gap-y-10 max-lg:flex max-lg:flex-col border-t border-arang/20 pt-14 md:pt-20">
          <div className="lg:col-span-4">
            <h2 id="brew-title" className="t-head t-cond max-w-[11ch]">
              {brew.heading}
            </h2>
            <p className="t-lead mt-5 max-w-[24ch]" {...mock(brew.lead.mockup)}>
              {brew.lead.text}
            </p>
            <p className="t-body text-muted-semen mt-4 max-w-[34ch]">{brew.body}</p>
          </div>

          <ul className="shelf lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
            {methods.map((m) => (
              <li key={m.name} className="shelf-item">
                <div className="shelf-bay">
                  <div className="h-32 md:h-40 lg:h-44 pt-2">
                    <BrewIcon icon={m.icon} />
                  </div>
                  <div className="h-1.5 bg-arang" aria-hidden="true" />
                </div>
                <h3 className="t-lead font-semibold mt-3 px-3 lg:px-4">{m.name}</h3>
                <p className="t-body text-muted-semen mt-1 px-3 lg:px-4" {...mock(m.line.mockup)}>
                  {m.line.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
