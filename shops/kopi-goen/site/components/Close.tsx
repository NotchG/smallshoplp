import { actions, close, maps, phone, whatsapp } from "@/content";
import { mock } from "@/lib/mockup";
import Reveal from "@/components/Reveal";
import Step from "@/components/Step";
import Button from "@/components/Button";
import { IconChat, IconDirections, IconPhone } from "@/components/Icons";

// The close: every action on its own lit step, echoing the hero's tribune. Lights already on.
export default function Close() {
  return (
    <section aria-labelledby="close-h" className="section-join bg-malam">
      <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="pl-[var(--edge)] pr-[var(--gutter)] lg:pb-16">
          <h2 id="close-h" className="t-head" {...mock(close.heading.mockup)}>
            {close.heading.text}
          </h2>
          <p className="t-body measure mt-4 text-beton/80" {...mock(close.line.mockup)}>
            {close.line.text}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <Step className="close-step w-[70%] lg:w-[62%]" faceClassName="close-face">
            <Button href={whatsapp.href} external mockup={whatsapp.mockup} icon={<IconChat />} className="whitespace-normal text-left">
              {actions.whatsapp}
            </Button>
          </Step>
          <Step className="close-step w-[85%] lg:w-[81%]" faceClassName="close-face">
            <Button href={phone.tel} variant="outline" icon={<IconPhone />} className="nums whitespace-normal py-2 text-left">
              {actions.call} {phone.display}
            </Button>
          </Step>
          <Step className="close-step w-full" faceClassName="close-face">
            <Button href={maps.directions} external variant="outline" icon={<IconDirections />} className="whitespace-normal text-left">
              {actions.directions}
            </Button>
          </Step>
        </div>
      </Reveal>
    </section>
  );
}
