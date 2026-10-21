import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Rail from "@/components/Rail";
import WoodField from "@/components/WoodField";
import { copy, shop } from "@/content";
import { mock } from "@/lib/mockup";

// 7. Hubungi kami: the closing counter (second kayu field), then the footer on malam.
export default function Contact() {
  return (
    <>
      <WoodField>
        <Rail />
        <section aria-labelledby="contact-title" className="section">
          <Container>
            <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-6">
                <h2 id="contact-title" className="f-head t-head">
                  {copy.contact.heading}
                </h2>
                <p className="t-body mt-4 measure" {...mock(copy.contact.line.mockup)}>
                  {copy.contact.line.text}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
                <p className="t-lead tabular font-bold">
                  <a href={shop.phoneHref} className="link inline-flex min-h-11 items-center">
                    {shop.phone}
                  </a>
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={shop.whatsapp.href} variant="solid-malam" external {...mock(shop.whatsapp.mockup)}>
                    {copy.buttons.whatsapp}
                  </Button>
                  <Button href={shop.phoneHref} variant="outline">
                    {copy.buttons.call}
                  </Button>
                  <Button href={shop.directionsUrl} variant="outline" external>
                    {copy.buttons.directions}
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </WoodField>
      <footer className="ground-malam py-10">
        <Container className="t-small on-dark flex flex-col gap-2 text-baja md:flex-row md:flex-wrap md:gap-x-6">
          <p>
            <span className="font-semibold text-spanduk">{shop.name}</span> · {shop.tagline}
          </p>
          <p>{shop.address}</p>
          <p>{copy.footer.draft}</p>
        </Container>
      </footer>
    </>
  );
}
