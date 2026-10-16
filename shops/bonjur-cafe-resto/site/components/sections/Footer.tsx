import Container from "@/components/Container";
import { footer, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="ground-ink">
      <Container>
        <div className="flex flex-col gap-3 border-t border-blue-soft/25 py-10 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="flex flex-wrap items-baseline gap-x-3">
            <span className="wordmark text-[2.25rem] leading-none">{shop.short}</span>
            <span className="text-blue-soft">
              {shop.name} · {shop.shortAddress}
            </span>
          </p>
          <p className="t-small text-blue-soft">{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
