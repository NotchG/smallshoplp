import Container from "./Container";
import { footer } from "@/content";

export default function Footer() {
  return (
    <footer className="on-tinta bg-tinta py-8 text-kotak">
      <Container className="t-small flex flex-col gap-1 md:flex-row md:justify-between md:gap-8">
        <p>{footer.line}</p>
        <p>{footer.draft}</p>
      </Container>
    </footer>
  );
}
