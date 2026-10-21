import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconChat } from "@/components/Icons";
import { IlloGiftBag, IlloHamper, IlloToplesTower } from "@/components/Illos";
import { mock } from "@/lib/mockup";
import { gifts, shop, type GiftId } from "@/content";

const ILLO: Record<GiftId, (p: { label: string }) => React.ReactElement> = {
  menara: IlloToplesTower,
  hampers: IlloHamper,
  tas: IlloGiftBag,
};

// The gift shelf on the pink of their logo: a wood shelf line, the same tent cards as the case.
export default function GiftShelf() {
  return (
    <section id="hampers" aria-labelledby="hampers-h" className="section ground-light bg-blush text-fascia">
      <Reveal>
        <Container className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4 lg:row-start-1">
            <h2 id="hampers-h" className="t-head font-display">
              {gifts.heading}
            </h2>
            <p className="t-body lg:t-lead mt-4 font-display" {...mock(gifts.line.mockup)}>
              {gifts.line.text}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1">
            <ul className="gift-grid grid gap-y-8 md:grid-cols-3">
              {gifts.items.map((g) => {
                const Illo = ILLO[g.id];
                return (
                  <li key={g.id} className="grid grid-cols-12 items-end gap-x-4 md:flex md:flex-col md:items-stretch">
                    <div className="shelf-wood col-span-5">
                      <Illo label={g.illoLabel} />
                    </div>
                    <div className="tent col-span-7 md:mt-3">
                      <h3 className="t-lead font-display" data-check>
                        {g.name}
                      </h3>
                      <p className="t-body mt-1">{g.line}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="t-body mt-8">{gifts.snacksLine}</p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:row-start-2 lg:self-end">
            <p className="t-small font-semibold" {...mock(gifts.seasons.mockup)}>
              {gifts.seasons.text}
            </p>
            <Button
              href={shop.whatsapp.href}
              variant="primary-light"
              external
              mockup={gifts.cta.mockup}
              icon={<IconChat />}
              className="mt-4"
            >
              {gifts.cta.label}
            </Button>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
