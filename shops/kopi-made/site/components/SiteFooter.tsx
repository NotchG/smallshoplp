import { hoursLines, shop, ui } from "@/content";
import Container from "@/components/Container";
import CheckStrip from "@/components/CheckStrip";
import SignWordmark from "@/components/SignWordmark";

export default function SiteFooter() {
  return (
    <footer className="bg-board text-cream">
      <CheckStrip />
      <Container className="pt-14 pb-10 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-5">
            <SignWordmark as="p" isStatic className="sign-sm" />
            <p className="t-small mt-3 text-mist">
              {shop.name} · {shop.type}
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="t-body">{shop.street}</p>
            <p className="t-body">{shop.area}</p>
            <p className="t-small mt-1 text-mist">{shop.landmarkShort}</p>
          </div>
          <div className="md:col-span-3">
            {hoursLines.map((l) => (
              <p key={l} className="t-body">
                {l}
              </p>
            ))}
          </div>
        </div>
        <p className="t-small mt-12 border-t border-cream/15 pt-6 text-mist">{ui.footerNote}</p>
      </Container>
    </footer>
  );
}
