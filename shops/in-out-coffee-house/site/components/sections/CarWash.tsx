import Container from "@/components/Container";
import { carWash } from "@/content";
import { mock } from "@/lib/mockup";

// [MOCKUP] strip for drivers waiting at the car wash. Hidden with carWash.show = false.
export default function CarWash() {
  if (!carWash.show) return null;
  return (
    <section className="section-strip on-ink bg-ink text-paper" aria-labelledby="cuci-title" {...mock(carWash.mockup)}>
      <Container className="grid gap-x-8 gap-y-3 lg:grid-cols-12 lg:items-center">
        <h2 id="cuci-title" className="t-head lg:col-span-6">
          {carWash.title}
        </h2>
        <div className="lg:col-span-6">
          <p>{carWash.body}</p>
          <a href="#menu" className="mt-1 inline-flex min-h-11 items-center font-bold text-kuning">
            {carWash.link}
          </a>
        </div>
      </Container>
    </section>
  );
}
