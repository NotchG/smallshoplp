import { uisBand } from "@/content";
import { mock } from "@/lib/mockup";

// [MOCKUP] A thin red, black and white selvedge after the Karo uis textile.
// Switched off for the whole page with `uisBand.enabled` in content.ts.
export default function UisBand() {
  if (!uisBand.enabled) return null;
  return <div className="uis-band" aria-hidden="true" {...mock(uisBand.mockup)} />;
}
