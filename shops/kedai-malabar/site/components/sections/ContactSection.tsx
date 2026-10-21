import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { IconCard, IconChat, IconDirections, IconInstagram, IconPhone } from "@/components/Icons";
import { actions, contact, shop } from "@/content";
import { mock } from "@/lib/mockup";

export default function ContactSection() {
  return (
    <section id="hubungi" className="ground-bata section" aria-labelledby="hubungi-title">
      <Reveal className="container-page lg:grid lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="lg:col-span-7">
          <h2 id="hubungi-title" className="h-section">
            Hubungi kami
          </h2>
          <p className="t-lead text-pretty mt-5 max-w-[30ch]" {...mock(contact.line.mockup)}>
            {contact.line.text}
          </p>
          <p className="mt-6 flex items-center gap-3" {...mock(contact.cashless.mockup)}>
            <IconCard className="h-6 w-6 flex-none" />
            {contact.cashless.text}
          </p>
        </div>
        <div className="mt-10 grid gap-3 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <ActionButton
            href={shop.whatsapp.url}
            external
            mockup={shop.whatsapp.mockup}
            icon={<IconChat />}
            className="w-full justify-start"
          >
            {actions.whatsapp} {shop.phone}
          </ActionButton>
          <ActionButton href={shop.tel} variant="outline" icon={<IconPhone />} className="w-full justify-start">
            {actions.call}
          </ActionButton>
          <ActionButton
            href={shop.directionsUrl}
            external
            variant="outline"
            icon={<IconDirections />}
            className="w-full justify-start"
          >
            {actions.directions}
          </ActionButton>
          <p
            className="ig-placeholder t-small flex min-h-12 items-center gap-3 px-5"
            {...mock(contact.instagramPlaceholder.mockup)}
          >
            <IconInstagram className="h-5 w-5 flex-none" />
            {contact.instagramPlaceholder.text}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
