import Container from "@/components/Container";
import ScalesMark from "@/components/ScalesMark";
import DoubleRule from "@/components/DoubleRule";
import DecodeLine from "@/components/DecodeLine";
import ActionButton from "@/components/ActionButton";
import { hero, labels, shop } from "@/content";
import { mock } from "@/lib/mockup";

// 1. Kop: the signboard set as a letterhead. Name, decode line, mission and the call,
// all static from first paint (only the decode line's rest letters animate, in CSS).
export default function Kop() {
  return (
    <section aria-labelledby="nama" className="kop">
      <Container className="g12 kop-grid">
        {/* Name block: cols 1–8 */}
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-baseline md:gap-6 lg:col-start-1 lg:col-end-9 lg:row-start-1">
          <ScalesMark className="kop-mark text-tinta" />
          <div>
            {/* "LIBRA" is the h1's own text, so the lockup is one element with the tail inside it. */}
            <h1 id="nama" className="t-display font-bold">
              {shop.nameLine}
              <span className="mt-2 block t-lead caps-lead font-semibold md:mt-3">
                {shop.nameTail}
              </span>
            </h1>
            <p className="mt-2 t-small caps-small font-bold">{shop.type}</p>
          </div>
        </div>

        {/* Contact block: from col 9, letterhead address. Last on phones (no links inside). */}
        <address className="kop-contact t-body not-italic order-1 lg:order-none lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:self-end">
          {shop.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-1 block font-bold">{shop.phoneDisplay}</span>
        </address>

        <DoubleRule className="kop-rule lg:col-span-12 lg:row-start-2" />

        <DecodeLine className="kop-decode t-lead lg:col-span-12 lg:row-start-3" />

        <p
          className="kop-mission t-head font-display measure lg:col-start-1 lg:col-end-8 lg:row-start-4"
          data-check
          {...mock(hero.mission.mockup)}
        >
          {hero.mission.text}
        </p>

        <div className="kop-actions lg:col-start-9 lg:col-end-13 lg:row-start-4">
          <ActionButton href={shop.tel} className="w-full">
            {labels.call}
          </ActionButton>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <ActionButton
              href={shop.whatsapp.href}
              variant="secondary"
              external
              mockup={shop.whatsapp.mockup}
            >
              {labels.whatsapp}
            </ActionButton>
            <ActionButton href={shop.directionsUrl} variant="secondary" external>
              {labels.directions}
            </ActionButton>
          </div>
          <p className="mt-3 t-small">{shop.hours}</p>
        </div>
      </Container>
    </section>
  );
}
