import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ChatIcon, PhoneIcon, PinIcon, TulipMark } from "@/components/Icons";
import { actions, contact, shop } from "@/content";
import { paint as p } from "@/lib/paint";

// The round "GEZELLIG" coaster from the tables, as the sign-off.
function Coaster() {
  return (
    <div
      aria-hidden
      className="relative flex h-[120px] w-[120px] flex-none items-center justify-center rounded-full md:h-[160px] md:w-[160px]"
      style={{ background: p.teak }}
    >
      <span className="absolute inset-[7px] rounded-full border-2 border-lampu/80" />
      <span className="absolute inset-[13px] rounded-full border border-lampu/40" />
      <span className="flex flex-col items-center gap-1.5">
        <span className="font-display text-[15px] uppercase tracking-[0.14em] text-kapur md:text-[19px]">
          {contact.coaster}
        </span>
        <TulipMark />
      </span>
    </div>
  );
}

// Hubungi kami (Besi ground) and the footer.
export default function Contact() {
  return (
    <footer className="on-dark bg-besi text-kapur">
      <section aria-labelledby="hubungi-title" className="section">
        <Container>
          <Reveal className="grid-12 items-center gap-y-8">
            <div className="lg:col-span-3">
              <Coaster />
            </div>
            <div className="lg:col-span-9 lg:col-start-4">
              <h2 id="hubungi-title" className="t-head">
                {contact.heading}
              </h2>
              <p className="t-lead mt-3 nums">
                <a href={shop.tel} className="inline-flex min-h-11 items-center text-lampu underline-offset-4 hover:underline">
                  {shop.phone}
                </a>
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={shop.whatsapp.url} icon={<ChatIcon />} mockup={shop.whatsapp.mockup}>
                  {actions.chat}
                </Button>
                <Button href={shop.tel} variant="secondary" icon={<PhoneIcon />}>
                  {actions.call}
                </Button>
                <Button href={shop.directionsUrl} variant="secondary" icon={<PinIcon />}>
                  {actions.directions}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      <Container>
        <div className="t-small flex flex-col gap-1 border-t border-kapur/15 py-6 opacity-75 md:flex-row md:gap-3">
          <span>{shop.name}</span>
          <span aria-hidden className="hidden md:inline">·</span>
          <span>{shop.address}</span>
          <span aria-hidden className="hidden md:inline">·</span>
          <span>{contact.footerNote}</span>
        </div>
      </Container>
    </footer>
  );
}
