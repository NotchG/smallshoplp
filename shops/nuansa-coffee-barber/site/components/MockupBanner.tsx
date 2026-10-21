import { banner } from "@/content";

// One element: delete it (and its line in layout.tsx) once the owner approves the site.
export default function MockupBanner() {
  return (
    <div role="note" className="mockup-banner">
      <span className="md:hidden">{banner.phone}</span>
      <span className="hidden md:inline">{banner.desktop}</span>
    </div>
  );
}
