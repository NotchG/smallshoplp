import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import MeetingDoor from "@/components/MeetingDoor";
import ActionButton from "@/components/ActionButton";
import { meeting, shop } from "@/content";

export default function Meeting() {
  return (
    <section id="meeting" className="section slat on-walnut" aria-labelledby="meeting-title">
      <Container>
        <Reveal>
          <div className="grid-12 gap-y-8">
            <div className="md:col-start-7 md:col-span-6 md:row-start-1 md:self-end lg:col-start-7 lg:col-span-5">
              <h2 id="meeting-title" className="t-head">
                {meeting.heading}
              </h2>
              <p className="t-body mt-4 max-w-[26rem]">{meeting.lead.text}</p>
            </div>
            <div className="md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-2">
              <MeetingDoor title={meeting.doorTitle} facts={meeting.facts} />
            </div>
            <div className="md:col-start-7 md:col-span-6 md:row-start-2 md:self-start lg:col-start-7 lg:col-span-5">
              <ActionButton href={shop.whatsapp.href} variant="light" external mockup={meeting.button.mockup}>
                {meeting.button.text}
              </ActionButton>
              <p className="t-small muted-walnut mt-3">
                {meeting.callPrefix}{" "}
                <a href={shop.tel} className="inline-block py-3.5 -my-3.5 font-semibold text-light underline">
                  {shop.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
