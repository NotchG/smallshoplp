import Container from "@/components/Container";
import ActionButtons from "@/components/ActionButtons";
import HouseRoof from "./HouseRoof";
import KamuAkuSign from "./KamuAkuSign";
import TodayHours from "./TodayHours";
import { hero } from "@/content";

// 1. Hero: the entrance mural redrawn as the page's front wall (design brief §7.1).
// 7/5 from 1024px: the mural panel, then the striped sign, today's hours and the actions.
export default function Hero() {
  const { greeting, title } = hero;
  return (
    <header className="wall">
      <Container className="hero-pad">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="mural lg:col-span-7">
            <p className="greeting">
              <span>{greeting.before}</span>
              <span className="ribbon">{greeting.ribbon}</span>
              <span>{greeting.after}</span>
            </p>
            <div className="house">
              <HouseRoof className="house-roof" />
              <div className="facade">
                <h1 className="h1">
                  <span className="h1-display">
                    {title.lines[0]}
                    <br />
                    {title.lines[1]}
                  </span>
                  <span className="h1-sub">{title.sub}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-12 lg:col-span-5 lg:flex-col lg:items-start lg:gap-7 lg:pl-6">
            <KamuAkuSign words={hero.signWords} sentence={hero.signSentence} />
            <div className="flex flex-col gap-5 lg:gap-7">
              <TodayHours />
              <ActionButtons />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
