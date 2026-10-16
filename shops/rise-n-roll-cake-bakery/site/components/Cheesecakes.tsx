import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Slice from "@/components/Slice";
import WholeCake from "@/components/WholeCake";
import { cheesecakeSection, cheesecakes, wholeCake } from "@/content";
import { mock } from "@/lib/mockup";

// The counter: five slices, each in its own terracotta arch on one shelf, with everything a
// buyer needs on the slice's own label (name, price, note). Then whole cakes to pre-order.
export default function Cheesecakes() {
  return (
    <section id="cheesecake" className="section bg-wall" aria-labelledby="cheesecake-title">
      <Container>
        <Reveal>
          <div className="measure">
            <h2 id="cheesecake-title" className="t-head">
              {cheesecakeSection.heading}
            </h2>
            <p className="t-body mt-4 text-walnut-soft" {...mock(cheesecakeSection.intro.mockup)}>
              {cheesecakeSection.intro.text}
            </p>
          </div>

          <ul className="shelf">
            {cheesecakes.map((c) => (
              <li key={c.flavour} className="niche" {...mock(c.mockup)}>
                <div className="arch niche-arch">
                  <Slice flavour={c.flavour} label={`Ilustrasi sepotong ${c.menuName}`} />
                </div>
                <div className="shelf-board" aria-hidden="true" />
                <div className="niche-label">
                  <h3 className="niche-name">
                    {c.name}
                  </h3>
                  <p className="niche-price t-body" {...mock(c.price.mockup)}>
                    {c.price.text}
                  </p>
                  <p className="niche-note t-small" {...mock(c.note.mockup)}>
                    {c.note.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="whole" {...mock(wholeCake.mockup)}>
            <div className="whole-figure">
              <div className="arch whole-arch">
                <WholeCake label={wholeCake.label} />
              </div>
            </div>
            <div className="whole-text">
              <h3 className="t-lead">{wholeCake.title}</h3>
              <p className="t-body mt-3 measure">{wholeCake.body}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a className="btn btn-primary" href="#hubungi">
                  {wholeCake.cta}
                </a>
                <span className="t-small text-walnut-soft">{wholeCake.ctaNote}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
