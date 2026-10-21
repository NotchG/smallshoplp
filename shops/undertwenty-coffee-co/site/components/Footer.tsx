import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { footer, shop } from "@/content";

// The black plate by the door: "U20" in condensed capitals, "Coffee. Co" in script.
export function U20Plate({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${shop.mark} ${shop.script}`}
      className={`u20-plate flex flex-col items-center justify-center bg-arang text-putih ${className}`}
    >
      <span aria-hidden="true" className="t-cond u20-plate-mark">{shop.mark}</span>
      <span aria-hidden="true" className="t-script u20-plate-script">{shop.script}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="ground-arang border-t border-putih/10">
      <Container className="py-12 md:py-16">
        <Reveal className="grid-12 gap-y-8 max-lg:flex max-lg:flex-col max-lg:gap-8">
          <div className="lg:col-span-4 flex items-center gap-5">
            <U20Plate className="w-24 h-24 flex-none" />
            <p className="t-lead font-semibold leading-tight text-balance">{shop.name}</p>
          </div>
          <div className="lg:col-span-4 t-body text-muted-dark">
            <p>{shop.addressShort}</p>
            <p className="mt-1">{footer.hours}</p>
          </div>
          <p className="lg:col-span-4 t-small text-muted-dark">{footer.draft}</p>
        </Reveal>
      </Container>
    </footer>
  );
}
