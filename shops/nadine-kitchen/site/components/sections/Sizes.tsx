import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CakeSilhouette from "@/components/CakeSilhouette";
import { mock } from "@/lib/mockup";
import { sizes } from "@/content";

export default function Sizes() {
  return (
    <section id="harga" aria-labelledby="harga-title" className="section">
      <Reveal>
        <Container>
          <div className="head-gap grid items-end gap-x-6 gap-y-3 lg:grid-cols-12">
            <h2 id="harga-title" className="t-head lg:col-span-6">
              {sizes.heading}
            </h2>
            <p className="t-body text-grape-soft lg:col-span-6 lg:col-start-7">{sizes.intro}</p>
          </div>

          <ul className="sizes-list grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
            {sizes.items.map((s) => (
              <li key={s.silhouette} {...mock(s.mockup)}>
                <div className="size-stage">
                  <CakeSilhouette kind={s.silhouette} />
                </div>
                <h3 className="t-lead mt-4">
                  {s.name}
                  {s.size ? (
                    <>
                      {" "}
                      <span className="whitespace-nowrap">{s.size}</span>
                    </>
                  ) : null}
                </h3>
                <p className="t-body t-strong mt-1">{s.price}</p>
                {s.note ? <p className="t-small text-grape-soft">{s.note}</p> : null}
              </li>
            ))}
          </ul>
          <p className="t-small mt-6 text-center text-grape-soft">{sizes.scaleNote}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <h3 className="t-body t-strong shrink-0">{sizes.flavoursLabel}</h3>
            <ul className="flex flex-wrap gap-2">
              {sizes.flavours.map((f) => (
                <li key={f.text} className="chip t-body" {...mock(f.mockup)}>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
