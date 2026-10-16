import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RoomVignette from "@/components/RoomVignette";
import { room } from "@/content";
import { mock } from "@/lib/mockup";

// What the visit is like, honestly: busy Sunday afternoons and small parking included.
// DOM order follows the phone wireframe (heading, vignette, facts); on desktop the grid puts
// the vignette on the left and stacks heading and facts on the right.
export default function Room() {
  return (
    <section className="section bg-wall" aria-labelledby="room-title">
      <Container>
        <Reveal className="room">
          <div className="room-head">
            <h2 id="room-title" className="t-head">
              {room.heading}
            </h2>
            <p className="t-lead mt-4" {...mock(room.lead.mockup)}>
              {room.lead.text}
            </p>
          </div>
          <figure className="room-figure">
            <RoomVignette label={room.label} />
            <figcaption className="t-small text-walnut-soft mt-3">{room.caption}</figcaption>
          </figure>
          <ul className="room-facts facts t-body">
            {room.facts.map((f) => (
              <li key={f.text} className="fact" {...mock(f.mockup)}>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
