import { praise } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignPlaque from "@/components/SignPlaque";

// Modest proof: the listing's rating, and short paraphrases (never quotes, never names).
export default function Praise() {
  const hid = `${praise.id}-judul`;
  return (
    <section id={praise.id} aria-labelledby={hid} className="ground-white section">
      <Container>
        <Reveal className="grid gap-y-8 gap-x-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SignPlaque id={hid}>{praise.heading}</SignPlaque>
            <p className="mt-6 lg:mt-8">
              <span className="block font-display t-head text-brick">{praise.rating}</span>
              <span className="block t-body font-semibold mt-3">{praise.count}</span>
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 max-w-[40ch]">
            <p className="t-lead font-medium" {...mock(praise.lines[0].mockup)}>
              {praise.lines[0].text}
            </p>
            <hr aria-hidden="true" className="my-6 w-12 border-0 border-t-[3px] border-brick" />
            <p className="t-body" {...mock(praise.lines[1].mockup)}>
              {praise.lines[1].text}
            </p>
            <p className="t-small mt-3">{praise.source}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
