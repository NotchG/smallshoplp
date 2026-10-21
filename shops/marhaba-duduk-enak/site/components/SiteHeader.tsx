import Container from "@/components/Container";
import { nav, shop } from "@/content";

// The pavilion wall above the window: name left, anchors right, white trim underneath.
export default function SiteHeader() {
  return (
    <header className="site-header on-dark">
      <Container className="site-header__bar flex items-center justify-between gap-4">
        <a href="#konten" className="nav-link -ml-2.5 whitespace-nowrap" aria-label={`${shop.fullName}, ke atas`}>
          <span className="font-bold">{shop.name}</span>
          <span className="ml-1.5 font-normal">{shop.descriptor}</span>
        </a>
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center -mr-2.5">
            {nav.map((n) => (
              <li key={n.href} className={n.href === "#lokasi" ? "" : "hidden md:block"}>
                <a href={n.href} className="nav-link">
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
