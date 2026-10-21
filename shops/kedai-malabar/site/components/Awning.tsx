// The black-and-white striped valance from the kedai's awnings (owner photo).
// Appears twice: under the hero's night band and at the top of Kunjungi kami.
export default function Awning({ className = "" }: { className?: string }) {
  return <div className={`awning ${className}`} aria-hidden="true" />;
}
