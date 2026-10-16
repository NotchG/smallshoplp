import { priceNote, roti } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignPlaque from "@/components/SignPlaque";
import TrayCard from "@/components/TrayCard";
import ShelfSigns from "@/components/ShelfSigns";

export default function Roti() {
  const hid = `${roti.id}-judul`;
  return (
    <section id={roti.id} aria-labelledby={hid} className="ground-white section">
      <Container>
        <Reveal>
          <div className="grid gap-y-5 gap-x-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <SignPlaque id={hid}>{roti.heading}</SignPlaque>
            </div>
            <p className="t-lead font-medium measure lg:col-span-7 lg:pb-2" {...mock(roti.lead.mockup)}>
              {roti.lead.text}
            </p>
          </div>

          <ul className="after-plaque grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
            {roti.products.map((p) => (
              <TrayCard key={p.id} product={p} />
            ))}
          </ul>
          <p className="t-small font-medium mt-4">{priceNote}</p>

          <div className="mt-12">
            <ShelfSigns />
            <p className="t-body measure mt-4" {...mock(roti.staples.mockup)}>
              {roti.staples.text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
