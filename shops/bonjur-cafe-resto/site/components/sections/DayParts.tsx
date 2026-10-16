import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import StringLights from "@/components/StringLights";
import BuburAyam from "@/components/art/BuburAyam";
import Icon from "@/components/Icon";
import { mock } from "@/lib/mockup";
import { actions, art, dayParts } from "@/content";

// One strip, three panels edge to edge, coloured by time of day: tile, amber, ink.
export default function DayParts() {
  const { pagi, siang, malam } = dayParts;
  return (
    <section id="dari-pagi" className="section ground-paper" aria-labelledby="dayparts-title">
      <Container>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <h2 id="dayparts-title" className="t-head text-blue lg:col-span-6">
              {dayParts.title}
            </h2>
            <p className="t-lead mt-3 lg:col-span-6 lg:col-start-7 lg:mt-0">{dayParts.intro}</p>
          </div>

          <div className="mt-10 grid lg:mt-12 lg:grid-cols-3">
            <article className="ground-tile flex flex-col p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:flex-col lg:items-stretch lg:justify-start lg:gap-0">
              <div>
                <h3 className="t-lead font-bold">
                  {pagi.name} <span className="t-body font-medium text-muted">· {pagi.time}</span>
                </h3>
                <p className="mt-3 font-semibold" {...mock(pagi.title.mockup)}>
                  {pagi.title.text}
                </p>
                <ul className="dot-list mt-2">
                  {pagi.items.map((it) => (
                    <li key={it.text}>
                      <span {...mock(it.mockup)}>{it.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="mt-6 shrink-0 md:mt-0 lg:mt-auto lg:pt-6" data-mockup="">
                <BuburAyam label={art.bubur} className="w-40 sm:w-44" />
                <figcaption className="example-tag">{art.exampleTag}</figcaption>
              </figure>
            </article>

            <article className="ground-amber flex flex-col p-6 sm:p-8">
              <h3 className="t-lead font-bold">{siang.name}</h3>
              <p className="mt-3 font-semibold" {...mock(siang.title.mockup)}>
                {siang.title.text}
              </p>
              <p className="mt-2 measure" {...mock(siang.body.mockup)}>
                {siang.body.text}
              </p>
              <a href="#menu" className="text-link mt-4 lg:mt-auto">
                {actions.menu}
                <Icon name="down" size={18} />
              </a>
            </article>

            <article className="ground-ink flex flex-col p-6 sm:p-8">
              <h3 className="t-lead font-bold">
                {malam.name} <span className="t-body font-medium text-blue-soft">· {malam.time}</span>
              </h3>
              <p className="mt-3 font-semibold text-amber">{malam.weekend}</p>
              <StringLights variant="short" className="mt-4 h-9 w-44" />
              <p className="mt-4 text-blue-soft measure" {...mock(malam.body.mockup)}>
                {malam.body.text}
              </p>
            </article>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
