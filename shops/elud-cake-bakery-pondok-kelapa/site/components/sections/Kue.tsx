import { kue, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignPlaque from "@/components/SignPlaque";
import ButtonLink from "@/components/ButtonLink";
import PriceTag from "@/components/PriceTag";
import Illustration from "@/components/illustrations";
import { PhoneIcon } from "@/components/Icons";

// Birthday cakes in a white "fridge" (magenta tags blur on brick, so they hang on white racks).
export default function Kue() {
  const hid = `${kue.id}-judul`;
  return (
    <section id={kue.id} aria-labelledby={hid} className="ground-brick section">
      <Container>
        <Reveal>
          <div className="grid gap-y-6 gap-x-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <SignPlaque id={hid}>
                {kue.headingLines[0]}
                <br />
                {kue.headingLines[1]}
              </SignPlaque>
            </div>
            <div className="lg:col-span-6">
              <p className="t-lead font-medium measure" {...mock(kue.lead.mockup)}>
                {kue.lead.text}
              </p>
              <p className="t-body mt-2 measure" {...mock(kue.sameDay.mockup)}>
                {kue.sameDay.text}
              </p>
              <div className="mt-5">
                <ButtonLink href={shop.phoneHref} icon={<PhoneIcon />} {...mock(kue.cta.mockup)}>
                  {kue.cta.text}
                </ButtonLink>
              </div>
              <p className="t-body mt-3 measure" {...mock(kue.ctaNote.mockup)}>
                {kue.ctaNote.text}
              </p>
            </div>
          </div>

          <ul className="fridge fridge-grid after-plaque">
            {kue.products.map((p, i) => (
              <li key={p.id} className={`fridge-item ${i === 0 ? "fridge-lead" : ""}`} {...mock(p.mockup)}>
                <div className="rack fridge-cell">
                  <Illustration id={p.illustration} className="fridge-art" />
                </div>
                <PriceTag product={p} />
                {p.note ? (
                  <p className="t-small font-medium pt-3 px-3 lg:px-6" {...mock(p.note.mockup)}>
                    {p.note.text}
                  </p>
                ) : (
                  <span />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
