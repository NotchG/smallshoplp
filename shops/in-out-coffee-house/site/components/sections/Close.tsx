import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import { close, cta, footerNote, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The evening: actions 2 and 3, and a real ending.
export function Close() {
  return (
    <section className="section on-ink bg-ink text-paper" aria-label={close.label}>
      <Container className="grid gap-x-8 gap-y-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="t-head" {...mock(close.title.mockup)}>
            {close.title.text}
          </h2>
          <p className="mt-4" {...mock(close.line.mockup)}>
            {close.line.text}
          </p>
        </div>
        <div className="close-actions flex flex-col gap-3 lg:col-span-5 lg:col-start-8">
          <p className="t-lead tabular font-display font-bold text-kuning">{shop.phone}</p>
          <ActionButton href={shop.waUrl} tone="dark" external mockup={shop.waMockup}>
            {cta.whatsapp}
          </ActionButton>
          <ActionButton href={shop.telUrl} tone="dark" variant="outline">
            {cta.call}
          </ActionButton>
          <ActionButton href={shop.mapsUrl} tone="dark" variant="outline" arrow external>
            {cta.directions}
          </ActionButton>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <Container>
        <div className="t-small flex flex-col gap-1 border-t border-paper/25 py-8 lg:flex-row lg:gap-x-3">
          <p className="font-bold">{shop.name}</p>
          <p className="hidden lg:block" aria-hidden="true">·</p>
          <p>{shop.addressShort}</p>
          <p className="hidden lg:block" aria-hidden="true">·</p>
          <p>{footerNote.text}</p>
        </div>
      </Container>
    </footer>
  );
}
