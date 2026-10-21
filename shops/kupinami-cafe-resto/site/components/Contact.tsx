import Container from "@/components/Container";
import BadgeMark from "@/components/BadgeMark";
import Arrow from "@/components/Arrow";
import { contact, shop, wa, waLink } from "@/content";
import { mock } from "@/lib/mockup";

// The teal band of the shop's own hours graphic, with its shallow arc on the top edge.
export default function Contact() {
  const social = [
    { href: shop.instagram, label: `Instagram ${shop.handle}` },
    { href: shop.facebook, label: `Facebook ${shop.handle}` },
  ];
  return (
    <footer aria-labelledby="kontak-title" className="relative bg-teal text-tinta">
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="contact-arc absolute left-0 w-full"
      >
        <path d="M0 64C360 4 1080 4 1440 64Z" fill="var(--color-teal)" />
      </svg>
      <Container className="grid gap-10 pt-10 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:pt-12 lg:pb-24">
        <div className="md:col-span-2 lg:col-span-4">
          <BadgeMark tone="tinta" className="block w-[112px]" />
          <h2 id="kontak-title" className="t-head mt-6">{contact.heading}</h2>
          <address className="mt-3 not-italic">
            {shop.addressLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
        </div>

        <div className="lg:col-span-4 lg:pt-2">
          <p className="t-small font-semibold">{contact.waLabel}</p>
          <a href={shop.tel} className="t-lead mt-1 inline-flex min-h-11 items-center font-display font-bold tabular-nums">
            {shop.phone}
          </a>
          <p>{contact.waUse}</p>
          <a
            href={waLink(wa.reserve.text)}
            target="_blank"
            rel="noopener"
            className="btn btn-ink mt-5"
            {...mock(wa.reserve.mockup)}
          >
            {contact.waCta}
          </a>
        </div>

        <div className="lg:col-span-4 lg:pt-2">
          <p className="t-small font-semibold">{contact.socialLabel}</p>
          <ul className="mt-1">
            {social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener" className="link link-ink inline-flex min-h-11 items-center">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={shop.directionsUrl}
                target="_blank"
                rel="noopener"
                className="link link-ink inline-flex min-h-11 items-center gap-2"
              >
                {contact.directions}
                <Arrow />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
