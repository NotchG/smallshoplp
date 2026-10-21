import Container from "@/components/Container";
import { ActionButton, WhatsAppButton } from "@/components/ActionButton";
import { actions, close, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The close on the tomato field: one line, then the two actions. No motion.
export default function CloseSection() {
  return (
    <section id="hubungi" className="section bg-tomato text-chalk on-dark" aria-labelledby="close-title">
      <Container className="close-grid grid-12">
        <div className="close-text">
          <h2 id="close-title" className="h2" {...mock(close.heading.mockup)}>
            {close.heading.text}
          </h2>
          <p className="t-lead mt-4" {...mock(close.sub.mockup)}>
            {close.sub.text}
          </p>
        </div>
        <div className="close-actions">
          <ActionButton href={shop.mapsUrl} variant="onTomato">
            {actions.directions}
          </ActionButton>
          <WhatsAppButton onTomato />
        </div>
      </Container>
    </section>
  );
}
