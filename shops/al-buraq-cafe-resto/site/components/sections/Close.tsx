import Container from "@/components/Container";
import { mock } from "@/lib/mockup";
import { close, hero, shop, waLink, whatsapp } from "@/content";

function Arrow() {
  return (
    <svg className="action-arrow" width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <path d="M3 11H18M12 5L18 11L12 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Three rows instead of a button row. The detail follows its label 16px later; only the
// arrow sits at the row's end.
function CloseActions() {
  const rows = [
    {
      label: close.rows.whatsapp,
      detail: shop.phoneDisplay,
      href: waLink(whatsapp.ask.text),
      external: true,
      sr: hero.whatsappSr,
      mockup: whatsapp.mockup,
    },
    { label: close.rows.call, detail: shop.phoneDisplay, href: shop.phoneHref, external: false, sr: "", mockup: false },
    {
      label: close.rows.directions,
      detail: shop.street,
      href: shop.mapsUrl,
      external: true,
      sr: hero.directionsSr,
      mockup: false,
    },
  ];
  return (
    <ul className="border-b border-[color:var(--hairline-dark)]">
      {rows.map((r) => (
        <li key={r.label} className="border-t border-[color:var(--hairline-dark)]">
          <a
            href={r.href}
            className="action-row"
            {...(r.external ? { target: "_blank", rel: "noopener" } : {})}
            aria-label={`${r.label} ${r.detail}${r.sr}`}
            {...mock(r.mockup)}
          >
            <span className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
              <span className="action-label t-lead text-linen">{r.label}</span>
              <span className="t-body text-plaster">{r.detail}</span>
            </span>
            <Arrow />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Close() {
  return (
    <footer className="on-dark bg-velvet" aria-labelledby="close-title">
      <Container className="section grid-12 lg:items-center">
        <h2 id="close-title" className="t-head text-linen lg:col-span-5 lg:col-start-1" {...mock(close.heading.mockup)}>
          {close.heading.text}
        </h2>
        <div className="mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <CloseActions />
        </div>
      </Container>
      <Container>
        <p className="t-small border-t border-[color:var(--hairline-dark)] py-6 text-plaster">
          {shop.name} · {shop.address} · {close.footerDraft}
        </p>
      </Container>
    </footer>
  );
}
