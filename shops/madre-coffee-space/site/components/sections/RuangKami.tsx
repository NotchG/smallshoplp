import { praise, ruang, shop } from "@/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";

// 6 Ruang kami + 7 Kata mereka: one cognac field, two sections.
export default function RuangKami() {
  return (
    <div className="ground-cognac">
      <section className="section overflow-x-clip" aria-labelledby="ruang-h">
        <Container>
          <Reveal className="grid-12">
            <div className="lg:col-span-4 lg:row-start-1 lg:self-end">
              <h2 id="ruang-h" className="f-display t-head">
                {ruang.heading}
              </h2>
              <p className="t-lead measure mt-4">{ruang.lead}</p>
            </div>
            <figure className="photo bleed-phone bleed-right mt-10 lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:mt-0" style={{ aspectRatio: "3 / 2" }}>
              <img
                src={ruang.photo.src}
                alt={ruang.photo.alt}
                width={ruang.photo.w}
                height={ruang.photo.h}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="mt-8 lg:col-span-4 lg:row-start-2 lg:mt-6 lg:self-start">
              <p className="measure-body">{ruang.body}</p>
              <p className="measure-body mt-4" {...mock(ruang.madre.mockup)}>
                {ruang.madre.text}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-(--section-y)" aria-labelledby="praise-h">
        <Container>
          <Reveal className="grid-12 border-t border-(--rule) pt-(--section-y)">
            <div className="lg:col-span-4">
              <h2 id="praise-h" className="f-display t-head">
                {praise.heading}
              </h2>
              <p className="t-lead mt-4">{praise.rating}</p>
              <a href={shop.mapsUrl} className="inline-link mt-3 inline-flex min-h-11 items-center">
                {praise.link}
              </a>
            </div>
            <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:mt-2 xl:gap-x-12">
              {praise.themes.map((t) => (
                <li key={t.title}>
                  <h3 className="f-name t-lead">{t.title}</h3>
                  <p className="measure-body mt-2">{t.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
