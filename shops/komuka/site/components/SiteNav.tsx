import { nav, shop } from "@/content";

// Desktop only (>=1024): small name + four anchors. Not sticky.
export default function SiteNav() {
  return (
    <div className="nav-bar hidden lg:block">
      <nav aria-label="Navigasi utama" className="flex items-center justify-between pt-4">
        <a href="#" className="site-nav-brand inline-flex min-h-11 items-center no-underline">
          {shop.shortName}
        </a>
        <ul className="flex items-center gap-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="site-nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
