import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconChat } from "@/components/Icons";
import { IlloCakeBox } from "@/components/Illos";
import { mock } from "@/lib/mockup";
import { acara, shop } from "@/content";

// The counter: their white cake box with the phone number printed on it, as on the real boxes.
export default function OrderBox() {
  return (
    <section id="acara" aria-labelledby="acara-h" className="section ground-dark bg-fascia text-glass">
      <Reveal>
        <Container className="grid-12 items-center gap-y-8">
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
            <h2 id="acara-h" className="t-head font-display">
              {acara.heading}
            </h2>
            <p className="t-body lg:t-lead mt-4 font-display">{acara.line}</p>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <IlloCakeBox label={acara.illoLabel} phone={shop.phoneDisplay} />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-start">
            <ul className="order-list t-body">
              {acara.types.map((t) => (
                <li key={t.text} {...mock(t.mockup)}>
                  {t.text}
                </li>
              ))}
            </ul>
            <Button
              href={shop.whatsapp.href}
              variant="primary-dark"
              external
              mockup={acara.cta.mockup}
              icon={<IconChat />}
              className="mt-6"
            >
              {acara.cta.label}
            </Button>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
