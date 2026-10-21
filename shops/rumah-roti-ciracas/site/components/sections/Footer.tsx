import Container from "@/components/Container";
import { footer, hoursText, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="on-dark bg-cocoa text-paper">
      <Container>
        <div className="grid gap-y-6 border-t border-paper/20 pt-10 pb-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <p className="t-script footer-script text-butter">{footer.script}</p>
            <p className="t-small mt-1 font-bold">{shop.name}</p>
          </div>
          <div className="t-small lg:col-span-5">
            <p>{shop.address}</p>
            <p className="mt-1 tabular">{hoursText.summary}</p>
            <p className="mt-1">
              <a href={shop.tel} className="inline-flex min-h-11 items-center underline">
                {shop.phoneDisplay}
              </a>
            </p>
          </div>
          <p className="t-small lg:col-span-3">{footer.note}</p>
        </div>
      </Container>
    </footer>
  );
}
