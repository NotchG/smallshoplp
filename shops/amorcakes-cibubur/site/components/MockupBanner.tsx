import { meta } from "@/content";

// One element: delete it (and its line in layout.tsx) once the owner approves the site.
export default function MockupBanner() {
  return (
    <div role="note" className="mockup-banner">
      {meta.banner}
    </div>
  );
}
