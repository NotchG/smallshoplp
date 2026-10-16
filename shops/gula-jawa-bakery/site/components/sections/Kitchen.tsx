import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import KitchenTray from "@/components/KitchenTray";
import { kitchen } from "@/content";

// The open kitchen as proof of freshness. The tray stands in for a kitchen photo.
export default function Kitchen() {
  return (
    <section aria-labelledby="dapur-title" className="ground-bangku section">
      <Reveal>
        <Container className="grid items-center gap-y-10 md:grid-cols-12 md:gap-x-8 lg:gap-x-6">
          <div className="md:col-span-5">
            <h2 id="dapur-title" className="t-head heading">
              {kitchen.heading}
            </h2>
            <p className="t-lead heading mt-5">{kitchen.lead}</p>
            <p className="t-body mt-4 max-w-[40ch] text-neon/80">{kitchen.body}</p>
          </div>
          <div className="md:col-span-7">
            <KitchenTray className="rounded-[12px]" />
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
