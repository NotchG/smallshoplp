import Container from "@/components/Container";
import { contact, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="on-palm bg-palm text-chalk">
      <Container>
        <div className="footer-inner t-small flex flex-col gap-2 py-8 text-muted-palm lg:flex-row lg:items-center lg:gap-8">
          <span className="footer-mark text-chalk">{shop.name}</span>
          <span>{shop.address}</span>
          <span className="lg:ml-auto">{contact.footerNote}</span>
        </div>
      </Container>
    </footer>
  );
}
