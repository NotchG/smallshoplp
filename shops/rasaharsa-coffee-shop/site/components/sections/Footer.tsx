import Container from "@/components/Container";
import { footer, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="slats ground-dinding">
      <Container className="footer-inner t-small">
        <p className="font-semibold">{footer.name}</p>
        <p>{shop.address}</p>
        <p>{footer.draft}</p>
      </Container>
    </footer>
  );
}
