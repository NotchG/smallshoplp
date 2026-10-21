import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { SteelFrame, Pane } from "@/components/SteelFrame";
import PendantLamps from "@/components/PendantLamps";
import StringLights from "@/components/StringLights";
import Button from "@/components/Button";
import { facilities, labels, rooms, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Two moods side by side (black-marble indoor, white-canopy outdoor), then the meeting
// room and the facilities this crowd asks about, each in its own pane.
export default function Rooms() {
  return (
    <section id="ruang" aria-labelledby="ruang-title" className="section">
      <Container>
        <h2 id="ruang-title" className="h-section">
          {rooms.heading}
        </h2>
        <Reveal className="mt-8 lg:mt-10">
          <SteelFrame>
            <Pane tone="marmer" className="room-indoor room-mood">
              <PendantLamps still className="lamps-room" />
              <h3 className="h-pane">{rooms.indoor.title}</h3>
              <p className="measure mt-2 text-abu-terang">{rooms.indoor.text}</p>
            </Pane>

            <Pane className="room-outdoor room-mood">
              <StringLights className="room-lights" />
              <h3 className="h-pane">{rooms.outdoor.title}</h3>
              <p className="measure mt-2 text-abu">{rooms.outdoor.text}</p>
            </Pane>

            <Pane className="room-meeting">
              <h3 className="h-pane">{rooms.meeting.title}</h3>
              <p className="measure mt-2">{rooms.meeting.text}</p>
              <p className="measure mt-2 text-abu" {...mock(rooms.meeting.cta.mockup)}>
                {rooms.meeting.cta.text}
              </p>
              <Button variant="outline" placeholder mockup={shop.whatsapp.mockup} className="mt-6">
                {labels.whatsapp}
              </Button>
            </Pane>

            <Pane className="room-facilities">
              <ul aria-label="Fasilitas" className="facility-list">
                {facilities.map((f) => (
                  <li key={f.text} className="t-lead font-medium" {...mock(f.mockup)}>
                    {f.text}
                  </li>
                ))}
              </ul>
            </Pane>
          </SteelFrame>
        </Reveal>
      </Container>
    </section>
  );
}
