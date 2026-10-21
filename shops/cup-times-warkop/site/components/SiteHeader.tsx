import Container from "@/components/Container";
import { PinIcon } from "@/components/Icons";
import { shop, ui } from "@/content";

// Sits on the hero's cup-green ground: area tag left, section anchors right (from 768px).
export default function SiteHeader() {
  return (
    <header className="on-dark bg-cup text-frost">
      <Container className="flex min-h-16 items-center justify-between gap-6 pt-2">
        <p className="t-small flex items-center gap-2 font-medium tracking-[0.02em]">
          <span className="size-4 text-bulb [&>svg]:size-4">
            <PinIcon />
          </span>
          {shop.area}
        </p>
        <nav aria-label="Bagian halaman" className="hidden md:block">
          <ul className="flex gap-2">
            {ui.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="t-body inline-flex min-h-11 items-center px-3 font-medium text-frost underline decoration-transparent underline-offset-[0.3em] transition-colors duration-150 ease-out hover:decoration-bulb"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
