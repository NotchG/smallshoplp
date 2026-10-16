import Container from "@/components/Container";
import { header } from "@/content";

// "kyō" text wordmark (rounded 400) plus three anchors. Not sticky.
export default function SiteHeader() {
  return (
    <header id="top" className="bg-ply">
      <Container>
        <div className="flex min-h-16 items-center justify-between border-b-2 border-oak">
          <a href="#top" className="mark inline-flex min-h-11 min-w-11 items-center" aria-label={header.homeLabel}>
            {header.mark}
          </a>
          <nav aria-label="Navigasi">
            <ul className="flex items-center gap-6 md:gap-8">
              {header.nav.map((link) => (
                <li key={link.href} className={link.phone ? "" : "hidden md:block"}>
                  <a href={link.href} className="link-quiet t-body font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
