import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { WaveBullet } from "@/components/WaveRule";
import { room } from "@/content";
import { mock } from "@/lib/mockup";

export default function Room() {
  return (
    <section id="sudut" aria-labelledby="sudut-h" className="section">
      <Container>
        <Reveal className="room-grid">
          <div className="room-main">
            <h2 id="sudut-h" className="t-head">
              {room.heading}
            </h2>
            <p className="t-body room-text measure" {...mock(room.paragraph.mockup)}>
              {room.paragraph.text}
            </p>
          </div>
          <div className="room-for">
            <h3 className="t-lead treat-name">{room.forHeading}</h3>
            <ul className="room-list">
              {room.forList.map((x) => (
                <li key={x} className="t-body">
                  <WaveBullet className="room-bullet" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
