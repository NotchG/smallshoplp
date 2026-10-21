import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ActionButtons from "@/components/ActionButtons";
import { contact, footer, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The page closes on the wainscot again: contact actions, then the footer in the same band.
export default function Hubungi() {
  return (
    <div className="wainscot on-green">
      <span className="cove-line" aria-hidden="true" />
      <section id="kontak" aria-labelledby="kontak-h" className="section pb-14 lg:pb-20">
        <Container>
          <Reveal className="grid-12">
            <div className="lg:col-span-7">
              <h2 id="kontak-h" className="t-head font-display">{contact.heading}</h2>
              <p className="t-lead font-display mt-5 measure text-daun" {...mock(contact.lead.mockup)}>
                {contact.lead.text}
              </p>
              <ActionButtons actions={["whatsapp", "call", "directions"]} stackOnPhone className="mt-8" />
            </div>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:grid-cols-1">
              <div>
                <dt className="label-caps text-daun">{contact.hoursLabel}</dt>
                <dd className="mt-1">
                  {shop.hours.days} {shop.hours.time}
                  <span className="block text-daun">{shop.hours.note}</span>
                </dd>
              </div>
              <div>
                <dt className="label-caps text-daun">{contact.addressLabel}</dt>
                <dd className="mt-1">{shop.address}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </section>

      <footer className="pb-10">
        <Container>
          <div className="footer-row border-t pt-8">
            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="t-lead font-display">{shop.name}</span>
              <span className="tagline t-small text-daun">{shop.tagline}</span>
            </p>
            <p className="t-small text-daun">
              {shop.addressShort}
              <span className="tail">
                <span className="tail-dot">{" · "}</span>
                <span className="whitespace-nowrap">{shop.hours.time}, {shop.hours.note}</span>
              </span>
            </p>
            <p className="t-small text-daun">{footer.draftNote}</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
