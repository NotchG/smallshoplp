import Container from "@/components/Container";
import { footer } from "@/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark bg-baja">
      <Container className="footer-row t-small text-abu-terang">
        <p>{footer.identity}</p>
        <p>{footer.draft}</p>
      </Container>
    </footer>
  );
}
