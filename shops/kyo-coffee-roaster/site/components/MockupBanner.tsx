import { banner } from "@/content";
import { mock } from "@/lib/mockup";

// One element: delete it (and its line in layout.tsx) once the owner approves the site.
export default function MockupBanner() {
  return (
    <div role="note" className="mockup-banner" {...mock(banner.mockup)}>
      {banner.text}
    </div>
  );
}
