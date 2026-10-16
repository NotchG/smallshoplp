import { baru, priceNote } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignPlaque from "@/components/SignPlaque";
import PriceTag from "@/components/PriceTag";
import Illustration from "@/components/illustrations";

// New lines from the window banner. No trays: items stand on the lemon ground.
export default function Baru() {
  const hid = `${baru.id}-judul`;
  return (
    <section id={baru.id} aria-labelledby={hid} className="ground-lemon section">
      <Container>
        <Reveal className="grid gap-y-8 gap-x-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:self-center">
            <SignPlaque id={hid}>{baru.heading}</SignPlaque>
            <p className="t-lead font-medium mt-5 lg:mt-8" {...mock(baru.lead.mockup)}>
              {baru.lead.text}
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:gap-y-14">
              {baru.products.map((p) => (
                <li key={p.id} className="flex flex-col" {...mock(p.mockup)}>
                  <Illustration id={p.illustration} className="baru-art" />
                  <PriceTag product={p} className="baru-tag" />
                  {p.note && (
                    <p className="t-small font-medium mt-3 pl-3" {...mock(p.note.mockup)}>
                      {p.note.text}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <p className="t-small font-medium mt-8">{priceNote}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
