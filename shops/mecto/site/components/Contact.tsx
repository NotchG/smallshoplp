import Container from "@/components/Container";
import { IconChat, IconPhone } from "@/components/Icons";
import { contact, footer, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Close with the actions, then the footer. Ground baja; 1px rules.
export function Contact() {
  return (
    <section className="ground-baja bg-baja text-beton" aria-labelledby="hubungi-title">
      <Container>
        <div className="rule-dark py-(--section-y) lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="hubungi-title" className="t-head">
              {contact.heading}
            </h2>
            <p className="t-lead measure-hero mt-4">{contact.closing}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <a className="btn btn-sun" href={shop.whatsapp.href} {...mock(shop.whatsapp.mockup)}>
              <IconChat />
              {contact.whatsapp}
            </a>
            <a className="btn btn-light-outline tnum" href={shop.phoneHref}>
              <IconPhone />
              {contact.call}
            </a>
            {shop.instagram && (
              <a className="btn btn-light-outline" href={shop.instagram.href} {...mock(shop.instagram.mockup)}>
                {contact.instagram}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ground-baja bg-baja text-on-baja">
      <Container>
        <div className="rule-dark flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
          <p className="t-small">{footer.identity}</p>
          <p className="t-small">{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
