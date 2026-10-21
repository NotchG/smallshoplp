import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { NamePrice } from "@/components/DishCard";
import { TeaPot } from "@/components/Illustrations";
import { tea } from "@/content";
import { mock, mockItem } from "@/lib/mockup";

// Lantern ground: the tea ritual. Shisha is one quiet column, not a headline.
export default function TeaSection() {
  return (
    <section id="teh" aria-labelledby="teh-h" className="section bg-lantern text-rattan">
      <Container>
        <Reveal className="grid-12 gap-y-8 lg:gap-y-12">
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
            <h2 id="teh-h" className="font-display t-head">
              {tea.heading}
            </h2>
            <p {...mockItem(tea.greeting, "t-lead mt-4 max-w-[30ch]")}>{tea.greeting.text}</p>
          </div>

          <figure className="lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <TeaPot label={tea.pot.alt} className="mx-auto h-auto w-full max-w-[280px] lg:mx-0 lg:max-w-[400px]" />
            <figcaption className="mt-6 max-w-[40ch]">
              <NamePrice dish={tea.pot} />
              <p className="mt-2 text-rattan-dim">{tea.pot.desc}</p>
            </figcaption>
          </figure>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:col-span-6 lg:col-start-7 lg:row-start-2">
            <div>
              <h3 className="font-display t-lead">{tea.drinksHeading}</h3>
              <ul className="mt-3 space-y-1.5">
                {tea.drinks.map((d) => (
                  <li key={d.text}>
                    <span {...mock(d.mockup)}>{d.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display t-lead">{tea.shishaHeading}</h3>
              <p className="mt-3">{tea.shisha.where.text}</p>
              <p className="mt-1.5">
                <span {...mock(tea.shisha.flavours.mockup)}>{tea.shisha.flavours.text}</span>
              </p>
              <p className="nums mt-1.5 font-medium text-gold" {...mock(tea.shisha.from.mockup)}>
                {tea.shisha.from.text}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
