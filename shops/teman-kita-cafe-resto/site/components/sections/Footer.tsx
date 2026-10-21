import Container from "@/components/Container";
import { hours, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="field-dark bg-tinta pb-10 text-kapur">
      <Container>
        <div className="flex flex-col gap-2 border-t border-kapur pt-6 lg:flex-row lg:items-baseline lg:gap-8">
          <p className="font-display text-[length:var(--step-lead)] leading-none">{shop.displayName}</p>
          <p className="t-small">{shop.address.short}, Matraman</p>
          <p className="t-small">{hours.footer}</p>
        </div>
      </Container>
    </footer>
  );
}
