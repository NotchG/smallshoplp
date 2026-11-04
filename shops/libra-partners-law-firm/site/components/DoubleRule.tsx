// Thick-over-thin letterhead rule. Used exactly twice: under the kop and above the sign-off.
export default function DoubleRule({ className = "" }: { className?: string }) {
  return <hr className={`double-rule ${className}`} />;
}
