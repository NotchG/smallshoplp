import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ArchIcon, BikeIcon, NoteIcon, PlugIcon } from "@/components/Icons";
import { comfort } from "@/content";
import { mock } from "@/lib/mockup";

const icons = { plug: PlugIcon, note: NoteIcon, arch: ArchIcon, bike: BikeIcon };

// "Nyaman buat kerja": the answer for people who come to work for hours.
export default function Comfort() {
  return (
    <section aria-labelledby="kerja-h" className="section bg-wall">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 id="kerja-h" className="f-display t-head">
              {comfort.heading}
            </h2>
            <p className="f-name t-lead mt-6 max-w-[22ch]" {...mock(comfort.statement.mockup)}>
              {comfort.statement.text}
            </p>
            <p className="t-body mt-5 max-w-[36ch]" {...mock(comfort.evening.mockup)}>
              {comfort.evening.text}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 min-[560px]:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:mt-2">
            {comfort.items.map((it) => {
              const Icon = icons[it.icon];
              return (
                <li key={it.label} className="flex items-start gap-4">
                  <Icon className="size-10 shrink-0" />
                  <div>
                    <p className="font-bold leading-snug">{it.label}</p>
                    <p className="mt-1" {...mock(it.detail.mockup)}>
                      {it.detail.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
