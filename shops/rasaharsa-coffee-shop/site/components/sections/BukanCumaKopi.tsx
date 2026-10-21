import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { food } from "@/content";
import { mock } from "@/lib/mockup";
import NasiGorengPlate from "@/components/illustrations/NasiGorengPlate";
import SectionHead from "./SectionHead";

// The eatery side, on a teak band: the plate on the left, the dishes on the right.
export default function BukanCumaKopi() {
  return (
    <section aria-labelledby="bukan-cuma-kopi" className="section ground-jati">
      <Container>
        <Reveal className="food-grid">
          <SectionHead id="bukan-cuma-kopi" title={food.heading} className="food-head">
            <p className="t-lead mt-3 measure">{food.lead}</p>
          </SectionHead>

          <figure className="food-plate" {...mock(food.plate.mockup)}>
            <NasiGorengPlate label={food.plate.alt} className="plate-art" />
            <figcaption className="t-small mt-3">{food.plate.caption}</figcaption>
          </figure>

          <div className="food-lists">
            {food.groups.map((g) => (
              <div key={g.title} {...mock(g.mockup)}>
                <h3 className="food-group-title">{g.title}</h3>
                <ul role="list" className="mt-3 space-y-2">
                  {g.items.map((it) => (
                    <li key={it.name} className="t-lead font-display font-bold">
                      {it.name}
                      {it.price && (
                        <span className="food-price t-small font-body font-semibold tabular" {...mock(it.price.mockup)}>
                          {it.price.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
