import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ChatIcon, InstagramIcon, PhoneIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { contact } from "@/content";

export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-title" className="section bg-bubblegum">
      <Reveal>
        <Container className="grid items-center gap-x-6 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="kontak-title" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-lead mt-3" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
            <p className="t-body mt-2">{contact.line}</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:col-start-8">
            <a
              className="btn btn-primary btn-row"
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener"
              {...mock(contact.whatsapp.mockup)}
            >
              <ChatIcon />
              {contact.whatsapp.label}
            </a>
            <a className="btn btn-secondary btn-row" href={contact.phone.href}>
              <PhoneIcon />
              {contact.phone.label}
            </a>
            <a
              className="btn btn-secondary btn-row"
              href={contact.instagram.href}
              target="_blank"
              rel="noopener"
              aria-label={contact.instagram.ariaLabel}
            >
              <InstagramIcon />
              {contact.instagram.label}
            </a>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
