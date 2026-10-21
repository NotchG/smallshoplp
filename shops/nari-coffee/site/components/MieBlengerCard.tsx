import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import NoodleBox from "@/components/NoodleBox";
import PriceRoundel from "@/components/PriceRoundel";
import { mieBlenger } from "@/content";
import { mock } from "@/lib/mockup";

// The "New Menu" poster in Nari's window, made into a cobalt card: three flavours,
// the poster's noodle box redrawn, prices circled like on the poster.
export default function MieBlengerCard() {
  return (
    <section aria-labelledby="mie-title" className="band-paper pb-[var(--section-y)]">
      <Container>
        <Reveal className="band-cobalt rounded-card grid-12 gap-y-8 p-6 md:p-10 lg:p-14">
          <div className="lg:col-span-4">
            <p className="t-label text-sky">{mieBlenger.kicker}</p>
            <h2 id="mie-title" className="t-head mt-3">
              {mieBlenger.heading}
            </h2>
            <p className="t-body mt-4" {...mock(mieBlenger.line.mockup)}>
              {mieBlenger.line.text}
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-3 md:gap-8 lg:col-span-8 lg:col-start-5">
            {mieBlenger.dishes.map((d) => (
              <li key={d.name} className="flex items-center gap-4 md:flex-col md:items-start md:gap-5">
                <NoodleBox
                  sauce={d.variant as "original" | "kari" | "rendang"}
                  label={`Ilustrasi ${d.name} dalam kotak`}
                  className="h-[84px] w-[96px] flex-none md:h-[140px] md:w-[160px]"
                />
                <div className="t-lead">
                  <h3 className="t-serif inline" {...mock(d.nameMockup)}>
                    {d.name}
                  </h3>
                  {d.price && (
                    <PriceRoundel price={d.price} tone="onCobalt" className="ml-3" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
