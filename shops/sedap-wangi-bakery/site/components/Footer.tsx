import { copy, hours, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "./Container";
import KeyBand from "./KeyBand";
import LogoLockup from "./LogoLockup";

export default function Footer() {
  return (
    <footer className="footer tone-maroon bg-maroon text-paper">
      <KeyBand id="key-footer" />
      <Container className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-6 lg:py-16">
        <div className="lg:col-span-3">
          <LogoLockup size="footer" />
        </div>
        <div className="t-body lg:col-span-5">
          <p className="font-bold">{shop.fullName}</p>
          <p>{shop.addressOneLine}</p>
          <p className="mt-3">
            {hours.everyDay} · {hours.rows.map((r) => `${r.label} ${r.time}`).join(" · ")}
          </p>
        </div>
        <div className="t-body lg:col-span-4">
          <p className="font-bold">{copy.footer.reservations}</p>
          <p>
            <a className="link-row num" href={shop.phone.href}>
              Telepon {shop.phone.display}
            </a>
          </p>
          <p>
            <a className="link-row num" href={shop.whatsapp.general} target="_blank" rel="noopener noreferrer" {...mock(shop.whatsapp.mockup)}>
              WhatsApp {shop.whatsapp.display}
            </a>
          </p>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="t-small border-t border-white/25 pt-4">{copy.footer.draft}</p>
      </Container>
    </footer>
  );
}
