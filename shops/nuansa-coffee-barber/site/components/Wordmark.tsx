import { shop } from "@/content";

// The fascia sign: lowercase "nuansa", the circled "n" mark, "BARBER & COFFEE" underneath.
// The circled "n" is a typeset placeholder for the real logo file (owner checklist).
// Glow halos are CSS ::before copies (decorative, hidden from assistive tech).
export function SignLockup() {
  return (
    <h1 className="sign js-sign-lit">
      <span className="sign-word" data-check="">
        <span className="glow" data-glow={shop.name}>{shop.name}</span>
        <span className="sign-mark glow" aria-hidden="true" data-mockup="">
          <span>n</span>
        </span>
      </span>{" "}
      <span className="sign-desc glow" data-glow={shop.descriptor} data-check="">{shop.descriptor}</span>
    </h1>
  );
}

// Small, static version for the footer. Decorative: the footer line names the shop in full.
export function FooterMark() {
  return (
    <p className="footer-mark" aria-hidden="true">
      {shop.name}
      <span className="sign-mark">
        <span>n</span>
      </span>
    </p>
  );
}
