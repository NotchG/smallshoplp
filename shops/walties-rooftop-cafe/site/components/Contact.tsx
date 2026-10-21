import Reveal from "@/components/Reveal";
import Strand from "@/components/Strand";
import ActionButton from "@/components/ActionButton";
import { mock } from "@/lib/mockup";
import { actions, contact, footer, shop } from "@/content";

export function Footer() {
  return (
    <footer className="ground-dark bg-malam text-krem/80">
      <div className="container-page t-small flex flex-col gap-1 py-8 md:flex-row md:flex-wrap md:items-baseline md:gap-x-6">
        <p className="font-semibold text-krem">{shop.name}</p>
        <p>{shop.address}</p>
        <p className="md:ml-auto">{footer.note}</p>
      </div>
    </footer>
  );
}

export default function Contact() {
  return (
      <section id="hubungi" aria-labelledby="hubungi-title" className="ground-bata bg-bata text-krem">
        <Strand tone="brick" />
        <Reveal className="container-page pb-[var(--section-y)] pt-8 md:pt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8">
          <div className="lg:col-span-6">
            <h2 id="hubungi-title" className="t-head">
              {contact.title}
            </h2>
            <p className="t-lead mt-5 max-w-md" {...mock(contact.lead.mockup)}>
              {contact.lead.text}
            </p>
          </div>
          <div className="mt-8 lg:col-span-5 lg:col-start-8 lg:mt-2">
            <ActionButton href={shop.whatsapp.href} variant="onBrick" mockup={shop.whatsapp.mockup} className="w-full sm:w-auto">
              {actions.whatsappLong}
            </ActionButton>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="t-small text-krem">{contact.phoneLabel}</dt>
                <dd className="t-lead num mt-0.5">
                  <a className="link inline-flex min-h-12 items-center" href={shop.tel}>
                    {shop.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="t-small text-krem">{contact.instagramLabel}</dt>
                <dd className="t-lead mt-0.5">
                  <a className="link inline-flex min-h-12 items-center" href={shop.instagram.href} target="_blank" rel="noopener">
                    {shop.instagram.handle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>
  );
}
