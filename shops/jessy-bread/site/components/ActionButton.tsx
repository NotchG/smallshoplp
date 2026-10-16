import { shop } from "@/content";
import { mock } from "@/lib/mockup";
import { PhoneIcon, PinIcon } from "./icons";

type Variant = "primary" | "secondary" | "order";

// tel: and Google Maps link variants. Pills (the oval sign), at least 48px tall.
export default function ActionButton({
  kind,
  label,
  variant = "primary",
  mockup,
}: {
  kind: "call" | "directions";
  label: string;
  variant?: Variant;
  mockup?: boolean;
}) {
  const isCall = kind === "call";
  return (
    <a
      className={`btn btn-${variant}`}
      href={isCall ? `tel:${shop.tel}` : shop.mapsUrl}
      {...(isCall ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      {...mock(mockup)}
    >
      {isCall ? <PhoneIcon /> : <PinIcon />}
      <span>{label}</span>
    </a>
  );
}
