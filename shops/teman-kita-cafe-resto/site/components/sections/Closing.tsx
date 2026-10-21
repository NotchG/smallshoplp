import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { actions, closing, shop, waLink, waMessages } from "@/content";

// 7. Ink field: the invitation and the three ways to reach the shop.
export default function Closing() {
  return (
    <section className="field-dark section bg-tinta text-kapur" aria-labelledby="mampir">
      <Container>
        <Reveal className="grid-12 items-center gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <h2 id="mampir" className="t-head">
              {closing.heading}
            </h2>
            <p className="t-lead measure mt-4">{closing.line}</p>
          </div>
          <div className="col-span-12 flex flex-col gap-3 sm:max-w-sm lg:col-span-4 lg:col-start-9 lg:max-w-none">
            <ActionButton
              href={waLink(waMessages.hero)}
              variant="red"
              icon="chat"
              mockup={shop.whatsapp.mockup}
            >
              {actions.whatsapp}
            </ActionButton>
            <ActionButton href={`tel:${shop.tel}`} variant="chalk" icon="phone">
              {actions.call} {shop.phone}
            </ActionButton>
            <ActionButton href={shop.mapsDirections} variant="ink" icon="pin">
              {actions.directions}
            </ActionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
