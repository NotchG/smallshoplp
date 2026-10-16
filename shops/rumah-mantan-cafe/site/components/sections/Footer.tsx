import Container from "@/components/Container";
import { shop } from "@/content";

// Closes the dongker band: name and address.
export default function Footer() {
  return (
    <footer className="on-dark border-t border-kapur/20 bg-dongker text-kapur">
      <Container className="t-small flex flex-col gap-1 py-8 text-kapur/80 md:flex-row md:justify-between">
        <span>{shop.name}</span>
        <span>{shop.address}</span>
      </Container>
    </footer>
  );
}
