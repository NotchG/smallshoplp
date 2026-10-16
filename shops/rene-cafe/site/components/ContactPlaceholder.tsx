import { mock } from "@/lib/mockup";

// A visibly empty slot for the owner to fill. Plain text, never a fake link or number.
export default function ContactPlaceholder({
  label,
  value,
  tag,
  mockup,
}: {
  label: string;
  value: string;
  tag: string;
  mockup?: boolean;
}) {
  return (
    <li className="contact-slot" {...mock(mockup)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="t-body font-semibold">{label}</span>
        <span className="t-small text-lampu">{tag}</span>
      </div>
      <p className="t-small mt-1">{value}</p>
    </li>
  );
}
