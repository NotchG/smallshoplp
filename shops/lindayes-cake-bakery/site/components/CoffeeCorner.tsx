import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { IlloCoffeeSlice, IvyTrail } from "@/components/Illos";
import { mock } from "@/lib/mockup";
import { ngopi } from "@/content";

// The teal café wall with ivy hanging from the ceiling.
export default function CoffeeCorner() {
  return (
    <section
      id="ngopi"
      aria-labelledby="ngopi-h"
      className="section ngopi ground-dark relative overflow-hidden bg-teal text-glass"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <Container>
          <IvyTrail className="ivy" />
        </Container>
      </div>
      <Reveal className="relative">
        <Container className="grid-12 items-center gap-y-8">
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
            <h2 id="ngopi-h" className="t-head font-display">
              {ngopi.heading}
            </h2>
            <p className="t-lead font-display measure mt-4">{ngopi.statement}</p>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <IlloCoffeeSlice label={ngopi.illoLabel} />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-start">
            <p className="t-body">
              <span className="font-semibold">{ngopi.drinksLabel}</span>
              <span aria-hidden="true" className="text-muted-teal">
                {" "}
                ·{" "}
              </span>
              <span className="text-muted-teal" {...mock(ngopi.drinksFrom.mockup)}>
                {ngopi.drinksFrom.text}
              </span>
            </p>
            <ul className="drinks t-body mt-3 grid grid-cols-1 sm:grid-cols-2">
              {ngopi.drinks.map((d) => (
                <li key={d.text} {...mock(d.mockup)}>
                  {d.text}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
