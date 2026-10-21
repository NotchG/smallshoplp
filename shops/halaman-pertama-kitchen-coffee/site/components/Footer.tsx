import { footer, shop } from "@/content";
import Container from "@/components/Container";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  return (
    <footer className="ground-arang">
      <Container>
        <div className="rule-rotan flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Wordmark className="footer-wm" />
            <p className="wm-sub text-daun-muda" aria-hidden="true">{shop.wordmark.sub}</p>
          </div>
          <p className="t-small text-daun-muda">
            {shop.address.street}, {shop.address.area}, {shop.address.city}
          </p>
          <p className="t-small text-daun-muda">{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
