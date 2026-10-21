import Container from "@/components/Container";
import { shop } from "@/content";

export default function Footer() {
  return (
    <footer className="ground-aspal">
      <Container>
        <p className="t-small text-batu border-t border-batu/30 py-6">
          {shop.name} · {shop.address}
        </p>
      </Container>
    </footer>
  );
}
