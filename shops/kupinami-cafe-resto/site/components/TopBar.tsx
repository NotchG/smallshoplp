import Container from "@/components/Container";
import BadgeMark from "@/components/BadgeMark";
import { nav, wa, waLink } from "@/content";
import { mock } from "@/lib/mockup";

// Sits on the mint wall at the top of the hero. Not sticky.
export default function TopBar() {
  return (
    <header>
      <Container className="flex items-center justify-between gap-6 pt-4 lg:pt-6">
        <BadgeMark tone="teal" className="block w-[84px] lg:w-[104px]" />
        <nav aria-label="Navigasi utama" className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 font-semibold text-tinta transition-colors duration-150 hover:bg-putih/60"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(wa.reserve.text)}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-sm lg:ml-3"
            {...mock(wa.reserve.mockup)}
          >
            WhatsApp
          </a>
        </nav>
      </Container>
    </header>
  );
}
