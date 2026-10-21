import Container from "@/components/Container";
import { footer, hours, shop } from "@/content";

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-night text-frost">
      <Container className="grid gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="t-lead-display text-label">{shop.name}</p>
          <p className="t-small mt-2">
            {shop.addressLines[0]}
            <br />
            {shop.addressLines[1]}
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-6">
          <p className="t-small font-bold text-label">{hours.everyDay}</p>
          <p className="t-small tnum">{hours.summary}</p>
        </div>
        <p className="t-small lg:col-span-3 lg:col-start-10">{footer.draft}</p>
      </Container>
    </footer>
  );
}
