// One element: delete it (and its line in layout.tsx) once the owner approves the site.
import { ui } from "@/content";

export default function MockupBanner() {
  return (
    <div role="note" className="mockup-banner">
      {ui.banner}
    </div>
  );
}
