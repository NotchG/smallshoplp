import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Cake from "@/components/Cake";
import { PriceTag, Shelf } from "@/components/Case";
import { IconArrowRight } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { cakes, kue } from "@/content";

// The cakes the way the case shows them: on a shelf, each tag hanging under its own cake.
export default function Kue() {
  return (
    <section id="kue" aria-labelledby="kue-title" className="ground-kaca section">
      <Container>
        <Reveal>
          <div className="kue-head">
            <h2 id="kue-title" className="t-head t-headfont">
              {kue.heading}
            </h2>
            <p className="t-lead measure" {...mock(kue.intro.mockup)}>
              {kue.intro.text}
            </p>
          </div>
          <ul className="shelf-row mt-10 md:mt-14">
            {cakes.map((c) => (
              <li key={c.id} className="shelf-slot">
                <div className="shelf-stage">
                  <Cake
                    flavour={c.id}
                    label={c.alt}
                    dome={c.id === "strawberryCream"}
                    plaque={c.id === "blackForest" ? "blank" : undefined}
                  />
                </div>
                <Shelf />
                <PriceTag
                  name={c.name}
                  nameMockup={c.nameMockup}
                  sizeLine={c.sizeLine}
                  price={c.price}
                  priceMockup={c.priceMockup}
                />
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-1">
            <p className="t-body" {...mock(kue.more.mockup)}>
              {kue.more.text}
            </p>
            <a href="#pesan" className="link-arrow">
              {kue.link}
              <IconArrowRight size={20} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
