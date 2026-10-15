import PBadge from "@/components/PBadge";
import { nav, shop } from "@/content";

// Top row above the ceiling: the red P, and anchor links (only "Menu" on phones).
export default function SiteHeader() {
  return (
    <header className="on-plafon">
      <div className="site-top flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PBadge />
          <span className="hidden md:inline t-small t-label">{shop.name}</span>
        </div>
        <nav aria-label="Navigasi halaman">
          <ul className="flex items-center gap-1 md:gap-2">
            {nav.map((l) => (
              <li key={l.href} className={l.phone ? "" : "hidden md:block"}>
                <a href={l.href} className="nav-link t-small t-label">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
