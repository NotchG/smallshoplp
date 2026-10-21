import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import OrderComposer from "@/components/OrderComposer";

// The working action: pick a size and flavour, write a name, send it on WhatsApp.
export default function Pesan() {
  return (
    <section id="pesan" aria-labelledby="pesan-title" className="ground-oranye section">
      <Container>
        <Reveal>
          <OrderComposer />
        </Reveal>
      </Container>
    </section>
  );
}
