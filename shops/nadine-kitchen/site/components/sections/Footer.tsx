import Container from "@/components/Container";
import { footer } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-grape text-fondant">
      <Container className="flex flex-col gap-2 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <p className="t-body t-strong">{footer.line}</p>
        <p className="t-small opacity-85">{footer.draft}</p>
      </Container>
    </footer>
  );
}
