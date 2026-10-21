import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { place } from "@/content";
import SectionHead from "./SectionHead";

// The room, seen through the black steel window: four panes, the event pane in fern green.
export default function Tempatnya() {
  return (
    <section aria-labelledby="tempatnya" className="section ground-kapur">
      <Container>
        <Reveal className="split-4-8">
          <SectionHead id="tempatnya" title={place.heading} className="split-side">
            <p className="t-lead mt-3">{place.lead}</p>
          </SectionHead>
          <ul role="list" className="window place-window">
            {place.panes.map((p) => (
              <li key={p.label} className={`pane ${p.action ? "ground-pakis pane-event" : "ground-kapur"}`}>
                <h3 className="t-lead font-display font-bold">{p.label}</h3>
                <p className="mt-2">{p.text}</p>
                {p.action && (
                  <ActionButton action={p.action} variant="fern" icon="chat" className="pane-btn" />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
