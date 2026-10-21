import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProductArt from "@/components/ProductArt";
import { kopi as k } from "@/content";
import { mock } from "@/lib/mockup";

export default function Kopi() {
  return (
    <section id={k.id} aria-labelledby="kopi-h" className="section bg-limewash text-ink">
      <Reveal>
        <Container className="grid gap-y-9 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          <div className="lg:col-span-5 lg:row-start-1 lg:self-end">
            <h2 id="kopi-h" className="h-sign t-head text-fascia">
              {k.heading}
            </h2>
            <p className="t-lead measure mt-3 italic" {...mock(k.lead.mockup)}>
              {k.lead.text}
            </p>
          </div>

          {/* The counter: three drawings on one brass line, name and price under each. */}
          <figure className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center lg:pl-6">
            <ul className="counter">
              {k.items.map((p) => (
                <li key={p.name} {...mock(p.mockup)}>
                  <div className="art-slot">
                    <ProductArt product={p} />
                  </div>
                  <p className="mt-3 px-1 text-center leading-snug">
                    <span className="block">{p.name}</span>
                    <span className="prices block font-bold text-fascia" {...mock(p.priceMockup)}>
                      {p.price}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <figcaption className="t-small mt-3 text-center text-ink/70">{k.caption}</figcaption>
          </figure>

          <div className="lg:col-span-5 lg:row-start-2 lg:mt-8">
            <ul className="measure space-y-3">
              {k.notes.map((n) => (
                <li key={n.text}>{n.text}</li>
              ))}
            </ul>
            <p className="measure mt-3" {...mock(k.extras.mockup)}>
              {k.extras.text}
            </p>
            <p className="h-sign t-body mt-6 text-fascia">{k.counterNote}</p>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
