import { Fragment } from "react";
import { footer, hours, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";

// Sign-off set like the bottle label: the wordmark between two double rules, "Freshly weaved".
export default function Footer() {
  return (
    <footer className="g-kaca footer">
      <Container className="py-14 md:py-16">
        <div className="grid-page gap-y-8">
          <div className="lg:col-span-5">
            <div className="footer-mark">
              <p className="footer-mark__word">{shop.name}</p>
            </div>
            <p className="t-body text-muted mt-3 italic">{footer.freshly}</p>
          </div>
          <div className="lg:col-start-7 lg:col-span-6 t-body">
            <p className="t-lead italic" {...mock(footer.slogan.mockup)}>
              {footer.slogan.text}
            </p>
            <p className="mt-4">{shop.address}</p>
            <p className="text-muted">{hours.note}</p>
            <p className="text-muted">
              {hours.rows.map((r, i) => (
                <Fragment key={r.days}>
                  {i > 0 ? " · " : ""}
                  <span className="nowrap">
                    {r.short} {r.open}–{r.close}
                  </span>
                </Fragment>
              ))}
            </p>
          </div>
        </div>
        <p className="t-small text-muted footer-draft mt-10 pt-5">{footer.draft}</p>
      </Container>
    </footer>
  );
}
