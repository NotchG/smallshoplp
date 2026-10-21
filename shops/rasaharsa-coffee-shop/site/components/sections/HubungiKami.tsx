import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import BeanMark from "@/components/BeanMark";
import { actions, contact } from "@/content";
import { mock } from "@/lib/mockup";

// Closes the page on the wall again: the three actions, stacked.
export default function HubungiKami() {
  return (
    <section aria-labelledby="hubungi-kami" className="section slats ground-dinding contact">
      <Container className="contact-grid">
        <div className="contact-text">
          <div className="flex items-center gap-4">
            <BeanMark className="contact-bean" />
            <h2 id="hubungi-kami" className="t-head font-display font-extrabold">
              {contact.heading}
            </h2>
          </div>
          <p className="t-lead mt-4 measure" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
        </div>
        <div className="contact-actions">
          <ActionButton action={actions.whatsapp} variant="dark-primary" icon="chat" />
          <ActionButton action={actions.call} variant="dark-secondary" icon="phone" />
          <ActionButton action={actions.directions} variant="dark-secondary" icon="pin" />
        </div>
      </Container>
    </section>
  );
}
