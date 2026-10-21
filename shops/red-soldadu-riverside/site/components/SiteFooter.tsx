import Container from "@/components/Container";
import { contact, shop } from "@/content";

// Footer on the same baja ground as the close.
export default function SiteFooter() {
  return (
    <footer className="ground-baja site-footer">
      <Container>
        <div className="site-footer-inner grid gap-4 md:grid-cols-12 md:items-baseline md:gap-x-6">
          <p className="t-lead md:col-span-5">{shop.name}</p>
          <p className="t-small text-batu-soft md:col-span-4">{shop.addressShort}</p>
          <p className="t-small nums text-batu-soft md:col-span-3 md:text-right">{contact.footerHours}</p>
          <p className="t-small text-batu-soft md:col-span-12">{contact.footerNote}</p>
        </div>
      </Container>
    </footer>
  );
}
