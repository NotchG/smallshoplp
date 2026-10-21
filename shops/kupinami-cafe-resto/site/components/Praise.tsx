import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";
import { mock } from "@/lib/mockup";

// Paraphrased themes from Google reviews: no names, no quotation marks, no carousel.
export default function Praise() {
  return (
    <section aria-labelledby="tamu-title" className="section bg-putih">
      <Container>
        <Reveal className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <h2 id="tamu-title" className="t-head text-teal-tua">{praise.heading}</h2>
            <p className="t-body mt-2 font-semibold">{praise.rating}</p>
            <p className="t-small mt-1 text-tinta/80">{praise.note}</p>
          </div>
          <ul className="mt-10 grid md:grid-cols-2 md:gap-x-10 lg:col-span-8 lg:mt-0">
            {praise.items.map((p) => (
              <li key={p.text} {...mock(p.mockup)} className="border-t border-garis pt-5 pb-8 last:pb-0 md:[&:nth-last-child(2)]:pb-0">
                <p className="t-lead max-w-[28ch] font-display font-medium text-pretty">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
