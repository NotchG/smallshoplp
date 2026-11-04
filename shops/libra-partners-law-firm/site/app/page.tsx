import Container from "@/components/Container";
import Kop from "@/components/Kop";
import NameMeaning from "@/components/NameMeaning";
import PracticeAreas from "@/components/PracticeAreas";
import CollectorSteps from "@/components/CollectorSteps";
import ReviewThemes from "@/components/ReviewThemes";
import VisitMap from "@/components/VisitMap";
import Closing from "@/components/Closing";
import { footer, labels } from "@/content";
import { mock } from "@/lib/mockup";

// One page, read top to bottom like a letter: kop, then the answers, then "Hormat kami,".
export default function Home() {
  return (
    <>
      <main id="konten">
        <Kop />
        <NameMeaning />
        <PracticeAreas />
        <CollectorSteps />
        <ReviewThemes />
        <VisitMap />
        <Closing />
      </main>
      <footer className="pb-10">
        <Container>
          <p className="t-small text-lis">
            <span {...mock(footer.disclaimer.mockup)}>{footer.disclaimer.text}</span>
            <span aria-hidden="true"> · </span>
            <span>{labels.draft}</span>
          </p>
        </Container>
      </footer>
    </>
  );
}
