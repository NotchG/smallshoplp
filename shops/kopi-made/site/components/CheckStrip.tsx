import { mock } from "@/lib/mockup";

// The black-and-white check of the awning valance over the door. Decorative.
// [MOCKUP] motif: the owner confirms it may be used as a design detail.
export default function CheckStrip() {
  return <div className="check-strip" aria-hidden="true" {...mock(true)} />;
}
