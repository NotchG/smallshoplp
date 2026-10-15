import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { day } from "@/content";
import { mock } from "@/lib/mockup";

// The hours told as a day: dawn coffee, shade at noon, the last chat at midnight.
export default function DaySection() {
  return (
    <section id={day.id} className="section ground-arang" aria-labelledby="day-heading">
      <Container>
        <Reveal>
          <div className="grid-page">
            <h2 id="day-heading" className="t-head col-span-12 lg:col-span-8">
              {day.heading}
            </h2>
            <p className="t-lead tnum col-span-12 mt-4">{day.sub}</p>
          </div>
          <ol className="day-line mt-12 md:mt-16">
            {day.stops.map((stop) => (
              <li key={stop.time} className="day-stop" {...mock(stop.mockup)}>
                <span className="day-dot" aria-hidden="true" />
                <span className="day-time t-lead">{stop.time}</span>
                <span className="day-text t-body">{stop.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
