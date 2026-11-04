import Container from "@/components/Container";
import ScalesMark from "@/components/ScalesMark";
import DoubleRule from "@/components/DoubleRule";
import ActionButton from "@/components/ActionButton";
import { closing, labels, shop } from "@/content";
import { mock } from "@/lib/mockup";

// 7. Hubungi kami + sign-off: the page closes like a letter from the firm.
// Not animated.
export default function Closing() {
  return (
    <section aria-labelledby="hubungi" className="section section-flow closing">
      <Container>
        <DoubleRule />
        <div className="g12 mt-10 gap-y-12 md:mt-14">
          <div className="lg:col-start-1 lg:col-end-7">
            <h2 id="hubungi" className="t-head">
              {closing.heading}
            </h2>
            <p className="mt-4 t-body measure" {...mock(closing.line.mockup)}>
              {closing.line.text}
            </p>
            <a href={shop.tel} className="link mt-3 t-lead font-display font-semibold">
              {shop.phoneDisplay}
            </a>
            <div className="closing-actions mt-5">
              <ActionButton href={shop.tel} className="closing-call">
                {labels.callShort}
              </ActionButton>
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
          </div>

          <div className="signoff lg:col-start-8 lg:col-end-13">
            <p className="t-body">{closing.signOff}</p>
            <ScalesMark className="mt-5 h-10 w-10 text-tinta" />
            <p className="mt-3 t-lead caps-lead font-display font-bold">{shop.name}</p>
            <p className="mt-1 t-small caps-small font-bold">{shop.type}</p>
            <p className="mt-3 t-small text-lis">{shop.addressInline}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
